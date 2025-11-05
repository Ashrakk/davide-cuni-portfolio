<template>
	<div>
		<div
			v-if="showBanner"
			class="fixed bottom-4 left-1/2 z-90 w-[calc(100%-2rem)] max-w-screen-xl -translate-x-1/2 rounded-2xl border border-default bg-default p-5 shadow-2xl"
		>
			<div class="mb-4 flex items-start justify-between gap-4">
				<div class="flex gap-4 align-middle">
					<UIcon name="lucide:cookie" class="h-8 w-8 text-primary" />
					<div class="text-h4">
						Manage cookie preferences
					</div>
				</div>
				<UButton
					color="neutral"
					variant="ghost"
					icon="lucide:x"
					aria-label="Close and continue with necessary technical cookies only"
					class="-mt-1 -mr-1"
					@click="dismissBanner"
				/>
			</div>

			<p>
				We use cookies and similar technologies for the proper operation of the site and, only with your consent, 
				for analytics and third-party security checks. Necessary technical cookies always remain active; 
				optional categories are enabled only after your explicit consent.
			</p>
			<p class="mt-2 text-base text-muted">
				You can change your choice at any time using "Manage cookies"
			</p>

			<p class="mt-2 text-base text-dimmed">
				Read the <NuxtLink to="/privacy-policy" class="underline underline-offset-4">privacy policy</NuxtLink>
				and <NuxtLink to="/cookie-policy" class="underline underline-offset-4">cookie policy</NuxtLink>.
			</p>

			<div class="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
				<UButton
					variant="soft"
					icon="lucide:settings"
					@click="openConsentPreferences"
				>
					Customize
				</UButton>
				<UButton
					icon="lucide:ban"
					@click="rejectOptional"
				>
					Reject optional cookies
				</UButton>
				<UButton
					icon="lucide:circle-check-big"
					@click="acceptAll"
				>
					Accept optional cookies
				</UButton>
			</div>
		</div>

		<UModal
			v-model:open="preferencesOpen"
			title="Privacy preferences"
			description="Select the optional categories you want to enable. Necessary technical cookies always remain active to remember your preferences and keep the site working properly."
			:ui="{ content: 'sm:max-w-xl' }"
			:overlay="true"
			:dismissible="true"
			:close="true"
		>
			<template #body>
				<div class="space-y-4">
					<div class="rounded-xl border border-default p-4">
						<div class="flex items-center justify-between gap-4">
							<div>
								<p class="font-medium text-highlighted">Necessary technical cookies</p>
								<p class="text-sm text-muted">
									Required to remember your choices and keep the site working properly.
								</p>
							</div>
							<UBadge color="neutral" variant="soft">
								Always active
							</UBadge>
						</div>
					</div>

					<label class="flex items-center justify-between gap-4 rounded-xl border border-default p-4">
						<div>
							<p class="font-medium text-highlighted">Analytics</p>
							<p class="text-sm text-muted">
								Aggregated traffic and performance measurement used to understand how content is used and to improve navigation and services.
							</p>
						</div>
						<UCheckbox v-model="analytics" />
					</label>

					<label class="flex items-center justify-between gap-4 rounded-xl border border-default p-4">
						<div>
							<p class="font-medium text-highlighted">Third-party security verification</p>
							<p class="text-sm text-muted">
								Anti-spam and verification services, such as Cloudflare Turnstile, used to protect forms and pages from abuse and automated submissions.
								These services may process technical data and use cookies or other identifiers according to their providers’ policies.
							</p>
						</div>
						<UCheckbox v-model="captcha" />
					</label>
				</div>

				<p class="mt-2 text-sm text-dimmed">
					Read the <NuxtLink to="/privacy-policy" class="underline underline-offset-4">privacy policy</NuxtLink>
					and <NuxtLink to="/cookie-policy" class="underline underline-offset-4">cookie policy</NuxtLink>.
				</p>
			</template>

			<template #footer>
				<div class="flex w-full flex-col-reverse gap-2 sm:flex-row sm:justify-end">
					<UButton size="lg" color="neutral" variant="soft" @click="closeConsentPreferences">
						Cancel
					</UButton>
					<UButton size="lg" @click="rejectOptional" variant="soft">
						Reject optional cookies
					</UButton>
					<UButton size="lg" @click="acceptAll" variant="soft"
					>
						Accept optional cookies
					</UButton>

					<UButton size="lg" @click="saveCurrentPreferences">
						Save preferences
					</UButton>
				</div>
			</template>
		</UModal>
	</div>
</template>

<script setup lang="ts">
	const {
		consent,
		shouldShowBanner,
		preferencesOpen,
		acceptAll,
		rejectOptional,
		savePreferences,
		openConsentPreferences,
		closeConsentPreferences,
	} = useSiteConsent()

	const analytics = ref(false)
	const captcha = ref(false)
	const bannerReady = ref(false)
	const showBanner = computed(() => bannerReady.value && shouldShowBanner.value)

	onMounted(() => {
		bannerReady.value = true
	})

	watch(preferencesOpen, (isOpen) => {
		if (!isOpen) {
			return
		}

		analytics.value = consent.value.analytics
		captcha.value = consent.value.captcha
	}, { immediate: true })

	function saveCurrentPreferences() {
		savePreferences({
			analytics: analytics.value,
			captcha: captcha.value,
		})
	}

	function dismissBanner() {
		rejectOptional();
	}
</script>
