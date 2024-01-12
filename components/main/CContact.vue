<template>
	<UForm ref="form" :schema="schema" :state="state" @submit="submit" class="[&>*]:my-4">
		<UFormGroup label="Name" name="user" required>
			<template #default="{ error }">
				<UInput
					v-model="state.user"
					placeholder="Your Name..."
					:trailing-icon="error && 'i-heroicons-exclamation-triangle-20-solid'"
					:class="
						!error &&
						schema.shape.user.safeParse(state.user).success &&
						'[&>*]:ring-1 [&>*]:ring-inset [&>*]:ring-cyan-500 [&>*]:dark:ring-cyan-500'
					"
					size="xl"
				/>
			</template>
			<template #error="{ error }">
				<transition
					appear
					enter-active-class="transition-all duration-1000 ease-in-out"
					leave-active-class="transition-all duration-1000 ease-in-out"
					enter-from-class="opacity-0 max-h-0"
					enter-to-class="opacity-100 max-h-11"
					leave-from-class="opacity-100 max-h-11"
					leave-to-class="opacity-0 max-h-0"
				>
					<div v-if="error" class="overflow-hidden">
						<UAlert
							icon="i-heroicons-exclamation-triangle-20-solid"
							color="yellow"
							variant="solid"
							:title="error"
						/>
					</div>
				</transition>
			</template>
		</UFormGroup>
		<UFormGroup label="Email" name="email" required>
			<template #default="{ error }">
				<UInput
					v-model="state.email"
					placeholder="you@example.com"
					:trailing-icon="error && 'i-heroicons-exclamation-triangle-20-solid'"
					:class="
						!error &&
						schema.shape.email.safeParse(state.email).success &&
						'[&>*]:ring-1 [&>*]:ring-inset [&>*]:ring-cyan-500 [&>*]:dark:ring-cyan-500'
					"
					size="xl"
				/>
			</template>
			<template #error="{ error }">
				<transition
					appear
					enter-active-class="transition-all duration-1000 ease-in-out"
					leave-active-class="transition-all duration-1000 ease-in-out"
					enter-from-class="opacity-0 max-h-0"
					enter-to-class="opacity-100 max-h-11"
					leave-from-class="opacity-100 max-h-11"
					leave-to-class="opacity-0 max-h-0"
				>
					<div v-if="error" class="overflow-hidden">
						<UAlert
							icon="i-heroicons-exclamation-triangle-20-solid"
							color="yellow"
							variant="solid"
							:title="error"
						/>
					</div>
				</transition>
			</template>
		</UFormGroup>
		<UFormGroup label="Message" name="msg" required>
			<template #default="{ error }">
				<UTextarea
					v-model="state.msg"
					placeholder="Write your message here..."
					:class="
						!error &&
						schema.shape.msg.safeParse(state.msg).success &&
						'[&>*]:ring-1 [&>*]:ring-inset [&>*]:ring-cyan-500 [&>*]:dark:ring-cyan-500'
					"
					size="xl"
					resize
				/>
			</template>
			<template #error="{ error }">
				<transition
					appear
					enter-active-class="transition-all duration-1000 ease-in-out"
					leave-active-class="transition-all duration-1000 ease-in-out"
					enter-from-class="opacity-0 max-h-0"
					enter-to-class="opacity-100 max-h-11"
					leave-from-class="opacity-100 max-h-11"
					leave-to-class="opacity-0 max-h-0"
				>
					<div v-if="error" class="overflow-hidden">
						<UAlert
							icon="i-heroicons-exclamation-triangle-20-solid"
							color="yellow"
							variant="solid"
							:title="error"
						/>
					</div>
				</transition>
			</template>
		</UFormGroup>
		<UButton
			ref="submit_button"
			block
			size="xl"
			type="submit"
			icon="i-material-symbols-send-rounded"
			:disabled="submit_disable"
		>
			Submit
		</UButton>
	</UForm>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import { z } from "zod";
	import type { Button, Form, FormSubmitEvent } from "@nuxt/ui/dist/runtime/types";

	const notify = useToast();
	const mail = useMail();
	const form = ref<Form<any> | undefined>();
	const submit_disable = ref(false);

	const schema = z.object({
		user: z
			.string()
			.min(1, "Required")
			.regex(new RegExp("^[a-zA-Z ]+$"), "Special characters not allowed"),
		email: z.string().email("Invalid email"),
		msg: z
			.string()
			.min(60, "The message is too short")
			.max(600, "The message is too long")
	});

	type Schema = z.output<typeof schema>;

	const state = ref({
		user: undefined,
		email: undefined,
		msg: undefined
	});

	var readyToToast = false;
	onMounted(() => {
		readyToToast = true;
	})

	async function submit(event: FormSubmitEvent<Schema>) {
		/*		
		mail.send({
			from: event.data.email,
			subject: "New message from " + event.data.user,
			text: event.data.user
		});*/
		
		form.value?.clear();
		submit_disable.value = true;

		if(readyToToast)
		{
			console.log("done")
			notify.add({
				id: "1",
				title: "Email sent",
				description: "see you soon!",
				icon: "i-carbon-checkmark-outline",
				timeout: 7000,
			})
		}
	}
</script>
