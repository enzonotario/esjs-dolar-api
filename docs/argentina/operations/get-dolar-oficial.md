---
aside: false
outline: false
title: Dólar Oficial
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-oficial" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del dólar estadounidense en el mercado oficial. Es decir, el precio de compra y venta de dólares en bancos y casas de cambio autorizadas por el Banco Central de la República Argentina (BCRA).

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
curl -X GET https://dolarapi.com/v1/dolares/oficial
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares/oficial")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares/oficial")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares/oficial")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-dolar-oficial-footer.md -->

</template>

</OAOperation>
