<script setup>
</script>

<template>
  <div>
    <section class="w-full max-w-7xl mx-auto px-10 xl:px-4 space-y-12 md:space-y-24 pt-3">
      <div class="flex flex-col justify-center px-4 space-y-6">
        <div class="flex flex-col justify-center items-center">
          <img src="/assets/logo.png" alt="EsJS" class="w-full max-w-[8rem]">
        </div>

        <h1 class="tagline">
          <span class="accent">ArgentinaDatos</span>
          <br>
          API y Visualizaciones de Datos de Argentina
        </h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        <div class="flex flex-col justify-center items-center text-center p-6 space-y-6 rounded border dark:border-gray-800">
          <h1 class="tagline font-bold">
            API pública
          </h1>

          <p class="w-full max-w-sm">
            API RESTful para acceder a datos de Argentina
          </p>

          <div class="flex flex-row flex-wrap justify-center items-center gap-4">
            <a class="button button-primary rounded-full" href="/docs/">Documentación</a>

            <a
              class="button button-secondary rounded-full"
              href="https://github.com/enzonotario/esjs-argentina-datos-api"
              target="_blank" rel="noreferrer"
            >
              Ver en GitHub
            </a>
          </div>
        </div>

        <div class="flex flex-col justify-center items-center text-center p-6 space-y-6 rounded border dark:border-gray-800">
          <h1 class="tagline font-bold">
            Visualizaciones de Datos
          </h1>

          <p class="w-full max-w-sm">
            Visualizaciones interactivas de datos de Argentina
          </p>

          <div class="flex flex-row flex-wrap justify-center items-center gap-4">
            <a
              class="button button-primary rounded-full"
              href="https://app.argentinadatos.com/"
              target="_blank" rel="noreferrer"
            >
              Visualizaciones
            </a>

            <a
              class="button button-secondary rounded-full"
              href="https://github.com/enzonotario/argentina-datos-app"
              target="_blank" rel="noreferrer"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-row justify-center items-center space-x-4">
        <p class="w-full max-w-sm text-center">
          Desarrollado con <a href="https://es.js.org/?ref=argentinadatos.com" target="_blank" rel="noreferrer" class="font-bold">EsJS</a>
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tagline {
  @apply text-2xl md:text-3xl text-center;
  letter-spacing: -1px;
}
br {
  display: block;
  content: "";
  margin-top: 10px;
}
.accent {
  @apply text-4xl md:text-6xl font-bold;
  letter-spacing: -1.5px;
}
</style>
