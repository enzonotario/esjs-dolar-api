import { describe, expect, it } from 'vitest'
import extraer from '@/ve/dolartoday.extractor.esjs'

describe('ve.dolarapi.com', () => {
  it('extraer dolares', async () => {
    const cotizaciones = await extraer()

    expect(cotizaciones.length).toBeGreaterThan(0)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.fuente).toBeTypeOf('string')
      expect(cotizacion.nombre).toBeTypeOf('string')
      expect(cotizacion.promedio).toBeTypeOf('number')
      expect(cotizacion.fecha).toBeTypeOf('string')

      if (cotizacion.compra)
        expect(cotizacion.compra).toBeTypeOf('number')

      if (cotizacion.venta)
        expect(cotizacion.venta).toBeTypeOf('number')
    })
  }, {
    timeout: 10000,
  })
})
