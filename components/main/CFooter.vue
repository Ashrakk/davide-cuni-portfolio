<template>
	<footer class="backdrop-blur">
		<div class="mx-auto bg-neutral-900 border-t border-neutral-800">
			<div
				class="md:flex justify-center content-center md:gap-24 gap-0 py-8 md:py-12 px-2"
			>
				<div class="md:my-0 md:px-0 my-4 px-4 md:w-80 w-full">
					<NuxtPicture
						alt="Davide Cuni bio picture"
						class="mx-auto justify-center"
						sizes="300px"
						src="/images/profilepic.jpg"
						format="webp"
						:img-attrs="{
							class: 'rounded-full object-cover h-[300px] w-[300px] mx-auto'
						}"
					></NuxtPicture>
				</div>
				<div
					class="md:my-0 md:px-0 my-8 px-4 md:w-80 w-full md:text-left text-center"
				>
					<div class="md:text-3xl text-4xl font-teko font-medium my-2">
						Find me on Social Media
					</div>
					<div class="mb-4">
						It's just a place where i put all my stuff that doesn't fit in my
						hard drive, hope you find it interesting!
					</div>
					<div class="flex flex-row md:justify-normal justify-center gap-6">
						<UButton
							aria-label="Reach me via Linkedin"
							to="https://www.linkedin.com/in/davide-cuni"
							target="_blank"
							size="sm"
							color="white"
							class="text-center bg-neutral-900 hover:bg-neutral-600 transition duration-300 h-14 w-14"
							variant="outline"
							><UIcon aria-hidden="true" name="i-ri-linkedin-fill" class="h-8 w-8"/>
						</UButton>
						<UButton
							aria-label="Reach me via Telegram"
							to="https://t.me/Ashra_k"
							target="_blank"
							size="sm"
							color="white"
							class="text-center bg-neutral-900 hover:bg-neutral-600 transition duration-300 h-14 w-14"
							variant="outline"
							><UIcon aria-hidden="true" name="i-mdi-telegram" class="h-8 w-8"/>
						</UButton>
					</div>
				</div>
				<div
					class="md:my-0 md:px-0 my-8 px-4 md:w-80 w-full md:text-left text-center"
				>
					<div class="md:text-3xl text-4xl font-teko font-medium my-2">
						Connect with me
					</div>
					<div class="mb-4">
						If you want to reach out to me for anything, a project or even just
						some questions, fill out the contact form and i'll reach you there!
					</div>
					<UButton to="/contact" block icon="i-mdi-email-edit-outline">
						Write me an email
					</UButton>
				</div>
			</div>
		</div>
		<div
			class="mx-auto bg-neutral-900 border-t border-neutral-800 text-center py-4 md:px-0 px-12"
		>
			<div>© 2023 Davide Cuni - <NuxtLink to="https://github.com/Ashrakk/davide-cuni-portfolio">Open Source on Github</NuxtLink></div>
		</div>
	</footer>
</template>
