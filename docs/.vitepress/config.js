import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vitepress'
import vueI18n from '@intlify/unplugin-vue-i18n/vite'
import { SitemapStream } from 'sitemap'
import { generateSidebar } from './sidebar.js'
import sidebarCl from './sidebar.cl.js'

const links = []

const env = loadEnv('', process.cwd())

const gTag = env.VITE_GTAG

export default defineConfig({
  title: 'DolarApi.com',
  description: 'API para obtener la cotización del dólar en Argentina',
  lang: 'es-AR',

  outDir: '../dist/static/docs',
  base: '/docs/',
  srcExclude: ['**/operations/parts/*.md'],

  themeConfig: {
    logo: '/assets/logo.webp',
    sidebar: {
      '/': generateSidebar(),
      '/chile/': sidebarCl(),
    },
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
  },
})
