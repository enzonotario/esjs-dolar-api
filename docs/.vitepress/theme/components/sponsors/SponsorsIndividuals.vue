<script setup>
import { ref } from 'vue'
import { data } from '../../../data/latestCafecitos.data'
import SponsorCard from './SponsorCard.vue'

const githubSponsors = ref([
  'https://github.com/catdevnull',
  'https://github.com/Xyborg',
])
</script>

<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SponsorCard v-for="(profile, idx) in githubSponsors" :key="idx" :profile="profile" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <div class="flex flex-col gap-2">
        <h3>Top Cafecitos</h3>
        <div class="flex flex-col gap-2">
          <a
            v-for="(donation, idx) in data.topDonations"
            :key="idx"
            href="https://cafecito.app/enzonotario"
            target="_blank"
            rel="noopener noreferrer"
            class="block border rounded-lg p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors !no-underline"
          >
            {{ donation.name }}
          </a>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <h3>Últimos Cafecitos</h3>
        <div class="flex flex-col gap-2">
          <a
            v-for="(donation, idx) in data.latestCoffees"
            :key="idx"
            href="https://cafecito.app/enzonotario"
            target="_blank"
            rel="noopener noreferrer"
            class="block border rounded-lg p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors !no-underline"
          >
            {{ donation.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
