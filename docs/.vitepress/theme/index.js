import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { theme, useShiki, useTheme } from 'vitepress-openapi/client'
import Layout from 'genji-theme-vitepress'
import * as ObservablePlot from '@observablehq/plot'

import IndexDemo from './components/IndexDemo.vue'
import CustomLayout from './CustomLayout.vue'
import SponsorsAvatars from './components/sponsors/SponsorsAvatars.vue'

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
  async enhanceApp({ app }) {
    useTheme({
      i18n: {
        locale: 'es',
      },
      path: {
        showBaseURL: true,
      },
    })

    await useShiki().initShiki()

    theme.enhanceApp({ app })

    app.component('IndexDemo', IndexDemo)
    app.component('SponsorsAvatars', SponsorsAvatars)
  },
}
