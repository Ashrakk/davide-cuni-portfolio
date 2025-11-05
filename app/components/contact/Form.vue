<template>
	<UForm ref="form" :schema="schema" :state="state" @submit="submit" class="[&>*]:my-4 md:px-4">
		<UFormField label="Name" name="name" required>
			<UInput
				class="w-full"
				v-model="state.name"
				placeholder="Your Name..."
				size="xl"
			/>
		</UFormField>
		<UFormField label="Email" name="email" required>
			<UInput
				class="w-full"
				v-model="state.email"
				placeholder="you@example.com"
				size="xl"
			/>
		</UFormField>
		<UFormField label="Message" name="message" required>
			<UTextarea
				class="w-full"
				v-model="state.message"
				placeholder="Write your message here..."
				size="xl"
				resize
			/>
		</UFormField>
		<UFormField name="privacyConsent" required>
			<label class="flex items-start gap-3 rounded-xl border border-default p-4">
				<UCheckbox v-model="state.privacyConsent" class="mt-1" />
				<span class="text-sm text-muted">
					I have read the
					<NuxtLink to="/privacy-policy" class="underline decoration-cyan-500 underline-offset-4">
						Privacy Policy
					</NuxtLink>
					 and understand how my data will be processed.
				</span>
			</label>
		</UFormField>
		<UFormField name="turnstileToken" required>
			<SiteTurnstileField ref="turnstileField" v-model="state.turnstileToken" />
		</UFormField>
		<UButton
			ref="submit_button"
			block
			size="xl"
			type="submit"
			icon="i-material-symbols-send-rounded"
			:loading="isSubmitting"
			:disabled="isSubmitting"
		>
			{{ isSubmitting ? 'Sending...' : 'Send message' }}
		</UButton>
	</UForm>
</template>

<script setup lang="ts">
import type { Form, FormSubmitEvent } from '@nuxt/ui'
import { ref } from 'vue'
import { contactFormSchema } from '~~/modules/site-contact/runtime/shared/contact-schema'

type ContactFormState = {
	name: string
	email: string
	message: string
	privacyConsent: boolean
	turnstileToken: string
}

type Schema = ContactFormState
type TurnstileFieldRef = {
	reset: () => void
}

const notify = useToast()
const config = useRuntimeConfig()
const form = ref<Form<Schema> | undefined>()
const turnstileField = ref<TurnstileFieldRef | null>(null)
const isSubmitting = ref(false)
const schema = contactFormSchema
const turnstileSiteKey = (config.public.siteContact as { turnstileSiteKey?: string } | undefined)?.turnstileSiteKey || ''
const state = ref<ContactFormState>({
	name: '',
	email: '',
	message: '',
	privacyConsent: false,
	turnstileToken: '',
})

function resetForm() {
	state.value = {
		name: '',
		email: '',
		message: '',
		privacyConsent: false,
		turnstileToken: '',
	}
	form.value?.clear()
	turnstileField.value?.reset()
}

async function submit(event: FormSubmitEvent<Schema>) {
	if (!turnstileSiteKey) {
		notify.add({
			title: 'Contact form unavailable',
			description: 'The anti-spam check is not configured yet.',
			icon: 'lucide:triangle-alert',
			color: 'warning',
		})
		return
	}

	isSubmitting.value = true

	try {
		await $fetch('/api/contact', {
			method: 'POST' as any,
			body: event.data,
		})

		resetForm()
		notify.add({
			title: 'Email sent',
			description: 'Thanks for reaching out. I will get back to you soon.',
			icon: 'i-ph-check',
			color: 'success',
			duration: 7000,
		})
	}
	catch (error: any) {
		notify.add({
			title: 'Unable to send message',
			description: error?.data?.message || error?.statusMessage || 'Please try again in a moment.',
			icon: 'lucide:triangle-alert',
			color: 'warning',
			duration: 7000,
		})
		turnstileField.value?.reset()
	}
	finally {
		isSubmitting.value = false
	}
}
</script>
