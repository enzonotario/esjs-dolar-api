import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h } from 'vue'
import GitHubStars from './components/GitHubStars.vue'
import SelectRegion from './components/SelectRegion.vue'
import Plot from './components/Plot.vue'
import { theme, useOpenapi } from 'vitepress-theme-openapi'
import spec from '../../public/openapi.json' assert { type: 'json' }
import 'vitepress-theme-openapi/dist/style.css'
import { useRegion } from './composables/useRegion.js'
import SelectRegionSidebarItem from './components/SelectRegionSidebarItem.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SelectRegionSidebarItem),
      'nav-bar-content-before': () => h(SelectRegion),
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

    theme.enhanceApp({ app })

    app.component('Plot', Plot)
  },
}
