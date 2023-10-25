<template>
	<div v-if="data != undefined">
		<article class="custom_article_feedback">
			<ULink v-if="typeof data._path == 'string'" :to="data._path">
				<div class="flex flex-col lg:flex-row">
					<div class="grid w-full p-4 lg:max-w-sm lg:border-r lg:border-neutral-800">
						<h1 class="text-4xl font-teko">{{ data.title }}</h1>
						<p class="mt-4">{{ data.description }}</p>
						<div class="flex justify-between items-center w-full mt-4">
							<div>
								<div class="flex flex-row items-center">
									<UIcon name="i-material-symbols-calendar-today"></UIcon>
									<div class="ml-1">{{ data.date }}</div>
								</div>
								<div class="flex flex-row items-center">
									<UIcon name="i-material-symbols-alarm-outline"></UIcon>
									<div class="ml-1">{{ data.readTime }}</div>
								</div>
							</div>
							<div>
								<div class="p-2 bg-amber-400 text-black">{{ data.topic }}</div>
							</div>
						</div>
					</div>
					<div class="w-full sm:hidden">
						<NuxtPicture
							:src="data.compactImage"
							:alt="data.alt"
							sizes="600px"
							loading="lazy"
							:img-attrs="{
								class:
									'object-cover object-top w-full'
							}"
						/>
					</div>
					<div class="w-full hidden sm:block">
						<NuxtPicture
							:src="data.image"
							:alt="data.alt"
							sizes="640px"
							loading="lazy"
							:img-attrs="{
								class:
									'object-cover object-top w-full'
							}"
						/>
					</div>
				</div>
			</ULink>
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
