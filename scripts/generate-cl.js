import fs from 'node:fs'
import { useOpenapi } from 'vitepress-theme-openapi'
import { useCodeSamples } from '../docs/.vitepress/theme/composables/useCodeSamples.js'

function loadJSON(path) {
  return JSON.parse(fs.readFileSync(new URL(path, import.meta.url)))
}

const spec = loadJSON('../docs/public/chile/openapi.json')

const openapi = useOpenapi()
openapi.setSpec(spec)

export function init() {
  return Object.keys(spec.paths).map((path) => {
    const { operationId } = spec.paths[path].get

    const markdown = generateMarkdown(operationId)

    fs.writeFileSync(`docs/chile/operations/${operationId}.md`, markdown)
  })
}

function generateMarkdown(operationId) {
  const operation = openapi.getOperation(operationId)

  const codeSamples = useCodeSamples().getCodeSamples(operationId)

  const schemas = openapi.getSchemas()

  const response200 = operation.responses['200']

  const responseType = response200.content['application/json'].schema.items
    ? 'array'
    : 'object'

  const schemaTitle = (
    responseType === 'array'
      ? response200.content['application/json'].schema.items
      : response200.content['application/json'].schema
  ).$ref
    .split('/')
    .pop()

  const schema = Object.values(schemas).find(
    schema => schema.title === schemaTitle,
  )

  const schemaJson = useOpenapi().propertiesTypesJson(schema, responseType)

  const markdown = `---
aside: false
outline: false
title: ${operation.summary}
head:
  - [
    'meta',
    {
      name: 'description',
      content: 'API de cotizaciones de monedas extranjeras en Chile',
    },
  ]
  - [
    'meta',
    {
      name: 'keywords',
      content: 'chile, dolar, euro, peso argentino, real, peso uruguayo, dolar api, dolar api chile',
    },
  ]
  - [
    'meta',
      {
        property: 'og:image',
        content: 'https://dolarapi.com/docs/assets/og.png',
      },
    ]
  - [
    'meta',
    {
      property: 'og:title',
      content: 'API para obtener el precio del Dólar en Chile',
    },
  ]
  - [
    'meta',
    {
      property: 'og:description',
      content: 'API de cotizaciones de monedas extranjeras en Chile',
    },
  ]
  - ['meta', { property: 'og:url', content: 'https://dolarapi.com' }]
  - ['meta', { property: 'og:site_name', content: 'DolarApi.com' }]
  - ['meta', { property: 'og:type', content: 'website' }]
  - ['meta', { property: 'og:locale', content: 'es_AR' }]
  - ['meta', { property: 'twitter:card', content: 'summary_large_image' }]
  - ['meta', { property: 'twitter:description', content: 'API de cotizaciones de monedas extranjeras en Chile' }]
  - ['meta', { property: 'twitter:title', content: 'API para obtener el precio del Dólar en Chile' }]
  - ['meta', { property: 'twitter:site', content: '@dolarapi' }]
  - ['meta', { property: 'twitter:creator', content: '@enzonotario_' }]
  - ['meta', { property: 'twitter:image', content: 'https://dolarapi.com/docs/assets/og.png' }]
  - ['meta', { property: 'twitter:url', content: 'https://dolarapi.com' }]
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('cl')
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

try {
  init()
}
catch (error) {
  console.error(error)
}
