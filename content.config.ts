import { defineContentConfig, defineCollection } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { z } from 'zod'

interface SitemapEntry {
  sitemapImages?: string[]
  ogImage: string
  updatedAt?: Date
  publishedAt: string
}

const createPostSchema = (name: 'blog' | 'projects') => z.object({
  title: z.string(),
  date: z.string(),
  publishedAt: z.string(),
  description: z.string(),
  image: z.string(),
  compactImage: z.string().optional(),
  ogImage: z.string(),
  sitemapImages: z.array(z.string()).optional(),
  imageAlign: z.string(),
  alt: z.string(),
  author: z.string(),
  topic: z.string(),
  readTime: z.string(),
  updatedAt: z.coerce.date().optional(),
  sitemap: defineSitemapSchema({
    z,
    name,
    onUrl: (url, entry) => {
      const typedEntry = entry as SitemapEntry
      const siteUrl = process.env.NUXT_PUBLIC_SITE_URL.replace(/\/$/, '')

      const toAbsoluteImageUrl = (image: string) => {
        if (image.startsWith('http')) return image
        if (image.startsWith('/')) return `${siteUrl}${image}`

        return `${siteUrl}/${image}`
      }

      const sitemapImages = Array.isArray(typedEntry.sitemapImages) && typedEntry.sitemapImages.length > 0
        ? typedEntry.sitemapImages
        : [typedEntry.ogImage]
      const imageEntries = Array.from(
        new Set(
          sitemapImages.map(toAbsoluteImageUrl)
        )
      ).map((loc) => ({ loc }))

      if (imageEntries.length > 0) {
        url.images = imageEntries
      }

      url.lastmod = typedEntry.updatedAt || new Date(typedEntry.publishedAt)
    }
  })
})

export default defineContentConfig({
  collections: {
    legal: defineCollection({
      type: 'page',
      source: 'legal/**/*.md'
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: createPostSchema('blog')
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: createPostSchema('projects')
    })
  }
})
