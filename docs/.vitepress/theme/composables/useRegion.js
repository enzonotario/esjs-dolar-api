import { ref } from 'vue'
import { useOpenapi } from 'vitepress-theme-openapi'
import arSpec from '../../../public/openapi.json'
import clSpec from '../../../public/chile/openapi.json'
import veSpec from '../../../public/venezuela/openapi.json'
import uySpec from '../../../public/uruguay/openapi.json'
import mxSpec from '../../../public/mexico/openapi.json'
import boSpec from '../../../public/bolivia/openapi.json'

const regions = [
  {
    code: 'ar',
    name: 'Argentina',
    prefix: '/argentina',
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
  {
    code: 'uy',
    name: 'Uruguay',
    prefix: '/uruguay',
    spec: uySpec,
  },
  {
    code: 'mx',
    name: 'México',
    prefix: '/mexico',
    spec: mxSpec,
  },
  {
    code: 'bo',
    name: 'Bolivia',
    prefix: '/bolivia',
    spec: boSpec,
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
    if (url.hostname === 'cl.dolarapi.com')
      return setCurrentRegion('cl')

    if (url.hostname === 've.dolarapi.com')
      return setCurrentRegion('ve')

    return determineRegionByPath(url.pathname)
  }

  function determineRegionByPath(path) {
    if (path.startsWith('/docs/chile'))
      return setCurrentRegion('cl')

    if (path.startsWith('/docs/venezuela'))
      return setCurrentRegion('ve')

    return setCurrentRegion('ar')
  }

  async function onRegionChange(event, router) {
    const selected = regions.find(r => r.code === event.target.value)

    const goTo = `/docs${selected.prefix}/`
      .replace(/\/\//g, '/') // Replace double slashes

    setCurrentRegion(selected.code)

    const openapi = useOpenapi()

    openapi.setSpec(selected.spec)

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
