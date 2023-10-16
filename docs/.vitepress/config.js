import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { useSwagger } from './theme/composables/useSwagger.js'

const swagger = useSwagger()

const METHOD_GET = 'get'

function generateSidebarItem(method, path) {
  const { operationId, summary } = swagger.json.paths[path].get
  return {
    text: `<span class="SidebarItem">
    <span class="SidebarItem-badge">${method.toUpperCase()}</span>
    <span class="SidebarItem-text">${summary}</span>
    </span>`,
    link: `/operations/${operationId}`,
  }
}

function generateSidebar(req, res) {
  const sidebarCotizacionActualElements = Object.keys(swagger.json.paths)
    .filter((path) => {
      const { tags } = swagger.json.paths[path][METHOD_GET]
      return tags?.includes('Cotización actual')
    })
    .map((path) => {
      return generateSidebarItem(METHOD_GET, path)
    })

  const sidebarApiElements = Object.keys(swagger.json.paths)
    .filter((path) => {
      const { tags } = swagger.json.paths[path][METHOD_GET]
      return tags?.includes('API')
    })
    .map((path) => {
      return generateSidebarItem(METHOD_GET, path)
    })

  return [
    {
      text: 'Cotización actual',
      items: sidebarCotizacionActualElements,
    },
    {
      text: 'API',
      items: sidebarApiElements,
    },
  ]
}

export default defineConfig({
  title: 'DolarApi.com',
  description: 'API para obtener la cotización del dólar en Argentina',

  // srcDir: './docs',
  outDir: '../dist/docs',

  themeConfig: {
    logo: '/assets/logo.webp',
    nav: [
      { text: 'Inicio', link: '/' },
    ],
    sidebar: generateSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/enzonotario/esjs-dolar-api' },
    ],
  },

  head: [
    // TODO: Google Analytics

    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap', rel: 'stylesheet' },
    ],
  ],

  vite: {
    resolve: {
      alias: {
        '@swagger': fileURLToPath(new URL('../public/swagger.json', import.meta.url)),
        // '@theme': fileURLToPath(new URL('./theme', import.meta.url)),
      },
    },
  },
})
