<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 44,
  },
})

const sizePx = computed(() => typeof props.size === 'number' ? `${props.size}px` : props.size)

function isImageUrl(s) {
  if (!s || typeof s !== 'string')
    return false
  const lower = s.toLowerCase()
  if (lower.startsWith('data:image/'))
    return true
  return /(\.png|\.jpg|\.jpeg|\.gif|\.webp|\.svg)(\?.*)?$/.test(lower)
}

function parseItem(entry) {
  // Returns normalized object: { type, href, imgSrc, iconClass, label, alt }
  if (!entry)
    return null

  const isStr = typeof entry === 'string'
  const raw = isStr ? entry.trim() : entry

  let type = isStr ? '' : (raw.type || '')
  let url = isStr ? raw : (raw.url || '')
  let username = isStr ? '' : (raw.username || '')
  const name = isStr ? '' : (raw.name || '')
  let href = isStr ? '' : (raw.href || '')

  if (isStr) {
    // Try to infer from string
    const s = raw
    if (s.startsWith('@')) {
      type = 'twitter'
      username = s.replace(/^@/, '')
    }
    else if (/^https?:\/\//i.test(s)) {
      try {
        const u = new URL(s)
        const host = u.hostname.toLowerCase()
        if (host.includes('github.com')) {
          type = 'github'
          const seg = u.pathname.split('/').filter(Boolean)
          username = (seg[0] || '').replace(/^@/, '')
          href = `https://github.com/${encodeURIComponent(username)}`
        }
        else if (host.includes('twitter.com') || host.includes('x.com')) {
          type = 'twitter'
          const seg = u.pathname.split('/').filter(Boolean)
          username = (seg[0] || '').replace(/^@/, '')
          href = `https://twitter.com/${encodeURIComponent(username)}`
        }
        else {
          type = 'logo'
          url = s
          href = s
        }
      }
      catch (e) {
        // If invalid URL string, treat as logo URL
        type = 'logo'
        url = s
        href = s
      }
    }
    else {
      // Fallback: treat as github username
      type = 'github'
      username = s
      href = `https://github.com/${encodeURIComponent(username)}`
    }
  }
  else {
    // object entry: infer missing type from url/username
    if (!type) {
      if (username && raw.type !== 'logo') {
        // If username provided and not a logo, default to github unless specified
        type = 'github'
      }
      else if (url && /^https?:\/\//i.test(url)) {
        try {
          const u = new URL(url)
          const host = u.hostname.toLowerCase()
          if (host.includes('github.com'))
            type = 'github'
          else if (host.includes('twitter.com') || host.includes('x.com'))
            type = 'twitter'
          else
            type = 'logo'
        }
        catch {
          type = 'logo'
        }
      }
      else {
        type = 'logo'
      }
    }
    if (!href) {
      if (type === 'github' && username)
        href = `https://github.com/${encodeURIComponent(username)}`
      else if (type === 'twitter' && username)
        href = `https://twitter.com/${encodeURIComponent(username)}`
      else if (url)
        href = url
      else
        href = '#'
    }
  }

  let imgSrc = ''
  let iconClass = ''
  let label = ''
  let alt = ''

  if (type === 'github') {
    const user = username || (() => {
      if (url) {
        try {
          const u = new URL(url)
          const seg = u.pathname.split('/').filter(Boolean)
          return (seg[0] || '').replace(/^@/, '')
        }
        catch {}
      }
      return ''
    })()
    if (user)
      imgSrc = `https://github.com/${encodeURIComponent(user)}.png`
    label = name || `@${user}`
    alt = name ? `${name} (GitHub)` : `${user} (GitHub)`
  }
  else if (type === 'twitter') {
    const user = username || (() => {
      if (url) {
        try {
          const u = new URL(url)
          const seg = u.pathname.split('/').filter(Boolean)
          return (seg[0] || '').replace(/^@/, '')
        }
        catch {}
      }
      return ''
    })()
    iconClass = 'i-mdi-twitter'
    label = name || `@${user}`
    alt = name ? `${name} (Twitter)` : `${user} (Twitter)`
  }
  else {
    // logo
    const explicitLogo = isStr ? '' : (raw.logo || raw.logoUrl || raw.img || raw.image || '')
    if (explicitLogo && isImageUrl(explicitLogo))
      imgSrc = explicitLogo
    else if (isImageUrl(url))
      imgSrc = url
    else
      imgSrc = ''
    label = name || ''
    alt = name || 'Logo'
  }

  return { type, href: href || '#', imgSrc, iconClass, label, alt }
}

const items = computed(() => ([
  { type: 'logo', logoUrl: 'https://argentinadatos.com/assets/sponsors/theonclub.jpg', url: 'https://www.theonclub.com/', name: 'O(n) Club' },
  'https://github.com/catdevnull',
  'https://github.com/Xyborg',
  'https://x.com/ferminrp',
  'https://x.com/lozards',
  { type: 'logo', url: '/docs/sponsors', name: 'Tu Logo' },
])
  .map(parseItem)
  .filter(Boolean))
</script>

<template>
  <div class="flex flex-col gap-w">
    <div class="flex flex-wrap gap-2 items-center" :style="{ '--size': sizePx }">
      <a
        v-for="(it, idx) in items"
        :key="idx"
        :href="it.href"
        :aria-label="it.label || 'Sponsor'"
        :title="it.label || undefined"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex items-center overflow-hidden rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border border-transparent hover:border-indigo-300 dark:hover:border-indigo-600 !no-underline"
        :style="{ maxWidth: 'var(--size)', height: 'var(--size)' }"
      >
        <div class="flex-shrink-0 w-[var(--size)] h-[var(--size)] flex items-center justify-center overflow-hidden">
          <template v-if="it.type === 'twitter'">
            <span class="text-gray-500 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-white text-xl" :class="it.iconClass" />
          </template>
          <template v-else>
            <img v-if="it.imgSrc" :src="it.imgSrc" :alt="it.alt" class="w-full h-full object-cover" loading="lazy">
            <span v-else class="i-mdi-image text-gray-400 text-xl" />
          </template>
        </div>
        <div class="pl-2 pr-3 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">
          {{ it.label }}
        </div>
      </a>
    </div>

    <a
      href="/docs/sponsors"
      class="mt-4 text-sm text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
      title="Ver todos los sponsors"
      aria-label="Ver todos los sponsors"
    >
      Ver sponsors
    </a>
  </div>
</template>

<style scoped>
/* Hover-to-expand behavior using max-width transition. */
a.group {
  transition: max-width 220ms ease, background-color 150ms ease, border-color 150ms ease;
}
a.group:hover,
a.group:focus-visible {
  max-width: 20rem !important; /* allow pill to expand to reveal text */
}
</style>
