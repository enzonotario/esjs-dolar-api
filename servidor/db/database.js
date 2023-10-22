import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import { and, desc, eq } from 'drizzle-orm'
import * as schema from './schema'
import { dolares, extracciones } from './schema'

const client = createClient({
  url: import.meta.env.VITE_DATABASE_URL,
  authToken: import.meta.env.VITE_DATABASE_AUTH_TOKEN,
})

export const db = drizzle(client, { schema })

const DOLAR_CODIGO = 'USD'

export async function obtenerDolarPorCasa(casa) {
  const resultado = await db.select()
    .from(extracciones)
    .where(
      and(
        eq(extracciones.moneda, DOLAR_CODIGO),
        eq(extracciones.casa, casa),
      ),
    )
    .orderBy(desc(extracciones.fecha))
    .limit(1)

  return resultado[0]
}

export async function obtenerCotizacionPorMoneda(moneda) {
  const resultado = await db.select()
    .from(extracciones)
    .where(
      and(
        eq(extracciones.moneda, moneda),
        eq(extracciones.casa, 'oficial'),
      ),
    )
    .orderBy(desc(extracciones.fecha))
    .limit(1)

  return resultado[0]
}

export async function obtenerHistoricosPorCasa(casa) {
  return db.select()
    .from(dolares)
    .where(
      and(
        eq(dolares.moneda, DOLAR_CODIGO),
        eq(dolares.casa, casa),
      ),
    )
    .orderBy(desc(dolares.fecha))
}

export async function guardarCotizaciones(dolares, fecha) {
  await db
    .delete(dolares)
    .where(
      and(
        eq(dolares.moneda, 'USD'),
        eq(dolares.fecha, fecha),
      ),
    )

  await db
    .insert(dolares)
    .values(dolares.map(dolar => ({
      moneda: 'USD',
      casa: dolar.casa,
      compra: dolar.compra,
      venta: dolar.venta,
      fecha,
    })))
}

export async function guardarExtracciones(cotizaciones) {
  await db
    .insert(extracciones)
    .values(cotizaciones.map(cotizacion => ({
      moneda: cotizacion.moneda,
      casa: cotizacion.casa,
      compra: cotizacion.compra,
      venta: cotizacion.venta,
      fecha: cotizacion.fechaActualizacion,
    })))
}
