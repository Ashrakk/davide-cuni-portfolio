<template>
	<div>
		<div class="container max-w-screen-lg mx-auto mt-8 mb-24">
			<h1 class="text-h1 text-center">Projects</h1>
			<div class="mt-4 lg:mt-12 p-2 lg:p-0">
				<BlogPostHero :post="heroArticle" />
			</div>
		
			<span ref="postsSection"></span>
			
			<h2 class="hidden lg:block text-h3 text-left mt-12">
				Latest
			</h2>
			<div class="hidden lg:block border border-neutral-800"></div>
			<div class="mt-4 lg:mt-12 p-2 lg:p-0">
				<BlogPagination :page="currentPage" :posts="paginatedPosts" />
			</div>

			<div class="my-16">
				<div class="flex justify-center items-center space-x-6 mx-auto">
					<UButton
						:disabled="currentPage <= 1"
						@click="onPrevPage"
						size="xl"
						icon="i-material-symbols-arrow-back-ios-new-rounded"
						color="neutral"
						:class="[
							{
								'!bg-cyan-600 ring-0':
									currentPage <= totalPages && currentPage >= 2
							},
							'rounded-full bg-zinc-900 p-2 text-center'
						]"
					>
					</UButton>
					<p>{{ currentPage }} / {{ totalPages }}</p>
					<UButton
						:disabled="currentPage >= totalPages"
						@click="onNextPage"
						size="xl"
						color="neutral"
						icon="i-material-symbols-arrow-forward-ios-rounded"
						:class="[
							{ '!bg-cyan-600 ring-0': currentPage < totalPages },
							'rounded-full bg-zinc-900 p-2 text-center'
						]"
					>
					</UButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { BlogPost } from "#shared/types/blog";

	const totalPages = ref(1);
	const currentPage = ref(1);
	const postsPerPage = 6;
	const heroPost = "this-website";
	const postsSection = ref<HTMLElement | null>(null);

	usePageSeo({
		title: 'Projects',
		description:
			'Selected web development and software projects, case studies and full-stack prototypes.',
		image: '/images/this_home.png',
	})

	defineOgImageScreenshot({
		width: 1200,
		height: 630,
		delay: 300,
		colorScheme: 'dark',
		alt: 'Screenshot of the Davide Cuni projects index'
	})

	const fetchProjectPosts = async () => {
		if (!import.meta.server) return [] as BlogPost[];

		return queryCollection("projects")
			.select(
				"path",
				"title",
				"date",
				"publishedAt",
				"description",
				"author",
				"image",
				"compactImage",
				"ogImage",
				"imageAlign",
				"alt",
				"topic",
				"readTime"
			)
			.order("publishedAt", "DESC")
			.all();
	};

	const { data: projectPosts } = await useAsyncData("project-posts", fetchProjectPosts);

	const allPosts = computed(() => (projectPosts.value ?? []) as BlogPost[]);
	const heroArticle = computed(() =>
		allPosts.value.find((post) => post.path === `/projects/${heroPost}`) ?? allPosts.value[0]
	);
	const paginatedPosts = computed(() => {
		const featuredPath = heroArticle.value?.path;
		const remainingPosts = allPosts.value.filter((post) => post.path !== featuredPath);
		const start = (currentPage.value - 1) * postsPerPage;

		return remainingPosts.slice(start, start + postsPerPage);
	});

	// Calculate number of totalPages
	watchEffect(() => {
		const featuredPath = heroArticle.value?.path;
		const remainingPostCount = allPosts.value.filter((post) => post.path !== featuredPath).length;
		totalPages.value = Math.max(1, Math.ceil(remainingPostCount / postsPerPage));

		if (currentPage.value > totalPages.value) {
			currentPage.value = totalPages.value;
		}
	});

	function onNextPage() {
		if (currentPage.value < totalPages.value) {
			postsSection.value?.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
			currentPage.value++;
		}
	}

	function onPrevPage() {
		if (currentPage.value > 1) {
			postsSection.value?.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
			currentPage.value--;
		}
	}
</script>
