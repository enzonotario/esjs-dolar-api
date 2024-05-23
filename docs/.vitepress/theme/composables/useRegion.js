import { ref } from 'vue'
import { useOpenapi } from 'vitepress-theme-openapi'
import arSpec from '../../../public/openapi.json'
import clSpec from '../../../public/chile/openapi.json'
import veSpec from '../../../public/venezuela/openapi.json'

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
  {
    code: 've',
    name: 'Venezuela',
    prefix: '/venezuela',
    spec: veSpec,
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

  async function onRegionChange(event, router) {
    const selected = regions.find(r => r.code === event.target.value)

    const goTo = `/docs${selected.prefix}/`
      .replace(/\/\//g, '/') // Replace double slashes

    const openapi = useOpenapi()

    openapi.setSpec(selected.spec)

    console.debug(`Navigating to ${goTo}`)
    await router.go(goTo)
  }

  return {
    regions,
    currentRegion,
    setCurrentRegion,
    getRegionByCode,
    determineRegionByURL,
    onRegionChange,
  }
}
