<template>
	<div>
		<CFloatingContact class="hidden md:block"></CFloatingContact>
		<div class="particles_container">
			<div v-for="n in 40" class="particle_outer">
				<div class="particle_inner"></div>
			</div>
			<div class="container max-w-screen-xl mx-auto mt-8 mb-24">
				<h1 class="grid place-content-center h-[80vh] text-center relative overflow-hidden">
					<div class="radial_gradient 
								before:w-[200vw] before:h-full before:ml-[-50vw] 
								md:before:w-full md:before:-ml-0 z-0"></div>
					<div class="text-8xl font-teko z-10">
						Hello, I'm <span class="text-amber-500">Davide</span>
					</div>
					<div class="text-7xl font-teko z-10">I'm an <span class="custom_text_glow">End-to-End Developer</span></div>
					<div class="text-2xl font-teko z-10">
						// and this is my portfolio website
					</div>
					<UButton to="/about" class="my-4 z-10 mx-2 md:mx-0">Discover more..</UButton>
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
