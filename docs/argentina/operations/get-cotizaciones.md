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

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</TryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-cotizaciones-footer.md -->

</template>

</OAOperation>
