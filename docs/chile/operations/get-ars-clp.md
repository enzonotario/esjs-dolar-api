---
aside: false
outline: false
title: ARS / CLP
---

<script setup>
import { useRoute } from 'vitepress'
</script>

<Operation method="GET" id="get-ars-clp">

<template #header="header">

# ARS / CLP

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del peso argentino en pesos chilenos

<!--@include: ./parts/get-ars-clp-description-after.md -->

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
  "ultimoCierre": "number",
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
curl -X GET https://cl.dolarapi.com/v1/cotizaciones/ars
```

```js-vue [JavaScript]
fetch("https://cl.dolarapi.com/v1/cotizaciones/ars")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://cl.dolarapi.com/v1/cotizaciones/ars")
```

```python-vue [Python]
import requests
response = requests.get("https://cl.dolarapi.com/v1/cotizaciones/ars")
print(response.json())
```

:::

</template>

</Operation>
