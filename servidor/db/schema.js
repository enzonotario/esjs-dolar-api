import {
  index,
  integer,
  real,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const cotizaciones = sqliteTable('cotizaciones', {
  id: integer('id').primaryKey(),
  moneda: text('moneda'),
  compra: real('compra'),
  venta: real('venta'),
  fecha: integer('fecha', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
}, cotizaciones => ({
  fecha: index('cotizaciones_fecha').on(cotizaciones.fecha),
  moneda: index('cotizaciones_moneda').on(cotizaciones.moneda),
}))

export const dolares = sqliteTable('dolares', {
  id: integer('id').primaryKey(),
  casa: text('casa'),
  compra: real('compra'),
  venta: real('venta'),
  fecha: integer('fecha', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
}, dolares => ({
  fecha: index('dolares_fecha').on(dolares.fecha),
  casa: index('dolares_casa').on(dolares.casa),
}))

export const extracciones = sqliteTable('extracciones', {
  id: integer('id').primaryKey(),
  moneda: text('moneda'),
  casa: text('casa'),
  compra: real('compra'),
  venta: real('venta'),
  fecha: integer('fecha', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
}, extracciones => ({
  fecha: index('extracciones_fecha').on(extracciones.fecha),
  moneda: index('extracciones_moneda').on(extracciones.moneda),
  casa: index('extracciones_casa').on(extracciones.casa),
}))
