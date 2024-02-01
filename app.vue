<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
	.page-enter-active,
	.page-leave-active {
		transition: all 0.3s ease-in-out;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>

<script setup lang="ts">
	const route = useRoute();

	useHead({
		title: `${route.meta.title}`,
		titleTemplate: '%s %separator %siteName',
		htmlAttrs: {
			lang: 'en'
		},
		link: [
			{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon.png',
			}
		]
	})

</script>