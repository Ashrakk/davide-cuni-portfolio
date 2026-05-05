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
		title: 'Davide Cuni',
		documentTitle: 'Davide Cuni | Full-Stack Engineer Portfolio',
		description:
			'Full-stack engineer building modern websites and scalable web applications based in Italy.',
		image: '/images/profilepic.jpg',
	})

	defineOgImage('Portfolio', {
		title: 'Davide Cuni',
		description: 'Full-stack engineer building modern websites and scalable web applications based in Italy.',
		section: 'Portfolio',
		label: 'Full-Stack Engineer',
	})

</script>
