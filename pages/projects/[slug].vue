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
							:alt="data.alt"
							sizes="768px"
							:img-attrs="{
								class: imageAlignment
							}"
						/>
				</div>
				<div class="text-center text-sm p-4 md:p-0 text-[#d4d4d4]">{{ data.description }}</div>
				<div class="grid grid-cols-2 gap-2 md:gap-4 md:flex md:flex-row md:justify-center md:items-center mt-8 px-4">
					<div class="flex flex-row items-center md:justify-center pl-2 md:pl-0">
						<UIcon class="bg-amber-400" name="i-material-symbols-calendar-today"></UIcon>
						<div class="ml-1 text-sm">{{ data.date }}</div>
					</div>
					<div class="flex flex-row items-center md:justify-center pl-2 md:pl-0 row-start-2">
						<UIcon class="bg-amber-400" name="i-material-symbols-alarm-outline"></UIcon>
						<div class="ml-1 text-sm">{{ data.readTime }}</div>
					</div>
					<div class="flex flex-row items-center justify-center ">
						<UIcon class="bg-amber-400" name="i-material-symbols-bookmark-outline"></UIcon>
						<div class="ml-1 text-sm">{{ data.topic }}</div>
					</div>
				</div>
				<div class="mt-8 p-4 md:p-0 prose prose-neutral prose-invert max-w-full 
							prose-h2:font-teko prose-h2:text-5xl prose-h2:my-4 prose-h2:font-medium
							prose-h3:font-teko prose-h3:text-3xl prose-h3:my-4 prose-h3:font-medium">
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

	const imageAlignment = computed(() => {
		const alignClass = `object-${data.value?.imageAlign ?? ''}`;
		return `object-cover ${alignClass} h-[350px] md:h-[300px] w-full`;
	});

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
		description: data.value?.description,
		ogImage: data.value?.ogImage
	})
	
</script>
