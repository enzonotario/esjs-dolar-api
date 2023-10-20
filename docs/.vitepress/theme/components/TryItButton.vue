<script setup>
import { ref } from 'vue'
import { useOpenapi } from '../composables/useOpenapi.js'

const props = defineProps({
  operationId: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
})

const openapi = useOpenapi()

const operationPath = openapi.getOperationPath(props.operationId)

const baseUrl = openapi.getBaseUrl()

const requestUrl = `${baseUrl}${operationPath}`

const response = ref(null)

const loading = ref(false)

async function tryIt() {
  response.value = '{}'
  loading.value = true

  const data = await fetch(requestUrl, {
    method: props.method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  response.value = await data.json()
  loading.value = false
}
</script>

<template>
  <div class="flex flex-col space-y-4">
    <button
      class="bg-black text-white hover:bg-gray-800 dark:text-black dark:bg-white dark:hover:bg-gray-200 font-bold py-2 px-4 rounded"
      @click="tryIt"
    >
      {{ $t('Try it out') }}
    </button>

    <div v-if="response || loading" class="flex flex-col">
      <details class="flex flex-col" open>
        <summary class="my-0! text-lg font-bold cursor-pointer">
          {{ loading ? $t('Loading...') : $t('Response') }}
        </summary>

        <div class="flex flex-col max-h-96 overflow-y-auto">
          <slot name="response" :response="response" />
        </div>
      </details>
    </div>
  </div>
</template>
