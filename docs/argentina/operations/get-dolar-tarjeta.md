---
aside: false
outline: false
title: Dólar Tarjeta
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-tarjeta" :hide-default-footer="false">

<template #description="description">

<PathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto PAIS (30%), el impuesto a las ganancias (100%) y el impuesto a cuenta de bienes personales (25%).

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

<!--@include: ./parts/get-dolar-tarjeta-footer.md -->

</template>

</OAOperation>
