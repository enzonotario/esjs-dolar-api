import { expect, it } from 'vitest'
import { consultarDolarPorCasa } from '@/acciones/consulta/consultarDolarPorCasa.esjs'
import { cerrarDolares } from '@/acciones/guardado/cerrarDolares.esjs'
import { casas } from '@/constantes.esjs'

it('cierra dólares', async () => {
  await cerrarDolares()

  for (const casa of casas) {
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
