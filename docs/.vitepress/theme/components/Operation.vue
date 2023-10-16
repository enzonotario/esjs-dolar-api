<script setup>
import { useSwagger } from '@theme/composables/useSwagger.js'
import { usePlots } from '@theme/composables/usePlots.js'
import { onMounted } from 'vue'
import { useResizeObserver, useTitle } from '@vueuse/core'
import { useRoute } from 'vitepress'

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

const swagger = useSwagger()

const operation = swagger.getOperation(props.id)

const operationPath = swagger.getOperationPath(props.id)

const baseUrl = swagger.getBaseUrl()

const schemas = swagger.getSchemas()

const response200 = operation.responses['200']

const responseType = response200.content['application/json'].schema.items ? 'array' : 'object'

const schemaTitle = (responseType === 'array' ? response200.content['application/json'].schema.items : response200.content['application/json'].schema)
  .$ref.split('/')
  .pop()

const schema = Object.values(schemas).find(schema => schema.title === schemaTitle)

const title = useTitle()

const route = useRoute()

const plots = usePlots()

function setupTitle() {
  title.value = route.data.params.pageTitle
}

onMounted(() => {
  setupTitle()

  plots.findCasaToPlot(document)

  useResizeObserver(document.body, () => {
    plots.resizeCharts(document)
  })
})
</script>

<template>
  <div class="flex flex-col space-y-8">
    <slot name="header" :operation="operation" :method="props.method" :base-url="baseUrl" :path="operationPath" />

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="flex flex-col">
        <div class="flex flex-col space-y-4">
          <slot name="description" :operation="operation" :method="props.method" :base-url="baseUrl" :path="operationPath" />
        </div>

        <slot name="responses" :schema="schema" :responses="operation.responses" :response-type="responseType" />
      </div>

      <div class="flex flex-col sm:px-6">
        <slot name="try-it" :operation-id="props.id" :method="props.method" />
      </div>
    </div>
  </div>
</template>
