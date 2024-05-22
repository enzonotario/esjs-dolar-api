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

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(SelectRegion),
      'nav-bar-content-after': () => h(GitHubStars),
    })
  },
  enhanceApp({ app }) {
    // if window is defined, we are in the browser
    if (!import.meta.env.SSR) {
      const url = new URL(window.location.href)

      const region = useRegion()
      region.determineRegionByURL(url.pathname)

      const openapi = useOpenapi()
      openapi.setSpec(region.currentRegion.value.spec)
    }

    theme.enhanceApp({ app })

    app.component('Plot', Plot)
  },
}
