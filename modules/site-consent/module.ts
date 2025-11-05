import { addImportsDir, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
	meta: {
		name: 'site-consent',
		compatibility: {
			nuxt: '^4.0.0',
		},
	},
	setup(_, nuxt) {
		const resolver = createResolver(import.meta.url)
		const runtimeSiteConsent = (nuxt.options.runtimeConfig.public.siteConsent ?? {}) as {
			policyVersion?: string
			gaMeasurementId?: string
			analytics?: {
				gaMeasurementId?: string
			}
		}

		nuxt.options.runtimeConfig.public.siteConsent = {
			policyVersion: runtimeSiteConsent.policyVersion || '',
			gaMeasurementId: runtimeSiteConsent.gaMeasurementId || runtimeSiteConsent.analytics?.gaMeasurementId || '',
		}

		addImportsDir(resolver.resolve('./runtime/composables'))
		addPlugin(resolver.resolve('./runtime/plugins/analytics.client'))
	}
})
