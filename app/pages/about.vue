<template>
	<div>
		<div class="container max-w-screen-xl mx-auto mt-8 mb-24">
			<h1 class="text-h1 text-center">About</h1>
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
			<h2 id="skills" class="text-h2 text-center mt-8 mb-4 md:mt-24 md:mb-12 scroll-mt-16">
				Tech Skills
			</h2>
			<div class="flex flex-col-reverse lg:flex-row p-4 lg:p-0">
				<div class="flex-1">
					<div class="flex flex-row justify-center my-0 md:my-4">
						<AboutCircleIcon
							custom-class="before:animate-[spin_3s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="C++"
						>
							<template #default>
								<SvgProgrammingCplus class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.4s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="CSharp"
						>
							<template #default>
								<SvgProgrammingCsharp class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.8s_linear_infinite]"
							icon-wrapper-class="p-1"
							label="SQL"
						>
							<template #default>
								<SvgProgrammingSqlLogo class="size-full" />
							</template>
						</AboutCircleIcon>
					</div>
					<div class="flex flex-row justify-center my-4 xl:pr-44">
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.2s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="TypeScript"
						>
							<template #default>
								<SvgProgrammingTsLogo128 class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.6s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="CSS"
						>
							<template #default>
								<SvgProgrammingCssLogo class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_4s_linear_infinite]"
							label="PHP"
						>
							<template #default>
								<SvgProgrammingPhpLogo class="size-full fill-white" />
							</template>
						</AboutCircleIcon>
					</div>
				</div>
				<div class="flex flex-1 max-w-3xl mx-auto">
					<div class="flex items-center my-4 mx-auto">
						<div class="text-xl">
							<h4 class="text-h4 text-center mb-6 md:mb-8">
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
						<AboutCircleIcon
							custom-class="before:animate-[spin_4s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Nuxt 3"
						>
							<template #default>
								<SvgFrameworksNuxt class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.6s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="ASP.NET Core"
						>
							<template #default>
								<SvgFrameworksDotnet class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.2s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Laravel"
						>
							<template #default>
								<SvgFrameworksLaravel class="size-full" />
							</template>
						</AboutCircleIcon>
					</div>
					<div class="flex flex-row justify-center my-4 xl:pl-44">
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.8s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="WordPress"
						>
							<template #default>
								<SvgFrameworksWpLogoWhite class="size-full fill-white" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3.4s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Photoshop"
						>
							<template #default>
								<SvgToolsPs class="size-full" />
							</template>
						</AboutCircleIcon>
						<AboutCircleIcon
							custom-class="before:animate-[spin_3s_linear_infinite]"
							icon-wrapper-class="p-2"
							label="Illustrator"
						>
							<template #default>
								<SvgToolsAi class="size-full" />
							</template>
						</AboutCircleIcon>
					</div>
				</div>
				<div class="flex-1 flex max-w-3xl mx-auto">
					<div class="flex items-center my-4 mx-auto">
						<div class="text-xl">
							<h4 class="text-h4 text-center mb-6 md:mb-8">
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
							<h4 class="text-h4 text-center mb-6 md:mb-8">
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
						<div class="dcp-bubble absolute
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem]
									before:animate-[spin_4s_linear_infinite]
									translate-x-14 translate-y-28
									z-10">
							<div class="h-24 w-24 pb-2 flex justify-center fill-white">
								<SvgMarketingKeyword class="size-full" />
							</div>
							<div class="w-32">Keyword Research</div>
						</div>
						<div class="dcp-bubble absolute
									h-52 w-52 before:h-[12.5rem] before:w-[12.5rem]
									before:animate-[spin_4s_linear_infinite]
									-translate-x-12 -translate-y-4">
							<div class="h-28 w-28 pb-2 flex justify-center fill-white">
								<SvgMarketingSeo class="size-full" />
							</div>
							<div class="w-32">SEO</div>
						</div>
						<div class="dcp-bubble absolute 
									h-44 w-44 before:h-[10.5rem] before:w-[10.5rem]
									before:animate-[spin_4s_linear_infinite]
									-translate-x-16 translate-y-60 
									z-20">
							<div class="h-24 w-24 pb-2 flex justify-center fill-white">
								<SvgMarketingUxui class="size-full" />
							</div>
							<div class="w-32">UX/UI</div>
						</div>
						<div class="dcp-bubble absolute
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem]
									before:animate-[spin_4s_linear_infinite]
									translate-x-16 translate-y-[340px]">
							<div class="h-24 w-24 flex justify-center fill-white">
								<SvgMarketingCommerceFix class="size-full" />
							</div>
							<div class="w-32">E-Commerce</div>	
						</div>
					</div>
					<!-- Desktop Only -->
					<div class="hidden md:flex flex-row justify-center my-4">
						<div
							class="dcp-bubble before:animate-[spin_4s_linear_infinite] 
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white">
									<SvgMarketingSeo class="size-full" />
								</div>
								<div>
									SEO
								</div>
							</div>
						</div>
						<div
							class="dcp-bubble before:animate-[spin_4s_linear_infinite]
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white">
									<SvgMarketingUxui class="size-full" />
								</div>
								<div>
									UX/UI
								</div>
							</div>
						</div>
					</div>
					<div class="hidden md:flex flex-row justify-center my-4 xl:pr-44">
						<div
							class="dcp-bubble before:animate-[spin_4s_linear_infinite]
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white">
									<SvgMarketingCommerceFix class="size-full" />
								</div>
								<div>
									E-Commerce
								</div>
							</div>
						</div>
						<div
							class="dcp-bubble before:animate-[spin_4s_linear_infinite]
									h-48 w-48 before:h-[11.5rem] before:w-[11.5rem] mx-2"
						>
							<div class="p-2 flex flex-col items-center">
								<div class="h-24 w-24 p-2 flex justify-center items-center fill-white enhance">
									<SvgMarketingKeyword class="size-full" />
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
			<h2 class="text-h2 mt-16 mb-4 md:mt-24 md:mb-12 text-center">
				Soft Skills
			</h2>
			<div class="flex justify-center flex-wrap gap-4 md:gap-16 mt-12 md:mt-4">
				<AboutSkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<SvgMarketingTeamwork class="size-full" />
						</div>
						<div>Team working</div>
					</template>
				</AboutSkillCard>
				<AboutSkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<SvgMarketingComm class="size-full" />
						</div>
						<div>Communication</div>
					</template>
				</AboutSkillCard>
				<AboutSkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<SvgMarketingProject class="size-full" />
						</div>
						<div>Project<br>Management</div>
					</template>
				</AboutSkillCard>
				<AboutSkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<SvgMarketingDecision class="size-full" />
						</div>
						<div>Decision<br>Making</div>
					</template>
				</AboutSkillCard>
				<AboutSkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<SvgMarketingProblem class="size-full" />
						</div>
						<div>Problem<br>Solving</div>
					</template>
				</AboutSkillCard>
				<AboutSkillCard>
					<template #content>
						<div class="h-32 w-32 p-2 flex justify-center items-center fill-white">
							<SvgMarketingAdapt class="size-full" />
						</div>
						<div>Adaptability</div>
					</template>
				</AboutSkillCard>
			</div>
			<div class="border border-neutral-800 hidden md:block md:mt-32"></div>
			<h3 class="text-h3 mt-24 text-center">
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
						<SvgContentArrow class="size-full" />
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

	import {
		SvgContentArrow,
		SvgFrameworksDotnet,
		SvgFrameworksLaravel,
		SvgFrameworksNuxt,
		SvgFrameworksWpLogoWhite,
		SvgMarketingAdapt,
		SvgMarketingComm,
		SvgMarketingCommerceFix,
		SvgMarketingDecision,
		SvgMarketingKeyword,
		SvgMarketingProblem,
		SvgMarketingProject,
		SvgMarketingSeo,
		SvgMarketingTeamwork,
		SvgMarketingUxui,
		SvgProgrammingCplus,
		SvgProgrammingCsharp,
		SvgProgrammingCssLogo,
		SvgProgrammingPhpLogo,
		SvgProgrammingSqlLogo,
		SvgProgrammingTsLogo128,
		SvgToolsAi,
		SvgToolsPs,
	} from '~/assets/icons/svg.components';

	usePageSeo({
		title: 'About',
		description:
			'Learn about a full-stack engineer with a design-minded approach to modern web projects and digital experiences.',
		image: '/images/profilepic.jpg',
	})

	defineOgImageScreenshot({
		width: 1200,
		height: 630,
		delay: 300,
		colorScheme: 'dark',
		alt: 'Screenshot of the about page for Davide Cuni portfolio'
	})
</script>
