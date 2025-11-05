<template>
	<div>
		<div class="particles_container">
			<div v-for="n in 40" class="particle_outer">
				<div class="particle_inner"></div>
			</div>
			<div class="container max-w-screen-xl mx-auto mt-8 min-h-screen">
				<div class="grid place-content-center h-[80vh] text-center relative overflow-hidden">
					<div class="radial_gradient 
								before:w-[200vw] before:h-full before:ml-[-50vw] 
								md:before:w-full md:before:-ml-0 z-0"></div>
					<h1 class="text-8xl font-teko z-10">
						Hello, I'm <span class="text-amber-500">Davide</span>
					</h1>
					<h2 class="text-7xl font-teko z-10">I'm a <span class="dcp-text-glow">Full Stack Engineer</span></h2>
					<h3 class="text-2xl font-teko z-10">
						// and this is my portfolio website
					</h3>
					<UButton to="/about" class="my-4 z-10 mx-4 md:mx-0">Discover more..</UButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	usePageSeo({
		title: 'Full Stack Engineer',
		description:
			"Selected web projects, case studies, technical writing, and full-stack development work.",
		image: '/images/profilepic.jpg',
	})

	defineOgImageScreenshot({
		width: 1200,
		height: 630,
		delay: 300,
		colorScheme: 'dark',
		alt: 'Screenshot of Davide Cuni portfolio homepage'
	})

</script>
