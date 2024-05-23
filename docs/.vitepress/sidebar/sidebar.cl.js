import { useSidebar } from 'vitepress-theme-openapi'
import { addRegionPrefixToSidebarItems, setRegionForSidebar } from './sidebar.utils.js'

setRegionForSidebar('cl')

const sidebar = useSidebar()

export default function sidebarCl() {
  return [
    {
      text: `<span class="SidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="SidebarItem-text">Inicio</span>
      </span>`,
      link: '/chile/',
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
        addRegionPrefixToSidebarItems('chile', sidebar.generateSidebarGroup('Cotización actual', '')),
      ],
    },
    addRegionPrefixToSidebarItems('chile', sidebar.generateSidebarGroup('API')),
  ]
}
