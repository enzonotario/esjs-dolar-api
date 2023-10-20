<script setup>
import { useSwagger } from '../composables/useSwagger.js'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  responses: {
    type: Object,
    required: true,
  },
  responseType: {
    type: String,
    required: true,
  },
})

const responsesCodes = Object.keys(props.responses)

const schemaJson = useSwagger().propertiesTypesJson(props.schema, props.responseType)
</script>

<template>
  <div class="flex flex-col">
    <div v-for="responseCode in responsesCodes" :key="responseCode" class="flex flex-col space-y-4">
      <div class="flex flex-row items-center space-x-4">
        <span
          class="px-2 py-1 text-sm rounded bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
        >
          {{ responseCode }}
        </span>

        <span class="text-gray-800 dark:text-gray-200 text-lg">{{ responses[responseCode].description }}</span>
      </div>

      <div class="flex flex-row items-center text-xs space-x-2">
        <span class="text-gray-600 dark:text-gray-400">Content-Type:</span>
        <span class="text-gray-800 dark:text-gray-200">{{ Object.keys(responses[responseCode].content)[0] }}</span>
      </div>

      <slot name="body" :response-type="responseType" :schema="props.schema" />

      <slot name="example" :json="schemaJson" />
    </div>
  </div>
</template>
