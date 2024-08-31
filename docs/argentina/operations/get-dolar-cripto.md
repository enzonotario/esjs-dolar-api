---
aside: false
outline: false
title: Dólar Cripto
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-cripto" :hide-default-footer="false">

<template #description="description">

Cotización del dólar estadounidense en el mercado de criptomonedas. Es decir, el precio de compra y venta de dólares en el mercado de criptoactivos.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolar-cripto-footer.md -->

</template>

</OAOperation>
