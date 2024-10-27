---
aside: false
outline: false
title: Cotizaciones
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizaciones" :hide-branding="false">

<template #description="description">

Devuelve la cotización de todas las monedas.

</template>

<template #footer>

<!--@include: ./parts/get-cotizaciones-footer.md -->

</template>

</OAOperation>
