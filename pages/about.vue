<template>
	<div>
		<CFloatingContact></CFloatingContact>
		<div class="container max-w-screen-xl mx-auto mt-8 mb-24">
			<h1 class="heading_1 text-center">About</h1>
			<div class="flex flex-col mt-4 p-4
						md:flex-row md:mt-20 md:p-0">
				<div class="flex flex-col flex-1">
					<NuxtPicture
						class="mx-auto justify-center"
						width="400"
						alt="Davide Cuni bio picture"
						sizes="400px" 
						src="/images/profilepic.jpg" 
						:img-attrs="{ class: 'rounded-[30px] md:max-w-[400px]' }"
					></NuxtPicture>
				</div>
				<div class="flex-1 mt-8 md:mt-0">
					<div class="text-2xl my-4">
						Hello! I’m <span class="text-amber-500">Davide Cuni</span>
						<span class="text-xl">
							a passionate full-stack engineer, with experience managing the complete lifecycle of software projects, from design to implementation.							
						</span>
					</div>
					<div class="text-xl my-4">
						I view programming and designing as a <b><i>form of art</i></b>
					</div>
					<div class="text-xl my-4">
						<p>
						Much like an artist wielding brushes to create masterpieces, 
						I leverage my digital skills to solve intriguing problems. Beyond coding, 
						I find joy in maintaining my fitness through hiking and cooking delicious dishes inspired by my Italian roots.
						</p>
					</div>
					<div class="text-center my-12 md:my-8">
						<UButton to="#skills" class="mx-auto">Skip at my skills</UButton>
					</div>
				</div>
			</div>
			<div class="border border-neutral-800 hidden md:block md:mt-32"></div>
			<h2 id="skills" class="heading_2 text-center mt-8 mb-4 md:mt-24 md:mb-12 scroll-mt-16">
				Tech Skills
			</h2>
			<div class="flex flex-col-reverse lg:flex-row p-4 lg:p-0">
				<div class="flex-1">
					<div class="flex flex-row justify-center my-0 md:my-4">
						<CircleIcon
							custom-class="before:animate-[spin_3s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="C++"
						>
							<template #default>
								<Logo_C></Logo_C>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3.4s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="CSharp"
						>
							<template #default>
								<Logo_CSharp></Logo_CSharp>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3.8s_linear_infinite]"
							icon-wrapper-class="p-1"
							label="SQL"
						>
							<template #default>
								<Logo_SQL></Logo_SQL>
							</template>
						</CircleIcon>
					</div>
					<div class="flex flex-row justify-center my-4 xl:pr-44">
						<CircleIcon
							custom-class="before:animate-[spin_3.2s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Typescript"
						>
							<template #default>
								<Logo_TS></Logo_TS>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3.6s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="CSS"
						>
							<template #default>
								<Logo_CSS></Logo_CSS>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_4s_linear_infinite]"
							label="PHP"
						>
							<template #default>
								<Logo_PHP class="fill-white"></Logo_PHP>
							</template>
						</CircleIcon>
					</div>
				</div>
				<div class="flex flex-1 max-w-3xl mx-auto">
					<div class="flex items-center my-4 mx-auto">
						<div class="text-xl">
							<h4 class="heading_4 text-center mb-6 md:mb-8">
								Programming Languages
							</h4>
							<p>
							I embarked on my programming journey as a youngster, exploring a myriad of languages before 
							immersing myself in web development over the <b>past seven years</b>.
							</p>
							<p class="my-4">
							<b class="text-amber-500">My current objective is</b> a perpetual 
							quest for knowledge, delving into modern web development techniques 
							<b class="text-amber-500">to enhance the online experience for everyone.</b>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col-reverse lg:flex-row-reverse p-4 lg:p-0 my-0 md:my-8">
				<div class="flex-1">
					<div class="flex flex-row justify-center my-0 md:my-4">
						<CircleIcon
							custom-class="before:animate-[spin_4s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Nuxt 3"
						>
							<template #default>
								<Logo_Nuxt></Logo_Nuxt>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3.6s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="ASP.NET Core"
						>
							<template #default>
								<Logo_DotNet></Logo_DotNet>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3.2s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Laravel"
						>
							<template #default>
								<Logo_Laravel></Logo_Laravel>
							</template>
						</CircleIcon>
					</div>
					<div class="flex flex-row justify-center my-4 xl:pl-44">
						<CircleIcon
							custom-class="before:animate-[spin_3.8s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Wordpress"
						>
							<template #default>
								<Logo_WP></Logo_WP>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3.4s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Photoshop"
						>
							<template #default>
								<Logo_PS></Logo_PS>
							</template>
						</CircleIcon>
						<CircleIcon
							custom-class="before:animate-[spin_3s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Illustrator"
						>
							<template #default>
								<Logo_AI></Logo_AI>
							</template>
						</CircleIcon>
					</div>
				</div>
				<div class="flex-1 flex max-w-3xl mx-auto">
					<div class="flex items-center my-4 mx-auto">
						<div class="text-xl">
							<h4 class="heading_4 text-center mb-6 md:mb-8">
								Frameworks and Tools
							</h4>
							<p><b>I have broad experience with various tools and frameworks</b>, as each project I 
							embarked on had its own challenges.</p>
							<p class="my-4">
							Each endeavor presented unique hurdles that propelled 
							me to diversify my expertise across various tools and frameworks. This diverse range of experiences 
							led me to immerse myself in very different contexts, allowing me to practice my technical skills from 
							<b class="text-amber-500">design</b> to <b class="text-amber-500">development</b>, 
							<b class="text-amber-500">testing</b>, and <b class="text-amber-500">release.</b></p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row-reverse p-4 lg:p-0 my-0 md:my-8">
				<div class="flex-1 flex max-w-3xl mx-auto">
					<div class="flex items-center my-4 mx-auto">
						<div class="text-xl">
							<h4 class="heading_4 text-center mb-6 md:mb-8">
								Digital Marketing
							</h4>
							<p>Throughout my projects, integrating coding expertise with digital marketing skills has been 
							a pivotal objective for me, especially while designing.</p>
							<p class="my-4">This motivated my persuit of studying 
							Digital Marketing Management at <b class="text-amber-500">JobsAcademy ITS</b>, 
							where I gained practical techniques from experts in the field. This experience enhanced my ability 
							to design captivating websites and boosted my productivity in collaborative settings.</p>
						</div>
					</div>
				</div>
				<div class="flex-1 min-h-[550px] md:min-h-0 mt-4 md:mt-0">
					<!-- Mobile Only -->
					<div class="md:hidden flex flex-col items-center mx-auto min-h-[550px]">
						<div class="custom_bubble absolute
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem]
									before:animate-[spin_4s_linear_infinite]
									translate-x-14 translate-y-28
									z-10">
							<div class="h-24 w-24 pb-2 flex justify-center fill-white">
								<Icon_Keyword></Icon_Keyword>
							</div>
							<div class="w-32">Keyword Research</div>
						</div>
						<div class="custom_bubble absolute
									h-52 w-52 before:h-[12.5rem] before:w-[12.5rem]
									before:animate-[spin_4s_linear_infinite]
									-translate-x-12 -translate-y-4">
							<div class="h-28 w-28 pb-2 flex justify-center fill-white">
								<Icon_SEO></Icon_SEO>
							</div>
							<div class="w-32">SEO</div>
						</div>
						<div class="custom_bubble absolute 
									h-44 w-44 before:h-[10.5rem] before:w-[10.5rem]
									before:animate-[spin_4s_linear_infinite]
									-translate-x-16 translate-y-60 
									z-20">
							<div class="h-24 w-24 pb-2 flex justify-center fill-white">
								<Icon_UX></Icon_UX>
							</div>
							<div class="w-32">UX/UI</div>
						</div>
						<div class="custom_bubble absolute
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem]
									before:animate-[spin_4s_linear_infinite]
									translate-x-16 translate-y-[340px]">
							<div class="h-24 w-24 flex justify-center fill-white">
								<Icon_ECommerce></Icon_ECommerce>
							</div>
							<div class="w-32">E-Commerce</div>	
						</div>
					</div>
					<!-- Desktop Only -->
					<div class="hidden md:flex flex-row justify-center my-4">
						<div
							class="custom_bubble before:animate-[spin_4s_linear_infinite] 
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white">
									<Icon_SEO></Icon_SEO>
								</div>
								<div>
									SEO
								</div>
							</div>
						</div>
						<div
							class="custom_bubble before:animate-[spin_4s_linear_infinite]
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white">
									<Icon_UX></Icon_UX>
								</div>
								<div>
									UX/UI
								</div>
							</div>
						</div>
					</div>
					<div class="hidden md:flex flex-row justify-center my-4 xl:pr-44">
						<div
							class="custom_bubble before:animate-[spin_4s_linear_infinite]
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white">
									<Icon_ECommerce></Icon_ECommerce>
								</div>
								<div>
									E-Commerce
								</div>
							</div>
						</div>
						<div
							class="custom_bubble before:animate-[spin_4s_linear_infinite]
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white enhance">
									<Icon_Keyword></Icon_Keyword>
								</div>
								<div class="w-32">
									Keyword Research
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="border border-neutral-800 mt-12 md:mt-32"></div>
			<h2 class="heading_2 mt-16 mb-4 md:mt-24 md:mb-12 text-center">
				Soft Skills
			</h2>
			<div class="flex justify-center flex-wrap gap-4 md:gap-16 mt-12 md:mt-4">
				<SkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<Icon_Team></Icon_Team>
						</div>
						<div>Team working</div>
					</template>
				</SkillCard>
				<SkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<Icon_Comm></Icon_Comm>
						</div>
						<div>Communication</div>
					</template>
				</SkillCard>
				<SkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<Icon_Project></Icon_Project>
						</div>
						<div>Project<br>Management</div>
					</template>
				</SkillCard>
				<SkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<Icon_Decision></Icon_Decision>
						</div>
						<div>Decision<br>Making</div>
					</template>
				</SkillCard>
				<SkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<Icon_Problem></Icon_Problem>
						</div>
						<div>Problem<br>Solving</div>
					</template>
				</SkillCard>
				<SkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<Icon_Adapt></Icon_Adapt>
						</div>
						<div>Adaptability</div>
					</template>
				</SkillCard>
			</div>
			<div class="border border-neutral-800 hidden md:block md:mt-32"></div>
			<h3 class="heading_3 mt-24 text-center">
				Shaping Digital Experiences with Passion
			</h3>
			<div class="flex flex-col items-center p-4 md:p-0 my-4">
				<div class="text-xl my-4 max-w-xl mx-auto">
					<b class="text-amber-500">if you're looking for a dedicated and skilled individual</b> 
					driven by passion to contribute to your projects, 
					<b class="text-amber-500">or just want to have a conversation</b>, I welcome the opportunity to discuss how we can collaborate :)
				</div>
				<div class="text-center my-8">
					<div class="h-24 w-24 fill-white rotate-45 mx-auto mb-8">
						<CoolArrow></CoolArrow>
					</div>
					<UButton to="/contact" block icon="i-mdi-email-edit-outline">
						Contact me now
					</UButton>
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
	import Logo_Laravel from "~/assets/svg/frameworks/laravel.svg?component";
	import Logo_DotNet from "~/assets/svg/frameworks/dotNETcore.svg?component";

	import Icon_SEO from "~/assets/svg/marketing/seo.svg?component";
	import Icon_ECommerce from "~/assets/svg/marketing/commerceFix.svg?component";
	import Icon_Keyword from "~/assets/svg/marketing/keyword.svg?component";
	import Icon_UX from "~/assets/svg/marketing/uxui.svg?component";

	import Icon_Team from "~/assets/svg/marketing/teamwork.svg?component";
	import Icon_Comm from "~/assets/svg/marketing/comm.svg?component";
	import Icon_Project from "~/assets/svg/marketing/project.svg?component";
	import Icon_Decision from "~/assets/svg/marketing/decision.svg?component";
	import Icon_Problem from "~/assets/svg/marketing/problem.svg?component";
	import Icon_Adapt from "~/assets/svg/marketing/adapt.svg?component";

	import CoolArrow from "~/assets/svg/arrow.svg?component";
	
	import CircleIcon from "~/components/about/circle-icon.vue";
	import SkillCard from "~/components/about/skill-card.vue";

	useSeoMeta({
		title: "About",
		ogImage: "/images/ogScreenshots/About.jpg"
	})
</script>
