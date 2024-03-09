import { describe, expect, it } from 'vitest'
import extraer from '@/cl/cl.extraer.esjs'

describe('extraer cotizaciones', () => {
  it('extraer cotizaciones de un texto', async () => {
    const cotizaciones = await extraer()

    console.log({ cotizaciones })

    expect(cotizaciones.length).toBeGreaterThan(0)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.moneda).toBeTypeOf('string')
      expect(cotizacion.nombre).toBeTypeOf('string')
      expect(cotizacion.compra).toBeTypeOf('number')
      expect(cotizacion.venta).toBeTypeOf('number')
      expect(cotizacion.ultimoCierre).toBeTypeOf('number')
    })
  })
})
