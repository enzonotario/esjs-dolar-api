---
aside: false
outline: false
title: Dólares Ámbito
---

<script setup>
import { useRoute } from 'vitepress'
</script>

<Operation method="GET" id="get-ambito-dolares">

<template #header="header">

# Dólares Ámbito

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolares-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
[
  {
    "compra": "number",
    "venta": "number",
    "casa": "string",
    "nombre": "string",
    "moneda": "string",
    "fechaActualizacion": "string"
  }
]
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-oficial">

<template #header="header">

# Dólar Oficial

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-oficial-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-blue">

<template #header="header">

# Dólar Blue

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-blue-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-bolsa">

<template #header="header">

# Dólar Bolsa

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-bolsa-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-contadoconliqui">

<template #header="header">

# Dólar Contado con Liquidación

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-contadoconliqui-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-tarjeta">

<template #header="header">

# Dólar Tarjeta

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-tarjeta-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-mayorista">

<template #header="header">

# Dólar Mayorista

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-mayorista-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
      
<Operation method="GET" id="get-ambito-dolar-cripto">

<template #header="header">

# Dólar Cripto

</template>

<template #description="description">

<OperationEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

<!--@include: ./parts/get-ambito-dolar-cripto-description-after.md -->

</template>

<template #responses="responses">

## {{ $t('Response') }}

<Responses :responses="responses.responses" :schema="responses.schema" :responseType="responses.responseType">

<template #body="body">

<ResponseBody :schema="body.schema" :responseType="body.responseType" />

</template>

<template #example="example">

```json
{
  "compra": "number",
  "venta": "number",
  "casa": "string",
  "nombre": "string",
  "moneda": "string",
  "fechaActualizacion": "string"
}
```

</template>

</Responses>

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method">

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

</Operation>

<hr style="margin: 4rem 0;">
