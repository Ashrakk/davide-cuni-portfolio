export default defineAppConfig({
	ui: {
		primary: "amber",
		gray: "neutral",
		button: {
			rounded: "rounded-full",
			base: "justify-center",
			font: "font-medium tracking-tight",
			size: {
				xl: "text-lg"
			},
			padding: {
				xl: "px-7 py-1.5"
			},
			default: {
				color: "amber",
				size: "xl"
			},
			variant: {
				solid: "text-neutral-800 dark:text-neutral-800 hover:bg-white dark:hover:bg-white ease-in-out duration-300"
			}
		},
	},
	colorMode: {
		preference: "dark"
	}
});
