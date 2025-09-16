<template>
  <div class="hero-image-container w-full mt-4 mb-4">
    <picture>
      <source
        media="(min-width: 640px)"
        :srcset="desktopImageSrcset"
      />
      <NuxtImg
        :src="data?.compactImage"
        :alt="data?.alt"
        sizes="768px"
        fetchpriority="high"
        loading="eager"
        class="object-cover w-full h-full"
      />
    </picture>
  </div>
</template>

<script setup lang=ts>
    const props = defineProps({
    data: Object
    })

    const $img = useImage()

    const desktopImageSrcset = computed(() => {
    return $img.getSizes(props.data?.image, {
        sizes: 'sm:640px md:1024px',
        modifiers: { format: 'webp', quality: 90 }
    }).srcset
    })

    const mobileImageSrcset = computed(() => {
    return $img.getSizes(props.data?.compactImage, {
        sizes: '768px',
        modifiers: { format: 'webp', quality: 90 }
    }).srcset
    })

    useHead({
        link: [
        {
            rel: 'preload',
            as: 'image',
            imagesrcset: desktopImageSrcset.value,
            media: '(min-width: 640px)',
        },
        {
            rel: 'preload',
            as: 'image',
            imagesrcset: mobileImageSrcset.value,
            media: '(max-width: 639px)',
        },
        ],
    })
</script>

<style scoped>
    .hero-image-container {
    aspect-ratio: 1000 / 921;
    }

    @media (min-width: 640px) {
    .hero-image-container {
        aspect-ratio: 1920 / 921;
    }
    }

    .hero-image-container picture,
    .hero-image-container img {
    display: block;
    width: 100%;
    height: 100%;
    }
</style>
  