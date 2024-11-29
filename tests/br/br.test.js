import { describe, expect, it } from 'vitest'
import extraer from '@/br/investing.extractor.br.esjs'
import { monedas as monedasAr } from '@/ar/constantes.ar.esjs'

describe('investing.extractor.br.esjs', () => {
  it('extrae cotizaciones de monedas', async () => {
    const cotizaciones = await extraer()

    expect(cotizaciones.length).toBe(monedasAr.length - 1)

    cotizaciones.forEach((cotizacion) => {
      expect(cotizacion).toBeTypeOf('object')
      expect(cotizacion.moeda).toBeTypeOf('string')
      expect(cotizacion.nome).toBeTypeOf('string')
      expect(cotizacion.compra).toBeTypeOf('number')
      expect(cotizacion.venda).toBeTypeOf('number')
      expect(cotizacion.fechoAnterior).toBeTypeOf('number')
    })
  }, {
    timeout: 30000,
  })
})
