import { defineLoader } from 'vitepress'
import axios from 'axios'
import { load, type CheerioAPI } from 'cheerio'

export type CafecitoDonation = {
  name: string
  count: number
}

export type LatestCafecitosData = {
  latestCoffees: CafecitoDonation[]
  topDonations: CafecitoDonation[]
}

const PROFILE_BASE = 'https://cafecito.app'
const TARGET_URL = `${PROFILE_BASE}/enzonotario`

function parseTopDonations($: CheerioAPI): CafecitoDonation[] {
  const results: CafecitoDonation[] = []

  // Buscamos el header con el texto "Top Donadores" y de ahí obtenemos el listado.
  $('header').each((_, el) => {
    const text = $(el).text().trim().toLowerCase()
    if (!text.includes('top donadores'))
      return

    const container = $(el).closest('div')
    const ul = container.find('ul').first()

    ul.children('li').each((idx, li) => {
      // El primer li es el header de la tabla.
      if (idx === 0)
        return

      const divs = $(li).find('div')
      const name = (divs.eq(1).text() || '').trim()
      const countText = (divs.eq(2).text() || '').trim()
      const num = parseInt(countText.replace(/[^\d]/g, ''), 10)

      if (name && Number.isFinite(num))
        results.push({ name, count: num })
    })
  })

  return results
}

function parseLatestCoffees($: CheerioAPI): CafecitoDonation[] {
  const results: CafecitoDonation[] = []

  // Buscamos las secciones que contienen "te compró X cafecito(s)"
  $('section').each((_, sec) => {
    const $sec = $(sec)

    const sectionText = $sec.text().trim().toLowerCase()

    if (!sectionText.includes('te compró'))
      return

    const header = sectionText.split('cafecito')[0]
    const name = header.replace('te compró', '').trim()

    if (name) {
      const parts = name.split(' ')
      const lastPart = parts[parts.length - 1]
      const num = parseInt(lastPart.replace(/[^\d]/g, ''), 10)
      let finalName = name.replace(lastPart, '').trim()

      results.push({
        name: finalName || 'Anónimo',
        count: Number.isFinite(num) && num > 0 ? num : 1,
      })
    }
  })

  return results
}

async function fetchHtml(): Promise<string> {
  const { data } = await axios.get(TARGET_URL, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36',
      'Accept-Language': 'es-AR,es;q=0.9,en;q=0.8',
    },
    timeout: 15000,
    maxRedirects: 3,
    responseType: 'text',
    validateStatus: () => true,
  })

  return String(data || '')
}

export default defineLoader({
  async load(): Promise<LatestCafecitosData> {
    try {
      const html = await fetchHtml()
      if (!html || typeof html !== 'string' || html.length < 1000)
        throw new Error('HTML vacío o incompleto')

      const $ = load(html)

      const top = parseTopDonations($)
      const latest = parseLatestCoffees($)

      return {
        latestCoffees: latest,
        topDonations: top,
      }
    }
    catch {
      return {
        latestCoffees: [],
        topDonations: [],
      }
    }
  },
})
