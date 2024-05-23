import arSidebar from './sidebar.ar.js'
import clSidebar from './sidebar.cl.js'
import veSidebar from './sidebar.ve.js'

export function generateSidebar(regionCode) {
  switch (regionCode) {
    case 'cl':
      return clSidebar()

    case 've':
      return veSidebar()

    default:
      return arSidebar()
  }
}
