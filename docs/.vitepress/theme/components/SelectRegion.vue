<script setup>
import { useRouter } from 'vitepress'
import { useOpenapi } from 'vitepress-theme-openapi'
import { ref, watch } from 'vue'
import { useRegion } from '../composables/useRegion.js'

const region = useRegion()

const router = useRouter()

const options = region.regions

const openapi = useOpenapi()

const innerValue = ref()

function onRegionChange(event) {
  const selected = region.regions.find(r => r.code === event.target.value)

  const goTo = `/docs${selected.prefix}/`
    .replace(/\/\//g, '/') // Replace double slashes

  router.go(goTo)

  openapi.setSpec(selected.spec)
}

watch(
  router.route,
  (url) => {
    region.determineRegionByURL(url.path)

    innerValue.value = region.currentRegion.value.code
  },
  { immediate: true },
)
</script>

<template>
  <form class="flex items-center sm:px-2 space-x-1">
    <label for="region" class="region">Región</label>
    <select
      id="region"
      :value="innerValue"
      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
      @change="onRegionChange"
    >
      <option
        v-for="option in options" :key="option.code"
        :value="option.code"
        :selected="option.code === region.currentRegion.value.code"
      >
        {{ option.name }}
      </option>
    </select>
  </form>
</template>

<style scoped>
.region {
  @apply hidden sm:block text-sm font-medium text-gray-900 dark:text-white;
}
</style>
