<script setup>
const props = defineProps({
  method: {
    type: String,
    required: true,
  },
  baseUrl: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-row items-center space-x-4 text-sm bg-gray-100 dark:bg-gray-800 rounded p-2 overflow-x-auto">
    <span
      :class="{
        'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200': props.method === 'GET',
      }"
      class="px-2 py-1 rounded"
    >{{ props.method }}</span>
    <span class="text-gray-600 dark:text-gray-400 inline-flex items-center">
      <span class="hidden md:inline-block">{{ props.baseUrl }}</span>
      <span class="text-gray-800 dark:text-gray-200 font-bold select-all">{{ props.path }}</span>
    </span>
  </div>
</template>
