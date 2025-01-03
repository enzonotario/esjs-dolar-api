---
aside: false
outline: false
title: vitepress-openapi
---

<script setup lang="ts">
import { useRoute, useData } from 'vitepress'
import { useOpenapi } from 'vitepress-openapi'
import spec from '../../../public/exchanges/openapi.json'

const route = useRoute()

const { isDark, params } = useData()

const operationId = route.data.params.operationId

const openapi = useOpenapi({ spec })

const baseUrl = openapi.getServers()[0].url

const url = baseUrl + openapi.getOperationPath(operationId)

document.title = params.value.pageTitle
</script>

<OAOperation :spec="spec" :operationId="operationId" :isDark="isDark" />

## Ejemplos

```js eval code=false inspector=false
function getEndpoint() {
    const pair = window.location.pathname.match(/get-exchange-moneda-(.*)-(.*).html/).slice(1)
  
    const url = `https://dolarapi.com/v1/exchanges/monedas/${pair[0]}/${pair[1]}`
  
    return url
}
```

```js eval code=false inspector=false
async function getData() {
    const exchanges = await fetch('https://dolarapi.com/v1/exchanges').then((res) => res.json());
    const monedas = (await fetch(getEndpoint()).then((res) => res.json()))
  
    return monedas
        .map((moneda) => {
            const exchange = exchanges.find((exchange) => exchange.id === moneda.exchange);
            return {
                exchange: moneda.exchange + (moneda.criptomonedaBase ? `-crypto-${moneda.criptomonedaBase}` : ''),
                compra: moneda.compra,
                venta: moneda.venta,
                exchangeLogo: exchange ? exchange.logo : null,
                exchangeNombre: exchange 
                  ? (exchange.nombre + (moneda.criptomonedaBase ? ` (${moneda.criptomonedaBase})` : '')) 
                  : null,
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
    const marks = [
        Plot.ruleY([0]),
        Plot.image(data, {
            x: x,
            y: y,
            src: 'exchangeLogo',
            width: 40,
            r: 20,
            title: 'exchange',
            sort: {x: 'y'}
        }),
        Plot.text(data, {x: x, y: y, text: 'exchangeNombre', dy: 35, lineAnchor: 'bottom'}),
        Plot.text(data, {x: x, y: y, text: y, dy: 50, lineAnchor: 'bottom'}),
        Plot.tip(data, Plot.pointerX({x: x, y: y})),
      ...additionalMarks,
    ]
    return Plot.plot({
        marginTop: 60,
        x: {label: xLabel},
        y: {label: yLabel},
        marks,
    }) 
}
```

### Opciones para pagar

```js eval code=false t=plot
(async () => {
  const data = (await getData())
    .filter((moneda) => moneda.compra > 0)
    .sort((a, b) => a.compra - b.compra);
  
  const mejorOpcion = data[0];
  
  return getPlotBase({
    data,
    x: 'exchangeNombre',
    y: 'compra',
    xLabel: 'Exchange',
    yLabel: 'Compra',
    title: 'Mejor opción para pagar',
    additionalMarks: [
      Plot.tip(
        ['Mejor opción para pagar', mejorOpcion.compra],
        {x: [mejorOpcion.exchangeNombre], y: [mejorOpcion.compra], dy: -10, anchor: 'bottom'}
      ),
    ]
  })  
})()
```

### Opciones para cobrar

```js eval code=false t=plot
(async () => {
  const data = (await getData())
    .filter((moneda) => moneda.venta > 0)
    .sort((a, b) => b.venta - a.venta);
  
  const mejorOpcion = data[0];
  
  return getPlotBase({
    data,
    x: 'exchangeNombre',
    y: 'venta',
    xLabel: 'Exchange',
    yLabel: 'Venta',
    title: 'Mejor opción para cobrar',
    additionalMarks: [
      Plot.tip(
        ['Mejor opción para cobrar', mejorOpcion.venta],
        {x: [mejorOpcion.exchangeNombre], y: [mejorOpcion.venta], dy: -10, anchor: 'bottom'}
      ),
    ]
  })  
})()
```
