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
		</div>
		<div class="bg-[#202020]">
			<div class="flex flex-col-reverse lg:flex-row gap-8 container max-w-screen-xl mx-auto select-none">
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
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_C></Logo_C>
									</div>
									<div class="font-teko text-2xl uppercase text-center">C++</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_3.4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_CSharp></Logo_CSharp>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										CSharp
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_3.8s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-1 flex justify-center">
										<Logo_SQL></Logo_SQL>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										SQL
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-center my-4 pl-40">
							<div
								class="custom_logo_box before:animate-[spin_3.2s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_TS></Logo_TS>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Typescript
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_3.6s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_CSS></Logo_CSS>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										CSS
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 flex justify-center">
										<Logo_PHP class="fill-white"></Logo_PHP>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										PHP
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-1 md:p-0 p-2">
					<div class="flex text-xl md:my-4 my-8 items-center">
						I embarked on my programming journey as a youngster, exploring a
						myriad of languages before immersing myself in web development over
						the past four years. My current objective is a perpetual quest for
						knowledge, delving into modern web development techniques to enhance
						the online experience for everyone.
					</div>
				</div>
			</div>
		</div>
		<div class="bg-[#333]">
			<div class="flex flex-col-reverse lg:flex-row gap-8 container max-w-screen-xl mx-auto select-none">
				<div class="flex-1 md:p-0 p-2">
					<h3 class="font-teko text-4xl text-center custom_text_glow">
						Frameworks and Tools
					</h3>
					<div class="mt-4">
						<div class="flex flex-row justify-center my-4">
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_Nuxt></Logo_Nuxt>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Nuxt 3
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_WP></Logo_WP>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Wordpress
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_JM></Logo_JM>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Joomla
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-row justify-center my-4 pr-40">
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_Godot></Logo_Godot>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Godot
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_PS></Logo_PS>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Photoshop
									</div>
								</div>
							</div>
							<div
								class="custom_logo_box before:animate-[spin_4s_linear_infinite] h-36 w-36 mx-2"
							>
								<div class="p-2 z-10">
									<div class="h-20 w-20 p-2 flex justify-center">
										<Logo_AI></Logo_AI>
									</div>
									<div class="font-teko text-2xl uppercase text-center">
										Illustrator
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex-1 md:p-0 p-2 flex">
					<div class="text-xl md:my-4 my-8 flex items-center">
						Post high school, my curiosity led me to delve into Digital Marketing Management at JobsAcademy. 
						This post-diploma school equipped me with practical techniques and insights derived from real-world projects, 
						enhancing my ability to design captivating websites and boosting productivity in collaborative settings.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import Logo_CSharp from "~/assets/svg/programming/Logo_C_sharp.svg?component";
	import Logo_C from "~/assets/svg/programming/cplus.svg?component";
	import Logo_TS from "~/assets/svg/programming/ts-logo-128.svg?component";
	import Logo_PHP from "~/assets/svg/programming/php-logo.svg?component";
	import Logo_CSS from "~/assets/svg/programming/css_logo.svg?component";
	import Logo_SQL from "~/assets/svg/programming/sql_logo.svg?component";
	
	import Logo_Nuxt from "~/assets/svg/frameworks/icon-green.svg?component";
	import Logo_PS from "~/assets/svg/frameworks/ps.svg?component";
	import Logo_AI from "~/assets/svg/frameworks/ai.svg?component";
	import Logo_WP from "~/assets/svg/frameworks/wp-logo-white.svg?component";
	import Logo_JM from "~/assets/svg/frameworks/joomla.svg?component";
	import Logo_Godot from "~/assets/svg/frameworks/godot.svg?component";
</script>
