export interface PageSeoOptions {
	title: string
	description: string
	documentTitle?: string
	path?: string
	image?: string
	noindex?: boolean
}

const DEFAULT_SITE_URL = 'https://davidecuni.typotek.space'
const DEFAULT_SITE_NAME = 'Davide Cuni Portfolio'
const DEFAULT_OG_IMAGE = '/web-app-manifest-512x512.png'

export function usePageSeo(options: PageSeoOptions) {
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
	const robots = options.noindex ? 'noindex, nofollow' : 'index, follow'
	const documentTitle = options.documentTitle || options.title

	useSeoMeta({
		description: options.description,
		robots,
		ogTitle: options.title,
		ogDescription: options.description,
		ogType: 'website',
		ogSiteName: siteName,
		ogLocale: 'en_US',
		ogUrl: canonicalUrl,
		ogImage: imageUrl,
		twitterCard: 'summary_large_image',
		twitterTitle: options.title,
		twitterDescription: options.description,
		twitterImage: imageUrl,
	})

	useHead({
		title: documentTitle,
		titleTemplate: '%s',
		link: [
			{ rel: 'canonical', href: canonicalUrl },
		],
	})
}
