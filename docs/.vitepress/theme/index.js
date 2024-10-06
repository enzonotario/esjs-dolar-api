import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { theme, useTheme } from 'vitepress-openapi'
import GitHubStars from './components/GitHubStars.vue'
import Plot from './components/Plot.vue'
import IndexDemo from './components/IndexDemo.vue'

import 'vitepress-openapi/dist/style.css'
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
    const themeConfig = useTheme()
    themeConfig.setLocale('es')
    themeConfig.setShowBaseURL(true)

    theme.enhanceApp({ app })

    app.component('Plot', Plot)
    app.component('IndexDemo', IndexDemo)
  },
}
