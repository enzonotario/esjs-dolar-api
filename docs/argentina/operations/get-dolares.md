---
aside: false
outline: false
title: Dólares
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolares" :hide-default-footer="false">

<template #description="description">

Devuelve la cotización actual del dólar estadounidense en Argentina. Incluye el precio de compra y venta de dólares en diferentes mercados (denominados "casas").

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolares-footer.md -->

</template>

</OAOperation>
