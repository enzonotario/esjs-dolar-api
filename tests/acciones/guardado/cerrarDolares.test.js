import { expect, it } from 'vitest'
import { consultarDolarPorCasa } from '../../../api/acciones/consulta/consultarDolarPorCasa.esjs'
import { cerrarDolares } from '../../../api/acciones/guardado/cerrarDolares.esjs'
import { casas } from '../../../api/constantes.esjs'

it('cierra dólares', async () => {
  await cerrarDolares()

  for (const casa of casas.filter(casa => !casa.calculado)) {
    const dolar = await consultarDolarPorCasa(casa.identificador)

    expect(dolar).toMatchObject({
      moneda: 'USD',
      casa: casa.identificador,
      nombre: casa.nombre,
      fechaActualizacion: expect.any(Date),
      compra: casa.permiteCompra ? expect.any(Number) : null,
      venta: expect.any(Number),
    })
  }
})
