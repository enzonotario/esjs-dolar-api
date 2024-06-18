---
aside: false
outline: false
title: Dólares
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolares" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización actual del dólar estadounidense en Argentina. Incluye el precio de compra y venta de dólares en diferentes mercados (denominados "casas").

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
curl -X GET https://dolarapi.com/v1/dolares
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares")
print(response.json())
```

:::

</template>

<template #footer>

<!--@include: ./parts/get-dolares-footer.md -->

</template>

</OAOperation>
