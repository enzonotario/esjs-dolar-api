import { expect, it } from 'vitest'
import { consultarCotizacionPorMoneda } from '../../../api/acciones/consulta/consultarCotizacionPorMoneda.esjs'
import { guardarCotizaciones } from '../../../api/acciones/guardado/guardarCotizaciones.esjs'
import { monedasSoportadas } from '../../../api/constantes.esjs'

it('consulta cotización por moneda', async () => {
  await guardarCotizaciones()

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

    expect(cotizacionMoneda).not.toBeNull()
    expect(cotizacionMoneda.fechaActualizacion).not.toBeNull()
    expect(cotizacionMoneda.compra).toBeGreaterThan(0)
    expect(cotizacionMoneda.venta).toBeGreaterThan(0)
  }
})

it('consulta dólar por moneda inexistente', async () => {
  const cotizacionMoneda = await consultarCotizacionPorMoneda('monedaInexistente')

  expect(cotizacionMoneda).toBeNull()
})
