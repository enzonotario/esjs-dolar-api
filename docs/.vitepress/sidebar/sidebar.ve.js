import { useSidebar } from 'vitepress-theme-openapi'
import { addRegionPrefixToSidebarItems, setRegionForSidebar } from './sidebar.utils.js'

setRegionForSidebar('ve')

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
          ...addRegionPrefixToSidebarItems('venezuela', sidebar.generateSidebarGroup('Cotización actual Dólares', 'Dólares')),
        },
      ],
    },
    addRegionPrefixToSidebarItems('venezuela', sidebar.generateSidebarGroup('API')),
  ]
}
