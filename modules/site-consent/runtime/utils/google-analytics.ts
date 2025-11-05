const GA_SCRIPT_ID = 'site-consent-ga-script'

interface TrackingWindow extends Window {
	dataLayer?: unknown[]
	gtag?: (...args: unknown[]) => void
	__siteConsentGaConfiguredId?: string | null
	__siteConsentGaLastPageView?: string | null
}

function loadScriptOnce(id: string, src: string) {
	const existing = document.getElementById(id) as HTMLScriptElement | null

	if (existing) {
		return
	}

	const script = document.createElement('script')
	script.id = id
	script.async = true
	script.src = src
	document.head.appendChild(script)
}

function removeScriptById(id: string) {
	document.getElementById(id)?.remove()
}

function clearCookie(name: string) {
	const host = window.location.hostname
	const baseCookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
	document.cookie = baseCookie
	document.cookie = `${baseCookie}; domain=${host}`
	document.cookie = `${baseCookie}; domain=.${host}`
}

function clearCookiesByPrefix(prefix: string) {
	const cookies = document.cookie.split(';')

	for (const cookie of cookies) {
		const [rawName] = cookie.trim().split('=')

		if (rawName && rawName.startsWith(prefix)) {
			clearCookie(rawName)
		}
	}
}

function ensureGoogleTag(measurementId: string) {
	const trackingWindow = window as TrackingWindow
	loadScriptOnce(GA_SCRIPT_ID, `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`)

	trackingWindow.dataLayer = trackingWindow.dataLayer || []

	if (!trackingWindow.gtag) {
		trackingWindow.gtag = function () {
			trackingWindow.dataLayer?.push(arguments)
		}
	}

	if (trackingWindow.__siteConsentGaConfiguredId !== measurementId) {
		trackingWindow.gtag('js', new Date())
		trackingWindow.gtag('config', measurementId, {
			anonymize_ip: true,
			send_page_view: false,
		})
		trackingWindow.__siteConsentGaConfiguredId = measurementId
		trackingWindow.__siteConsentGaLastPageView = null
	}
}

export function syncGoogleAnalytics(measurementId: string, enabled: boolean) {
	const trackingWindow = window as TrackingWindow
	const disableKey = `ga-disable-${measurementId}`
	Reflect.set(window, disableKey, !enabled)

	if (!enabled) {
		removeScriptById(GA_SCRIPT_ID)
		trackingWindow.__siteConsentGaConfiguredId = null
		trackingWindow.__siteConsentGaLastPageView = null
		trackingWindow.dataLayer = []
		delete trackingWindow.gtag
		clearCookie('_ga')
		clearCookiesByPrefix('_ga')
		clearCookie('_gid')
		clearCookie('_gat')
		return
	}

	ensureGoogleTag(measurementId)
}

export function trackGoogleAnalyticsPageView(measurementId: string) {
	const trackingWindow = window as TrackingWindow

	if (trackingWindow.__siteConsentGaConfiguredId !== measurementId || typeof trackingWindow.gtag !== 'function') {
		return
	}

	const pageUrl = new URL(window.location.href)
	pageUrl.searchParams.delete('gtm_debug')

	const search = pageUrl.searchParams.toString()
	const pagePath = search ? `${pageUrl.pathname}?${search}` : pageUrl.pathname
	const signature = `${measurementId}:${pageUrl.toString()}`

	if (trackingWindow.__siteConsentGaLastPageView === signature) {
		return
	}

	trackingWindow.__siteConsentGaLastPageView = signature
	trackingWindow.gtag('event', 'page_view', {
		send_to: measurementId,
		page_title: document.title,
		page_location: pageUrl.toString(),
		page_path: pagePath,
	})
}
