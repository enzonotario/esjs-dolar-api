import { describe, expect, it } from 'vitest'
import extraerMonitor from '@/ve/monitordolarvenezuela.extractor.esjs'
import extraerLasLucas from '@/ve/laslucas.extractor.esjs'

describe('ve.dolarapi.com', () => {
  it('extraer dolares de Monitor Dolar Venezuela', async () => {
    const cotizaciones = await extraerMonitor()

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
    ])
  }, {
    timeout: 10000,
  })
})
