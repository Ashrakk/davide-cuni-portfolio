<template>
    <div class="my-8 m-auto not-prose">
        <UButton size="xl" :icon="icon" :to="url" target="_blank" no-rel block :variant="variant">
            <ContentSlot/>
        </UButton>
    </div>
</template>

<script lang="ts" setup>

    import type { PropType } from 'vue';
    import type { ButtonVariant } from '@nuxt/ui/dist/runtime/types';
import { variants } from '#tailwind-config';

    const props = defineProps({
        url: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        variant: {
            type: String as PropType<ButtonVariant>,
            default: () => "solid",
        }
    })

</script>