---
aside: false
outline: false
title: Dólar Tarjeta
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-tarjeta" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



<!--@include: ./parts/get-dolar-tarjeta-description-after.md -->

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
curl -X GET https://dolarapi.com/v1/dolares/tarjeta
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/dolares/tarjeta")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/dolares/tarjeta")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/dolares/tarjeta")
print(response.json())
```

:::

</template>

</OAOperation>
