<template>
    <div class="my-8 flex flex-col items-center not-prose">
        <div>
            <NuxtPicture
                :src="src"
                :alt="alt"
                :sizes="size"
                :img-attrs="{
                    class:
                        'w-full'
                }"
            />
        </div>
        <div class="text-center text-sm mt-2 text-[#d4d4d4]">{{ alt }}</div>
    </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        src: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: "768px"
        }
    })

</script>