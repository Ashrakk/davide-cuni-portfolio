import { nextTick } from 'vue'
import { syncGoogleAnalytics, trackGoogleAnalyticsPageView } from '../utils/google-analytics'

export default defineNuxtPlugin(() => {
	const {
		config,
		consent,
	} = useSiteConsent()
	const route = useRoute()
	const measurementId = config.gaMeasurementId

	if (!measurementId) {
		return
	}

	watch(() => consent.value.analytics, (enabled, previousEnabled) => {
		syncGoogleAnalytics(measurementId, enabled === true)

		if (enabled === true && previousEnabled === false) {
			trackGoogleAnalyticsPageView(measurementId)
		}
	}, { immediate: true })

	watch(() => route.fullPath, async () => {
		await nextTick()

		if (consent.value.analytics === true) {
			trackGoogleAnalyticsPageView(measurementId)
		}
	}, { immediate: true })
})
