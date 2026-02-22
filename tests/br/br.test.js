import { describe, expect, it, vi } from 'vitest'
import { monedas } from '@/br/constantes.br.esjs'
import extraer from '@/br/investing.extractor.br.esjs'

vi.mock('@/utils/firecrawl.esjs', () => ({
  debeEjecutarFirecrawlAhora: vi.fn().mockReturnValue(true),
  scrapearConFirecrawl: vi.fn().mockResolvedValue({
    compra: 5.5,
    venda: 5.6,
    fechoAnterior: 5.4,
    dataAtualizacao: '2025-01-15T12:00:00.000Z',
  }),
}))

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
