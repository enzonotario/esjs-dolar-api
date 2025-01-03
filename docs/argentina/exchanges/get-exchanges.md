---
aside: false
outline: false
title: Listado de Exchanges
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { useOpenapi } from 'vitepress-openapi'
import spec from '../../public/exchanges/openapi.json'

const { isDark } = useData()
</script>

<OAOperation :spec="spec" operationId="get-exchanges" :isDark="isDark" />
