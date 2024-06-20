---
aside: false
outline: false
title: Cotizaciones
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizaciones" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización de todas las monedas.

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
curl -X GET https://dolarapi.com/v1/cotizaciones
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/cotizaciones")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/cotizaciones")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/cotizaciones")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-cotizaciones-footer.md -->

</template>

</OAOperation>
