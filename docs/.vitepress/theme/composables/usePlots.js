export function usePlots() {
  async function getEcharts() {
    try {
      return echarts
    }
    catch (error) {
      await import('https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js')
      return echarts
    }
  }

  async function plotDolares() {
    const plotDolaresElement = document.querySelector('#plot-cotizacion-actual-dolares')

    if (!plotDolaresElement)
      return

    const chart = (await getEcharts()).init(plotDolaresElement)

    const cotizaciones = await fetch('https://dolarapi.com/v1/dolares').then(response => response.json())

    // Ordenar cotizaciones por valor de venta de menor a mayor
    const sortedCotizaciones = cotizaciones
      .sort((a, b) => a.venta - b.venta)
      .sort((a, b) => {
        // Mover la cotización oficial al principio

        if (a.casa === 'oficial')
          return -1

        if (b.casa === 'oficial')
          return 1

        return 0
      })

    // Obtener nombres y valores de cotizaciones
    const nombresCotizaciones = sortedCotizaciones.map(cotizacion => cotizacion.nombre)
    const valoresCotizaciones = sortedCotizaciones.map(cotizacion => cotizacion.venta)

    // Calcular el tipo de cambio oficial como base
    const tipoCambioOficial = valoresCotizaciones[0]

    const option = {
      title: {
        text: 'Variación de Cotizaciones respecto al Oficial',
      },
      xAxis: {
        type: 'category',
        data: nombresCotizaciones,
        axisLabel: {
          interval: 0,
          rotate: 45,
        },
        name: 'Casa de Cambio',
      },
      yAxis: {
        name: 'Variación con respecto al Oficial',
        type: 'value',
      },
      grid: {
        top: '10%',
        bottom: '10%',
        left: '10%',
        right: '10%',
      },
      series: [
        {
          name: 'Tipo de cambio oficial',
          type: 'bar',
          stack: 'Total',
          silent: true,
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
          },
          emphasis: {
            itemStyle: {
              borderColor: 'transparent',
              color: 'transparent',
            },
          },
          data: valoresCotizaciones.map((valor, index) => {
            if (index === 0)
              return 0

            if (valor > tipoCambioOficial)
              return tipoCambioOficial

            return tipoCambioOficial - Math.abs(valor - tipoCambioOficial)
          }),
          label: {
            show: false,
          },
          tooltip: {
            show: false,
          },
        },
        {
          name: 'Variación positiva',
          type: 'bar',
          stack: 'Total',
          data: valoresCotizaciones.map((valor, index) => {
            if (index === 0) {
              return {
                value: valor,
                itemStyle: {
                  color: '#3b82f6',
                },
              }
            }

            if (valor > tipoCambioOficial)
              return valor - tipoCambioOficial

            return 0
          }),
          label: {
            show: true,
            position: 'top',
            formatter(params) {
              if (params.name === 'Oficial')
                return `$${params.value.toFixed(2)}`

              if (params.value === 0)
                return ''

              return params.value > 0 ? `+${params.value.toFixed(2)}` : params.value.toFixed(2)
            },
          },
          itemStyle: {
            color: '#6366f1',
          },
        },
        {
          name: 'Variación negativa',
          type: 'bar',
          stack: 'Total',
          data: valoresCotizaciones.map((valor, index) => {
            if (index === 0)
              return 0

            if (valor > tipoCambioOficial)
              return 0

            return Math.abs(valor - tipoCambioOficial)
          }),
          label: {
            show: true,
            position: 'bottom',
            formatter(params) {
              if (params.value === 0)
                return ''

              return params.value > 0 ? `-${params.value.toFixed(2)}` : params.value.toFixed(2)
            },
          },
          itemStyle: {
            color: '#ec4899',
          },
        },
      ],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        formatter(params) {
          let output = `Dólar ${params[0].name}`

          if (params[0].name === 'Oficial') {
            output += `<br/>Base: $${params[0].value.toFixed(2)}`
          }
          else if (params[0].value > 0) {
            const cotizacion = (params[0].value + tipoCambioOficial).toFixed(2)
            const brecha = ((cotizacion - tipoCambioOficial) / tipoCambioOficial) * 100
            const brechaAbsoluta = cotizacion - tipoCambioOficial
            output += `<br/>Brecha: ${brecha.toFixed(2)}% ($${brechaAbsoluta.toFixed(2)})
<br/>Precio: $${(cotizacion)}`
          }
          else if (params[1].value > 0) {
            const cotizacion = (Math.abs(params[1].value - tipoCambioOficial)).toFixed(2)
            const brecha = ((cotizacion - tipoCambioOficial) / tipoCambioOficial) * 100
            const brechaAbsoluta = cotizacion - tipoCambioOficial
            output += `<br/>Brecha: ${brecha.toFixed(2)}% ($${brechaAbsoluta.toFixed(2)})
<br/>Precio: $${(cotizacion)}`
          }

          return output
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
      ],
    }

    chart.setOption(option)
  }

  async function plotCotizacionActual(casa) {
    const plotCotizacionActualElement = document.querySelector(`#plot-cotizacion-actual-${casa}`)

    if (!plotCotizacionActualElement)
      return

    const chart = (await getEcharts()).init(plotCotizacionActualElement)

    const cotizacionActual = (await fetch(`https://dolarapi.com/v1/dolares/${casa}`).then(response => response.json()))

    const fechaFormateada = new Date(cotizacionActual.fechaActualizacion).toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const option = {
      series: [
        {
          type: 'scatter',
          data: [
            {
              value: [0, 0],
              label: {
                formatter: [
                                    `{title|Dólar ${cotizacionActual.nombre}}{titleBg|}
{hr|}
{contentLine|Fecha de actualización: ${fechaFormateada}}
{hr|}
{contentLine|Compra: $${cotizacionActual.compra}}
{hr|}
{contentLine|Venta: $${cotizacionActual.venta}}`,
                ].join('\n'),
                rich: {
                  titleBg: {
                    align: 'right',
                  },
                },
              },
            },
          ],
          symbolSize: 0,
          label: {
            show: true,
            backgroundColor: '#f1f5f9',
            borderColor: '#cbd5e1',
            borderWidth: 1,
            borderRadius: 5,
            color: '#000',
            fontSize: 14,
            rich: {
              titleBg: {
                backgroundColor: '#e2e8f0',
                height: 30,
                borderRadius: [5, 5, 0, 0],
                padding: [0, 10, 0, 10],
                width: '100%',
              },
              title: {
                align: 'center',
                color: '#0f172a',
              },
              hr: {
                borderColor: '#cbd5e1',
                width: '100%',
                borderWidth: 0.5,
                height: 0,
              },
              contentLine: {
                align: 'center',
                color: '#0f172a',
                height: 25,
                padding: [0, 10, 0, 10],
              },
            },
          },
        },
      ],
      xAxis: {
        show: false,
        min: -1,
        max: 1,
      },
      yAxis: {
        show: false,
        min: 0,
        max: 2,
        inverse: true,
      },
    }

    chart.setOption(option)
  }

  function findCasaToPlot(node) {
    const casas = ['oficial', 'blue', 'bolsa', 'contadoconliqui', 'solidario', 'mayorista']
    casas.forEach((casa) => {
      if (node.querySelector(`#plot-cotizacion-actual-${casa}`))
        plotCotizacionActual(casa)
    })

    if (node.querySelector('#plot-cotizacion-actual-dolares'))
      plotDolares()
  }

  function resizeCharts(node) {
    node.querySelectorAll('div[id^="plot-"]').forEach(async (element) => {
      const id = element.getAttribute('_echarts_instance_')
      const chart = (await getEcharts()).getInstanceById(id)
      if (!chart)
        return

      chart.resize()
    })
  }

  return {
    findCasaToPlot,
    resizeCharts,
  }
}
