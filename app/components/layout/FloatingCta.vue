<template>
  <Transition name="cta-fade">
    <div v-if="!isExcluded">
      <!-- Desktop: CSS hover via dcp-floating-cta -->
      <NuxtLink
        to="/contact"
        class="dcp-floating-cta group hidden md:block"
      >
        <div class="border border-stone-700 bg-stone-900 p-2 flex items-center rounded-bl-full rounded-tl-full">
          <div class="mr-2 ml-1 flex relative w-6 h-6">
            <UIcon class="w-6 h-6 absolute transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-75 text-brand-cyan" name="i-mdi-email-outline" />
            <UIcon class="w-6 h-6 absolute transition-all duration-300 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 text-brand-cyan" name="i-mdi-email-open-outline" />
          </div>
          <div class="text-lg">Contact Now</div>
        </div>
      </NuxtLink>

      <!-- Mobile: tap to expand, tap again to navigate -->
      <div class="dcp-floating-cta md:hidden" :class="{ 'mobile-open': mobileOpen }" @click="handleMobileClick">
        <div class="border border-stone-700 bg-stone-90 p-2 flex items-center rounded-bl-full rounded-tl-full">
          <div class="mr-2 ml-1 flex relative w-6 h-6">
            <UIcon class="w-6 h-6 absolute transition-all duration-300 text-brand-cyan"
              :class="mobileOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'"
              name="i-mdi-email-outline" />
            <UIcon class="w-6 h-6 absolute transition-all duration-300 text-brand-cyan"
              :class="mobileOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-75'"
              name="i-mdi-email-open-outline" />
          </div>
          <div class="text-lg">Contact Now</div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  excludedPaths?: string[]
}>(), {
  excludedPaths: () => ['/contact']
})

const route = useRoute()
const router = useRouter()
const mobileOpen = ref(false)

const isExcluded = computed(() =>
  props.excludedPaths.some(path => route.path === path)
)

// Reset mobile state on route change
watch(() => route.path, () => { mobileOpen.value = false })

function handleMobileClick() {
  if (mobileOpen.value) {
    router.push('/contact')
  } else {
    mobileOpen.value = true

    // Auto-collapse after 3s if user doesn't tap again
    setTimeout(() => { mobileOpen.value = false }, 3000)
  }
}
</script>
