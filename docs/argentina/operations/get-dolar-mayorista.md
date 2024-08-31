---
aside: false
outline: false
title: Dólar Mayorista
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-mayorista" :hide-default-footer="false">

<template #description="description">

Cotización del dólar estadounidense en el mercado mayorista. Es decir, el precio de compra y venta de dólares en el mercado interbancario.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolar-mayorista-footer.md -->

</template>

</OAOperation>
