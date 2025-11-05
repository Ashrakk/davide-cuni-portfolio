import { addComponentsDir, addServerHandler, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
	meta: {
		name: 'site-contact',
		compatibility: {
			nuxt: '^4.0.0',
		},
	},
	setup(_, nuxt) {
		const resolver = createResolver(import.meta.url)
		const runtimeSiteContact = (nuxt.options.runtimeConfig.public.siteContact ?? {}) as {
			turnstileSiteKey?: string
			turnstile?: {
				siteKey?: string
			}
		}

		nuxt.options.runtimeConfig.public.siteContact = {
			turnstileSiteKey: runtimeSiteContact.turnstileSiteKey || runtimeSiteContact.turnstile?.siteKey || '',
		}

		addComponentsDir({
			path: resolver.resolve('./runtime/components'),
			global: true,
			pathPrefix: false,
		})
		addServerHandler({
			route: '/api/contact',
			handler: resolver.resolve('./runtime/server/api/contact.post'),
		})
	}
})
