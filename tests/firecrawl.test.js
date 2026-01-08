import { describe, expect, it } from 'vitest'
import { scrapearConFirecrawl } from '@/utils/firecrawl.esjs'
import { grupo } from '@/log.esjs'

describe('firecrawl.esjs', () => {
  it('scrapea una URL con Firecrawl y retorna JSON estructurado', {
    timeout: 60000,
  }, async () => {
    const log = grupo({ test: 'firecrawl.test.js' })

    const url = 'https://es.investing.com/currencies/usd-brl'

    const resultado = await scrapearConFirecrawl(log, {
      url,
      prompt: 'Extrae los valores de compra (bid), venta (ask), cierre anterior (prevClose) y fecha de actualización de la cotización de la moneda.',
      schema: {
        compra: {
          type: 'number',
          description: 'Valor de compra (bid) de la moneda',
        },
        venda: {
          type: 'number',
          description: 'Valor de venta (ask) de la moneda',
        },
        fechoAnterior: {
          type: 'number',
          description: 'Valor de cierre anterior (prevClose) de la moneda',
        },
        dataAtualizacao: {
          type: 'string',
          description: 'Fecha y hora de actualización en formato ISO 8601',
        },
      },
      required: ['compra', 'venda', 'fechoAnterior', 'dataAtualizacao'],
    })

    expect(resultado).toBeTypeOf('object')
    expect(resultado.compra).toBeTypeOf('number')
    expect(resultado.venda).toBeTypeOf('number')
    expect(resultado.fechoAnterior).toBeTypeOf('number')
    expect(resultado.dataAtualizacao).toBeTypeOf('string')
    expect(resultado.compra).toBeGreaterThan(0)
    expect(resultado.venda).toBeGreaterThan(0)
    expect(resultado.fechoAnterior).toBeGreaterThan(0)
  })

  it('lanza error cuando la URL es inválida', {
    timeout: 60000,
  }, async () => {
    const log = grupo({ test: 'firecrawl.test.js' })

    const url = 'https://example.invalid/page-that-does-not-exist'

    await expect(async () => {
      await scrapearConFirecrawl(log, {
        url,
        prompt: 'Extrae cualquier dato',
        schema: {
          dato: {
            type: 'string',
            description: 'Un dato cualquiera',
          },
        },
        required: ['dato'],
      })
    }).rejects.toThrow()
  })
})
