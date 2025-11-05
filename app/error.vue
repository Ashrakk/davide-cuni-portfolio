<template>
	<div>
		<NuxtLayout>
			<div class="container mx-auto md:pt-8 pt-4 min-h-[50vh]">
				<div
					class="container flex flex-col place-content-center min-h-[400px] mx-auto"
				>
						<div
							class="text-center align-middle leading-[2] text-white md:text-4xl text-3xl"
						>
							Ooops.. it looks like something broke
						</div>
						<div
							class="text-center align-middle text-white text-2xl mt-6"
						>
							{{ error?.message }}
						</div>
					<UButton @click="handleError" size="xl" class="mx-auto my-7"
						>Return Home</UButton
					>
				</div>
			</div>
		</NuxtLayout>
	</div>
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
