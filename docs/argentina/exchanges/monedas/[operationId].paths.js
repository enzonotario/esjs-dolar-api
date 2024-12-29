import { usePaths } from 'vitepress-openapi'
import spec from '../../../public/exchanges/openapi.json'

export default {
  paths() {
    return usePaths({ spec })
      .getPathsByVerbs()
      .map(({ operationId, summary }) => {
        return {
          params: {
            operationId,
            pageTitle: `${summary} - vitepress-openapi`,
          },
        }
      })
  },
}
