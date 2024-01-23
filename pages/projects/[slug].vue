<template>
	<div>
		<div class="container max-w-screen-md mx-auto mt-8 mb-24">
			<article v-if="data != undefined">
				<h1
					class="heading_3 text-center"
				>
					{{ data.title }}
				</h1>

				<div class="w-full mt-4 mb-4">
						<NuxtPicture
							class="h-[300px]"
							:src="data.image"
							sizes="1280px"
							:img-attrs="{
								class:
									'object-cover object-top h-[350px] md:h-[300px] w-full'
							}"
						/>
				</div>
				<div class="text-center text-sm p-4 md:p-0">{{ data.description }}</div>
				<div class="flex flex-col md:flex-row mt-8 space-x-4 justify-center items-baseline md:items-center">
					<div class="flex flex-row items-center">
						<UIcon class="bg-amber-400" name="i-material-symbols-bookmark-outline"></UIcon>
						<div class="ml-1 text-sm">{{ data.topic }}</div>
					</div>
					<div class="flex flex-row items-center">
						<UIcon class="bg-amber-400" name="i-material-symbols-calendar-today"></UIcon>
						<div class="ml-1 text-sm">{{ data.date }}</div>
					</div>
					<div class="flex flex-row items-center">
						<UIcon class="bg-amber-400" name="i-material-symbols-alarm-outline"></UIcon>
						<div class="ml-1 text-sm">{{ data.readTime }}</div>
					</div>	
				</div>
				<div class="mt-8 p-4 md:p-0">
					<ContentRenderer :value="data" />
				</div>
			</article>
		</div>
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
