---
aside: false
outline: false
title: Dólares Ámbito
---

<script setup>
import { setRegionForSidebar } from '../../.vitepress/sidebar/sidebar.utils.js'

setRegionForSidebar('ar')
</script>

<div class="flex flex-col">

<OAOperation operationId="get-ambito-dolares" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolares-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-oficial" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-oficial-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-blue" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-blue-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-bolsa" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-bolsa-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-contadoconliqui" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-contadoconliqui-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-tarjeta" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-tarjeta-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-mayorista" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-mayorista-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAOperation operationId="get-ambito-dolar-cripto" :hide-default-footer="true">

<template #description="description">

<OAPathEndpoint :method="description.method" :path="description.path" :baseUrl="description.baseUrl" />

Devuelve la cotización según Ámbito Financiero.

</template>

<template #try-it="tryIt">

<OATryItButton :operation-id="tryIt.operationId" :method="tryIt.method" hide-endpoint>

<template #response="response">

<OACodeBlock :code="JSON.stringify(response.response, null, 2)" lang="json" label="JSON" :is-dark="tryIt.isDark" :disable-html-transform="response.response.length > 1000" />
             
</template>

</OATryItButton>

</template>

<template #footer>

<OAFooter />

<!--@include: ./parts/get-ambito-dolar-cripto-footer.md -->

</template>

</OAOperation>

<hr style="margin: 4rem 0;">

<OAFooter />

</div>