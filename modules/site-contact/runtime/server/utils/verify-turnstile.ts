import type { H3Event } from 'h3'
import { createError } from 'h3'

interface TurnstileVerifyResponse {
	success: boolean
}

export async function verifyTurnstileToken(event: H3Event, token: string) {
	const config = useRuntimeConfig(event)
	const secret = config.turnstileSecret

	if (!secret || typeof secret !== 'string') {
		throw createError({
			statusCode: 500,
			statusMessage: 'We could not send your message right now. Please try again later.',
			data: {
				message: 'We could not send your message right now. Please try again later.',
			},
		})
	}

	const remoteIp = event.node.req.socket.remoteAddress
	const body = new URLSearchParams({
		secret,
		response: token,
	})

	if (remoteIp) {
		body.append('remoteip', remoteIp)
	}

	const response = await $fetch<TurnstileVerifyResponse>('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		body,
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
		},
	}).catch(() => null)

	if (!response?.success) {
		throw createError({
			statusCode: 400,
			statusMessage: 'The anti-spam check could not be verified. Please try again.',
			data: {
				message: 'The anti-spam check could not be verified. Please try again.',
			},
		})
	}
}
