---
aside: false
outline: false
title: Estado de la API
---

<script setup>
import { useRoute } from 'vitepress'
import Operation from '@theme/components/Operation.vue'
import OperationEndpoint from '@theme/components/OperationEndpoint.vue'
import Responses from '@theme/components/Responses.vue'
import ResponseBody from '@theme/components/ResponseBody.vue'
import TryItButton from '@theme/components/TryItButton.vue'
</script>

<Operation method="GET" id="get-estado">

<template #header="header">

# Estado de la API

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



<!--@include: ./parts/get-estado-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "estado": "string",
  "aleatorio": "integer"
}
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

```bash [cURL] 
curl -X GET https://dolarapi.com/v1/estado
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/estado")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/estado")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/estado")
print(response.json())
```

:::

</template>

</Operation>
