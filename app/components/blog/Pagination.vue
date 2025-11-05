<template>
	<div>
		<transition
			mode="out-in"
			enter-active-class="transition-all duration-300 ease-out"
			leave-active-class="transition-all duration-300 ease-in"
			:enter-from-class="enterFromClass"
			enter-to-class="translate-x-0"
			leave-from-class="translate-x-0"
			:leave-to-class="leaveToClass"
		>
			<div
				class="lg:grid lg:grid-cols-3 lg:gap-4"
				:key="page"
			>
				<template
					v-for="article in data"
					:key="`article-${props.page}-${article.path}`"
				>
					<BlogPostCard
						:path="article.path"
						:title="article.title!"
						:date="article.date"
						:published-at="article.publishedAt"
						:description="article.description"
						:image="article.image"
						:compact-image="article.compactImage"
						:og-image="article.ogImage"
						:image-align="article.imageAlign"
						:alt="article.alt"
						:author="article.author"
						:topic="article.topic"
						:read-time="article.readTime"
					/>
				</template>
			</div>
		</transition>
	</div>
</template>

<script setup lang="ts">
	import { type Pagination } from "#shared/types/pagination";

	const props = withDefaults(defineProps<Pagination>(), {
		page: 1,
		posts: () => [],
	});

	var lastPage = 1;
	const slideDirection = ref(true); // true = direction to right and vice versa
	const enterFromClass = computed(() => {
		return slideDirection.value
			? "translate-x-[-200vw]"
			: "translate-x-[200vw]";
	});
	const leaveToClass = computed(() => {
		return slideDirection.value
			? "translate-x-[200vw]"
			: "translate-x-[-200vw]";
	});

	const data = ref([...props.posts]);

	// Check if currentPage changes, swap the data with newData
	// Also check the direction of the page (next or prev) for the transition
	watchEffect(() => {
		if (lastPage <= props.page) slideDirection.value = true;
		else slideDirection.value = false;
		lastPage = props.page;

		data.value = [...props.posts];
	});
	
</script>
