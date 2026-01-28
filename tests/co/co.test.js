import { describe, expect, it } from 'vitest'
import { monedas } from '@/co/constantes.co.esjs'
import extraer from '@/co/investing.extractor.co.esjs'
import extraerTrm from '@/co/trm.extractor.co.esjs'

describe('investing.extractor.co.esjs', () => {
  it('extrae cotizaciones de monedas usando Firecrawl', {
    timeout: 180000,
  }, async () => {
    const cotizaciones = await extraer()

    expect(cotizaciones.length).toBe(monedas.length)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.moneda).toBeTypeOf('string')
      expect(cotizacion.nombre).toBeTypeOf('string')
      expect(cotizacion.compra).toBeTypeOf('number')
      expect(cotizacion.venta).toBeTypeOf('number')
    })
  })
})

describe('trm.extractor.co.esjs', () => {
  it('extrae la TRM oficial de Colombia desde Superfinanciera', {
    timeout: 30000,
  }, async () => {
    const trm = await extraerTrm()

    console.log({ trm })

    expect(trm).toBeTypeOf('object')
    expect(trm.unidad).toBe('COP')
    expect(trm.nombre).toBe('TRM')
    expect(trm.valor).toBeTypeOf('number')
    expect(trm.valor).toBeGreaterThan(0)
    expect(trm.fechaActualizacion).toBeTypeOf('string')
    expect(trm.fechaActualizacion).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
  })
})
