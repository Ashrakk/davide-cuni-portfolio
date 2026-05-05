<template>
	<div>
		<div class="container max-w-screen-xl mx-auto mt-8 mb-24">
			<h1 class="text-h1 text-center">Contact</h1>
			<div class="flex flex-col mt-0 p-4
						md:flex-row md:mt-20 md:p-0">
				<div class="flex-1">
					<h4 class="text-h4 text-center mb-4 md:mt-8">Reach out from here!</h4>
					<div class="hidden md:block max-w-md mx-auto">
						<p>Whether you have any questions about my projects, wish to collaborate, propose a business offer, 
						or simply engage in a conversation, you can reach out using this contact form. 
						If you prefer other means of communication, such as Telegram, click below :)</p>
					</div>
					<div class="hidden md:flex flex-row justify-center gap-6 mt-6">
						<UButton
							aria-label="Reach me via Linkedin"
							to="https://www.linkedin.com/in/davide-cuni"
							target="_blank"
							variant="outline"
							class="hover:ring-white hover:!text-white transition duration-300"
							icon="i-ri-linkedin-fill"
							>Linkedin
						</UButton>
						<UButton
							aria-label="Reach me via Telegram"
							to="https://t.me/Ashra_k"
							target="_blank"
							variant="outline"
							class="hover:ring-white hover:!text-white transition duration-300"
							icon="i-mdi-telegram"
							>Telegram
						</UButton>
					</div>
				</div>
				<div class="flex-1">
					<ContactForm/>
				</div>
			</div>
			<div class="md:hidden p-4">
				<p>Whether you have any questions about my projects, wish to collaborate, propose a business offer, 
				or simply engage in a conversation, you can reach out using this contact form. 
				If you prefer other means of communication, such as Telegram, click below :)</p>
				<div class="flex flex-col justify-center gap-4 mt-8">
					<UButton
						aria-label="Reach me via Linkedin"
						to="https://www.linkedin.com/in/davide-cuni"
						target="_blank"
						variant="outline"
						class="hover:ring-white hover:!text-white transition duration-300"
						icon="i-ri-linkedin-fill"
						>Linkedin
					</UButton>
					<UButton
						aria-label="Reach me via Telegram"
						to="https://t.me/Ashra_k"
						target="_blank"
						variant="outline"
						class="hover:ring-white hover:!text-white transition duration-300"
						icon="i-mdi-telegram"
						>Telegram
					</UButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

	usePageSeo({
		title: 'Contact Davide Cuni',
		documentTitle: 'Contact Davide Cuni | Collaborations and Project Inquiries',
		description:
			'Get in touch for collaborations, freelance web projects, and technical inquiries about modern websites and scalable web applications.',
		image: '/images/profilepic.jpg',
	})

	defineOgImage('Portfolio', {
		title: 'Contact Davide Cuni',
		description: 'Collaborations, freelance web projects, and technical inquiries for modern web work.',
		section: 'Contact',
		label: 'Let\'s build',
	})

</script>
