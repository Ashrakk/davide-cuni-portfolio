<template>
	<div>
		<div class="container max-w-screen-lg mx-auto mt-8 mb-24">
			<h1 class="text-9xl font-teko text-center custom_text_glow">Projects</h1>
			<div class="mt-12 p-2 lg:p-0">
				<CPostHero :post="'joomla'"/>
			</div>
		
			<span ref="postsSection"></span>
			
			<h2 class="text-6xl font-teko text-center lg:text-left custom_text_glow mt-12">
				Latest Projects
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
							'rounded-full bg-zinc-900 p-1 text-center'
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
							'rounded-full bg-zinc-900 p-1 text-center'
						]"
					>
					</UButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const totalPages = ref(0);
	const currentPage = ref(1);
	const postsPerPage = 6;
	const directory = "projects";
	const postsSection = ref<HTMLElement | null>(null);

	const { data } = await useAsyncData("total", () =>
		queryContent(`/${directory}`).count()
	);

	// Calculate number of totalPages
	if (typeof data.value === "number" && data.value != 0)
		totalPages.value = Math.ceil(data.value / postsPerPage);

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

	useHead({
		title: "Projects"
	})

</script>
