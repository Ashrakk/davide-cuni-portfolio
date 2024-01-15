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
		url: "http://localhost:3000/",
		name: "Davide Cuni Portfolio",
		description: "Portfolio website of Davide Cuni - Full Stack Developer",
		defaultLocale: "en",
		identity: { type: "Person" }
	},

	// SEO Sitemap
	sitemap: {
		strictNuxtContentPaths: true
	},

	// Nuxt Image Setup
	image: {
		dir: "assets/images",
		quality: 90,
		format: ["webp"]
	},

	ui: {
		icons: "all"
	},

	linkChecker: {
		excludeLinks: ["https://www.linkedin.com/in/davide-cuni"]
	},

	modules: [
		"@nuxt/ui",
		"@nuxt/image",
		"@nuxt/content",
		"@nuxtjs/seo",
		[
			"nuxt-mail",
			{
				message: {
					to: "davidevertigocuni@gmail.com"
				},
				smtp: {
					host: "davidecuni.typotek.space",
					port: 465,
					auth: {
						user: 'info@davidecuni.typotek.space',
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
		"/projects": { prerender: true }
	},

	router: {
		options: {
			scrollBehaviorType: "smooth"
		}
	},

	ignore: [".prettierignore", ".gitignore"]
});
