export default defineAppConfig({
	icon: {
		mode: "css",
		cssLayer: "base"
	},
	ui: {
		colors: {
			primary: "amber",
			neutral: "neutral"
		},
		icons: {
			copy: "i-ph-copy",
			hash: "i-ph-hash"
		},
		button: {
			base: "justify-center rounded-full font-medium tracking-tight",
			variants: {
				size: {
					xl: {
						base: "px-7 py-1.5 text-lg gap-2"
					}
				},
			},
			compoundVariants: [
				{
					color: 'primary',
					variant: 'solid',
					solid: "hover:scale-95 hover:bg-amber-300 dark:hover:bg-amber-300 ease-in-out duration-200",
				},
				{
					color: 'primary',
					variant: 'solid',
					solid: "hover:scale-95 ease-in-out duration-200",
				},
			],
			defaultVariants: {
				color: "primary",
				size: "xl"
			},
		},
	}
});
