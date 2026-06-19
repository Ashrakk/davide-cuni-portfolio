import { toAbsoluteSiteUrl } from './site'

export interface StaticSitemapPageImages {
  loc: string
  images: string[]
}

export const staticSitemapPageImages: StaticSitemapPageImages[] = [
  {
    loc: '/',
    images: ['/images/profilepic.jpg']
  },
  {
    loc: '/about',
    images: ['/images/profilepic.jpg']
  },
  {
    loc: '/contact',
    images: ['/images/profilepic.jpg']
  },
  {
    loc: '/blog',
    images: ['/images/jobhunting-og.png']
  },
  {
    loc: '/projects',
    images: ['/images/this_home.png']
  },
  {
    loc: '/privacy-policy',
    images: []
  },
  {
    loc: '/cookie-policy',
    images: []
  }
]

export function createSitemapImageEntries(siteUrl: string, images: string[]) {
  return Array.from(
    new Set(images.map((image) => toAbsoluteSiteUrl(siteUrl, image)).filter((image): image is string => Boolean(image)))
  ).map((loc) => ({ loc }))
}

export function createStaticPageSitemapUrls(siteUrl: string) {
  return staticSitemapPageImages.map((entry) => ({
    loc: entry.loc,
    images: createSitemapImageEntries(siteUrl, entry.images)
  }))
}
