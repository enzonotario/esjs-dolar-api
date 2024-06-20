---
aside: false
outline: false
title: Dólares Ámbito
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<div class="flex flex-col">

<OAOperation operationId="get-ambito-dolares" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolares-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-oficial" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/oficial
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/oficial")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/oficial")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/oficial")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-oficial-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-blue" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/blue
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/blue")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/blue")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/blue")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-blue-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-bolsa" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/bolsa
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/bolsa")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/bolsa")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/bolsa")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-bolsa-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-contadoconliqui" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/contadoconliqui
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/contadoconliqui")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/contadoconliqui")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/contadoconliqui")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-contadoconliqui-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-tarjeta" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/tarjeta
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/tarjeta")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/tarjeta")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/tarjeta")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-tarjeta-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-mayorista" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/mayorista
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/mayorista")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/mayorista")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/mayorista")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-mayorista-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-cripto" :hide-default-footer="true">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

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
curl -X GET https://dolarapi.com/v1/ambito/dolares/cripto
```

```js-vue [JavaScript]
fetch("https://dolarapi.com/v1/ambito/dolares/cripto")
  .then(response => response.json())
  .then(data => console.log(data));
```

```php-vue [PHP]
file_get_contents("https://dolarapi.com/v1/ambito/dolares/cripto")
```

```python-vue [Python]
import requests
response = requests.get("https://dolarapi.com/v1/ambito/dolares/cripto")
print(response.json())
```

:::

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-cripto-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAFooter />

</div>