import { expect, it } from 'vitest'
import { cerrarCotizaciones } from '@/acciones/guardado/cerrarCotizaciones.esjs'
import { consultarCotizacionPorMoneda } from '@/acciones/consulta/consultarCotizacionPorMoneda.esjs'
import { monedasSoportadas } from '@/constantes.esjs'

it('cierra cotizaciones', async () => {
  await cerrarCotizaciones()

  for (const moneda of monedasSoportadas) {
    const cotizacionMoneda = await consultarCotizacionPorMoneda(moneda)

    expect(cotizacionMoneda).toMatchObject({
      moneda,
      casa: 'oficial',
      nombre: expect.any(String),
      fechaActualizacion: expect.any(Date),
      compra: expect.any(Number),
      venta: expect.any(Number),
    })
  }
})
