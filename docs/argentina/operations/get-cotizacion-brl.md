---
aside: false
outline: false
title: Real Brasileño
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-cotizacion-brl" :hide-default-footer="false">

<template #description="description">

Cotización del Real Brasileño en el mercado.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-cotizacion-brl-footer.md -->

</template>

</OAOperation>
