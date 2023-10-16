import swaggerJson from './swagger.json'

export function useSwagger() {
  function getOperation(operationId) {
    return Object.values(swaggerJson.paths).find(path => path.get.operationId === operationId).get
  }

  function getOperationPath(operationId) {
    return Object.keys(swaggerJson.paths).find(path => swaggerJson.paths[path].get.operationId === operationId)
  }

  function getBaseUrl() {
    return swaggerJson.servers[0].url
  }

  function getSchemas() {
    return swaggerJson.components.schemas
  }

  function propertiesTypesJson(schema, responseType) {
    const body = {}

    const propertiesKeys = Object.keys(schema.properties)

    propertiesKeys.forEach((key) => {
      const property = schema.properties[key]

      const { type } = property

      body[key] = type
    })

    return JSON.stringify(
      responseType === 'array' ? [body] : body,
      null,
      2,
    )
  }

  function propertiesAsJson(schema, responseType) {
    const body = {}

    const propertiesKeys = Object.keys(schema.properties)

    propertiesKeys.forEach((key) => {
      const property = schema.properties[key]

      const { type } = property

      switch (type) {
        case 'string':
          body[key] = 'string'
          break
        case 'number':
        case 'integer':
          body[key] = 0
          break
        case 'boolean':
          body[key] = true
          break
        case 'array':
          body[key] = []
          break
        case 'object':
          body[key] = {}
          break
        default:
          body[key] = null
      }
    })

    return JSON.stringify(
      responseType === 'array' ? [body] : body,
      null,
      2,
    )
  }

  return {
    json: swaggerJson,
    getOperation,
    getOperationPath,
    getBaseUrl,
    getSchemas,
    propertiesTypesJson,
    propertiesAsJson,
  }
}
