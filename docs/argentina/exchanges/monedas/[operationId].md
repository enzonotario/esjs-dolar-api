---
aside: false
outline: false
title: vitepress-openapi
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import spec from '../../../public/exchanges/openapi.json'

const route = useRoute()

const { isDark, params } = useData()

const operationId = route.data.params.operationId

document.title = params.value.pageTitle
</script>

<OAOperation :spec="spec" :operationId="operationId" :isDark="isDark" />
