import { URL, fileURLToPath } from 'node:url'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vitepress'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import { SitemapStream } from 'sitemap'
import { useOpenapi } from './theme/composables/useOpenapi.js'

const links = []

const openapi = useOpenapi()

const METHOD_GET = 'get'

const env = loadEnv('', process.cwd())

const gTag = env.VITE_GTAG

function generateSidebarItem(method, path) {
  const { operationId, summary } = openapi.json.paths[path].get

  const sidebarTitle = openapi.json.paths[path].get['x-sidebar-title'] || summary

  return {
    text: `<span class="SidebarItem">
    <span class="SidebarItem-badge">${method.toUpperCase()}</span>
    <span class="SidebarItem-text">${sidebarTitle}</span>
    </span>`,
    link: `/operations/${operationId}`,
  }
}

function generateSidebarGroup(tag, text) {
  if (!text)
    text = tag

  const sidebarGroupElements = Object.keys(openapi.json.paths)
    .filter((path) => {
      const { tags } = openapi.json.paths[path][METHOD_GET]
      return tags?.includes(tag)
    })
    .map((path) => {
      return generateSidebarItem(METHOD_GET, path)
    })

  return {
    text,
    items: sidebarGroupElements,
  }
}

function generateSidebar() {
  return [
    {
      text: `<span class="SidebarItem">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-gray-600 dark:text-gray-400 fill-current">
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"/>
        </svg>
        <span class="SidebarItem-text">Inicio</span>
        </span>`,
      link: '/',
    },
    {
      text: `<span class="SidebarItem">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-gray-600 dark:text-gray-400 fill-current">
                <path fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
            </svg>
            <span class="SidebarItem-text">GitHub</span>
            </span>`,
      link: 'https://github.com/enzonotario/esjs-dolar-api',
    },
    {
      text: 'Cotización actual',
      items: [
        generateSidebarGroup('Cotización actual Dólares', 'Dólares'),
        generateSidebarGroup('Cotización actual Monedas', 'Otras Monedas'),
      ],
    },
    generateSidebarGroup('API'),
  ]
}

export default defineConfig({
  title: 'DolarApi.com',
  description: 'API para obtener la cotización del dólar en Argentina',
  lang: 'es-AR',

  outDir: '../dist/static/docs',
  base: '/docs/',

  themeConfig: {
    logo: '/assets/logo.webp',
    sidebar: generateSidebar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/enzonotario/esjs-dolar-api' },
    ],
  },

  head: [
    // Google Analytics
    [
      'script',
      { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${gTag}` },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gTag}');`,
    ],

    // Google Fonts
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

  /**
   * Sitemap generation
   */
  cleanUrls: false,
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
        url: /* conatins index.md? */
            pageData.relativePath.endsWith('index.md')
              ? '/'
              : `${pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}.html`,
        lastmod: pageData.lastUpdated,
      })
    }
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://dolarapi.com/docs/',
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach(link => sitemap.write(link))
    sitemap.end()
    await new Promise(resolve => writeStream.on('finish', resolve))
  },

  vite: {
    plugins: [
      vueI18n({
        ssr: true,
      }),
    ],

    resolve: {
      alias: {
        '@openapi': fileURLToPath(new URL('../public/openapi.json', import.meta.url)),
      },
    },
  },
})
