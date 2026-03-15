import { describe, expect, it } from 'vitest'
import { extraerCotizacion, extraerCotizacionEur } from '@/ve/bcv.extractor.esjs'

function contentHoy() {
  const ahora = new Date(Date.now() - 4 * 60 * 60 * 1000)
  return `${ahora.toISOString().slice(0, 10)}T00:00:00-04:00`
}

function htmlUsd(content, valor = '65,1256') {
  return `
    <div class="recuadrotsmc" id="dolar">
      <strong>${valor}</strong>
      <span class="date-display-single" property="dc:date" datatype="xsd:dateTime" content="${content}">texto</span>
      <span>USD</span>
    </div>
  `
}

function htmlEur(content, valor = '70,5678') {
  return `
    <div class="recuadrotsmc" id="euro">
      <strong>${valor}</strong>
      <span class="date-display-single" property="dc:date" datatype="xsd:dateTime" content="${content}">texto</span>
      <span>EUR</span>
    </div>
  `
}

describe('bcv.extractor - validación de fecha', () => {
  it('retorna nulo si la fecha del BCV es futura (USD)', () => {
    const resultado = extraerCotizacion(htmlUsd('2099-03-16T00:00:00-04:00'))
    expect(resultado).toBeNull()
  })

  it('retorna cotizacion si la fecha del BCV es hoy (USD)', () => {
    const resultado = extraerCotizacion(htmlUsd(contentHoy()))
    expect(resultado).not.toBeNull()
    expect(resultado.fuente).toBe('oficial')
    expect(resultado.promedio).toBeGreaterThan(0)
  })

  it('retorna nulo si la fecha del BCV es futura (EUR)', () => {
    const resultado = extraerCotizacionEur(htmlEur('2099-03-16T00:00:00-04:00'))
    expect(resultado).toBeNull()
  })

  it('retorna cotizacion si la fecha del BCV es hoy (EUR)', () => {
    const resultado = extraerCotizacionEur(htmlEur(contentHoy()))
    expect(resultado).not.toBeNull()
    expect(resultado.fuente).toBe('oficial')
    expect(resultado.moneda).toBe('EUR')
    expect(resultado.promedio).toBeGreaterThan(0)
  })

  it('retorna cotizacion si no hay fecha en el HTML (comportamiento anterior)', () => {
    const html = `
      <div class="recuadrotsmc" id="dolar">
        <strong>65,1256</strong>
        <span>USD</span>
      </div>
    `
    const resultado = extraerCotizacion(html)
    expect(resultado).not.toBeNull()
    expect(resultado.promedio).toBeGreaterThan(0)
  })
})
