<script setup>
import { onMounted, ref } from 'vue'

const githubStars = ref(null)

onMounted(async () => {
  const response = await fetch('https://api.github.com/repos/enzonotario/esjs-dolar-api')
  const data = await response.json()
  githubStars.value = data.stargazers_count
})
</script>

<template>
  <div class="flex items-center px-2">
    <a
      href="https://github.com/enzonotario/esjs-dolar-api" target="_blank" rel="noopener noreferrer"
      class="inline-flex items-center px-2.5 py-0.5 space-x-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm font-medium rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>

      <span>Stars: <span>{{ githubStars }}</span></span>
    </a>
  </div>
</template>
