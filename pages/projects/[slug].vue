<template>
	<div class="container max-w-3xl mx-auto md:pt-8 pt-4 mb-24">
		<article v-if="data != undefined">
			<h1
				class="md:text-5xl text-4xl text-center md:mt-2 md:mb-12 mb-6 font-narrow text-white"
			>
				{{ data.title }}
			</h1>

			<ContentRenderer :value="data" />
		</article>
	</div>
</template>

<script setup lang="ts">
	const route = useRoute();

	const { data, error } = await useAsyncData(`project-${route.path}`, () =>
		queryContent("/projects")
			.where({ _path: { $regex: route.path } })
			.findOne()
	);

	if (error.value) navigateTo("/404");

	useHead({
		templateParams: {
			blog: 'Projects'
		},
		title: data.value?.title,
		titleTemplate: '%s %separator %blog %separator %siteName',
		htmlAttrs: {
			lang: 'en',
		},
		link: [
			{
			rel: 'icon',
			type: 'image/png',
			href: '/favicon.png'
			}
		]
	})

	useSeoMeta({
		description: data.value?.description
	})
	
</script>
