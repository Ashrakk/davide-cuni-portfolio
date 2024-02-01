<template>
	<div>
		<div class="container max-w-screen-lg mx-auto mt-8 mb-24">
			<h1 class="heading_1 text-center">Projects</h1>
			<h2 class="heading_3 text-center lg:text-left mt-6 lg:hidden">
				Featured
			</h2>
			<div class="mt-4 lg:mt-12 p-2 lg:p-0">
				<CPostHero :post="heroPost"/>
			</div>
		
			<span ref="postsSection"></span>
			
			<h2 class="heading_3 text-center lg:text-left mt-12">
				Latest
			</h2>
			<div class="border border-neutral-800"></div>
			<div class="mt-4 lg:mt-12 p-2 lg:p-0">
				<CPagination :page="currentPage" :directory="directory" :posts-per-page="postsPerPage"/>
			</div>

			<div class="my-8">
				<div class="flex justify-center items-center space-x-6 mx-auto">
					<UButton
						:disabled="currentPage <= 1"
						@click="onPrevPage"
						size="xl"
						icon="i-material-symbols-arrow-back-ios-new-rounded"
						color="white"
						:class="[
							{
								'!bg-cyan-600 ring-0':
									currentPage <= totalPages && currentPage >= 2
							},
							'rounded-full bg-zinc-900 p-3 text-center'
						]"
					>
					</UButton>
					<p>{{ currentPage }} / {{ totalPages }}</p>
					<UButton
						:disabled="currentPage >= totalPages"
						@click="onNextPage"
						size="xl"
						color="white"
						icon="i-material-symbols-arrow-forward-ios-rounded"
						:class="[
							{ '!bg-cyan-600 ring-0': currentPage < totalPages },
							'rounded-full bg-zinc-900 p-3 text-center'
						]"
					>
					</UButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const totalPages = ref(1);
	const currentPage = ref(1);
	const postsPerPage = 6;
	const directory = "projects";
	const heroPost = "this-website";
	const postsSection = ref<HTMLElement | null>(null);

	useSeoMeta({
		title: "Projects",
		ogImage: "/images/ogScreenshots/Projects.jpg"
	})

	const { data } = await useAsyncData("total", () =>
		queryContent(`/${directory}`).count()
	);

	// Calculate number of totalPages
	if (typeof data.value === "number" && data.value > 1)
		totalPages.value = Math.ceil((data.value - 1) / postsPerPage);

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
