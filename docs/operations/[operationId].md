---
prev: false
next: false
aside: false
outline: false
title: DolarApi.com
---

<script setup>
import { useRoute } from 'vitepress'
import Operation from '@theme/components/Operation.vue'
import OperationEndpoint from '@theme/components/OperationEndpoint.vue'
import Responses from '@theme/components/Responses.vue'
import ResponseBody from '@theme/components/ResponseBody.vue'
import TryItButton from '@theme/components/TryItButton.vue'

const route = useRoute()

const operationId = route.data.params.operationId
</script>

<Operation method="GET" :id="operationId">

<template #header="header">

# {{ header.operation.summary }}

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

<div v-if="description.operation.description" class="description" v-html="description.operation.description" />

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json-vue
{{ example.json }}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

<template #response="response">

```json-vue
{{ response.response }}
```

</template>

</TryItButton>

</template>

<template #samples="samples">

## {{ $t('Samples') }}

::: code-group

```bash-vue [cURL] 
{{ samples.codeSamples.curl.source }}
```

```js-vue [JavaScript]
{{ samples.codeSamples.javascriptFetch.source }}
```

```php-vue [PHP]
{{ samples.codeSamples.php.source }}
```

```python-vue [Python]
{{ samples.codeSamples.python.source }}
```

:::

</template>

</Operation>
