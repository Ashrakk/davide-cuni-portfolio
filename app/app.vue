<template>
	<UApp>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<SiteConsentBanner />
	</UApp>
</template>

<script setup lang="ts">
import "~/assets/css/custom.scss";
import SiteConsentBanner from '~~/modules/site-consent/runtime/components/SiteConsentBanner.vue'

useHead({
	titleTemplate: '%s %separator %siteName',
	htmlAttrs: {
		lang: 'en'
	}
})

</script>

<style>
	.page-enter-active,
	.page-leave-active {
		transition: all 0.3s ease-in-out;
	}
	.page-enter-from,
	.page-leave-to {
		opacity: 0;
		filter: blur(1rem);
	}
</style>
