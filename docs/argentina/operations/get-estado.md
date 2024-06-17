---
aside: false
outline: false
title: Estado de la API
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-estado" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />



<!--@include: ./parts/get-estado-description-after.md -->

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
curl -X GET https://dolarapi.com/v1/estado
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/estado")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/estado")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/estado")
print(response.json())
```

:::

</template>

</OAOperation>
