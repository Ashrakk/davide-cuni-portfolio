<template>
	<header
		class="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900/75 backdrop-blur"
	>
		<!-- Desktop Menu -->
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-1.5 px-4"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<ULink to="/" class="w-auto">
					<span class="sr-only">Davide Cuni Logo</span>
					<SvgLogoWhite class="h-12 w-12" aria-hidden="true" />
				</ULink>
			</div>
			<div class="flex lg:hidden">
				<UButton
					size="xl"
					icon="lucide:text-align-end"
					@click="mobileMenuOpen = true"
					variant="ghost"
					color="neutral"
				>
					<span class="sr-only">Open main menu</span>
				</UButton>
			</div>
			<div
				class="text-white tracking-wider text-2xl font-medium font-teko leading-6 hidden lg:flex lg:gap-x-12"
			>
				<ULink to="/" class="group transition duration-200">
					Home
					<span
						class="dcp-menu-underline"
					></span>
				</ULink>
				<ULink to="/projects" class="group transition duration-200">
					Projects
					<span
						class="dcp-menu-underline"
					></span>
				</ULink>
				<ULink to="/blog" class="group transition duration-200">
					Blog
					<span
						class="dcp-menu-underline"
					></span>
				</ULink>
				<ULink to="/about" class="group transition duration-200">
					About
					<span
						class="dcp-menu-underline"
					></span>
				</ULink>
				<ULink to="/contact" class="group transition duration-200">
					Contact
					<span
						class="dcp-menu-underline"
					></span>
				</ULink>
			</div>
		</nav>
		<!-- Mobile Menu -->
		<USlideover class="lg:hidden" v-model:open="mobileMenuOpen">
			<template #title>Mobile Menu</template>
			<template #description>Choose a page to navigate to</template>
			<template #content>
				<div class="flex flex-col flex-1 p-4">
					<div class="flex items-center justify-between">
						<ULink to="/" class="w-auto">
							<span class="sr-only">Davide Cuni Portfolio Homepage</span>
							<SvgLogoWhite class="w-12 h-12" aria-hidden="true" />
						</ULink>
						<UButton
							variant="ghost"
							color="neutral"
							@click="mobileMenuOpen = false"
						>
							<span class="sr-only">Close menu</span>
							<UIcon name="i-ph-x-bold" class="h-6 w-6" aria-hidden="true" />
						</UButton>
					</div>
					<div class="mt-6 flow-root">
						<div class="py-6 text-4xl font-medium font-teko text-white text-center">
							<ULink
								to="/"
								class="dcp-menu-mobile"
								@click="mobileMenuOpen = false"
								>Home</ULink
							>
							<ULink
								to="/projects"
								class="dcp-menu-mobile"
								@click="mobileMenuOpen = false"
								>Projects</ULink
							>
							<ULink
								to="/blog"
								class="dcp-menu-mobile"
								@click="mobileMenuOpen = false"
								>Blog</ULink
							>
							<ULink
								to="/about"
								class="dcp-menu-mobile"
								@click="mobileMenuOpen = false"
								>About</ULink
							>
							<ULink
								to="/contact"
								class="dcp-menu-mobile"
								@click="mobileMenuOpen = false"
								>Contact</ULink
							>
						</div>
					</div>
				</div>
			</template>
		</USlideover>
	</header>
</template>

<script setup lang="ts">
	import { ref } from "vue";

	import { SvgLogoWhite } from "~/assets/icons/svg.components";

	const mobileMenuOpen = ref(false);
</script>
