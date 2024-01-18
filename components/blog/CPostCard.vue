<template>
	<div>
		<article class="custom_article_feedback">
			<SiteLink :to="path">
				<div class="flex flex-col">
					<div class="grid w-full min-h-[275px] p-4 lg:border-b lg:border-neutral-800">
						<h1 class="text-4xl font-teko">{{ title }}</h1>
						<p class="mt-4">{{ description }}</p>
						<div class="flex justify-between items-center w-full mt-4">
							<div>
								<div>{{ date }}</div>
								<div v-if="readTime != ''">{{ readTime }}</div>
							</div>
							<div>
								<div class="p-2 bg-amber-400 text-black">{{ topic }}</div>
							</div>
						</div>
					</div>
					<div class="w-full">
						<NuxtPicture
							class="h-[300px]"
							:src="image"
							sizes="300px"
							:img-attrs="{
								class:
									'object-cover h-[300px] w-full'
							}"
						/>
					</div>
				</div>
			</SiteLink>
		</article>
	</div>
</template>

<script setup lang="ts">
	import type { BlogPost } from "~/types/blog";

	withDefaults(defineProps<BlogPost>(), {
		path: "/",
		title: "no-title",
		date: "no-date",
		description: "no-desc",
		image: "/profilepic.jpg",
		ogImage: "/profilepic.jpg",
		alt: "no-alt",
		author: "Sara Cuni",
		topic: "",
		readTime: "",
	});
</script>
