import arSidebar from './sidebar.ar.js'
import clSidebar from './sidebar.cl.js'

export function generateSidebar(regionCode) {
  switch (regionCode) {
    case 'cl':
      return clSidebar()

    default:
      return arSidebar()
  }
}
