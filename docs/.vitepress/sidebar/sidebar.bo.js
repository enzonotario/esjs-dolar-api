import { useSidebar } from 'vitepress-theme-openapi'
import { useRegion } from '../theme/composables/useRegion.js'
import { addRegionPrefixToSidebarItems, setRegionForSidebar } from './sidebar.utils.js'

const region = useRegion().regions.find(region => region.code === 'bo')

setRegionForSidebar(region.code)

const sidebar = useSidebar()

export default function sidebarCl() {
  return [
    {
      text: `<span class="SidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="SidebarItem-text">Inicio</span>
      </span>`,
      link: '/bolivia/',
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
        addRegionPrefixToSidebarItems(region.prefix, sidebar.generateSidebarGroup('Cotización actual', '')),
      ],
    },
    addRegionPrefixToSidebarItems(region.prefix, sidebar.generateSidebarGroup('API')),
  ]
}
