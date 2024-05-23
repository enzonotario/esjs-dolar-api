import { useOpenapi } from 'vitepress-theme-openapi'
import { useRegion } from '../theme/composables/useRegion.js'

const region = useRegion()
const openapi = useOpenapi()

export function setRegionForSidebar(regionCode) {
  region.setCurrentRegion(regionCode)

  openapi.setSpec(region.currentRegion.value.spec)
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
