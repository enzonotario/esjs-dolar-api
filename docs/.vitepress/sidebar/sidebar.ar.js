import { useSidebar } from 'vitepress-theme-openapi'
import { useRegion } from '../theme/composables/useRegion.js'
import { addRegionPrefixToSidebarItems, setRegionForSidebar } from './sidebar.utils.js'

const region = useRegion().regions.find(region => region.code === 'ar')

setRegionForSidebar(region.code)

const sidebar = useSidebar({ spec: region.spec })

function getCotizacionActualItems() {
  const dolares = sidebar.generateSidebarGroup('Cotización actual Dólares', 'Dólares')

  const monedas = sidebar.generateSidebarGroup(
    'Cotización actual Monedas',
    'Otras Monedas',
  )

  return [
    {
      ...dolares,
      ...addRegionPrefixToSidebarItems(region.prefix, dolares),
    },
    {
      ...monedas,
      ...addRegionPrefixToSidebarItems(region.prefix, monedas),
    },
  ]
}

export default function () {
  return [
    {
      text: `<span class="OASidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="OASidebarItem-text">Inicio</span>
      </span>`,
      link: '/argentina',
    },
    {
      text: `<span class="OASidebarItem">
        <svg class="i-mdi-github w-5 h-5" />
        <span class="OASidebarItem-text">GitHub</span>
      </span>`,
      link: 'https://github.com/enzonotario/esjs-dolar-api',
    },
    {
      text: 'Cotización actual',
      items: getCotizacionActualItems(),
    },
    {
      text: 'Cotización histórica',
      items: [
        {
          items: [
            {
              text: `<span class="OASidebarItem">
              <svg class="i-mdi-chart-line w-5 h-5" />
              <span class="OASidebarItem-text">ArgentinaDatos</span> 
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
              text: `<span class="OASidebarItem">
            <span class="w-5 h-5 bg-blue-200 text-gray-800 dark:bg-blue-600 dark:text-white rounded-full text-xs flex items-center justify-center">AF</span>
            <span class="OASidebarItem-text">Dólares Ámbito</span>
          </span>`,
              link: '/argentina/ambito/',
            },
          ],
        },
      ],
    },
    addRegionPrefixToSidebarItems(region.prefix, sidebar.generateSidebarGroup('API')),
  ]
}
