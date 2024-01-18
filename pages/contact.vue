<template>
	<div>
		<div class="container max-w-screen-xl mx-auto mt-8 mb-24">
			<h1 class="heading_1 text-center">Contact</h1>
			<div class="flex flex-col mt-0 p-2
						md:flex-row md:mt-20 md:p-0">
				<div class="flex-1">
					<h4 class="heading_4 text-center mb-4 md:mt-8">Reach out to me from here!</h4>
					<div class="max-w-md mx-auto hidden md:block">
						<p>Whether you have any questions about my projects, wish to collaborate, propose a business offer, 
						or simply engage in a conversation, you can reach out to me using this contact form. 
						If you prefer other means of communication, such as Telegram, click below :)</p>
					</div>
				</div>
				<div class="flex-1">
					<ClientOnly>
						<CContact/>
					</ClientOnly>		
				</div>
			</div>
			<div class="md:hidden text-center p-2">
						<p>Whether you have any questions about my projects, wish to collaborate, propose a business offer, 
						or simply engage in a conversation, you can reach out to me using this contact form. 
						If you prefer other means of communication, such as Telegram, click below :)</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>
