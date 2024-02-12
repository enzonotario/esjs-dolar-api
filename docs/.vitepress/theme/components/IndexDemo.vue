<script setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  githubUrl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="w-full max-w-xl mx-auto">
      <a :href="props.url" target="_blank" class="w-full max-w-md mx-auto h-[630px]" :aria-label="props.url">
        <img :src="props.image" class="w-full h-full rounded" :alt="props.url" loading="lazy">
      </a>
    </div>

    <div class="w-full max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
      <a :href="props.url" target="_blank" class="button flex justify-center items-center gap-1">
        <span class="i-mdi-open-in-new w-5 h-5" />
        Visitar
      </a>

      <a :href="props.githubUrl" target="_blank" class="button flex justify-center items-center gap-1">
        <span class="i-mdi-github w-5 h-5" />
        Ver en GitHub
      </a>
    </div>
  </div>
</template>
