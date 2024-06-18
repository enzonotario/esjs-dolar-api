---
aside: false
outline: false
title: Dólar Oficial
head:
  - [
    'meta',
    {
      name: 'description',
      content: 'API de cotizaciones de monedas extranjeras en Venezuela',
    },
  ]
  - [
    'meta',
    {
      name: 'keywords',
      content: 'chile, dolar, euro, peso argentino, real, peso uruguayo, dolar api, dolar api chile',
    },
  ]
  - [
    'meta',
      {
        property: 'og:image',
        content: 'https://dolarapi.com/docs/assets/og.png',
      },
    ]
  - [
    'meta',
    {
      property: 'og:title',
      content: 'API para obtener el precio del Dólar en Venezuela',
    },
  ]
  - [
    'meta',
    {
      property: 'og:description',
      content: 'API de cotizaciones de monedas extranjeras en Venezuela',
    },
  ]
  - ['meta', { property: 'og:url', content: 'https://dolarapi.com' }]
  - ['meta', { property: 'og:site_name', content: 'DolarApi.com' }]
  - ['meta', { property: 'og:type', content: 'website' }]
  - ['meta', { property: 'og:locale', content: 'es_AR' }]
  - ['meta', { property: 'twitter:card', content: 'summary_large_image' }]
  - ['meta', { property: 'twitter:description', content: 'API de cotizaciones de monedas extranjeras en Venezuela' }]
  - ['meta', { property: 'twitter:title', content: 'API para obtener el precio del Dólar en Venezuela' }]
  - ['meta', { property: 'twitter:site', content: '@dolarapi' }]
  - ['meta', { property: 'twitter:creator', content: '@enzonotario_' }]
  - ['meta', { property: 'twitter:image', content: 'https://dolarapi.com/docs/assets/og.png' }]
  - ['meta', { property: 'twitter:url', content: 'https://dolarapi.com' }]
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ve')
</script>

<OAOperation operationId="get-dolar-oficial" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del Dólar Oficial en Venezuela

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
curl -X GET https://ve.dolarapi.com/v1/dolares/oficial
```

```js-vue [JavaScript]
fetch("https://ve.dolarapi.com/v1/dolares/oficial")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://ve.dolarapi.com/v1/dolares/oficial")
```

```python-vue [Python]
import requests
response = requests.get("https://ve.dolarapi.com/v1/dolares/oficial")
print(response.json())
```

:::

</template>

<template #footer>

<!--@include: ./parts/get-dolar-oficial-footer.md -->

</template>

</OAOperation>
