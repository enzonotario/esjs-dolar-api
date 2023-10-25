import { useOpenapi } from './useOpenapi.js'

export function useCodeSamples() {
  const openapi = useOpenapi()

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
