import { useOpenapi, useSidebar } from 'vitepress-theme-openapi'
import spec from '../public/chile/openapi.json'

const openapi = useOpenapi()
openapi.setSpec(spec)
const sidebar = useSidebar()

function addPrefix(items) {
  return {
    items: items.items.map((item) => {
      if (item.link)
        item.link = `/chile${item.link}`

      if (item.items)
        item.items = addPrefix(item.items)

      return item
    }),
  }
}

export default function sidebarCl() {
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
        addPrefix(sidebar.generateSidebarGroup('Cotización actual', '')),
      ],
    },
    addPrefix(sidebar.generateSidebarGroup('API')),
  ]
}
