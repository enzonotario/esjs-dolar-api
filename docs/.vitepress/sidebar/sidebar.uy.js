import { useSidebar } from 'vitepress-openapi'
import { useRegion } from '../theme/composables/useRegion.js'
import { addRegionPrefixToSidebarItems, setRegionForSidebar } from './sidebar.utils.js'

const region = useRegion().regions.find(region => region.code === 'uy')

setRegionForSidebar(region.code)

const sidebar = useSidebar({ spec: region.spec })

export default function sidebarUy() {
  return [
    {
      text: `<span class="OASidebarItem">
        <svg class="i-mdi-home w-5 h-5" />
        <span class="OASidebarItem-text">Inicio</span>
      </span>`,
      link: '/uruguay/',
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
      items: [
        addRegionPrefixToSidebarItems(
          region.prefix,
          sidebar.generateSidebarGroup(
            {
              tag: 'Cotización actual',
              text: '',
            },
          ),
        ),
      ],
    },
    addRegionPrefixToSidebarItems(
      region.prefix,
      sidebar.generateSidebarGroup(
        {
          tag: 'API',
          text: '',
        },
      ),
    ),
  ]
}
