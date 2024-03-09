import { ref } from 'vue'
import arSpec from '../../../public/openapi.json'
import clSpec from '../../../public/chile/openapi.json'

const regions = [
  {
    code: 'ar',
    name: 'Argentina',
    prefix: '/',
    spec: arSpec,
    default: true,
  },
  {
    code: 'cl',
    name: 'Chile',
    prefix: '/chile',
    spec: clSpec,
  },
]

const currentRegion = ref(regions.find(region => region.default))

export function useRegion() {
  function setCurrentRegion(regionCode) {
    currentRegion.value = regions.find(region => region.code === regionCode)
  }

  function getRegionByCode(regionCode) {
    return regions.find(region => region.code === regionCode)
  }

  function determineRegionByURL(url) {
    if (url.startsWith('/docs/chile/'))
      return setCurrentRegion('cl')

    return setCurrentRegion('ar')
  }

  return {
    regions,
    currentRegion,
    setCurrentRegion,
    getRegionByCode,
    determineRegionByURL,
  }
}
