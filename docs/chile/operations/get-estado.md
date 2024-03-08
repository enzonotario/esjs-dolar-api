---
aside: false
outline: false
title: Estado de la API
---

<script setup>
import { useRoute } from 'vitepress'
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

## {{ $t('Samples') }}

::: code-group

```bash [cURL] 
curl -X GET https://cl.dolarapi.com/v1/estado
```

```js-vue [JavaScript]
fetch("https://cl.dolarapi.com/v1/estado")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://cl.dolarapi.com/v1/estado")
```

```python-vue [Python]
import requests
response = requests.get("https://cl.dolarapi.com/v1/estado")
print(response.json())
```

:::

</template>

</Operation>
