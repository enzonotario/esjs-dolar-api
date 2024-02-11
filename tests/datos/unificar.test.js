import { expect, it } from 'vitest'
import { unificar } from '@/utils/unificar.esjs'

it('unifica json1 con json2 por casa', async () => {
  const json1 = [
    {
      casa: 'oficial',
      fechaActualizacion: '2020-01-01',
      compra: 1,
      venta: 1,
    },
    {
      casa: 'blue',
      fechaActualizacion: '2020-01-01',
      compra: 2,
      venta: 2,
    },
  ]

  const json2 = [
    {
      casa: 'oficial',
      fechaActualizacion: '2020-01-02',
      compra: 0,
      venta: 2,
    },
    {
      casa: 'blue',
      fechaActualizacion: '2020-01-02',
      compra: 3,
      venta: 0,
    },
  ]

  const respuesta = await unificar(json1, json2, 'casa')

  expect(respuesta).toEqual([
    {
      casa: 'oficial',
      fechaActualizacion: '2020-01-02',
      compra: 1,
      venta: 2,
    },
    {
      casa: 'blue',
      fechaActualizacion: '2020-01-02',
      compra: 3,
      venta: 2,
    },
  ])
})

it('unifica json1 con json2 por moneda', async () => {
  const json1 = [
    {
      moneda: 'USD',
      fechaActualizacion: '2020-01-01',
      compra: 1,
      venta: 1,
    },
    {
      moneda: 'EUR',
      fechaActualizacion: '2020-01-01',
      compra: 2,
      venta: 2,
    },
  ]

  const json2 = [
    {
      moneda: 'USD',
      fechaActualizacion: '2020-01-02',
      compra: 0,
      venta: 2,
    },
    {
      moneda: 'EUR',
      fechaActualizacion: '2020-01-02',
      compra: 3,
      venta: 0,
    },
  ]

  const respuesta = await unificar(json1, json2, 'moneda')

  expect(respuesta).toEqual([
    {
      moneda: 'USD',
      fechaActualizacion: '2020-01-02',
      compra: 1,
      venta: 2,
    },
    {
      moneda: 'EUR',
      fechaActualizacion: '2020-01-02',
      compra: 3,
      venta: 2,
    },
  ])
})
