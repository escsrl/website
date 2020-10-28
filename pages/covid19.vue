<template>
  <div>
    <div
      class="row pt-md-5"
      style="text-align: center; cursor: pointer; margin: 0 auto;"
      @click="clickLink"
    >
      <div class="col-12 mb-4">
        <b-img src="/img/covid/covid.jpg" class="text-center" height="200" />
      </div>
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase mt-4"
      >
        Esc Statistiche dei contagi Covid-19 aggiornate in tempo reale
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Covid19',
  components: {},
  layout: 'notemplate',
  computed: {},
  methods: {
    clickLink() {
      window.open('https://covid19.esconsulting.it', '_blank')
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {})
  }
}
</script>

<style scoped></style>
