import { useSeoContext } from './useSeoHelpers'

export interface PageSeoOptions {
	title: string
	description: string
	documentTitle?: string
	path?: string
	image?: string
	imageAlt?: string
	keywords?: string[]
	noindex?: boolean
}

export function usePageSeo(options: PageSeoOptions) {
	const { imageUrl } = useSeoContext({
		image: options.image,
	})
	const documentTitle = options.documentTitle || options.title

	useSeoMeta({
		description: options.description,
		keywords: options.keywords?.join(', '),
		robots: options.noindex ? 'noindex, nofollow' : 'index, follow',
		ogTitle: documentTitle,
		ogDescription: options.description,
		ogImage: imageUrl,
		ogImageAlt: options.imageAlt,
		twitterCard: 'summary_large_image',
		twitterTitle: documentTitle,
		twitterDescription: options.description,
		twitterImage: imageUrl,
	})

	useHead({
		title: documentTitle,
		titleTemplate: '%s',
	})
}
