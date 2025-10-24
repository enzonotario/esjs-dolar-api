<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const baseUrl = 'https://api.argentinadatos.com/static/assets'
const defaultLink = 'https://dolarapp.com/?utm_source=dolarapi_docs&utm_medium=banner&utm_campaign=dolarapi_docs_ad'

const bannerDesktopSrc = computed(() => {
  return isDark.value ? `${baseUrl}/dolarapp-desktop-dark.png` : `${baseUrl}/dolarapp-desktop-light.png`
})

const bannerMobileSrc = computed(() => {
  return isDark.value ? `${baseUrl}/dolarapp-mobile-dark.png` : `${baseUrl}/dolarapp-mobile-light.png`
})
</script>

<template>
  <div class="relative">
    <a
      :href="defaultLink"
      target="_blank"
      rel="noopener"
      class="hidden md:block"
    >
      <img
        :src="bannerDesktopSrc"
        alt="DolarApp Banner"
        class="w-full rounded-lg"
      >
    </a>

    <a
      :href="defaultLink"
      target="_blank"
      rel="noopener"
      class="block md:hidden"
    >
      <img
        :src="bannerMobileSrc"
        alt="DolarApp Banner"
        class="w-full rounded-lg"
      >
    </a>

    <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
      Ad
    </div>
  </div>
</template>
