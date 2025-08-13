<script setup>
import { ref } from 'vue'
import SponsorCard from './SponsorCard.vue'

const sponsors = ref([
  'https://github.com/catdevnull',
  'https://github.com/Xyborg',
  'https://x.com/ferminrp',
  'https://x.com/lozards',
])
</script>

<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SponsorCard v-for="(profile, idx) in sponsors" :key="idx" :profile="profile" />
    </div>
  </div>
</template>
