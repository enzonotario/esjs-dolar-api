---
aside: false
outline: false
title: Peso Chileno
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-clp" :hide-branding="false">

<template #description="description">

Cotización del Peso Chileno en el mercado.

</template>

<template #footer>

<!--@include: ./parts/get-cotizacion-clp-footer.md -->

</template>

</OAOperation>
