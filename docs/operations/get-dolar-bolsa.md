---
aside: false
outline: false
title: Dólar Bolsa
---

<script setup>
import { useRoute } from 'vitepress'
</script>

<Operation method="GET" id="get-dolar-bolsa">

<template #header="header">

# Dólar Bolsa

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



<!--@include: ./parts/get-dolar-bolsa-description-after.md -->

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
curl -X GET https://dolarapi.com/v1/dolares/bolsa
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares/bolsa")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares/bolsa")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares/bolsa")
print(response.json())
```

:::

</template>

</Operation>
