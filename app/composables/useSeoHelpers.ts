export interface SeoBreadcrumbItem {
	name: string
	item?: string
}

interface SeoContextOptions {
	path?: string
	image?: string
}

export const DEFAULT_SITE_URL = 'https://davidecuni.typotek.space'
export const DEFAULT_SITE_NAME = 'Davide Cuni Portfolio'
export const DEFAULT_OG_IMAGE = '/web-app-manifest-512x512.png'
export const DEFAULT_AUTHOR_NAME = 'Davide Cuni'
export const DEFAULT_AUTHOR_ROLE = 'Full-Stack Engineer'
export const DEFAULT_AUTHOR_PROFILE = 'https://www.linkedin.com/in/davide-cuni'
export const DEFAULT_PROFILE_IMAGE = '/images/profilepic.jpg'

export function useSeoContext(options: SeoContextOptions = {}) {
	const route = useRoute()
	const site = useSiteConfig()

	const siteUrl = (site.url || DEFAULT_SITE_URL).replace(/\/$/, '')
	const canonicalPath = options.path || route.path

	const toAbsoluteUrl = (value?: string) => {
		if (!value) return undefined
		if (value.startsWith('http')) return value
		if (value.startsWith('/')) return `${siteUrl}${value}`

		return `${siteUrl}/${value}`
	}

	const canonicalUrl = toAbsoluteUrl(canonicalPath) || siteUrl
	const imageUrl = toAbsoluteUrl(options.image?.trim() || DEFAULT_OG_IMAGE) || `${siteUrl}${DEFAULT_OG_IMAGE}`

	return {
		canonicalPath,
		canonicalUrl,
		imageUrl,
		siteUrl,
		toAbsoluteUrl,
	}
}

export function buildBreadcrumbListItems(
	items: SeoBreadcrumbItem[],
	toAbsoluteUrl: (value?: string) => string | undefined
) {
	return items.map((item, index) => ({
		'@type': 'ListItem',
		position: index + 1,
		name: item.name,
		item: item.item ? toAbsoluteUrl(item.item) : undefined,
	}))
}

export function buildAuthorSchema(siteUrl: string, name = DEFAULT_AUTHOR_NAME) {
	if (name !== DEFAULT_AUTHOR_NAME) {
		return {
			'@type': 'Person',
			name,
		}
	}

	return {
		'@type': 'Person',
		name,
		jobTitle: DEFAULT_AUTHOR_ROLE,
		url: siteUrl,
		image: `${siteUrl}${DEFAULT_PROFILE_IMAGE}`,
		sameAs: [DEFAULT_AUTHOR_PROFILE],
	}
}

export function toIsoDateTime(value: Date | string | undefined) {
	if (!value) return undefined

	return value instanceof Date ? value.toISOString() : new Date(value).toISOString()
}
