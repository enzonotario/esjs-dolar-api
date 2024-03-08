---
aside: false
outline: false
title: USD / CLP
---

<script setup>
import { useRoute } from 'vitepress'
</script>

<Operation method="GET" id="get-usd-clp">

<template #header="header">

# USD / CLP

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



<!--@include: ./parts/get-usd-clp-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
[
  {
    "compra": "number",
    "venta": "number",
    "nombre": "string",
    "moneda": "string",
    "fechaActualizacion": "string"
  }
]
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
curl -X GET https://cl.dolarapi.com/v1/cotizaciones/usd
```

```js-vue [JavaScript]
fetch("https://cl.dolarapi.com/v1/cotizaciones/usd")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://cl.dolarapi.com/v1/cotizaciones/usd")
```

```python-vue [Python]
import requests
response = requests.get("https://cl.dolarapi.com/v1/cotizaciones/usd")
print(response.json())
```

:::

</template>

</Operation>
