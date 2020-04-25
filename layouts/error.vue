<template>
  <div class="container-fluid" style="text-align: center">
    <h1 v-if="error.statusCode === 404">404 - Pagina non trovata</h1>
    <h1 v-else>{{ error.message }}</h1>
    <nuxt-link to="/"
      ><img src="/img/rickmorty.png" alt="Rick & Morty"
    /></nuxt-link>
    <h3>🔙 We're going home Morty</h3>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {
          statusCode: 500,
          message: 'Errore Generico'
        }
      }
    }
  },
  layout: 'void'
}
</script>
