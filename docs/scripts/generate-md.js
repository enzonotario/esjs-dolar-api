import fs from 'node:fs'
import { useOpenapi } from '../.vitepress/theme/composables/useOpenapi.js'
import { useCodeSamples } from '../.vitepress/theme/composables/useCodeSamples.js'

const openapi = useOpenapi()
export function init() {
  return Object.keys(openapi.json.paths)
    .map((path) => {
      const { operationId } = openapi.json.paths[path].get

      const markdown = generateMarkdown(operationId)

      fs.writeFileSync(`docs/operations/${operationId}.md`, markdown)
    })
}

function generateMarkdown(operationId) {
  const operation = openapi.getOperation(operationId)

  const codeSamples = useCodeSamples().getCodeSamples(operationId)

  const schemas = openapi.getSchemas()

  const response200 = operation.responses['200']

  const responseType = response200.content['application/json'].schema.items ? 'array' : 'object'

  const schemaTitle = (responseType === 'array' ? response200.content['application/json'].schema.items : response200.content['application/json'].schema)
    .$ref.split('/')
    .pop()

  const schema = Object.values(schemas).find(schema => schema.title === schemaTitle)

  const schemaJson = useOpenapi().propertiesTypesJson(schema, responseType)

  const markdown = `---
aside: false
outline: false
title: ${operation.summary}
---

<script setup>
import { useRoute } from 'vitepress'
import Operation from '@theme/components/Operation.vue'
import OperationEndpoint from '@theme/components/OperationEndpoint.vue'
import Responses from '@theme/components/Responses.vue'
import ResponseBody from '@theme/components/ResponseBody.vue'
import TryItButton from '@theme/components/TryItButton.vue'
</script>

<Operation method="GET" id="${operationId}">

<template #header="header">

# ${operation.summary}

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

${operation.description || ''}

<!--@include: ./parts/${operationId}-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

\`\`\`json
${schemaJson}
\`\`\`

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

<template #response="response">

\`\`\`json-vue
{{ response.response }}
\`\`\`

</template>

</TryItButton>

</template>

<template #samples="samples">

## {{ $t('Samples') }}

::: code-group

\`\`\`bash [cURL] 
${codeSamples.curl.source}
\`\`\`

\`\`\`js-vue [JavaScript]
${codeSamples.javascriptFetch.source}
\`\`\`

\`\`\`php-vue [PHP]
${codeSamples.php.source}
\`\`\`

\`\`\`python-vue [Python]
${codeSamples.python.source}
\`\`\`

:::

</template>

</Operation>
`
  return markdown
}

init()
