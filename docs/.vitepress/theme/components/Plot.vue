<script setup>
import { onMounted, watch } from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { useData } from 'vitepress'
import { usePlots } from '../composables/usePlots'

const { isDark } = useData()

const plots = usePlots()

onMounted(() => {
  plots.findCasaToPlot(document)

  useResizeObserver(document.body, () => {
    plots.resizeCharts(document)
  })
})

watch(
  isDark,
  () => {
    plots.setDarkMode(isDark.value)
  },
  { immediate: true },
)
</script>

<template>
  <div></div>
</template>
