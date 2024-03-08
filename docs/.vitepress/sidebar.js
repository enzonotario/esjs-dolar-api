import { useOpenapi, useSidebar } from 'vitepress-theme-openapi'
import spec from './openapi.json'

const openapi = useOpenapi()
openapi.setSpec(spec)
const sidebar = useSidebar()

export function generateSidebar() {
  return [
    {
      text: `<span class="SidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="SidebarItem-text">Inicio</span>
      </span>`,
      link: '/',
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
        sidebar.generateSidebarGroup('Cotización actual Dólares', 'Dólares'),
        sidebar.generateSidebarGroup(
          'Cotización actual Monedas',
          'Otras Monedas',
        ),
      ],
    },
    {
      text: 'Cotización histórica',
      items: [
        {
          items: [
            {
              text: `<span class="SidebarItem">
              <svg class="i-mdi-chart-line w-5 h-5" />
              <span class="SidebarItem-text">ArgentinaDatos</span> 
              </span>`,
              link: 'https://argentinadatos.com/',
            },
          ],
        },
      ],
    },
    {
      text: 'Cotización Ámbito',
      items: [
        {
          items: [
            {
              text: `<span class="SidebarItem">
            <span class="w-5 h-5 bg-blue-200 text-gray-800 dark:bg-blue-600 dark:text-white rounded-full text-xs flex items-center justify-center">AF</span>
            <span class="SidebarItem-text">Dólares Ámbito</span>
          </span>`,
              link: '/ambito/',
            },
          ],
        },
      ],
    },
    sidebar.generateSidebarGroup('API'),
  ]
}
