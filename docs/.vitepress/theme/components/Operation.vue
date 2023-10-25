<script setup>
import { useOpenapi } from '@theme/composables/useOpenapi.js'
import { usePlots } from '@theme/composables/usePlots.js'
import { useCodeSamples } from '@theme/composables/useCodeSamples.js'
import { onMounted, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useData, useRoute } from 'vitepress'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  method: {
    type: String,
    required: true,
  },
})

const { isDark } = useData()

const openapi = useOpenapi()

const codeSamples = useCodeSamples().getCodeSamples(props.id)

const operation = openapi.getOperation(props.id)

const operationPath = openapi.getOperationPath(props.id)

const baseUrl = openapi.getBaseUrl()

const schemas = openapi.getSchemas()

const response200 = operation.responses['200']

const responseType = response200.content['application/json'].schema.items ? 'array' : 'object'

const schemaTitle = (responseType === 'array' ? response200.content['application/json'].schema.items : response200.content['application/json'].schema)
  .$ref.split('/')
  .pop()

const schema = Object.values(schemas).find(schema => schema.title === schemaTitle)

const route = useRoute()

const plots = usePlots()

onMounted(() => {
  plots.findCasaToPlot(document)

  useResizeObserver(document.body, () => {
    plots.resizeCharts(document)
  })
})

watch(isDark, () => {
  plots.setDarkMode(isDark.value)
}, { immediate: true })
</script>

<template>
  <div class="flex flex-col space-y-8">
    <slot name="header" :operation="operation" :method="props.method" :base-url="baseUrl" :path="operationPath" />

    <div class="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="flex flex-col">
        <div class="flex flex-col space-y-4">
          <slot name="description" :operation="operation" :method="props.method" :base-url="baseUrl" :path="operationPath" />
        </div>

        <slot name="responses" :schema="schema" :responses="operation.responses" :response-type="responseType" />
      </div>

      <div class="flex flex-col">
        <div class="sticky top-[100px] inset-x-0 flex flex-col sm:px-6">
          <slot name="try-it" :operation-id="props.id" :method="props.method" />

          <slot name="samples" :code-samples="codeSamples" />
        </div>
      </div>
    </div>
  </div>
</template>
