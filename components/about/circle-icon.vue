<template>
    <div class="custom_bubble before:hidden md:before:block 
                md:h-[10.5rem] w-[10.5rem] before:h-40 before:w-40 mx-2"
        :class="customClass"
    >
        <div class="p-2 flex flex-col justify-center items-center">
            <div class="h-20 w-20 flex justify-center items-center"
                :class="iconWrapperClass"
            >
                <slot name="default"></slot>
            </div>
            <div>{{ label }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        label: {
            type: String,
            default: ''
        },
        iconWrapperClass: {
            type: String,
            default: ''
        },
        customClass: {
            type: String,
            default: ''
        },
    })
</script>