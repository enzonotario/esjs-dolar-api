<script setup>
const props = defineProps({
  dolares: Array,
  col1: Array,
  col2: Array,
  fechaActualizacion: String,
})
</script>

<template>
  <div
    class="w-full h-full flex flex-col items-center justify-center px-2rem py-2rem bg-gray-200 text-2rem"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <div class="flex flex-row items-center mb-3">
        <span class="mr-2">
          Datos obtenidos de
        </span>
        <span class="px-1.5 py-1 bg-indigo-700 hover:bg-indigo-600 text-white rounded">
          DolarApi.com
        </span>
      </div>

      <span>{{ fechaActualizacion }}</span>
    </div>

    <div v-if="dolares" class="flex flex-row items-center">
      <div class="w-full max-w-md flex flex-col px-4">
        <div
          v-for="dolar in col1"
          :key="dolar.casa"
          class="flex flex-row items-center p-4 bg-white rounded border border-gray-300 mb-4"
        >
          <span>{{ dolar.nombre.toUpperCase() }}</span>

          <span class="flex-1" />

          <div
            class="w-30 flex flex-col items-center"
            :class="{
              'text-indigo-700': dolar.variacionPorcentual > 0,
              'text-teal-700': dolar.variacionPorcentual < 0,
              'text-gray-500': dolar.variacionPorcentual === 0,
            }"
          >
            <svg v-if="dolar.variacionPorcentual > 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" /></svg>

            <svg v-if="dolar.variacionPorcentual < 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" /></svg>

            <svg v-if="dolar.variacionPorcentual === 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14z" /></svg>

            <span class="text-lg">{{ (dolar.variacionPorcentual * 100).toFixed(2) }}%</span>
          </div>

          <div class="w-30 flex flex-col items-center">
            <span class="text-sm text-gray-500 uppercase">Venta</span>
            <span>${{ dolar.venta }}</span>
          </div>
        </div>
      </div>

      <div class="w-full max-w-md flex flex-col px-4">
        <div
          v-for="dolar in col2"
          :key="dolar.casa"
          class="flex flex-row items-center p-4 bg-white rounded border border-gray-300 mb-4"
        >
          <span>{{ dolar.nombre.toUpperCase() }}</span>

          <span class="flex-1" />

          <div
            class="w-30 flex flex-col items-center"
            :class="{
              'text-indigo-700': dolar.variacionPorcentual > 0,
              'text-teal-700': dolar.variacionPorcentual < 0,
              'text-gray-500': dolar.variacionPorcentual === 0,
            }"
          >
            <svg v-if="dolar.variacionPorcentual > 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z" /></svg>

            <svg v-if="dolar.variacionPorcentual < 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z" /></svg>

            <svg v-if="dolar.variacionPorcentual === 0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13H5v-2h14z" /></svg>

            <span class="text-lg">{{ (dolar.variacionPorcentual * 100).toFixed(2) }}%</span>
          </div>

          <div class="w-30 flex flex-col items-center">
            <span class="text-sm text-gray-500 uppercase">Venta</span>
            <span>${{ dolar.venta }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
