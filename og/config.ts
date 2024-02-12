import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineSatoriConfig } from 'x-satori/vue'
import { format, parseISO, subDays } from 'date-fns'

const _DIRNAME = typeof __dirname !== 'undefined'
    ? __dirname
    : dirname(fileURLToPath(import.meta.url))


const ayer = subDays(new Date(), 1)

const dolaresAyer = await (await (fetch(`https://api.argentinadatos.com/v1/cotizaciones/dolares/${format(ayer, 'yyyy/MM/dd')}`))).json()

const dolares = JSON.parse(readFileSync(resolve(_DIRNAME, '../datos/v1/dolares/index.json'), 'utf8'))
  .map(dolar => {
    const dolarAyer = dolaresAyer.find(d => d.casa === dolar.casa)

    if (dolarAyer) {
        const variacionPorcentual = (((dolar.venta - dolarAyer.venta) / dolarAyer.venta))
        dolar.variacion = dolar.venta - dolarAyer.venta
        dolar.variacionPorcentual = Math.round(variacionPorcentual * 10000) / 10000
    }

    return dolar
  })

const col1 = dolares.filter(dolar => dolar.casa === 'oficial' || dolar.casa === 'blue' || dolar.casa === 'tarjeta')

const col2 = dolares.filter(dolar => dolar.casa === 'bolsa' || dolar.casa === 'contadoconliqui' || dolar.casa === 'cripto')
    .map(dolar => {
        if (dolar.nombre === 'Contado con liquidación') {
            dolar.nombre = 'CCL'
        }

        if (dolar.nombre === 'Bolsa') {
            dolar.nombre = 'MEP'
        }

        return dolar
    })

const fecha = parseISO(dolares[0].fechaActualizacion).toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' })

const fechaActualizacion = format(fecha, "'Actualizado el ' dd/MM/yyyy ' a las ' HH:mm")

export default defineSatoriConfig({
    height: 628,
    width: 1200,
    fonts: [
        {
            name: 'Inter',
            data: readFileSync(resolve(_DIRNAME, './fonts/Inter-Medium.woff')),
            weight: 400,
            style: 'normal',
        },
        {
            name: 'Inter',
            data: readFileSync(resolve(_DIRNAME, './fonts/Inter-Bold.woff')),
            weight: 700,
            style: 'normal',
        },
        {
            name: 'Noto Sans Symbols',
            data: readFileSync(resolve(_DIRNAME, './fonts/NotoSansSymbols2-Regular.ttf')),
            weight: 700,
            style: 'normal',
        },
    ],
    props: {
        dolares,
        col1,
        col2,
        fechaActualizacion,
    },
})
