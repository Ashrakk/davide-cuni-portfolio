<template>
	<div class="min-h-screen flex flex-col bg-neutral-900">
		<LayoutNavbar/>
		<LazyLayoutFloatingCta
			:excluded-paths="['/contact']"
			hydrate-on-interaction
		/>
		<main class="flex-1">
			<slot />
		</main>
		<LayoutFooter/>
	</div>
</template>
