import { describe, expect, it } from 'vitest'
import { monedas } from '@/co/constantes.co.esjs'
import extraer from '@/co/investing.extractor.co.esjs'

describe('investing.extractor.co.esjs', () => {
  it('extrae cotizaciones de monedas usando Firecrawl', {
    timeout: 180000,
  }, async () => {
    const cotizaciones = await extraer()

    console.log({ cotizaciones })

    expect(cotizaciones.length).toBe(monedas.length - 1)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.moneda).toBeTypeOf('string')
      expect(cotizacion.nombre).toBeTypeOf('string')
      expect(cotizacion.compra).toBeTypeOf('number')
      expect(cotizacion.venta).toBeTypeOf('number')
      expect(cotizacion.cierreAnterior).toBeTypeOf('number')
    })
  })
})

