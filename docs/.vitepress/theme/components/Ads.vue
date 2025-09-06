<script setup>
import { h, onMounted, onUnmounted, ref } from 'vue'

const defaultLink = 'https://dub.sh/gh-tier-banner-da'

const desktopAds = [
  { src: 'https://placehold.co/1200x200?text=Ad+1\\n1200x200', link: defaultLink },
  { src: 'https://placehold.co/1200x200?text=Ad+2\\n1200x200', link: defaultLink },
  { src: 'https://placehold.co/1200x200?text=Ad+3\\n1200x200', link: defaultLink },
]
const mobileAds = [
  { src: 'https://placehold.co/400x200?text=Ad+1\\n400x200', link: defaultLink },
  { src: 'https://placehold.co/400x200?text=Ad+2\\n400x200', link: defaultLink },
  { src: 'https://placehold.co/400x200?text=Ad+3\\n400x200', link: defaultLink },
]

const current = ref(0)
let intervalId

function next() {
  current.value = (current.value + 1) % desktopAds.length
  resetInterval()
}
function prev() {
  current.value = (current.value - 1 + desktopAds.length) % desktopAds.length
  resetInterval()
}

function resetInterval() {
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    next()
  }, 4000)
}

onMounted(() => {
  resetInterval()
})
onUnmounted(() => {
  clearInterval(intervalId)
})

function CarouselAd(props) {
  return h('div', { class: props.breakpoint }, [
    h('a', {
      href: props.ads[props.current].link,
      target: '_blank',
      rel: 'noopener',
      class: 'block',
    }, [
      h('img', {
        src: props.ads[props.current].src,
        alt: 'Ad',
        class: 'w-full rounded-lg',
      }),
    ]),
    h('button', {
      class: 'size-8 absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 rounded-full px-2 py-1 shadow',
      onClick: props.prev,
    }, '‹'),
    h('button', {
      class: 'size-8 absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 dark:bg-gray-800/70 rounded-full px-2 py-1 shadow',
      onClick: props.next,
    }, '›'),
    h('div', {
      class: 'absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2',
    }, props.ads.map((ad, i) =>
      h('span', {
        key: i,
        class: `w-2 h-2 rounded-full ${i === props.current ? 'bg-indigo-500' : 'bg-gray-300'}`,
      }),
    )),
  ])
}
</script>

<template>
  <div class="relative">
    <!-- Desktop Carousel -->
    <component :is="CarouselAd" :ads="desktopAds" :current="current" :next="next" :prev="prev" breakpoint="hidden md:block" />
    <!-- Mobile Carousel -->
    <component :is="CarouselAd" :ads="mobileAds" :current="current" :next="next" :prev="prev" breakpoint="md:hidden" />
    <!-- Ad indicator -->
    <div class="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
      Ad
    </div>
  </div>
</template>
