<template>
	<div>
		<div class="container max-w-screen-xl mx-auto mt-8 mb-24 select-none">
			<h1 class="text-9xl font-teko text-center custom_text_glow">About</h1>
			<div class="lg:grid lg:grid-cols-2 gap-8 md:mt-20 mt-4">
				<div class="flex flex-col">
					<NuxtPicture
						class="mx-auto md:p-0 p-2 justify-center"
						sizes="400px"
						src="/profilepic.jpg"
						:img-attrs="{ class: 'rounded-[30px]' }"
					></NuxtPicture>
				</div>
				<div class="md:p-0 p-2">
					<div class="text-2xl my-8">
						Hi! I’m <span class="text-amber-500">Davide</span>
						<span class="text-xl">
							a passionate programmer who sees programming as a
							<b><i>form of art</i></b
							>.</span
						>
					</div>
					<div class="text-xl md:my-4 my-8">
						Much like an artist wielding brushes to create masterpieces, I
						leverage my programming skills to solve intriguing problems. Beyond
						coding, I find joy in maintaining my fitness through hiking and
						cooking delicious dishes inspired by my Italian roots.
					</div>
					<div class="text-center my-8">
						<UButton class="mx-auto">Skip at my skills</UButton>
					</div>
				</div>
			</div>
			<h2
				class="md:mt-32 md:mb-20 mt-4 mb-4 font-teko text-8xl text-center custom_text_glow"
			>
				Skills
			</h2>
			<div class="flex flex-col-reverse lg:flex-row gap-8">
				<div class="flex-1 md:p-0 p-2">
					<h3 class="font-teko text-4xl text-center custom_text_glow">
						Programming Languages
					</h3>
					<div class="mt-4">
						<div class="flex flex-row justify-center my-4">
							<div
								class="custom_logo_box before:animate-[spin_3s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<Logo_C class="h-20 w-20 p-2"></Logo_C>
									<div class="font-teko text-2xl uppercase text-center">C</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_3.4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<Logo_CSharp class="h-20 w-20 p-2"></Logo_CSharp>
									<div class="font-teko text-2xl uppercase text-center">
										CSharp
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_3.8s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<Logo_SQL class="h-20 w-20 p-1"></Logo_SQL>
									<div class="font-teko text-2xl uppercase text-center">
										SQL
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-center my-4">
							<div
								class="custom_logo_box before:animate-[spin_3.2s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<Logo_TS class="h-20 w-20 p-2"></Logo_TS>
									<div class="font-teko text-2xl uppercase text-center">
										Typescript
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_3.6s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<Logo_CSS class="h-20 w-20 p-2"></Logo_CSS>
									<div class="font-teko text-2xl uppercase text-center">
										CSS
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<Logo_PHP class="h-20 w-20 fill-white"></Logo_PHP>
									<div class="font-teko text-2xl uppercase text-center">
										PHP
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-1 md:p-0 p-2">
					<div class="text-xl md:my-4 my-8">
						I embarked on my programming journey as a youngster, exploring a
						myriad of languages before immersing myself in web development over
						the past four years. My current objective is a perpetual quest for
						knowledge, delving into modern web development techniques to enhance
						the online experience for everyone.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Logo_CSharp from "~/assets/svg/programming/Logo_C_sharp.svg?component";
	import Logo_C from "~/assets/svg/programming/CLang.svg?component";
	import Logo_TS from "~/assets/svg/programming/ts-logo-128.svg?component";
	import Logo_PHP from "~/assets/svg/programming/php-logo.svg?component";
	import Logo_CSS from "~/assets/svg/programming/css_logo.svg?component";
	import Logo_SQL from "~/assets/svg/programming/sql_logo.svg?component";
</script>
