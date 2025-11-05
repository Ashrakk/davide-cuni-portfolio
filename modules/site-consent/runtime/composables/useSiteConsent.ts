interface SiteConsentState {
	necessary: true
	analytics: boolean
	captcha: boolean
	decided: boolean
	policyVersion: string
	consentUpdatedAt: string | null
}

interface SiteConsentSaveInput {
	analytics?: boolean
	captcha?: boolean
}

interface SiteConsentConfig {
	policyVersion: string
	gaMeasurementId: string
}

const SITE_CONSENT_COOKIE_NAME = 'dc_consent'
const SITE_CONSENT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

function getSiteConsentConfig(): SiteConsentConfig {
	const config = useRuntimeConfig()
	const siteConsent = config.public.siteConsent as Partial<SiteConsentConfig> | undefined

	return {
		policyVersion: siteConsent?.policyVersion || '',
		gaMeasurementId: siteConsent?.gaMeasurementId || '',
	}
}

function getDefaultConsent(policyVersion: string): SiteConsentState {
	return {
		necessary: true,
		analytics: false,
		captcha: false,
		decided: false,
		policyVersion,
		consentUpdatedAt: null,
	}
}

function normalizeConsent(value: Partial<SiteConsentState> | null | undefined, policyVersion: string): SiteConsentState {
	const defaults = getDefaultConsent(policyVersion)

	if (!value) {
		return defaults
	}

	const isCurrentPolicy = value.policyVersion === policyVersion

	return {
		necessary: true,
		analytics: isCurrentPolicy ? value.analytics === true : false,
		captcha: isCurrentPolicy ? value.captcha === true : false,
		decided: value.decided === true && isCurrentPolicy,
		policyVersion,
		consentUpdatedAt: typeof value.consentUpdatedAt === 'string' ? value.consentUpdatedAt : null,
	}
}

function isSameConsentState(left: SiteConsentState, right: SiteConsentState) {
	return left.necessary === right.necessary
		&& left.analytics === right.analytics
		&& left.captcha === right.captcha
		&& left.decided === right.decided
		&& left.policyVersion === right.policyVersion
		&& left.consentUpdatedAt === right.consentUpdatedAt
}

export function useSiteConsent() {
	const config = getSiteConsentConfig()
	const cookie = useCookie<SiteConsentState | null>(SITE_CONSENT_COOKIE_NAME, {
		sameSite: 'lax',
		maxAge: SITE_CONSENT_COOKIE_MAX_AGE,
		secure: !import.meta.dev,
		default: () => null,
	})

	const normalizedCookieConsent = normalizeConsent(cookie.value, config.policyVersion)
	const consent = useState<SiteConsentState>(`site-consent-state:${SITE_CONSENT_COOKIE_NAME}`, () => normalizedCookieConsent)

	if (!isSameConsentState(consent.value, normalizedCookieConsent)) {
		consent.value = normalizedCookieConsent
	}

	const preferencesOpen = useState<boolean>(`site-consent-preferences-open:${SITE_CONSENT_COOKIE_NAME}`, () => false)
	const shouldShowBanner = computed(() => !consent.value.decided)

	function persist(next: SiteConsentState) {
		consent.value = next
		cookie.value = next
	}

	function savePreferences(input: SiteConsentSaveInput) {
		persist({
			necessary: true,
			analytics: input.analytics ?? consent.value.analytics,
			captcha: input.captcha ?? consent.value.captcha,
			decided: true,
			policyVersion: config.policyVersion,
			consentUpdatedAt: new Date().toISOString(),
		})
		preferencesOpen.value = false
	}

	function acceptAll() {
		savePreferences({
			analytics: true,
			captcha: true,
		})
	}

	function rejectOptional() {
		savePreferences({
			analytics: false,
			captcha: false,
		})
	}

	function openConsentPreferences() {
		preferencesOpen.value = true
	}

	function closeConsentPreferences() {
		preferencesOpen.value = false
	}

	return {
		config,
		consent,
		shouldShowBanner,
		preferencesOpen,
		savePreferences,
		acceptAll,
		rejectOptional,
		openConsentPreferences,
		closeConsentPreferences,
	}
}
