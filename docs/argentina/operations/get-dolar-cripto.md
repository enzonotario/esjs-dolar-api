---
aside: false
outline: false
title: Dólar Cripto
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-cripto" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del dólar estadounidense en el mercado de criptomonedas. Es decir, el precio de compra y venta de dólares en el mercado de criptoactivos.

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
curl -X GET https://dolarapi.com/v1/dolares/cripto
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares/cripto")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares/cripto")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares/cripto")
print(response.json())
```

:::

</template>

<template #footer>

<!--@include: ./parts/get-dolar-cripto-footer.md -->

</template>

</OAOperation>
