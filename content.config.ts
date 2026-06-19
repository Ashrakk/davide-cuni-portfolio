import { defineContentConfig, defineCollection } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'
import { z } from 'zod'

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
      const siteUrl = (process.env.NUXT_SITE_URL || 'https://davidecuni.typotek.space').replace(/\/$/, '')
      const sitemapImages = entry.sitemapImages?.length ? entry.sitemapImages : [entry.ogImage]
      const imageUrls = Array.from(
        new Set(
          sitemapImages.map((image) =>
            image.startsWith('http')
              ? image
              : image.startsWith('/')
                ? `${siteUrl}${image}`
                : `${siteUrl}/${image}`
          )
        )
      )

      if (imageUrls.length > 0) {
        url.images = imageUrls.map((loc) => ({ loc }))
      }

      url.lastmod = entry.updatedAt || new Date(entry.publishedAt)
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
