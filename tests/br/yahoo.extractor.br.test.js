import { describe, expect, it } from 'vitest'
import extractor from '@/br/yahoo.extractor.br.esjs'

describe('yahoo.extractor.br.esjs', () => {
  it('extrae USD/BRL desde Investing.com usando Firecrawl', {
    timeout: 60000,
  }, async () => {
    const dato = await extractor()

    expect(dato).toBeTypeOf('object')
    expect(dato.moeda).toBe('USD')
    expect(dato.nome).toBeTypeOf('string')
    expect(dato.compra).toBeTypeOf('number')
    expect(dato.venda).toBeTypeOf('number')
    expect(dato.fechoAnterior).toBeTypeOf('number')
    expect(typeof dato.dataAtualizacao).toBe('string')
    expect(dato.compra).toBeGreaterThan(0)
    expect(dato.venda).toBeGreaterThan(0)
    expect(dato.fechoAnterior).toBeGreaterThan(0)
  })
})
