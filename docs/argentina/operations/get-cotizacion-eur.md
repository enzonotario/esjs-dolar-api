---
aside: false
outline: false
title: Euro
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-eur" :hide-default-footer="false">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Cotización del Euro en el mercado.

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

<!--@include: ./parts/get-cotizacion-eur-footer.md -->

</template>

</OAOperation>
