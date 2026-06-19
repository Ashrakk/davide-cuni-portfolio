// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { createStaticPageSitemapUrls } from './shared/sitemap'

export default defineNuxtConfig({
	compatibilityDate: '2026-04-30',
	devtools: { enabled: process.env.NODE_ENV !== 'production' },
	features: {
		devLogs: process.env.NODE_ENV !== 'production'
	},

	modules: [
		'./modules/site-consent/module',
		'./modules/site-contact/module',
		'@nuxt/fonts',
		"@nuxt/image",
		"@nuxtjs/seo",
		"@nuxt/ui",
		"@nuxt/content"
	],

  	css: ['~/assets/css/style.css'],
	ssr: true,

	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
		  htmlAttrs: {
			lang: 'en',
		  },
		  link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
			{ rel: 'manifest', href: '/site.webmanifest' },
		  ],
		  meta: [
			{ name: 'apple-mobile-web-app-title', content: 'Davide Cuni Portfolio' }
		  ]
		}
	  },

	robots: {
		mergeWithRobotsTxtPath: false,
		credits: false,
		groups: [
			{
				userAgent: ['*'],
				allow: ['/'],
				contentSignal: { search: 'yes', 'ai-train': 'no' },
				comment: [
				'As a condition of accessing this website, you agree to abide by the following content signals:',
				'(a)  If a Content-Signal = yes, you may collect content for the corresponding use.',
				'(b)  If a Content-Signal = no, you may not collect content for the corresponding use.',
				'(c)  If the website operator does not include a Content-Signal for a corresponding use,',
				'     the website operator neither grants nor restricts permission via Content-Signal',
				'     with respect to the corresponding use.',
				'The content signals and their meanings are:',
				'search:   building a search index and providing search results (e.g., returning',
				'          hyperlinks and short excerpts from your website\'s contents). Search does not',
				'          include providing AI-generated search summaries.',
				'ai-input: inputting content into one or more AI models (e.g., retrieval',
				'          augmented generation, grounding, or other real-time taking of content for',
				'          generative AI search answers).',
				'ai-train: training or fine-tuning AI models.',
				'ANY RESTRICTIONS EXPRESSED VIA CONTENT SIGNALS ARE EXPRESS RESERVATIONS OF',
				'RIGHTS UNDER ARTICLE 4 OF THE EUROPEAN UNION DIRECTIVE 2019/790 ON COPYRIGHT',
				'AND RELATED RIGHTS IN THE DIGITAL SINGLE MARKET.',
				],
			},
			{
				userAgent: [
				'Amazonbot',
				'Applebot-Extended',
				'Bytespider',
				'CCBot',
				'ClaudeBot',
				'CloudflareBrowserRenderingCrawler',
				'Google-Extended',
				'GPTBot',
				'meta-externalagent',
				'Nuclei',
				'WikiDo',
				'Riddler',
				'PetalBot',
				'Zoominfobot',
				'Go-http-client',
				'Node/simplecrawler',
				'CazoodleBot',
				'dotbot/1.0',
				'Gigabot',
				'Barkrowler',
				'BLEXBot',
				'magpie-crawler',
				],
				disallow: ['/'],
			},
		],
	},

	runtimeConfig: {
		turnstileSecret: process.env.TURNSTILE_SECRET || '',
		smtp: {
			host: process.env.SMTP_HOST || '',
			port: process.env.SMTP_PORT || '465',
			secure: process.env.SMTP_SECURE || 'true',
			user: process.env.SMTP_USER || '',
			pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD || '',
			from: process.env.SMTP_FROM || process.env.SMTP_USER || '',
			to: process.env.CONTACT_TO || process.env.SMTP_RECEIVER_ADDRESS || '',
		},
		public: {
			siteConsent: {
				policyVersion: process.env.NUXT_PUBLIC_CONSENT_POLICY_VERSION || '2026-05-03',
				gaMeasurementId: process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || '',
			},
			siteContact: {
				turnstileSiteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY || '',
			},
		},
	},

	// SEO Schema
	site: {
		url: process.env.NUXT_SITE_URL || 'https://davidecuni.typotek.space/',
		name: "Davide Cuni Portfolio",
		description: "Portfolio, case studies, and technical writing by Davide Cuni, a full-stack engineer focused on modern web development.",
		defaultLocale: "en",
		identity: {
			type: "Person",
			name: "Davide Cuni",
			image: "/images/profilepic.jpg",
			jobTitle: "Full-Stack Engineer",
			sameAs: [
				"https://www.linkedin.com/in/davide-cuni",
			],
		},
		indexable: true,
	},

	seo: {
		meta: {
			description: 'Portfolio, case studies, and technical writing by Davide Cuni, a full-stack engineer focused on modern web development.',
			author: 'Davide Cuni',
			ogTitle: 'Davide Cuni Portfolio',
			ogDescription: 'Explore full-stack web projects, case studies, and articles by Davide Cuni.',
			ogType: 'website',
			ogLocale: 'en_US',
			twitterCard: 'summary_large_image',
			twitterTitle: 'Davide Cuni Portfolio',
			twitterDescription: 'Explore full-stack web projects, case studies, and articles by Davide Cuni.',
			themeColor: '#121212',
			colorScheme: 'dark'
		}
	},

	ogImage: {
		enabled: true,
		zeroRuntime: true,
		compatibility: {
			prerender: {
				satori: 'node',
				resvg: 'node',
				browser: false,
				takumi: false,
			},
			runtime: {
				satori: false,
				browser: false,
				takumi: false,
			},
		},
		defaults: {
			width: 1200,
			height: 630,
			extension: 'png',
			emojis: false,
		},
		cacheMaxAgeSeconds: 0,
	},

	// Nuxt Image Setup
	image: {
		quality: 90,
		format: ["webp"]
	},

	// @nuxt/ui setup
	ui: {
		colorMode: true,
		theme: {
			colors: ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'lime']
		}
	},

	colorMode: {
		preference: 'dark',
		fallback: 'dark',
	},


	content: {
		build: {
		markdown: {
			highlight: {
			langs: [
					'php',
					'js',
					'jsx',
					'json',
					'ts',
					'tsx',
					'vue',
					'css',
					'html',
					'bash',
					'md',
					'mdc',
					'yaml',
					]
				}
			}
		}
	},

	// @nuxt/fonts setup
	fonts: {
		defaults: {
			preload: true,
		},
		families: [
			{ name: 'Inter', provider: "local", src: '/fonts/inter.woff2', weights: ['400 700'] },
			{
				name: 'Teko',
				provider: "local",
				src: '/fonts/teko.woff2',
				weights: ['300 400'],
				display: 'swap',
				preload: true,
			}
		]
	},

	icon: {
		serverBundle: {
			collections: ['material-symbols', 'mdi', 'ph', 'ri']
		},
		clientBundle: {
			scan: {
				globInclude: ['app/**/*.vue', 'content/**/*.md']
			}
		},
	},

	linkChecker: {
		excludeLinks: ["https://www.linkedin.com/in/davide-cuni"]
	},

	sitemap: {
		discoverImages: false,
		urls: () => {
			const siteUrl = (process.env.NUXT_SITE_URL || 'https://davidecuni.typotek.space').replace(/\/$/, '')
			return createStaticPageSitemapUrls(siteUrl)
		},
	},

	routeRules: {
		"/": { prerender: true },
		"/contact": { prerender: true },
		"/about": { prerender: true },
		"/projects": { prerender: true },
		"/projects/**": { prerender: true },
		"/blog": { prerender: true },
		"/blog/**": { prerender: true },
		"/_og/s/**": { prerender: true },
		"/api/contact": { prerender: false },
		"/cookie-policy": { prerender: true },
		"/privacy-policy": { prerender: true },
		"/robots.txt": { prerender: true },
		"/sitemap.xml": { prerender: true },
	},

	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true
		},
		prerender: {
			crawlLinks: true,
			routes: ['/sitemap.xml', '/__sitemap__/style.xsl'],
		},
	},

	vite: {
		plugins: [svgLoader()],
	},
});
