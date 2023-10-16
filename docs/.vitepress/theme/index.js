// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './style.css'
import 'tailwindcss/tailwind.css'
import Responses from './components/Responses.vue'
import ResponseBody from './components/ResponseBody.vue'
import Operation from './components/Operation.vue'
import OperationEndpoint from './components/OperationEndpoint.vue'
import TryItButton from './components/TryItButton.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('Responses', Responses)
    app.component('ResponseBody', ResponseBody)
    app.component('Operation', Operation)
    app.component('OperationEndpoint', OperationEndpoint)
    app.component('TryItButton', TryItButton)
  },
}
