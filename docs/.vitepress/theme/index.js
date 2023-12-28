// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { h } from 'vue'
import GitHubStars from './components/GitHubStars.vue'
import Plot from './components/Plot.vue'
import { theme, useOpenapi } from 'vitepress-theme-openapi'
import spec from '../../public/openapi.json' assert { type: 'json' }
import 'vitepress-theme-openapi/dist/style.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(GitHubStars),
    })
  },
  enhanceApp({ app }) {
    const openapi = useOpenapi()
    openapi.setSpec(spec)
    theme.enhanceApp({ app })

    app.component('Plot', Plot)
  },
}
