---
aside: false
outline: false
title: Dólar Bolsa
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-bolsa" :hide-default-footer="false">

<template #description="description">

Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como **Dólar MEP**.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolar-bolsa-footer.md -->

</template>

</OAOperation>
