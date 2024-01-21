import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vitepress'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import { SitemapStream } from 'sitemap'
import { useOpenapi, useSidebar } from 'vitepress-theme-openapi'
import spec from './openapi.json' assert { type: 'json' }

const links = []

const env = loadEnv('', process.cwd())

const gTag = env.VITE_GTAG

const openapi = useOpenapi()
openapi.setSpec(spec)
const sidebar = useSidebar()

function generateSidebar() {
  return [
    {
      text: `<span class="SidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="SidebarItem-text">Inicio</span>
      </span>`,
      link: '/',
    },
    {
      text: `<span class="SidebarItem">
        <svg class="i-mdi-github w-5 h-5" />
        <span class="SidebarItem-text">GitHub</span>
      </span>`,
      link: 'https://github.com/enzonotario/esjs-dolar-api',
    },
    {
      text: 'Cotización actual',
      items: [
        sidebar.generateSidebarGroup('Cotización actual Dólares', 'Dólares'),
        sidebar.generateSidebarGroup(
          'Cotización actual Monedas',
          'Otras Monedas',
        ),
      ],
    },
    {
      text: 'Cotización histórica',
      items: [
       {
         items: [
           {
             text: `<span class="SidebarItem">
              <svg class="i-mdi-chart-line w-5 h-5" />
              <span class="SidebarItem-text">ArgentinaDatos</span> 
              </span>`,
             link: 'https://argentinadatos.com/',
           }
         ]
       }
      ],
    },
    sidebar.generateSidebarGroup('API'),
  ]
}

export default defineConfig({
  title: 'DolarApi.com',
  description: 'API para obtener la cotización del dólar en Argentina',
  lang: 'es-AR',

  outDir: '../dist/static/docs',
  base: '/docs/',
  srcExclude: ['**/operations/parts/*.md'],

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
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    ],
    [
      'link',
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
        rel: 'stylesheet',
      },
    ],
  ],

  /**
   * Sitemap generation
   */
  cleanUrls: false,
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
        /* conatins index.md? */
        url: pageData.relativePath.endsWith('index.md')
          ? '/'
          : `${pageData.relativePath.replace(
              /((^|\/)index)?\.md$/,
              '$2',
            )}.html`,
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
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((resolve) => writeStream.on('finish', resolve))
  },

  vite: {
    plugins: [
      vueI18n({
        ssr: true,
      }),
    ],
  },
})
