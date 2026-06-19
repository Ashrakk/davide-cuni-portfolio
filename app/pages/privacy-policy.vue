<template>
	<div class="container max-w-screen-md mx-auto mt-8 mb-24 px-4 md:px-0">
		<article
			v-if="data"
			class="prose prose-neutral prose-invert max-w-none
				prose-p:text-neutral-200 prose-li:text-neutral-200 prose-blockquote:text-neutral-300 prose-strong:text-white
				prose-h1:text-center prose-h1:font-teko prose-h1:text-5xl prose-h1:tracking-wide
				prose-h2:my-4 prose-h2:text-5xl prose-h2:font-medium prose-h2:tracking-wide prose-h2:font-teko
				prose-h3:my-4 prose-h3:text-3xl prose-h3:font-medium prose-h3:tracking-wide prose-h3:font-teko
				prose-h4:text-xl prose-h4:font-medium prose-h4:text-white
				prose-table:block prose-table:w-full prose-table:overflow-x-auto prose-th:text-left prose-td:align-top"
		>
			<ContentRenderer :value="data" />
		</article>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const contentPath = `/legal${route.path}`;

const fetchLegalPage = async () => {
	if (!import.meta.server) return null;

	return queryCollection('legal')
		.path(contentPath)
		.first();
};

const { data, error } = await useAsyncData(`legal-${contentPath}`, fetchLegalPage);

if (error.value || !data.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Page not found'
	})
}

usePageSeo({
	title: data.value?.title ?? 'Privacy Policy',
	description:
		data.value?.description ??
		'Privacy policy for davidecuni.typotek.space covering contact form data, analytics consent, and technical service providers.',
});
</script>
