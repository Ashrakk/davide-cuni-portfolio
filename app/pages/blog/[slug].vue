<template>
	<div>
		<div class="container max-w-screen-md mx-auto mt-8 mb-24">
			<article v-if="data != undefined">
				<h1
					class="text-h3 text-center"
				>
					{{ data.title }}
				</h1>
				<BlogHeroImage
					:data="data"
				/>
				<div class="text-center text-sm p-4 md:p-0 text-[#d4d4d4]">{{ data.description }}</div>
				<div class="grid grid-cols-2 gap-2 md:gap-4 md:flex md:flex-row md:justify-center md:items-center mt-8 px-4">
					<div class="flex flex-row items-center md:justify-center pl-2 md:pl-0">
						<UIcon class="size-6 shrink-0 text-amber-400" name="i-material-symbols-calendar-today"></UIcon>
						<div class="ml-1 text-sm">{{ data.date }}</div>
					</div>
					<div class="flex flex-row items-center md:justify-center pl-2 md:pl-0 row-start-2">
						<UIcon class="size-6 shrink-0 text-amber-400" name="i-material-symbols-alarm-outline"></UIcon>
						<div class="ml-1 text-sm">{{ data.readTime }}</div>
					</div>
					<div class="flex flex-row items-center justify-center ">
						<UIcon class="size-6 shrink-0 text-amber-400" name="i-material-symbols-bookmark-outline"></UIcon>
						<div class="ml-1 text-sm">{{ data.topic }}</div>
					</div>
				</div>
				<div class="mt-8 max-w-full p-4 md:p-0 prose prose-neutral prose-invert
							prose-p:text-neutral-200 prose-li:text-neutral-200 prose-blockquote:text-neutral-300 prose-strong:text-white
							prose-h2:my-4 prose-h2:text-5xl prose-h2:font-medium prose-h2:tracking-wide prose-h2:font-teko
							prose-h3:my-4 prose-h3:text-3xl prose-h3:font-medium prose-h3:tracking-wide prose-h3:font-teko
							prose-h4:text-xl prose-h4:font-medium prose-h4:text-white
							prose-h5:text-lg prose-h5:font-medium prose-h5:text-white">
					<ContentRenderer :value="data" />
				</div>
			</article>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { toIsoDateTime } from '~/composables/useSeoHelpers'

	const route = useRoute();

	const fetchBlogArticle = async () => {
		return queryCollection("blog")
			.path(route.path)
			.first();
	};

	const { data, error } = await useAsyncData(`blog-${route.path}`, fetchBlogArticle);

	if (error.value || !data.value) {
		throw createError({
			statusCode: 404,
			statusMessage: 'Article not found'
		})
	}

	const seoData = data.value;

	useArticleSeo({
		title: seoData?.title ?? '',
		description: seoData?.description ?? '',
		documentTitle: seoData?.title ? `${seoData.title} | Davide Cuni Blog` : '',
		author: seoData?.author,
		section: 'Blog',
		schemaType: 'BlogPosting',
		image: seoData?.ogImage,
		imageAlt: seoData?.alt,
		keywords: seoData?.topic ? [seoData.topic] : undefined,
		breadcrumb: seoData?.title
			? [
				{ name: 'Home', item: '/' },
				{ name: 'Blog', item: '/blog' },
				{ name: seoData.title },
			]
			: undefined,
		publishedTime: seoData?.publishedAt,
		modifiedTime: toIsoDateTime(seoData?.updatedAt),
	})

	defineOgImage('Portfolio', {
		title: seoData?.title ?? 'Article by Davide Cuni',
		description: seoData?.description ?? 'A web development article by Davide Cuni.',
		section: 'Blog',
		label: seoData?.topic ?? 'Article',
	})

</script>
