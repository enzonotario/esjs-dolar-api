<script setup>
import { useRegion } from '../composables/useRegion.js'

const region = useRegion()
</script>

<template>
  <div class="min-h-[calc(80dvh-4rem)] flex flex-col">
    <span class="flex-1" />

    <div class="flex flex-col space-y-6 md:space-y-12">
      <div class="flex flex-col justify-center w-full max-w-7xl mx-auto px-10 xl:px-4 space-y-6">
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
        <a v-for="region in region.regions" :key="region.id" :href="`/docs${region.prefix}`" class="card">
          <span class="text-2xl font-bold">{{ region.name }}</span>
        </a>
      </div>

      <div class="flex justify-center items-center gap-3">
        <a href="https://github.com/enzonotario/esjs-dolar-api" target="_blank" class="flex justify-center items-center gap-1 px-4 py-2 bg-black !text-white hover:bg-gray-800 dark:bg-white dark:!text-black dark:hover:bg-gray-100 dark:hover:!text-black rounded-full !no-underline !font-bold">
          <span class="i-mdi-github w-5 h-5" />
          Ver en GitHub
        </a>
      </div>
    </div>

    <span class="flex-1 min-h-10" />

    <div class="flex flex-row justify-center items-center space-x-4">
      <p class="w-full max-w-sm text-center">
        Desarrollado con <a href="https://es.js.org/?ref=dolarapi.com" target="_blank" rel="noreferrer" class="font-bold">EsJS</a>
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
