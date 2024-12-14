import { useOpenapi } from 'vitepress-openapi'
import { useRegion } from '../theme/composables/useRegion.js'

const region = useRegion()

export function setRegionForSidebar(regionCode) {
  region.setCurrentRegion(regionCode)

  useOpenapi({
    spec: region.currentRegion.value.spec,
    config: {
      i18n: {
        locale: regionCode === 'br' ? 'pt-BR' : 'es',
      },
    },
  })
}

export function addRegionPrefixToSidebarItems(prefix, items) {
  return {
    items: items.items.map((item) => {
      if (item.link)
        item.link = `${prefix}${item.link}`

      if (item.items)
        item.items = addRegionPrefixToSidebarItems(item.items)

      return item
    }),
  }
}
