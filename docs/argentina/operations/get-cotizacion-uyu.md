---
aside: false
outline: false
title: Peso Uruguayo
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-uyu" :hide-branding="false">

<template #description="description">

Cotización del Peso Uruguayo en el mercado.

</template>

<template #footer>

<!--@include: ./parts/get-cotizacion-uyu-footer.md -->

</template>

</OAOperation>
