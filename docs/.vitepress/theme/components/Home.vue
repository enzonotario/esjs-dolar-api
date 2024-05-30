<script setup>
import { useRegion } from '../composables/useRegion.js'

const region = useRegion()

/**
 * @see https://svgflags.com/
 */
function getSvg(region) {
  let svg
  switch (region.code) {
    case 'ar':
      svg = `<svg class="w-12 h-12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><g fill="#338af3"><path d="m256 0c-101.494 0-189.19 59.065-230.598 144.696h461.195c-41.407-85.631-129.104-144.696-230.597-144.696z"/><path d="m256 512c101.493 0 189.19-59.065 230.598-144.696h-461.196c41.408 85.631 129.104 144.696 230.598 144.696z"/></g><path d="m332.515 256-31.265 14.707 16.649 30.279-33.95-6.495-4.302 34.296-23.647-25.224-23.648 25.224-4.301-34.296-33.95 6.494 16.648-30.279-31.264-14.706 31.265-14.707-16.649-30.278 33.949 6.494 4.303-34.296 23.647 25.224 23.648-25.224 4.301 34.296 33.951-6.494-16.649 30.279z" fill="#ffda44"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`
      break
    case 'cl':
      svg = `<svg class="w-12 h-12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><circle cx="256" cy="256" fill="#f0f0f0" r="256"/><path d="m512 256c0 141.384-114.616 256-256 256s-256-114.616-256-256 256 0 256 0 193.761 0 256 0z" fill="#d80027"/><path d="m0 256c0-141.384 114.616-256 256-256v256s-166.957 0-256 0z" fill="#0052b4"/><path d="m152.389 89.043 16.577 51.018h53.643l-43.398 31.53 16.576 51.018-43.398-31.531-43.398 31.531 16.576-51.018-43.398-31.53h53.643z" fill="#f0f0f0"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`
      break
    case 've':
      svg = `<svg class="w-12 h-12" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m486.598 367.304c16.275-33.656 25.402-71.413 25.402-111.304s-9.127-77.648-25.402-111.304l-230.598-22.261-230.598 22.261c-16.275 33.656-25.402 71.413-25.402 111.304s9.127 77.648 25.402 111.304l230.598 22.261z" fill="#0052b4"/><path d="m256 512c101.493 0 189.19-59.065 230.598-144.696h-461.196c41.408 85.631 129.104 144.696 230.598 144.696z" fill="#d80027"/><g fill="#f0f0f0"><path d="m443.367 306.252-13.521 10.566 5.868 16.121-14.227-9.593-13.522 10.564 4.728-16.495-14.225-9.596 17.149-.598 4.732-16.495 5.87 16.124z"/><path d="m408.741 246.282-9.091 14.553 11.031 13.142-16.651-4.146-9.094 14.549-1.199-17.117-16.649-4.153 15.912-6.429-1.196-17.118 11.029 13.147z"/><path d="m355.694 201.769-3.566 16.785 14.86 8.58-17.065 1.799-3.568 16.78-6.98-15.674-17.067 1.791 12.754-11.482-6.979-15.674 14.86 8.578z"/><path d="m290.622 178.087 2.391 16.993 16.897 2.978-15.422 7.526 2.389 16.992-11.92-12.344-15.426 7.522 8.058-15.153-11.921-12.342 16.9 2.979z"/><path d="m221.377 178.087 8.057 15.151 16.896-2.981-11.917 12.347 8.053 15.152-15.422-7.524-11.922 12.341 2.391-16.989-15.423-7.522 16.899-2.982z"/><path d="m156.305 201.769 12.754 11.483 14.857-8.578-6.977 15.68 12.751 11.48-17.065-1.795-6.982 15.674-3.563-16.783-17.066-1.792 14.86-8.582z"/><path d="m103.258 246.282 15.913 6.428 11.026-13.144-1.193 17.121 15.908 6.429-16.649 4.149-1.199 17.115-9.09-14.549-16.651 4.149 11.03-13.145z"/><path d="m68.634 306.252 17.152.598 5.866-16.122 4.735 16.496 17.147.599-14.226 9.596 4.728 16.494-13.52-10.564-14.227 9.593 5.869-16.124z"/></g><path d="m486.598 144.696c-41.408-85.631-129.105-144.696-230.598-144.696-101.494 0-189.19 59.065-230.598 144.696z" fill="#ffda44"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`
      break
  }
  return svg
}

const regions = region.regions.map(region => ({
  ...region,
  baseUrl: region.prefix
  // Quita el primer `/`
    .replace(/^\//, ''),
  svg: getSvg(region),
}))
</script>

<template>
  <div class="min-h-[calc(80dvh-4rem)] flex flex-col">
    <span class="flex-1" />

    <div class="flex flex-col space-y-6 md:space-y-12">
      <div
        class="flex flex-col justify-center w-full max-w-7xl mx-auto px-10 xl:px-4 space-y-6"
      >
        <div class="flex flex-col justify-center items-center">
          <img src="/assets/logo.png" alt="EsJS" class="w-full max-w-[8rem]">
        </div>

        <h1 class="heading text-center">
          <span class="text-2xl sm:text-4xl md:text-6xl font-bold">DolarApi.com</span>
          <br class="block">
          <span class="text-lg sm:text-2xl md:text-3xl">API de Cotizaciones de Dólar y Monedas</span>
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <a
          v-for="region in regions"
          :key="region.id"
          :href="`/docs/${region.baseUrl}`"
          class="card"
        >
          <div class="flex justify-center items-center space-x-2">
            <span v-html="region.svg" />
            <span class="text-2xl font-bold">{{ region.name }}</span>
          </div>
        </a>
      </div>

      <div class="flex justify-center items-center gap-3">
        <a
          href="https://github.com/enzonotario/esjs-dolar-api"
          target="_blank"
          class="flex justify-center items-center gap-1 px-4 py-2 bg-black !text-white hover:bg-gray-800 dark:bg-white dark:!text-black dark:hover:bg-gray-100 dark:hover:!text-black rounded-full !no-underline !font-bold"
        >
          <span class="i-mdi-github w-5 h-5" />
          Ver en GitHub
        </a>
      </div>
    </div>

    <span class="flex-1 min-h-10" />

    <div class="flex flex-row justify-center items-center space-x-4">
      <p class="w-full max-w-sm text-center">
        Desarrollado con
        <a
          href="https://es.js.org/?ref=dolarapi.com"
          target="_blank"
          rel="noreferrer"
          class="font-bold"
        >EsJS</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  @apply px-3 py-6 md:py-10
  text-center no-underline
  hover:bg-gray-100 dark:hover:bg-gray-800
  border-gray-300 dark:border-gray-800 hover:border-indigo-600 dark:hover:border-indigo-400
  rounded-lg border;

  @apply text-gray-900 dark:text-gray-100
    hover:text-indigo-600 dark:hover:text-indigo-100
  !important;
}
</style>
