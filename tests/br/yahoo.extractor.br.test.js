import { describe, expect, it } from 'vitest'
import extractor from '@/br/yahoo.extractor.br.esjs'

describe('yahoo.extractor.br.esjs', () => {
  it('extrae USD/BRL desde Yahoo Finanzas', async () => {
    const dato = await extractor()

    expect(dato).toBeTypeOf('object')
    expect(dato.moeda).toBe('USD')
    expect(dato.nome).toBeTypeOf('string')
    expect(dato.compra).toBeTypeOf('number')
    expect(dato.venda).toBeTypeOf('number')
    expect(dato.fechoAnterior).toBeTypeOf('number')
    expect(typeof dato.dataAtualizacao).toBe('string')
  })
})
