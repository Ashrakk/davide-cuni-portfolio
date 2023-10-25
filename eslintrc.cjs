module.exports = {
	root: true,
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		project: ["./tsconfig.json"],
		extraFileExtensions: [".vue"]
	},
	plugins: ["vue", "@typescript-eslint", "prettier"],
	ignorePatterns: [".output/*", ".nuxt/*", "dist/*"],
	env: {
		node: true,
		browser: true
	}
};
