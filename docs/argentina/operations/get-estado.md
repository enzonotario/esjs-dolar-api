---
aside: false
outline: false
title: Estado de la API
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

const spec = setRegionForSidebar('ar')
</script>

<OAOperation :spec="spec" operationId="get-estado" :hide-branding="false">

<template #description="description">

Devuelve el estado de la API.

</template>

<template #footer>

<!--@include: ./parts/get-estado-footer.md -->

</template>

</OAOperation>
