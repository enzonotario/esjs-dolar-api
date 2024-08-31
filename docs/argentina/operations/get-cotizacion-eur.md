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

Cotización del Euro en el mercado.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-cotizacion-eur-footer.md -->

</template>

</OAOperation>
