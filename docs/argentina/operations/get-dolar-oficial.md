---
aside: false
outline: false
title: Dólar Oficial
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-oficial" :hide-default-footer="false">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del dólar estadounidense en el mercado oficial. Es decir, el precio de compra y venta de dólares en bancos y casas de cambio autorizadas por el Banco Central de la República Argentina (BCRA).

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-dolar-oficial-footer.md -->

</template>

</OAOperation>
