import { useOpenapi } from 'vitepress-theme-openapi'
import spec from '../../../public/openapi.json' assert { type: 'json' }

const openapi = useOpenapi()
openapi.setSpec(spec)

export function useCodeSamples() {
  function getCodeSamples(operationId) {
    const codeSamples = openapi.getOperationCodeSamples(operationId)

    return {
      curl: codeSamples.find((codeSample) => codeSample.lang === 'curl'),
      javascriptFetch: codeSamples.find(
        (codeSample) =>
          codeSample.lang === 'javascript' &&
          codeSample.label === 'JavaScript (fetch)',
      ),
      javascriptAxios: codeSamples.find(
        (codeSample) =>
          codeSample.lang === 'javascript' &&
          codeSample.label === 'JavaScript (axios)',
      ),
      python: codeSamples.find((codeSample) => codeSample.lang === 'python'),
      php: codeSamples.find((codeSample) => codeSample.lang === 'php'),
    }
  }

  return {
    getCodeSamples,
  }
}
