---
aside: false
outline: false
title: Real Brasileño
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-brl" :hide-branding="false">

<template #description="description">

Cotización del Real Brasileño en el mercado.

</template>

<template #footer>

<!--@include: ./parts/get-cotizacion-brl-footer.md -->

</template>

</OAOperation>
