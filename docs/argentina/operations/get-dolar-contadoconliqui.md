---
aside: false
outline: false
title: Dólar Contado con Liquidación
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-contadoconliqui" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como **Dólar CCL**.

</template>

<template #try-it="tryIt">

<TryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</TryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-dolar-contadoconliqui-footer.md -->

</template>

</OAOperation>
