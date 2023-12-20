<template>
	<div>
		<div class="particles_container">
			<div v-for="n in 30" class="particle_outer">
				<div class="particle_inner"></div>
			</div>
			<div class="container max-w-screen-xl mx-auto mt-8 mb-24">
				<h1 class="grid place-content-center h-[80vh] select-none text-center">
					<div class="radial_gradient z-0"></div>
					<div class="text-8xl font-teko z-10">
						Hello, I'm <span class="text-amber-500">Davide</span>
					</div>
					<div class="text-7xl font-teko z-10">I'm a Programmer</div>
					<div class="text-2xl font-teko z-10">
						// and this is my portfolio website
					</div>
					<UButton class="my-4 z-10">Discover more..</UButton>
				</h1>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from "vue";
	import "~/assets/css/custom.scss";

	const n = ref(0);
</script>
