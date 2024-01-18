<template>
	<article
		class="w-full rounded-[30px] break-inside-avoid-column border-zinc-900 border-b shadow-md
		 shadow-zinc-950 my-8 lg:my-2 transition-all duration-300 hover:bg-zinc-700 hover:scale-95"
	>
		<SiteLink :to="path">
			<NuxtPicture
				class="rounded-t-[30px] object-cover h-[200px] w-full"
				:src="image"
				sizes="400px"
				:img-attrs="{ class: 'rounded-t-[30px] object-cover h-[200px] w-full' }"
			/>
			<div class="grid grid-cols-2 mt-4">
				<div
					class="bg-zinc-800 p-1 mx-4 rounded-bl-[30px] rounded-tr-[30px] text-center text-white"
				>
					{{ topic }}
				</div>

			</div>
			<h6 class="text-center font-narrow text-2xl py-3">
				{{ title }}
			</h6>
		</SiteLink>
	</article>
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
