// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import 'tailwindcss/tailwind.css'
import './style.css'
import * as VueI18n from 'vue-i18n'
import en from './locales/en.json'
import es from './locales/es.json'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    const i18n = VueI18n.createI18n({
      locale: 'es',
      fallbackLocale: 'en',
      messages: {
        en,
        es,
      },
    })
    app.use(i18n)
  },
}
