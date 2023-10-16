import { useSwagger } from '../.vitepress/theme/composables/useSwagger.js'

export default {
  paths() {
    const swagger = useSwagger()

    return Object.keys(swagger.json.paths)
      .map((path) => {
        const { operationId } = swagger.json.paths[path].get
        return {
          params: {
            operationId,
            pageTitle: `${swagger.getOperation(operationId).summary} - DolarApi.com`,
          },
        }
      })
  },
}
