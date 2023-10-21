import { expect, it } from 'vitest'
import { extraerCotizaciones } from '@/acciones/extraccion/extraerCotizaciones.esjs'
import { monedasSoportadas } from '@/constantes.esjs'

it('extrae cotizaciones', async () => {
  const cotizaciones = await extraerCotizaciones()

  expect(cotizaciones.length).toBeGreaterThan(0)

  expect(monedasSoportadas.length).toBeGreaterThan(0)

  expect(cotizaciones.length).toBe(monedasSoportadas.length)

  monedasSoportadas.forEach((moneda) => {
    const cotizacionMoneda = cotizaciones.find(dolar => dolar.moneda === moneda)

    expect(cotizacionMoneda).not.toBeNull()
    expect(cotizacionMoneda.fechaActualizacion).not.toBeNull()
    expect(cotizacionMoneda.moneda).toBe(moneda)
    expect(cotizacionMoneda.venta).toBeGreaterThan(0)
    expect(cotizacionMoneda.compra).toBeGreaterThan(0)
  })
})
