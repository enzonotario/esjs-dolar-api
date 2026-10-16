---
title: 'Privacidad'
description: 'Aviso sobre los datos de conexión de la API, la documentación y la app de DolarApi: qué hay, para qué, quién los trata y por cuánto tiempo.'
aside: false
outline: false
sidebar: false
prev: false
next: false
---

# Privacidad

**Actualización:** 15 de octubre de 2026.

## Qué es esta página

Este aviso cubre la API, la documentación y la app de DolarApi.

La API está en [dolarapi.com](https://dolarapi.com) y en los hosts regionales `cl`, `ve`, `uy`, `mx`, `bo`, `br` y `co` de `dolarapi.com`. La documentación está en [dolarapi.com/docs](https://dolarapi.com/docs/). La app está en [app.dolarapi.com](https://app.dolarapi.com).

## Quién es responsable

El responsable del tratamiento es el proyecto DolarApi.

El contacto es [hi@enzonotario.me](mailto:hi@enzonotario.me).

## Qué datos hay

La API no pide cuenta, nombre ni correo.

Lo que queda de una consulta es un dato de conexión: dirección IP, fecha, ruta, código HTTP, User-Agent y el referrer, si el cliente lo envía. La aplicación de la API no guarda ese dato en una base de usuarios y no pone cookies.

La documentación y la app, además, miden visitas. Esa medición usa una cookie.

## Para qué

Esos datos sirven para entregar la respuesta, para la seguridad del servicio y para estadísticas de tráfico con las que se opera el servicio.

No hay un perfil de usuario de la API.

## Quién más los trata

Estos servicios también tratan datos de conexión. Pueden tratarlos fuera de Argentina.

- **Cloudflare Pages** aloja la API y actúa como proxy y como protección del servicio. Ve la IP para entregar el pedido y para la seguridad. DolarApi no copia esos registros a una base propia.
- **Google Analytics** mide visitas en [dolarapi.com/docs](https://dolarapi.com/docs/) y en [app.dolarapi.com](https://app.dolarapi.com). [Google Analytics 4 usa la IP para una ubicación aproximada y no la guarda en los informes](https://support.google.com/analytics/answer/11598602?hl=en). Una consulta a la API no pasa por Google Analytics.
- **Algolia** solo interviene en la búsqueda de la documentación. Una consulta a la API no pasa por Algolia. La política de Algolia está en [algolia.com/policies/privacy](https://www.algolia.com/policies/privacy).

## Cuánto tiempo

DolarApi no guarda un access log propio de la API ni copias rotadas de cada consulta. Tampoco conserva estadísticas de 30 ni de 395 días, ni un conteo de direcciones con la IP completa.

Cloudflare conserva los registros de la API según su [política de privacidad](https://www.cloudflare.com/privacypolicy/). El proyecto no fija ese plazo.

Google Analytics, en la documentación y en la app, usa la IP para una ubicación aproximada y no la guarda en los informes.

No prometemos un borrado manual de cada log de infraestructura.

## Qué no hacemos

- No vendemos datos de conexión.
- No los usamos para anuncios de la API.
- No los cruzamos con otras bases para identificar a quien consulta.

## Derechos

La [Ley 25.326](https://www.argentina.gob.ar/normativa/nacional/ley-25326-64790) reconoce los derechos de acceso, rectificación, actualización y supresión. El pedido se hace por correo a [hi@enzonotario.me](mailto:hi@enzonotario.me).

La autoridad de control es la [Agencia de Acceso a la Información Pública (AAIP)](https://www.argentina.gob.ar/aaip).

Si un dato está solo en un proveedor, se gestiona con lo que el proyecto controla.

## Cambios

Este aviso se puede actualizar. Vale la fecha de arriba.
