import { expect, it } from 'vitest'
import { consultarDolarPorCasa } from '@/acciones/consulta/consultarDolarPorCasa.esjs'
import { guardarDolares } from '@/acciones/guardado/guardarDolares.esjs'
import { casas } from '@/constantes.esjs'

it('consulta dólar por casa', async () => {
  await guardarDolares()

  for (const casa of casas) {
    const dolarCasa = await consultarDolarPorCasa(casa.identificador)

    expect(dolarCasa).toMatchObject({
      moneda: 'USD',
      casa: casa.identificador,
      nombre: casa.nombre,
      fechaActualizacion: expect.any(Date),
      venta: expect.any(Number),
      compra: casa.permiteCompra ? expect.any(Number) : null,
    })

    expect(dolarCasa).not.toBeNull()

    expect(dolarCasa.fechaActualizacion).not.toBeNull()

    expect(dolarCasa.venta).toBeGreaterThan(0)

    if (casa.permiteCompra)
      expect(dolarCasa.compra).toBeGreaterThan(0)
    else
      expect(dolarCasa.compra).toBeNull()
  }
})

it('consulta dólar por casa inexistente', async () => {
  const dolarCasa = await consultarDolarPorCasa('casaInexistente')

  expect(dolarCasa).toBeNull()
})
