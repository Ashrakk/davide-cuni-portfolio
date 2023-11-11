<template>
	<footer>
		<div class="mx-auto bg-neutral-900 border-t border-neutral-800">
			<div
				class="md:flex justify-center content-center md:gap-24 gap-0 py-7 px-2"
			>
				<div class="md:my-0 md:px-0 my-4 px-4 md:w-80 w-full">
					<NuxtPicture
						class="mx-auto justify-center"
						sizes="300px 300px"
						src="/profilepic.jpg"
						:img-attrs="{
							class: 'rounded-full object-cover h-[300px] w-[300px] mx-auto'
						}"
					></NuxtPicture>
				</div>
				<div
					class="md:my-0 md:px-0 my-4 px-4 md:w-80 w-full md:text-left text-center"
				>
					<h6 class="md:text-3xl text-4xl font-comfort font-bold my-2">
						Find me on Social Media
					</h6>
					<div class="mb-4">
						It's just a place where i put all my stuff that doesn't fit in my
						hard drive, hope you find it interesting!
					</div>
					<div class="flex flex-row md:justify-normal justify-center gap-6">
						<UButton
							aria-hidden="true"
							to="https://vimeo.com/user26047791"
							target="_blank"
							size="sm"
							color="white"
							class="text-center bg-neutral-900 hover:bg-neutral-600 transition duration-300 h-14 w-14"
							variant="outline"
							><UIcon name="i-ri-vimeo-fill" class="h-10 w-10"
						/></UButton>
						<UButton
							aria-hidden="true"
							to="https://www.linkedin.com/in/cunisaraanimation"
							target="_blank"
							size="sm"
							color="white"
							class="text-center bg-neutral-900 hover:bg-neutral-600 transition duration-300 h-14 w-14"
							variant="outline"
							><UIcon name="i-ri-linkedin-fill" class="h-10 w-10"
						/></UButton>
						<UButton
							aria-hidden="true"
							to="https://www.instagram.com/saravertigocuni"
							target="_blank"
							size="sm"
							color="white"
							class="text-center bg-neutral-900 hover:bg-neutral-600 transition duration-300 h-14 w-14"
							variant="outline"
							><UIcon name="i-ri-instagram-line" class="h-10 w-10"
						/></UButton>
					</div>
				</div>
				<div
					class="md:my-0 md:px-0 my-4 px-4 md:w-80 w-full md:text-left text-center"
				>
					<h6 class="md:text-3xl text-4xl font-comfort font-bold my-2">
						Connect with me
					</h6>
					<div class="mb-4">
						If you want to reach out to me for anything, a project or even just
						some questions, fill out the contact form and i'll reach you there!
					</div>
					<SiteLink to="/contact">
						<UButton block icon="i-mdi-email-edit-outline">
							Write me an email
						</UButton>
					</SiteLink>
				</div>
			</div>
		</div>
		<div
			class="mx-auto bg-neutral-900 border-t border-neutral-800 text-center py-4 md:px-0 px-12"
		>
			<div>© 2023 Davide Cuni - Open Source on Github</div>
		</div>
	</footer>
</template>
