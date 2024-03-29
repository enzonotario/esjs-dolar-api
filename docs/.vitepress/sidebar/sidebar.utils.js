import { useRegion } from '../theme/composables/useRegion.js'
import { useOpenapi } from 'vitepress-theme-openapi'

const region = useRegion()

export function setRegionForSidebar(regionCode) {
  const region = useRegion()
  region.setCurrentRegion(regionCode)

  const openapi = useOpenapi()
  openapi.setSpec(region.currentRegion.value.spec)
}

export function addRegionPrefixToSidebarItems(items) {
  return {
    items: items.items.map((item) => {
      if (item.link)
        item.link = `${region.currentRegion.value.prefix}${item.link}`

      if (item.items)
        item.items = addRegionPrefixToSidebarItems(item.items)

      return item
    }),
  }
}
