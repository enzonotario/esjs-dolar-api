import { expect, it } from 'vitest'
import { obtenerDolares } from '@/servicios/servicio-dolar.esjs'
import { casas } from '@/utilidades/constantes.esjs'

it('obtiene dólares', async () => {
  const dolares = await obtenerDolares()

  expect(dolares.length).toBeGreaterThan(0)

  expect(casas.length).toBeGreaterThan(0)

  expect(dolares.length).toBe(casas.length)

  casas.forEach((casa) => {
    const dolarCasa = dolares.find(dolar => dolar.casa === casa.identificador)

    expect(dolarCasa).not.toBeNull()

    expect(dolarCasa.fechaActualizacion).not.toBeNull()

    expect(dolarCasa.venta).toBeGreaterThan(0)

    if (casa.permiteCompra)
      expect(dolarCasa.compra).toBeGreaterThan(0)
    else
      expect(dolarCasa.compra).toBeNull()
  })
})
