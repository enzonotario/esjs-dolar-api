import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { theme, useOpenapi, useTheme } from 'vitepress-theme-openapi'
import { useRegion } from './composables/useRegion.js'
import GitHubStars from './components/GitHubStars.vue'
import Plot from './components/Plot.vue'
import IndexDemo from './components/IndexDemo.vue'

import 'vitepress-theme-openapi/dist/style.css'
import './style.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'sidebar-nav-before': () => h(SelectRegionSidebarItem),
      // 'nav-bar-content-before': () => h(SelectRegion),
      'nav-bar-content-after': () => h(GitHubStars),
    })
  },
  enhanceApp({ app }) {
    if (!import.meta.env.SSR) {
      const url = new URL(window.location.href)

      const region = useRegion()
      region.determineRegionByURL(url)

      const openapi = useOpenapi()
      openapi.setSpec(region.currentRegion.value.spec)
    }

    const themeConfig = useTheme()
    themeConfig.setLocale('es')
    themeConfig.setShowBaseURL(true)

    theme.enhanceApp({ app })

    app.component('Plot', Plot)
    app.component('IndexDemo', IndexDemo)
  },
}
