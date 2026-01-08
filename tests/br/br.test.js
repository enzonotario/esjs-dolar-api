import { describe, expect, it } from 'vitest'
import { monedas } from '@/br/constantes.br.esjs'
import extraer from '@/br/investing.extractor.br.esjs'

describe('investing.extractor.br.esjs', () => {
  it('extrae cotizaciones de monedas usando Firecrawl', {
    timeout: 180000,
  }, async () => {
    const cotizaciones = await extraer()

    expect(cotizaciones.length).toBe(monedas.length - 1)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.moeda).toBeTypeOf('string')
      expect(cotizacion.nome).toBeTypeOf('string')
      expect(cotizacion.compra).toBeTypeOf('number')
      expect(cotizacion.venda).toBeTypeOf('number')
      expect(cotizacion.fechoAnterior).toBeTypeOf('number')
    })
  })
})
