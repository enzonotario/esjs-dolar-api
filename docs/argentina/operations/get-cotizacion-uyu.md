---
aside: false
outline: false
title: Peso Uruguayo
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-uyu" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



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
curl -X GET https://dolarapi.com/v1/cotizaciones/uyu
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/cotizaciones/uyu")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/cotizaciones/uyu")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/cotizaciones/uyu")
print(response.json())
```

:::

</template>

<template #footer>

<!--@include: ./parts/get-cotizacion-uyu-footer.md -->

</template>

</OAOperation>
