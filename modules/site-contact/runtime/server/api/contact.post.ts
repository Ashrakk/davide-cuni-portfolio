import type { H3Error } from 'h3'
import { createError, readBody, setResponseStatus } from 'h3'
import { contactFormSchema } from '../../shared/contact-schema'
import { sendContactMail } from '../utils/contact-mailer'
import { verifyTurnstileToken } from '../utils/verify-turnstile'

function isH3Error(error: unknown): error is H3Error {
	return Boolean(error && typeof error === 'object' && ('statusCode' in error || 'status' in error))
}

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event).catch(() => null)
		const result = contactFormSchema.safeParse(body)

		if (!result.success) {
			throw createError({
				statusCode: 400,
				statusMessage: 'Please review the form and try again.',
				data: {
					message: 'Please review the form and try again.',
				},
			})
		}

		await verifyTurnstileToken(event, result.data.turnstileToken)
		await sendContactMail(event, result.data)

		setResponseStatus(event, 200)

		return {
			success: true,
		}
	}
	catch (error) {
		if (isH3Error(error)) {
			throw error
		}

		throw createError({
			statusCode: 500,
			statusMessage: 'We could not send your message right now. Please try again later.',
			data: {
				message: 'We could not send your message right now. Please try again later.',
			},
		})
	}
})
