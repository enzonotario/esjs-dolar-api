---
aside: false
outline: false
title: Peso Chileno
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-clp" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del Peso Chileno en el mercado.

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
curl -X GET https://dolarapi.com/v1/cotizaciones/clp
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/cotizaciones/clp")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/cotizaciones/clp")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/cotizaciones/clp")
print(response.json())
```

:::

</template>

<template #footer>

<!--@include: ./parts/get-cotizacion-clp-footer.md -->

</template>

</OAOperation>
