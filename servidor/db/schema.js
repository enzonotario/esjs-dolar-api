import {
  integer,
  real,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

export const cotizaciones = sqliteTable('cotizaciones', {
  id: integer('id').primaryKey(),
  moneda: text('moneda'),
  casa: text('casa'),
  compra: real('compra'),
  venta: real('venta'),
  fecha: integer('fecha', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
})

export const extracciones = sqliteTable('extracciones', {
  id: integer('id').primaryKey(),
  moneda: text('moneda'),
  casa: text('casa'),
  compra: real('compra'),
  venta: real('venta'),
  fecha: integer('fecha', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
})

export const indicadores = sqliteTable('indicadores', {
  id: integer('id').primaryKey(),
  tipo: text('tipo'),
  valor: text('valor'),
  fecha: text('fecha'),
})
