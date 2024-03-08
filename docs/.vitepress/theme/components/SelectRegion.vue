<script setup>
import { useRouter } from 'vitepress'
import { useRegion } from '../composables/useRegion.js'

const region = useRegion()

const router = useRouter()

const options = region.regions

function onRegionChange(event) {
  const selected = options.find(option => option.code === event.target.value)

  const goTo = `/docs${selected.prefix}/`
    .replace(/\/\//g, '/') // Replace double slashes

  router.go(goTo)
}
</script>

<template>
  <form class="flex items-center px-2 space-x-1">
    <label for="region" class="block text-sm font-medium text-gray-900 dark:text-white">Región</label>
    <select
      id="region"
      :value="region.currentRegion.value.code"
      class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
      @change="onRegionChange"
    >
      <option v-for="option in options" :key="option.code" :value="option.code">
        {{ option.name }}
      </option>
    </select>
  </form>
</template>
