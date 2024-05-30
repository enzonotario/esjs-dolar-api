import { describe, expect, it } from 'vitest'
import extraer from '@/uy/brou.extractor.esjs'
import { monedas } from '@/uy/constantes.uy.esjs'

describe('uy.dolarapi.com', () => {
  it('extraer dolares', async () => {
    const cotizaciones = await extraer()

    expect(cotizaciones.length).toBe(monedas.length)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.codigo).toBeTypeOf('string')
      expect(cotizacion.nombre).toBeTypeOf('string')
      expect(cotizacion.fechaActualizacion).toBeTypeOf('object')

      if (cotizacion.compra)
        expect(cotizacion.compra).toBeTypeOf('number')

      if (cotizacion.venta)
        expect(cotizacion.venta).toBeTypeOf('number')

      expect(cotizacion.compra || cotizacion.venta).toBeTruthy()
    })
  }, {
    timeout: 10000,
  })
})
