import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { and, desc, eq } from 'drizzle-orm';
import * as schema from './schema';
import { cotizaciones, extracciones } from './schema';

const client = createClient({
  url: import.meta.env.VITE_DATABASE_URL,
  authToken: import.meta.env.VITE_DATABASE_AUTH_TOKEN,
});

const DOLAR_CODIGO = 'USD';

export const db = drizzle(client, { schema });

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
    .limit(1);

  return resultado[0];
}

export async function obtenerHistoricosPorCasa(casa) {
  return db.select()
    .from(cotizaciones)
    .where(
      and(
        eq(cotizaciones.moneda, DOLAR_CODIGO),
        eq(cotizaciones.casa, casa),
      ),
    )
    .orderBy(desc(cotizaciones.fecha));
}
