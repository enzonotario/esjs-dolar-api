import { expect, it } from 'vitest'
import { extraerAmbito } from '@/ar/acciones/extraccion/extraerAmbito.esjs'
import { casas } from '@/ar/constantes.ar.esjs'

it('extrae ambito', async () => {
  const dolares = await extraerAmbito()

  expect(dolares.length).toBeGreaterThan(0)

  expect(casas.length).toBeGreaterThan(0)

  expect(dolares.length).toBe(casas.length)

  casas.forEach((casa) => {
    const dolarCasa = dolares.find(dolar => dolar.casa === casa.identificador)

    expect(dolarCasa).not.toBeNull()

    expect(dolarCasa.moneda).toBe('USD')
    expect(dolarCasa.casa).toBe(casa.identificador)
    if (casa.permiteCompra)
      expect(dolarCasa.compra).toBeGreaterThan(0)
    else
      expect(dolarCasa.compra).toBeNull()
    expect(dolarCasa.venta).toBeGreaterThan(0)
    expect(dolarCasa.variacion).toBeDefined()
    expect(dolarCasa.fechaActualizacion).not.toBeNull()
  })
}, {
  timeout: 20000,
})
