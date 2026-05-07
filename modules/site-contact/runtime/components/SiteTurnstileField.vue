<template>
	<div v-if="isHydrated" class="space-y-3">
		<div
			v-if="shouldShowTurnstile"
			ref="container"
			class="min-h-16 rounded-lg border border-default bg-elevated p-2"
		/>
		<UCard
			v-else-if="shouldShowConsentPrompt"
			variant="subtle"
		>
			<p class="font-medium text-highlighted">
				Enable "Third-party security verification" to continue
			</p>
			<p class="mt-2 text-sm text-muted">
				To load the Cloudflare Turnstile verification we need your consent to load third-party resources.
			</p>
			<UButton
				type="button"
				class="mt-4"
				variant="soft"
				icon="i-mdi-tune-variant"
				@click="openConsentPreferences"
			>
				Manage cookies
			</UButton>
		</UCard>
		<UAlert
			v-else-if="shouldShowMissingConfig"
			color="warning"
			variant="soft"
			icon="lucide:triangle-alert"
			title="Turnstile is not configured."
			description="Set `NUXT_PUBLIC_TURNSTILE_SITE_KEY` before enabling the contact form."
		/>
		<UAlert
			v-if="errorMessage"
			color="warning"
			variant="soft"
			icon="lucide:triangle-alert"
			:title="errorMessage"
		/>
	</div>
</template>

<script setup lang="ts">
	import { nextTick } from 'vue'
	import { useSiteConsent } from '../../../site-consent/runtime/composables/useSiteConsent'

	interface TurnstileInstance {
		render: (
			container: HTMLElement,
			options: {
				sitekey: string
				callback?: (token: string) => void
				'expired-callback'?: () => void
				'error-callback'?: () => void
				theme?: 'light' | 'dark' | 'auto'
			}
		) => string
		reset: (widgetId?: string) => void
		remove?: (widgetId?: string) => void
	}

	declare global {
		interface Window {
			turnstile?: TurnstileInstance
		}
	}

	const model = defineModel<string>({ default: '' })
	const config = useRuntimeConfig()
	const { consent, openConsentPreferences } = useSiteConsent()
	const siteKey = (config.public.siteContact as { turnstileSiteKey?: string } | undefined)?.turnstileSiteKey || ''
	const canRenderTurnstile = computed(() => consent.value.captcha === true)
	const isHydrated = ref(false)
	const shouldShowTurnstile = computed(() => canRenderTurnstile.value && Boolean(siteKey))
	const shouldShowConsentPrompt = computed(() => !canRenderTurnstile.value && Boolean(siteKey))
	const shouldShowMissingConfig = computed(() => !siteKey)
	const container = ref<HTMLElement | null>(null)
	const errorMessage = ref('')
	const widgetId = ref<string | null>(null)

	let turnstileScriptPromise: Promise<void> | null = null

	function loadTurnstileScript() {
		if (window.turnstile) {
			return Promise.resolve()
		}

		if (turnstileScriptPromise) {
			return turnstileScriptPromise
		}

		turnstileScriptPromise = new Promise<void>((resolve, reject) => {
			const existingScript = document.querySelector<HTMLScriptElement>('script[data-site-turnstile]')

			if (existingScript) {
				existingScript.addEventListener('load', () => resolve(), { once: true })
				existingScript.addEventListener('error', () => reject(new Error('TURNSTILE_LOAD_FAILED')), { once: true })
				return
			}

			const script = document.createElement('script')
			script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
			script.async = true
			script.defer = true
			script.dataset.siteTurnstile = 'true'
			script.addEventListener('load', () => resolve(), { once: true })
			script.addEventListener('error', () => reject(new Error('TURNSTILE_LOAD_FAILED')), { once: true })
			document.head.appendChild(script)
		})

		return turnstileScriptPromise
	}

	function removeWidget() {
		if (widgetId.value && window.turnstile?.remove) {
			window.turnstile.remove(widgetId.value)
		}

		widgetId.value = null
	}

	async function mountWidget() {
		if (!siteKey || !container.value || !canRenderTurnstile.value) {
			return
		}

		if (widgetId.value) {
			return
		}

		try {
			await loadTurnstileScript()

			if (!window.turnstile) {
				throw new Error('TURNSTILE_UNAVAILABLE')
			}

			widgetId.value = window.turnstile.render(container.value, {
				sitekey: siteKey,
				theme: 'dark',
				callback: (token) => {
					errorMessage.value = ''
					model.value = token
				},
				'expired-callback': () => {
					model.value = ''
				},
				'error-callback': () => {
					model.value = ''
					errorMessage.value = 'The anti-spam check failed to load correctly. Please try again.'
				},
			})
		}
		catch {
			errorMessage.value = 'The anti-spam check could not be loaded. Please refresh and try again.'
		}
	}

	async function syncWidgetState() {
		if (!canRenderTurnstile.value) {
			removeWidget()
			model.value = ''
			errorMessage.value = ''
			return
		}

		await nextTick()
		await mountWidget()
	}

	function reset() {
		model.value = ''
		errorMessage.value = ''

		if (widgetId.value && window.turnstile) {
			window.turnstile.reset(widgetId.value)
		}
	}

	defineExpose({ reset })

	onMounted(() => {
		isHydrated.value = true
		void syncWidgetState()
	})

	watch(canRenderTurnstile, () => {
		void syncWidgetState()
	})

	onBeforeUnmount(() => {
		removeWidget()
	})
</script>
