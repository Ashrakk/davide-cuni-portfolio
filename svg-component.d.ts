declare module '*.svg' {
	import type { DefineComponent } from 'vue'

	const component: DefineComponent<object, object, unknown>
	export default component
}
