import { z } from 'zod'

export const contactFormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, 'Please enter your name.')
		.max(120, 'Your name is too long.'),
	email: z
		.email('Please enter a valid email address.')
		.trim()
		.min(1, 'Please enter your email address.'),
	message: z
		.string()
		.trim()
		.min(60, 'The message is too short.')
		.max(600, 'The message is too long.'),
	privacyConsent: z
		.boolean()
		.refine((value) => value, 'You must accept the privacy policy to continue.'),
	turnstileToken: z
		.string()
		.trim()
		.min(1, 'Please complete the anti-spam check.'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
