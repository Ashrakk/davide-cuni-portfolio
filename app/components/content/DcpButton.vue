<template>
    <div class="my-8 m-auto not-prose">
        <UButton size="xl" :icon="icon" :to="url" target="_blank" no-rel block :variant="variant" :aria-label="ariaLabel || undefined">
            <slot mdc-unwrap="p" />
        </UButton>
    </div>
</template>

<script lang="ts" setup>

import type { ButtonProps } from '@nuxt/ui';
import type { PropType } from 'vue';

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
        type: String as PropType<ButtonProps['variant']>,
        default: () => "solid",
    },
    ariaLabel: {
        type: String,
        default: ''
    }
})

</script>
