import { useOpenapi } from 'vitepress-theme-openapi'
import spec from '../../../public/openapi.json' assert { type: 'json' }

const openapi = useOpenapi()
openapi.setSpec(spec)

export function useCodeSamples() {
  function getCodeSamples(operationId) {
    const codeSampels = openapi.getOperationCodeSamples(operationId)

    return {
      curl: codeSampels.find(codeSample => codeSample.lang === 'curl'),
      javascriptFetch: codeSampels.find(codeSample => codeSample.lang === 'javascript' && codeSample.label === 'JavaScript (fetch)'),
      javascriptAxios: codeSampels.find(codeSample => codeSample.lang === 'javascript' && codeSample.label === 'JavaScript (axios)'),
      python: codeSampels.find(codeSample => codeSample.lang === 'python'),
      php: codeSampels.find(codeSample => codeSample.lang === 'php'),
    }
  }

  return {
    getCodeSamples,
  }
}
