import { describe, expect, it } from 'vitest'
import extraer from '@/ve/monitordolarvenezuela.extractor.esjs'

describe('ve.dolarapi.com', () => {
  it('extraer dolares', async () => {
    const cotizaciones = await extraer()

    expect(cotizaciones.length).toBeGreaterThan(0)

    expect(cotizaciones).toMatchObject([
      {
        fuente: 'oficial',
        nombre: 'Oficial',
        compra: null,
        venta: null,
        promedio: expect.any(Number),
        fechaActualizacion: expect.any(String),
      },
      {
        fuente: 'paralelo',
        nombre: 'Paralelo',
        compra: null,
        venta: null,
        promedio: expect.any(Number),
        fechaActualizacion: expect.any(String),
      },
      {
        fuente: 'bitcoin',
        nombre: 'Bitcoin',
        compra: null,
        venta: null,
        promedio: expect.any(Number),
        fechaActualizacion: expect.any(String),
      },
    ])
  }, {
    timeout: 10000,
  })
})
