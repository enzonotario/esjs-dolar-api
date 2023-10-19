// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'tailwindcss/tailwind.css'
import * as VueI18n from 'vue-i18n'
import Responses from './components/Responses.vue'
import ResponseBody from './components/ResponseBody.vue'
import Operation from './components/Operation.vue'
import OperationEndpoint from './components/OperationEndpoint.vue'
import TryItButton from './components/TryItButton.vue'
import en from './locales/en.json'
import es from './locales/es.json'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    const i18n = VueI18n.createI18n({
      locale: 'es', // set locale
      fallbackLocale: 'en', // set fallback locale
      messages: {
        en,
        es,
      },
    })
    app.use(i18n)

    app.component('Responses', Responses)
    app.component('ResponseBody', ResponseBody)
    app.component('Operation', Operation)
    app.component('OperationEndpoint', OperationEndpoint)
    app.component('TryItButton', TryItButton)
  },
}
