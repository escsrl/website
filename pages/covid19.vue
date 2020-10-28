<template>
  <div>
    <div
      class="row pt-md-5"
      style="text-align: center; cursor: pointer; margin: 0 auto;"
      @click="clickLink"
    >
      <div class="col-12 mb-4">
        <b-img src="/img/covid/covid.jpg" class="text-center" />
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
  computed: {},
  methods: {
    clickLink() {
      window.location = 'https://covid19.esconsulting.it'
    }
  },
  head() {
    return {
      title: 'Esc',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Enterprise Software Consulting'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'https://storage.googleapis.com/escsitoweb/covid_social.png'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Statistiche dei contagi Covid-19 aggiornate in tempo reale'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://covid19.esconsulting.it'
        }
      ]
    }
  },
  layout: 'notemplate',
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.clickLink()
    })
  },
  beforeRouteUpdate(to, from, next) {
    this.clickLink()
    next()
  }
}
</script>

<style scoped></style>
