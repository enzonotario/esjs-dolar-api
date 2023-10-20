import json from './swagger.json'

export function useOpenapi() {
  function getOperation(operationId) {
    return Object.values(json.paths).find(path => path.get.operationId === operationId).get
  }

  function getOperationPath(operationId) {
    return Object.keys(json.paths).find(path => json.paths[path].get.operationId === operationId)
  }

  function getOperationCodeSamples(operationId) {
    const operation = getOperation(operationId)
    return operation['x-codeSamples'] || operation['x-code-samples'] || []
  }

  function getBaseUrl() {
    return json.servers[0].url
  }

  function getSchemas() {
    return json.components.schemas
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
    json,
    getOperation,
    getOperationPath,
    getBaseUrl,
    getSchemas,
    propertiesTypesJson,
    propertiesAsJson,
    getOperationCodeSamples,
  }
}
