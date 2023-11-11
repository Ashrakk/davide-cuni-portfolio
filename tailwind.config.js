/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	plugins: [],
	corePlugins: {
		//preflight: false
	},
	content: [
		"./components/**/*.{js,vue,ts,html}",
		"./layouts/**/*.{js,vue,ts,html}",
		"./pages/**/*.{js,vue,ts,html}",
		"./app.vue"
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
				'comfort': ['"Comfortaa"', ...defaultTheme.fontFamily.sans]
				},
			keyframes: {
				spinGradient: {
					"0%": { "background-position": "0% 50%" },
					"50%": { "background-position": "100% 50%" },
					"100%": { "background-position": "0% 50%" }
				}
			}
		}
	}
};
