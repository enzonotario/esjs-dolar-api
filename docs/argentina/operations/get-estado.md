---
aside: false
outline: false
title: Estado de la API
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<OAOperation operationId="get-estado" :hide-default-footer="false">

<template #description="description">

Devuelve el estado de la API.

</template>

<template #footer>


<OAFooter />


<!--@include: ./parts/get-estado-footer.md -->

</template>

</OAOperation>
