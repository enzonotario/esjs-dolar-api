import { describe, expect, it } from 'vitest'
import { extraerDolares } from '@/ar/dolarhoy.dolares.extractor.esjs'
import { extraerCotizaciones } from '@/ar/bna.extractor.esjs'

describe('dolarapi.com (Argentina)', () => {
  it('dolarhoy.dolares.extractor.esjs', async () => {
    const dolares = await extraerDolares()

    expect(dolares.length).toBeGreaterThan(0)

    dolares.forEach((dolar) => {
      expect(dolar).toBeTypeOf('object')
      expect(dolar.moneda).toBeTypeOf('string')
      expect(dolar.nombre).toBeTypeOf('string')
      expect(dolar.compra).toBeTypeOf('number')
      expect(dolar.venta).toBeTypeOf('number')
      expect(dolar.fechaActualizacion).toBeTypeOf('object')
    })

    const casas = [
      'oficial',
      'blue',
      'bolsa',
      'contadoconliqui',
      'mayorista',
      'cripto',
    ]

    casas.forEach((casa) => {
      const dolar = dolares.find((dolar) => dolar.casa === casa)
      expect(dolar).not.toBeUndefined()
    })
  })

  it('bna.extractor.esjs', async () => {
    const cotizaciones = await extraerCotizaciones()

    expect(cotizaciones.length).toBeGreaterThan(0)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.moneda).toBeTypeOf('string')
      expect(cotizacion.casa).toBeTypeOf('string')
      expect(cotizacion.compra).toBeTypeOf('number')
      expect(cotizacion.venta).toBeTypeOf('number')
      expect(cotizacion.fechaActualizacion).toBeTypeOf('object')
    })

    const monedasEsperadas = [
      'USD',
      // 'EUR',
    ]

    monedasEsperadas.forEach((moneda) => {
      const cotizacion = cotizaciones.find((cotizacion) => cotizacion.moneda === moneda)
      expect(cotizacion).not.toBeUndefined()
    })
  })
})
