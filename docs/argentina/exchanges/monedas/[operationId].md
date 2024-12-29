---
aside: false
outline: false
title: vitepress-openapi
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import spec from '../../../public/exchanges/openapi.json'

const route = useRoute()

const { isDark } = useData()

const operationId = route.data.params.operationId
</script>

<OAOperation :spec="spec" :operationId="operationId" :isDark="isDark" />
