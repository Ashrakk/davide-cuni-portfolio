import { createError } from 'h3'
import nodemailer from 'nodemailer'
import type { H3Event } from 'h3'
import type { ContactFormData } from '../../shared/contact-schema'

function createContactDeliveryError() {
	return createError({
		statusCode: 500,
		statusMessage: 'We could not send your message right now. Please try again later.',
		data: {
			message: 'We could not send your message right now. Please try again later.',
		},
	})
}

function parseSmtpSecure(value: string | undefined) {
	return value === undefined ? true : value.toLowerCase() === 'true'
}

export async function sendContactMail(event: H3Event, input: ContactFormData) {
	const config = useRuntimeConfig(event)
	const smtp = config.smtp

	if (!smtp?.host || !smtp?.port || !smtp?.user || !smtp?.pass || !smtp?.to) {
		throw createContactDeliveryError()
	}

	const transporter = nodemailer.createTransport({
		host: smtp.host,
		port: Number(smtp.port),
		secure: parseSmtpSecure(smtp.secure),
		auth: {
			user: smtp.user,
			pass: smtp.pass,
		},
	})

	const fromAddress = smtp.from || smtp.user
	const subject = `Portfolio contact request from ${input.email}`
	const text = [
		'New contact request from davidecuni.typotek.space',
		'',
		`Name: ${input.name}`,
		`Email: ${input.email}`,
		'Privacy consent: accepted',
		'',
		'Message:',
		input.message,
	].join('\n')

	try {
		await transporter.sendMail({
			from: fromAddress,
			to: smtp.to,
			replyTo: input.email,
			subject,
			text,
		})
	}
	catch {
		throw createContactDeliveryError()
	}
}
