<template>
	<NuxtLayout>
		<div class="container mx-auto md:pt-8 pt-4 min-h-[50vh]">
			<div
				class="container flex flex-col place-content-center min-h-[400px] mx-auto"
			>
				<template v-if="error?.statusCode === 404">
					<div
						class="font-narrow text-center align-middle leading-[2] text-white md:text-4xl text-4xl"
					>
						Ooops.. This leads no nowhere!
					</div>
					<div
						class="font-narrow text-center align-middle text-white md:text-6xl text-6xl mt-7"
					>
						404 - Not Found
					</div>
				</template>
				<template v-else>
					<div
						class="font-narrow text-center align-middle leading-[2] text-white md:text-4xl text-3xl"
					>
						Ooops.. it looks like something broke
					</div>
					<div
						class="font-narrow text-center align-middle text-white md:text-2xl text-2xl mt-6"
					>
						{{ error?.message }}
					</div>
				</template>

				<UButton @click="handleError" size="xl" class="mx-auto my-7"
					>Return Home</UButton
				>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
	const props = defineProps({
		error: Object
	});

	const handleError = () => {
		clearError({
			redirect: "/"
		});
	};
</script>
