## Ejemplos de uso

### App.DolarApi.com

<IndexDemo url="https://app.dolarapi.com" image="https://dolarapi.com/docs/assets/og.png" github-url="https://github.com/enzonotario/esjs-dolar-app" />

```js eval code=false inspector=false
async function getData() {
    const coloresMap = {
        oficial: '#6b7280',
        blue: '#3b82f6',
        bolsa: '#6366f1',
        contadoconliqui: '#22c55e',
        mayorista: '#ec4899',
        tarjeta: '#f97316',
        cripto: '#eab308',
    }
  
    const casasMap = {
        oficial: 'Oficial',
        blue: 'Blue',
        bolsa: 'MEP',
        contadoconliqui: 'CCL',
        mayorista: 'Mayorista',
        tarjeta: 'Tarjeta',
        cripto: 'Cripto',
    }
  
    const dolares = (await fetch('https://dolarapi.com/v1/dolares').then((res) => res.json()))
  
    const dolarOficial = dolares.find((dolar) => dolar.casa === 'oficial')
  
    return dolares
      .map((dolar) => {
          return {
              moneda: dolar.moneda,
              casa: dolar.casa,
              nombre: casasMap[dolar.casa],
              compra: dolar.compra,
              venta: dolar.venta,
              fechaActualizacion: dolar.fechaActualizacion,
              x1: dolarOficial.venta,
              x2: dolar.casa === 'oficial' ? dolar.venta : dolar.venta,
              color: coloresMap[dolar.casa],
              brecha: dolar.casa === 'oficial' ? 0 : (dolar.venta - dolarOficial.venta) / dolarOficial.venta * 100,
          };
      })
}
```

```js eval code=false inspector=false
function getPlotBase({
    data,
    x,
    y,
    xLabel,
    yLabel,
    title,
    additionalMarks,
}) {
    return Plot.plot({
        marginTop: 60,
        marginLeft: 60,
        width,
        height: 400,
        padding: 0.3,
        x: {
          insetRight: 50,
          axis: 'top',
          labelAnchor: 'center',
          grid: true,
        },
        y: {
          axis: 'left',
          label: '',
        },
        marks: [
          Plot.ruleX([data.find((d) => d.casa === 'oficial').venta / 1.5], { strokeWidth: 0 }),
          Plot.ruleX([data.find((d) => d.casa === 'oficial').venta / 0.5], { strokeWidth: 0 }),
          
          Plot.arrow(data, {
            y: 'nombre',
            x1: 'x1',
            x2: 'x2',
            sort: {
              y: 'x2',
            },
            stroke: (d) => d.x2 > d.x1 ? '#14b8a6' : '#ef4444',
          }),
          
          Plot.dot(
            data.filter((d) => d.brecha === 0),
            {
                x: 'x1',
                y: 'nombre',
                fill: 'color',
                r: 10,
              }
          ),
          Plot.dot(
            data.filter((d) => d.brecha !== 0),
            {
              x: 'x1',
              y: 'nombre',
              fill: 'color',
              r: 5,
            }
          ),
          
          Plot.text(data, {
            x: 'x1',
            y: 'nombre',
            text: (d) => d.casa === 'oficial' ? '' : `${d.brecha.toFixed(2) > 0 ? '+' : ''}${d.brecha.toFixed(2)}%`,
            dx: 30,
            dy: -10,
          }),
          Plot.text(
            data.filter((d) => d.brecha > 0),
            {
                x: 'x2',
                y: 'nombre',
                text: (d) => `$${d.x2.toFixed(2)}`,
                textAnchor: 'end',
                dx: 50,
              }
          ),
          Plot.text(
            data.filter((d) => d.brecha < 0),
            {
              x: 'x2',
              y: 'nombre',
              text: (d) => `$${d.x2.toFixed(2)}`,
              textAnchor: 'start',
              dx: -50,
            }
          ),
          Plot.text(
            data.filter((d) => d.brecha === 0),
            {
              x: 'x2',
              y: 'nombre',
              text: (d) => `$${d.x2.toFixed(2)}`,
              textAnchor: 'center',
              dx: 0,
              dy: -20,
              fontWeight: 'bold',
            }
          ),
        ],
    }) 
}
```

### Variación de Cotizaciones respecto al Oficial

`{{ new Date().toLocaleString('es-AR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }) }}`

```js eval code=false t=plot
(async () => {
  const data = (await getData())
  
  return getPlotBase({
    data,
  })  
})()
```
