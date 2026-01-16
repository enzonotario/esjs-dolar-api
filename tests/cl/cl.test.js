import { describe, expect, it } from 'vitest'
import extraer from '@/cl/investing.extractor.cl.esjs'

describe('extraer cotizaciones', () => {
  it('extraer cotizaciones de un texto', async () => {
    const cotizaciones = await extraer()

    expect(Array.isArray(cotizaciones)).toBe(true)

    if (cotizaciones.length > 0) {
      cotizaciones.forEach((cotizacion) => {
        expect(cotizacion).toBeTypeOf('object')
        expect(cotizacion.moneda).toBeTypeOf('string')
        expect(cotizacion.nombre).toBeTypeOf('string')
        expect(cotizacion.compra).toBeTypeOf('number')
        expect(cotizacion.venta).toBeTypeOf('number')
        expect(cotizacion.ultimoCierre).toBeTypeOf('number')
      })
    }
  }, {
    timeout: 30000,
  })
})
