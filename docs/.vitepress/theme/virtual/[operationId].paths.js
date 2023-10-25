import { useOpenapi } from '../composables/useOpenapi.js'

export default {
  paths() {
    const openapi = useOpenapi()

    return Object.keys(openapi.json.paths)
      .map((path) => {
        const { operationId } = openapi.json.paths[path].get
        return {
          params: {
            operationId,
            pageTitle: `${openapi.getOperation(operationId).summary} - DolarApi.com`,
          },
        }
      })
  },
}
