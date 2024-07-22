import arSidebar from './sidebar.ar.js'
import clSidebar from './sidebar.cl.js'
import veSidebar from './sidebar.ve.js'
import uySidebar from './sidebar.uy.js'
import mxSidebar from './sidebar.mx.js'
import boSidebar from './sidebar.bo.js'

export function generateSidebar(regionCode) {
  switch (regionCode) {
    case 'cl':
      return clSidebar()

    case 've':
      return veSidebar()

    case 'uy':
      return uySidebar()

    case 'mx':
      return mxSidebar()

    case 'bo':
      return boSidebar()

    default:
      return arSidebar()
  }
}
