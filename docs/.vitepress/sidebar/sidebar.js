import arSidebar from './sidebar.ar.js'
import boSidebar from './sidebar.bo.js'
import brSidebar from './sidebar.br.js'
import clSidebar from './sidebar.cl.js'
import coSidebar from './sidebar.co.js'
import mxSidebar from './sidebar.mx.js'
import uySidebar from './sidebar.uy.js'
import veSidebar from './sidebar.ve.js'

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

    case 'br':
      return brSidebar()

    case 'co':
      return coSidebar()

    default:
      return arSidebar()
  }
}
