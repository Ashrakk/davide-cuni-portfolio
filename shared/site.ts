export const DEFAULT_SITE_URL = 'https://davidecuni.typotek.space'

export function normalizeSiteUrl(siteUrl = DEFAULT_SITE_URL) {
  return siteUrl.replace(/\/$/, '')
}

export function toAbsoluteSiteUrl(siteUrl: string, value?: string) {
  if (!value) return undefined
  if (value.startsWith('http')) return value
  if (value.startsWith('/')) return `${siteUrl}${value}`

  return `${siteUrl}/${value}`
}
