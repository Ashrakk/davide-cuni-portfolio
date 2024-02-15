<template>
	<div class="lg:flex flex-row gap-4 justify-items-center justify-center">
		<template v-for="article in data" :key="`article-${article._path}`">
			<CPostCardMini
				:path="article._path"
				:title="article.title"
				:date="article.date"
				:description="article.description"
				:image="article.image"
				:og-image="article.ogImage"
				:image-align="article.imageAlign"
				:alt="article.alt"
				:author="article.author"
				:topic="article.topic"
				:read-time="article.readTime"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
	const { data } = await useAsyncData("recent", () =>
		queryContent("/projects").limit(3).find()
	);
</script>
