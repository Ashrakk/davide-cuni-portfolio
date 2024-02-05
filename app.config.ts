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
				solid: "hover:scale-95 dark:hover:bg-amber-300 hover:bg-amber-300 ease-in-out duration-200",
				outline: "hover:scale-95 ease-in-out duration-200",
			}
		},
	},
	colorMode: {
		preference: "dark"
	}
});
