import { describe, expect, it } from 'vitest'
import { extraerExchanges } from '@/ar/acciones/extraccion/extraerExchanges.esjs'

describe('extraerExchanges', () => {
  it('extrae cotizaciones de exchanges', async () => {
    const cotizaciones = await extraerExchanges()


    expect(cotizaciones.length).toBeGreaterThan(0)
    for (const cotizacion of cotizaciones) {
      expect(cotizacion).toBeTypeOf('object')

      if (cotizacion.compra)
        expect(cotizacion.compra).toBeTypeOf('number')

      expect(cotizacion.venta).toBeTypeOf('number')
      expect(cotizacion.par).toBeTypeOf('object')

      if (cotizacion.parCriptomoneda)
        expect(cotizacion.parCriptomoneda).toBeTypeOf('object')

      expect(cotizacion.fechaActualizacion).toBeTypeOf('object')
    }
  })
})
