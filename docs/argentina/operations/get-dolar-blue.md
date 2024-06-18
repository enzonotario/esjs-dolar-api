---
aside: false
outline: false
title: Dólar Blue
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-blue" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del dólar estadounidense en el mercado paralelo o informal. Es decir, el precio de compra y venta de dólares en cuevas o casas de cambio no autorizadas por el Banco Central de la República Argentina (BCRA).

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

```json-vue
{{ response.response }}
```

</template>

</TryItButton>

## {{ $t('Samples') }}

::: code-group

```bash [cURL] 
curl -X GET https://dolarapi.com/v1/dolares/blue
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares/blue")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares/blue")
print(response.json())
```

:::

</template>

<template #footer>

<!--@include: ./parts/get-dolar-blue-footer.md -->

</template>

</OAOperation>
