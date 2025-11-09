import { describe, expect, it } from 'vitest'
import extraerLasLucas from '@/ve/laslucas.extractor.esjs'

describe('ve.dolarapi.com', () => {
  it('extraer dolares de Las Lucas', async () => {
    const cotizaciones = await extraerLasLucas()

    expect(cotizaciones.length).toBeGreaterThan(0)

    expect(cotizaciones).toMatchObject([
      {
        fuente: 'paralelo',
        nombre: 'Paralelo',
        compra: null,
        venta: null,
        promedio: expect.any(Number),
        fechaActualizacion: expect.any(String),
      },
      {
        fuente: 'oficial',
        nombre: 'Oficial',
        compra: null,
        venta: null,
        promedio: expect.any(Number),
        fechaActualizacion: expect.any(String),
      },
    ])
  }, {
    timeout: 20000,
  })
})
