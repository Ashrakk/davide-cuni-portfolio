// https://nuxt.com/docs/api/configuration/nuxt-config

import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
	devtools: { enabled: true },
	pages: true,
	ssr: true,

	app: {
		pageTransition: { name: "page", mode: "out-in" }
	},

	// SEO Schema
	site: {
		url: process.env.NUXT_PUBLIC_SITE_URL,
		name: "Davide Cuni Portfolio",
		description: "Portfolio website of Davide Cuni - End-to-End Developer, from design to release",
		defaultLocale: "en",
		identity: { type: "Person" },
		indexable: true,
	},
	
	// SEO Sitemap
	sitemap: {
		strictNuxtContentPaths: true
	},

	// Nuxt Image Setup
	image: {
		quality: 90,
		format: ["webp"]
	},

	ui: {
		icons: ['material-symbols', 'mdi', 'ri', 'ph']
	},

	content: {
		markdown: {
			anchorLinks: false
		}
	},

	linkChecker: {
		excludeLinks: ["https://www.linkedin.com/in/davide-cuni"]
	},

	modules: [
		"@nuxt/content",
		"@nuxt/ui",
		"@nuxt/image",
		"@nuxtjs/seo",
		[
			"nuxt-mail",
			{
				message: {
					to: process.env.SMTP_RECEIVER_ADDRESS,
					from: process.env.SMTP_USER
				},
				smtp: {
					host: process.env.SMTP_HOST,
					port: process.env.SMTP_PORT,
					auth: {
						user: process.env.SMTP_USER,
						pass: process.env.SMTP_PASSWORD,
					}
				}
			}
		]
	],

	components: [
		{ path: "~/components/global", pathPrefix: false },
		{ path: "~/components/main", pathPrefix: false },
		{ path: "~/components/blog", pathPrefix: false },
		"~/components"
	],

	vite: {
		plugins: [
			svgLoader({
				svgoConfig: {
					multipass: true,
					plugins: [ 
						{
							name: "cleanupIds",
							params: {
								minify: false
							}
						}
					]
				}
			})
		],
	},

	nitro: {
		prerender: {
			crawlLinks: true,
			routes: ["/"]
		}
		//preset: "azure"
	},

	routeRules: {
		"/": { prerender: true },
		"/contact": { prerender: true },
		"/about": { prerender: true },
		"/projects": { prerender: true },
		"/blog": { prerender: true }
	},

	router: {
		options: {
			scrollBehaviorType: "smooth"
		}
	},

	colorMode: {
		preference: "dark",
		fallback: "dark",
		classSuffix: ''
	},

	ignore: [".prettierignore", ".gitignore"]
});
