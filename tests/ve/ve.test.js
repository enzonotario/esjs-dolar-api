import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import extraerBcv from '@/ve/bcv.extractor.esjs'
import cron from '@/ve/cron.ve.esjs'
import extraerYadio from '@/ve/yadio.extractor.esjs'

describe('ve.dolarapi.com', () => {
  it('extraer dolar paralelo de Yadio', async () => {
    const cotizaciones = await extraerYadio()

    expect(cotizaciones).toHaveLength(1)
    expect(cotizaciones[0].fuente).toBe('paralelo')
    expect(cotizaciones[0].promedio).toBeGreaterThan(0)
  }, 10000)

  it('extraer dolar oficial de BCV', async () => {
    const cotizacion = await extraerBcv()

    expect(cotizacion.fuente).toBe('oficial')
    expect(cotizacion.promedio).toBeGreaterThan(0)
  }, 10000)

  it('ejecutar cron completo', async () => {
    await cron()

    const rutaDolares = resolve('datos/ve/v1/dolares/index.json')
    const dolares = JSON.parse(readFileSync(rutaDolares, 'utf-8'))

    expect(dolares.length).toBeGreaterThan(0)

    expect(dolares).toMatchObject([
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
    ])
  }, 20000)
})
