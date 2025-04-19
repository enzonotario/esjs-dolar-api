import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { theme, useTheme } from 'vitepress-openapi/client'
import Layout from 'genji-theme-vitepress'
import * as ObservablePlot from '@observablehq/plot'

import IndexDemo from './components/IndexDemo.vue'
import CustomLayout from './CustomLayout.vue'

import 'vitepress-openapi/dist/style.css'
import './style.css'

const props = {
  Theme: {
    Layout: CustomLayout,
  },
  library: {
    Plot: ObservablePlot,
  },
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(Layout, props)
  },
  enhanceApp({ app }) {
    useTheme({
      i18n: {
        locale: 'es',
      },
      path: {
        showBaseURL: true,
      },
    })

    theme.enhanceApp({ app })

    app.component('IndexDemo', IndexDemo)
  },
}
