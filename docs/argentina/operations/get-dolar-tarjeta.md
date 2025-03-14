---
aside: false
outline: false
title: Dólar Tarjeta
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

const spec = setRegionForSidebar('ar')
</script>

<OAOperation :spec="spec" operationId="get-dolar-tarjeta" :hide-branding="false">

<template #description="description">

Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto a las ganancias (30%).

</template>

<template #footer>

<!--@include: ./parts/get-dolar-tarjeta-footer.md -->

</template>

</OAOperation>
