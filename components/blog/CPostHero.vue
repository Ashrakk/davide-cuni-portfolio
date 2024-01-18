<template>
	<div v-if="data != undefined">
		<article class="custom_article_feedback">
			<SiteLink v-if="typeof data._path == 'string'" :to="data._path">
				<div class="flex flex-col lg:flex-row">
					<div class="grid w-full p-4 lg:max-w-sm lg:border-r lg:border-neutral-800">
						<h1 class="text-4xl font-teko">{{ data.title }}</h1>
						<p class="mt-4">{{ data.description }}</p>
						<div class="flex justify-between items-center w-full mt-4">
							<div>
								<div>{{ data.date }}</div>
								<div v-if="data.readTime != ''">{{ data.readTime }}</div>
							</div>
							<div>
								<div class="p-2 bg-amber-400 text-black">{{ data.topic }}</div>
							</div>
						</div>
					</div>
					<div class="lg:max-w-[640px] w-full">
						<NuxtPicture
							class="h-[300px] lg:max-h-[270px]"
							:src="data.image"
							sizes="640px"
							:img-attrs="{
								class:
									'object-cover h-[300px] lg:max-h-[270px] w-full'
							}"
						/>
					</div>
				</div>
			</SiteLink>
		</article>
	</div>
</template>

<script setup lang="ts">

	const props = withDefaults(defineProps<{
		post: string
		}>(), {
		post: ""
	});

	const { data } = await useAsyncData(props.post, () =>
		queryContent("")
			.where({ _id: { $regex: props.post } })
			.findOne()
	);
</script>
