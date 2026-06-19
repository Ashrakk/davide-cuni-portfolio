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

export function createStaticPageSitemapUrls(siteUrl: string) {
  return staticSitemapPageImages.map((entry) => ({
    loc: entry.loc,
    images: entry.images.map((image) => ({
      loc: image.startsWith('http') ? image : `${siteUrl}${image}`
    }))
  }))
}
