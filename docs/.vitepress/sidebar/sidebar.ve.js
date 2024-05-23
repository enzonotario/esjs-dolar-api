import { useSidebar } from 'vitepress-theme-openapi'
import { addRegionPrefixToSidebarItems, setRegionForSidebar } from './sidebar.utils.js'
import { useRegion } from '../theme/composables/useRegion.js'

const region = useRegion().regions.find(region => region.code === 'cl')

setRegionForSidebar(region.code)

const sidebar = useSidebar()

export default function sidebarVe() {
  return [
    {
      text: `<span class="SidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="SidebarItem-text">Inicio</span>
      </span>`,
      link: '/venezuela/',
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
        {
          text: 'Dólares',
          ...addRegionPrefixToSidebarItems(region.prefix, sidebar.generateSidebarGroup('Cotización actual Dólares', 'Dólares')),
        },
      ],
    },
    addRegionPrefixToSidebarItems(region.prefix, sidebar.generateSidebarGroup('API')),
  ]
}
