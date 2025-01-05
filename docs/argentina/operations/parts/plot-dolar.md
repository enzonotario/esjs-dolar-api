```js eval code=false inspector=false
function getCasa() {
  return window.location.pathname.match(/get-dolar-(.*).html/).slice(1)[0]
}
```

```js eval code=false inspector=false
function getEndpoint() {
  const url = `https://dolarapi.com/v1/dolares/${getCasa()}`

  return url
}
```

```js eval code=false inspector=false
async function getData() {
    return (await fetch(getEndpoint()).then((res) => res.json()))
}
```

```js eval code=false
(async () => {
    const data = await getData()
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="flex flex-col items-center justify-center" style="width: ${width}px">
        <div class="w-full max-w-md flex flex-col items-center justify-center p-4 rounded border">
            <span class="text-2xl font-bold">Dólar ${data.nombre}</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
                <div class="flex flex-col items-center justify-center w-full h-full p-4">
                    <span>Compra</span>
                    <span class="text-lg font-bold">$${data.compra}</span>
                </div>
                <div class="flex flex-col items-center justify-center w-full h-full p-4">
                    <span>Venta</span>
                    <span class="text-lg font-bold">$${data.venta}</span>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center w-full h-full p-4">
                <span>Fecha de actualización</span>
                <span class="text-lg font-bold">${new Date(data.fechaActualizacion).toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }) }</span>
            </div>
        </div>
    </div>
    `;
    return card;
})();
```
