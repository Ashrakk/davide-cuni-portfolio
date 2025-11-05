export interface ArticleSeoOptions {
	title: string
	description: string
	section: string
	author?: string
	path?: string
	image?: string
	noindex?: boolean
	publishedTime?: string
	modifiedTime?: string
}

const DEFAULT_SITE_URL = 'https://davidecuni.typotek.space'
const DEFAULT_SITE_NAME = 'Davide Cuni Portfolio'
const DEFAULT_OG_IMAGE = '/web-app-manifest-512x512.png'

export function useArticleSeo(options: ArticleSeoOptions) {
	const route = useRoute()
	const site = useSiteConfig()

	const siteUrl = (site.url || DEFAULT_SITE_URL).replace(/\/$/, '')
	const siteName = site.name || DEFAULT_SITE_NAME
	const canonicalPath = options.path || route.path
	const canonicalUrl = canonicalPath.startsWith('http')
		? canonicalPath
		: `${siteUrl}${canonicalPath}`
	const image = options.image?.trim()
	const imageUrl = !image
		? `${siteUrl}${DEFAULT_OG_IMAGE}`
		: image.startsWith('http')
			? image
			: `${siteUrl}${image}`

	useSeoMeta({
		title: options.title,
		description: options.description,
		author: options.author,
		robots: options.noindex ? 'noindex, nofollow' : 'index, follow',
		ogTitle: options.title,
		ogDescription: options.description,
		ogType: 'article',
		ogSiteName: siteName,
		ogLocale: 'en_US',
		ogUrl: canonicalUrl,
		ogImage: imageUrl,
		twitterCard: 'summary_large_image',
		twitterTitle: options.title,
		twitterDescription: options.description,
		twitterImage: imageUrl,
		articleAuthor: options.author ? [options.author] : undefined,
		articlePublishedTime: options.publishedTime,
		articleModifiedTime: options.modifiedTime,
	})

	useHead({
		title: options.title,
		titleTemplate: '%s %separator %section %separator %siteName',
		templateParams: { section: options.section },
		link: [
			{ rel: 'canonical', href: canonicalUrl },
		],
	})
}
