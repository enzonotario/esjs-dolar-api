import colors from 'tailwindcss/colors'

export function usePlots() {
  let isDark = false

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

    // Ordena las cotizaciones por valor de venta de menor a mayor
    const sortedCotizaciones = cotizaciones
      .sort((a, b) => a.venta - b.venta)
      .sort((a, b) => {
        if (a.casa === 'oficial')
          return -1

        if (b.casa === 'oficial')
          return 1

        return 0
      })

    const colorsMap = {
      oficial: colors.gray[500],
      blue: colors.blue[500],
      bolsa: colors.indigo[500],
      contadoconliqui: colors.green[500],
      solidario: colors.yellow[500],
      mayorista: colors.pink[500],
    }

    // Extrae los nombres, valores y colores de las cotizaciones
    const nombres = sortedCotizaciones.map(cotizacion => cotizacion.nombre)
    const valores = sortedCotizaciones.map(cotizacion => cotizacion.venta)
    const colores = sortedCotizaciones.map(cotizacion => colorsMap[cotizacion.casa])

    // Extrae el valor del tipo de cambio oficial
    const tipoCambioOficial = valores[0]

    const option = {
      title: {
        text: 'Variación de Cotizaciones respecto al Oficial',
        textStyle: {
          color: isDark ? colors.gray[100] : colors.gray[800],
        },
      },
      xAxis: {
        type: 'category',
        data: nombres,
        axisLabel: {
          interval: 0,
          rotate: 45,
          color: isDark ? colors.gray[100] : colors.gray[800],
        },
        name: 'Casa de Cambio',
      },
      yAxis: {
        name: 'Variación con respecto al Oficial',
        type: 'value',
        axisLabel: {
          color: isDark ? colors.gray[100] : colors.gray[800],
        },
        splitLine: {
          lineStyle: {
            color: isDark ? colors.gray[700] : colors.gray[300],
          },
        },
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
          data: valores.map((valor, index) => {
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
          data: valores.map((valor, index) => {
            if (index === 0) {
              return {
                value: valor,
                itemStyle: {
                  color: colores[index],
                },
              }
            }

            if (valor > tipoCambioOficial) {
              return {
                value: valor - tipoCambioOficial,
                itemStyle: {
                  color: colores[index],
                },
              }
            }

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
            color: isDark ? colors.gray[100] : colors.gray[800],
          },
          itemStyle: {
            color: colors.green[500],
          },
        },
        {
          name: 'Variación negativa',
          type: 'bar',
          stack: 'Total',
          data: valores.map((valor, index) => {
            if (index === 0)
              return 0

            if (valor > tipoCambioOficial)
              return 0

            return {
              value: Math.abs(valor - tipoCambioOficial),
              itemStyle: {
                color: colores[index],
              },
            }
          }),
          label: {
            show: true,
            position: 'bottom',
            formatter(params) {
              if (params.value === 0)
                return ''

              return params.value > 0 ? `-${params.value.toFixed(2)}` : params.value.toFixed(2)
            },
            color: isDark ? colors.gray[100] : colors.gray[800],
          },
          itemStyle: {
            color: colors.red[500],
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
            backgroundColor: isDark ? colors.gray[800] : colors.gray[100],
            borderColor: isDark ? colors.gray[700] : colors.gray[300],
            borderWidth: 1,
            borderRadius: 5,
            color: isDark ? colors.gray[100] : colors.gray[800],
            fontSize: 14,
            rich: {
              titleBg: {
                backgroundColor: isDark ? colors.gray[700] : colors.gray[200],
                height: 30,
                borderRadius: [5, 5, 0, 0],
                padding: [0, 10, 0, 10],
                width: '100%',
              },
              title: {
                align: 'center',
                color: isDark ? colors.white : colors.black,
              },
              hr: {
                borderColor: isDark ? colors.gray[700] : colors.gray[300],
                width: '100%',
                borderWidth: 0.5,
                height: 0,
              },
              contentLine: {
                align: 'center',
                color: isDark ? colors.gray[100] : colors.gray[800],
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

  function setDarkMode(value) {
    isDark = value
  }

  return {
    findCasaToPlot,
    resizeCharts,
    setDarkMode,
  }
}
