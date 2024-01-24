/** @type {import('tailwindcss').Config} */

module.exports = {
	plugins: [require('@tailwindcss/typography')],
	content: [
		"./components/**/*.{js,vue,ts,html}",
		"./layouts/**/*.{js,vue,ts,html}",
		"./pages/**/*.{js,vue,ts,html}",
		"./app.vue"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', "sans-serif", "system-ui"],
				teko: ['"Teko"', "sans-serif", "system-ui"]
			},
			keyframes: {
				spin: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				}
			}
		}
	}
};
