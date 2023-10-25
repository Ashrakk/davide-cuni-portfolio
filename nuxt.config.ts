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
		strictNuxtContentPaths: true,
	},
	

	// Nuxt Image Setup
	image: {
		quality: 90,
		format: ["webp"]
	},

	ui: {
		//icons: ['material-symbols', 'mdi', 'ri', 'ph']
	},

	content: {
		markdown: {
			anchorLinks: false
		},
		highlight: {
			theme: 'github-dark', 
			langs: [
				'php',
				'ts'
			]
		}
	},

	linkChecker: {
		excludeLinks: ["https://www.linkedin.com/in/davide-cuni"]
	},

	modules: [
		"@nuxtjs/seo",
		"@nuxt/ui",
		"@nuxt/image",
		"@nuxt/content",
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
			routes: ["/", "/about", "/contact"]
		}
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
	},

	ignore: [".prettierignore", ".gitignore"],
	compatibilityDate: "2025-01-14"
});
