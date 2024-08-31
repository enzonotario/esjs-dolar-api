---
aside: false
outline: false
title: Dólar Contado con Liquidación
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-contadoconliqui" :hide-default-footer="false">

<template #description="description">

Cotización del dólar estadounidense en el mercado bursátil. Es decir, el precio de compra y venta de dólares en el mercado de valores. También conocido como **Dólar CCL**.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolar-contadoconliqui-footer.md -->

</template>

</OAOperation>
