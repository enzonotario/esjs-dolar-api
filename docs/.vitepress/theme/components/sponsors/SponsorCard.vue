<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  profile: {
    type: String,
    required: true,
  },
  // Optional: allow forcing a platform (e.g., 'github') for wrapper components
  type: {
    type: String,
    default: '',
  },
})

const normalizedProfile = computed(() => (props.profile || '').trim())

const isGithub = computed(() => {
  if (props.type === 'github' || normalizedProfile.value.startsWith('https://github.com'))
    return true
  if (props.type)
    return false

  const p = normalizedProfile.value
  if (!p)
    return false

  if (p.startsWith('http://') || p.startsWith('https://')) {
    try {
      const u = new URL(p)
      const host = u.hostname.toLowerCase()
      if (host.includes('github.com'))
        return true
    }
    catch {}
  }
  return false
})

const platform = computed(() => {
  if (isGithub.value)
    return 'github'

  const p = normalizedProfile.value
  if (!p)
    return 'cafecito'

  if (p.startsWith('http://') || p.startsWith('https://')) {
    try {
      const u = new URL(p)
      const host = u.hostname.toLowerCase()
      if (host.includes('twitter.com') || host.includes('x.com'))
        return 'twitter'
      if (host.includes('cafecito.app'))
        return 'cafecito'
    }
    catch {}
  }

  if (p.startsWith('@'))
    return 'twitter'

  return 'cafecito'
})

const username = computed(() => {
  const p = normalizedProfile.value
  if (!p)
    return ''

  try {
    if (p.startsWith('http://') || p.startsWith('https://')) {
      const u = new URL(p)
      const seg = u.pathname.split('/').filter(Boolean)
      return (seg[0] || '').replace(/^@/, '')
    }
  }
  catch {}

  return p.replace(/^@/, '')
})

// GitHub data
const loading = ref(false)
const error = ref('')
const data = ref(null)

onMounted(async () => {
  if (platform.value !== 'github')
    return

  const user = username.value
  loading.value = true
  if (!user) {
    loading.value = false
    error.value = 'Usuario inválido'
    return
  }

  try {
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(user)}`)
    if (!res.ok)
      throw new Error(`HTTP ${res.status}`)

    data.value = await res.json()
  }
  catch (err) {
    error.value = 'No se pudo cargar el perfil'
  }
  finally {
    loading.value = false
  }
})

const href = computed(() => {
  const user = username.value
  if (!user)
    return '#'

  if (platform.value === 'github')
    return data.value?.html_url || `https://github.com/${encodeURIComponent(user)}`

  return platform.value === 'twitter'
    ? `https://twitter.com/${encodeURIComponent(user)}`
    : `https://cafecito.app/${encodeURIComponent(user)}`
})

const iconClass = computed(() => {
  if (platform.value === 'github')
    return ''
  return platform.value === 'twitter' ? 'i-mdi-twitter' : 'i-mdi-coffee'
})

const platformLabel = computed(() => {
  if (platform.value === 'github')
    return ''
  return platform.value === 'twitter' ? 'Twitter' : 'Cafecito'
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="block border rounded-lg p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors no-underline"
  >
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <template v-if="platform === 'github'">
          <img v-if="!loading && !error && data?.avatar_url" :src="data.avatar_url" :alt="data?.login || username" class="w-full h-full object-cover">
          <span v-else class="i-mdi-account text-gray-400 text-xl" />
        </template>
        <template v-else>
          <span class="text-xl text-gray-500" :class="iconClass" />
        </template>
      </div>
      <div class="min-w-0">
        <div class="font-medium text-gray-900 dark:text-gray-100 truncate">
          <template v-if="platform === 'github'">
            <span v-if="!loading && !error && (data?.name || data?.login)">{{ data?.name || data?.login }}</span>
            <span v-else-if="loading">Cargando…</span>
            <span v-else>{{ username }}</span>
          </template>
          <template v-else>
            <span v-if="username">@{{ username }}</span>
            <span v-else>Perfil</span>
          </template>
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400 truncate">
          <template v-if="platform === 'github'">
            <span v-if="!loading && !error && data?.login">@{{ data.login }}</span>
            <span v-else-if="error">{{ error }}</span>
            <span v-else>&nbsp;</span>
          </template>
          <template v-else>
            {{ platformLabel }}
          </template>
        </div>
      </div>
    </div>
  </a>
</template>
