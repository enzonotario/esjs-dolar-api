---
aside: false
outline: false
title: Dólar Bolsa
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-bolsa" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como **Dólar MEP**.

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

<template #footer>

<OAFooter />

<!--@include: ./parts/get-dolar-bolsa-footer.md -->

</template>

</OAOperation>
