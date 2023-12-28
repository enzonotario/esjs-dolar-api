---
aside: false
outline: false
title: Dólar Mayorista
---

<script setup>
import { useRoute } from 'vitepress'
</script>

<Operation method="GET" id="get-dolar-mayorista">

<template #header="header">

# Dólar Mayorista

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



<!--@include: ./parts/get-dolar-mayorista-description-after.md -->

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
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
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
curl -X GET https://dolarapi.com/v1/dolares/mayorista
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares/mayorista")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares/mayorista")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares/mayorista")
print(response.json())
```

:::

</template>

</Operation>
