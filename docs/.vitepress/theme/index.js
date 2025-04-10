import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { theme, useTheme } from 'vitepress-openapi/client'
import Layout from 'genji-theme-vitepress'
import * as ObservablePlot from '@observablehq/plot'
import GitHubStars from './components/GitHubStars.vue'
import IndexDemo from './components/IndexDemo.vue'

import 'vitepress-openapi/dist/style.css'
import './style.css'

const props = {
  Theme: DefaultTheme,
  library: {
    Plot: ObservablePlot,
  },
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(Layout, props, {
      // 'sidebar-nav-before': () => h(SelectRegionSidebarItem),
      // 'nav-bar-content-before': () => h(SelectRegion),
      'nav-bar-content-after': () => h(GitHubStars),
    })
  },
  enhanceApp({ app }) {
    useTheme({
      i18n: {
        locale: 'es',
      },
      path: {
        showBaseURL: true,
      },
      codeSamples: {
        defaultHeaders: {},
      },
    })

    theme.enhanceApp({ app })

    app.component('IndexDemo', IndexDemo)
  },
}
