---
aside: false
outline: false
title: Dólar Tarjeta
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-dolar-tarjeta" :hide-default-footer="false">

<template #description="description">

Es el valor de la cotización del dólar estadounidense en el mercado oficial, más el impuesto PAIS (30%), el impuesto a las ganancias (100%) y el impuesto a cuenta de bienes personales (25%).

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-dolar-tarjeta-footer.md -->

</template>

</OAOperation>
