<template>
	<header
		class="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900/75 backdrop-blur "
	>
		<!-- Desktop Menu -->
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-1.5 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<SiteLink to="/" class="w-auto">
					<span class="sr-only">Davide Cuni Logo</span>
					<Logo_Firm class="h-12 w-12" />
				</SiteLink>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2"
					@click="mobileMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<UIcon
						class="h-8 w-8"
						aria-hidden="true"
						name="i-heroicons-bars-3-bottom-right-20-solid"
						color="white"
					/>
				</button>
			</div>
			<div
				class="text-white tracking-wider text-2xl font-semibold font-teko leading-6 hidden lg:flex lg:gap-x-12"
			>
				<SiteLink to="/" class="group transition duration-200">
					Home
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-amber-500"
					></span>
				</SiteLink>
				<SiteLink to="/projects" class="group transition duration-200">
					Projects
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-amber-500"
					></span>
				</SiteLink>
				<SiteLink to="/blog" class="group transition duration-200">
					Blog
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-amber-500"
					></span>
				</SiteLink>
				<SiteLink to="/about" class="group transition duration-200">
					About
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-amber-500"
					></span>
				</SiteLink>
				<SiteLink to="/contact" class="group transition duration-200">
					Contact
					<span
						class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-amber-500"
					></span>
				</SiteLink>
			</div>
		</nav>
		<!-- Mobile Menu -->
		<USlideover class="lg:hidden" v-model="mobileMenuOpen">
			<UCard class="flex flex-col flex-1">
				<template #header>
					<div class="flex items-center justify-between">
						<SiteLink to="/" class="w-auto">
							<span class="sr-only">Davide Cuni Logo</span>
							<Logo_Firm class="w-12 h-12" />
						</SiteLink>
						<button
							type="button"
							class="rounded-md p-2 text-gray-600 inline-flex items-center justify-center bg-white"
							@click="mobileMenuOpen = false"
						>
							<span class="sr-only">Close menu</span>
							<UIcon name="i-ph-x-bold" class="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</template>
				<div class="mt-6 flow-root">
					<div
						class="py-6 text-4xl font-semibold font-teko text-white text-center"
					>
						<SiteLink
							to="/"
							class="mobile_navbar_button"
							@click="mobileMenuOpen = false"
							>Home</SiteLink
						>
						<SiteLink
							to="/projects"
							class="mobile_navbar_button"
							@click="mobileMenuOpen = false"
							>Projects</SiteLink
						>
						<SiteLink
							to="/blog"
							class="mobile_navbar_button"
							@click="mobileMenuOpen = false"
							>Blog</SiteLink
						>
						<SiteLink
							to="/about"
							class="mobile_navbar_button"
							@click="mobileMenuOpen = false"
							>About</SiteLink
						>
						<SiteLink
							to="/contact"
							class="mobile_navbar_button"
							@click="mobileMenuOpen = false"
							>Contact</SiteLink
						>
					</div>
				</div>
			</UCard>
		</USlideover>
	</header>
</template>

<script setup lang="ts">
	import Logo_Firm from "~/assets/svg/logo_web_white.svg?component";
	import { ref } from "vue";
	const mobileMenuOpen = ref(false);
</script>
