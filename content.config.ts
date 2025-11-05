import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const postSchema = z.object({
  title: z.string(),
  date: z.string(),
  publishedAt: z.string(),
  description: z.string(),
  image: z.string(),
  compactImage: z.string().optional(),
  ogImage: z.string(),
  imageAlign: z.string(),
  alt: z.string(),
  author: z.string(),
  topic: z.string(),
  readTime: z.string(),
  updatedAt: z.coerce.date().optional()
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
      schema: postSchema
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: postSchema
    })
  }
})
