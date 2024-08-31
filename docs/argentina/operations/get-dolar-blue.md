---
aside: false
outline: false
title: Dólar Blue
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-blue" :hide-default-footer="false">

<template #description="description">

Cotización del dólar estadounidense en el mercado paralelo o informal. Es decir, el precio de compra y venta de dólares en cuevas o casas de cambio no autorizadas por el Banco Central de la República Argentina (BCRA).

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolar-blue-footer.md -->

</template>

</OAOperation>
