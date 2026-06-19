import type { SeoBreadcrumbItem } from './useSeoHelpers'
import {
	DEFAULT_AUTHOR_NAME,
	buildAuthorSchema,
	buildBreadcrumbListItems,
	useSeoContext,
} from './useSeoHelpers'

export interface ArticleSeoOptions {
	title: string
	description: string
	section: string
	documentTitle?: string
	author?: string
	path?: string
	image?: string
	imageAlt?: string
	keywords?: string[]
	breadcrumb?: SeoBreadcrumbItem[]
	schemaType?: 'Article' | 'BlogPosting'
	noindex?: boolean
	publishedTime?: string
	modifiedTime?: string
}

export function useArticleSeo(options: ArticleSeoOptions) {
	const { canonicalUrl, imageUrl, siteUrl, toAbsoluteUrl } = useSeoContext({
		path: options.path,
		image: options.image,
	})
	const documentTitle = options.documentTitle || options.title
	const authorName = options.author?.trim() || DEFAULT_AUTHOR_NAME
	const keywords = options.keywords?.filter(Boolean)

	useSeoMeta({
		description: options.description,
		author: authorName,
		keywords: keywords?.join(', '),
		robots: options.noindex ? 'noindex, nofollow' : 'index, follow',
		ogTitle: documentTitle,
		ogDescription: options.description,
		ogType: 'article',
		ogImage: imageUrl,
		ogImageAlt: options.imageAlt,
		twitterCard: 'summary_large_image',
		twitterTitle: documentTitle,
		twitterDescription: options.description,
		twitterImage: imageUrl,
		articleAuthor: [authorName],
		articlePublishedTime: options.publishedTime,
		articleModifiedTime: options.modifiedTime,
		articleSection: options.section,
		articleTag: keywords,
	})

	useHead({
		title: documentTitle,
		titleTemplate: '%s',
	})

	const schemaNodes: Array<Record<string, any>> = [
		defineArticle({
			'@type': options.schemaType || 'Article',
			headline: options.title,
			name: options.title,
			description: options.description,
			author: buildAuthorSchema(siteUrl, authorName),
			datePublished: options.publishedTime,
			dateModified: options.modifiedTime || options.publishedTime,
			image: imageUrl,
			inLanguage: 'en',
			isAccessibleForFree: true,
			keywords,
			url: canonicalUrl,
			articleSection: options.section,
		}),
	]

	if (options.breadcrumb?.length) {
		schemaNodes.push(
			defineBreadcrumb({
				itemListElement: buildBreadcrumbListItems(options.breadcrumb, toAbsoluteUrl),
			})
		)
	}

	useSchemaOrg(schemaNodes)
}
