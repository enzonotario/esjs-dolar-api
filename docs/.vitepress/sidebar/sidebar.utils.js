import { useRegion } from '../theme/composables/useRegion.js'
import { useOpenapi } from 'vitepress-theme-openapi'

export function setRegionForSidebar(regionCode) {
  const region = useRegion()
  region.setCurrentRegion(regionCode)

  const openapi = useOpenapi()
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
