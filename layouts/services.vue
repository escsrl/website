<template>
  <div>
    <navbar></navbar>
    <nuxt />
    <div id="servizi" class="container-fluid backgroundGrayLight">
      <div
        class="col-12 mb-md-0 mt-md-5 pt-title1 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        altri servizi
      </div>
    </div>
    <services-vue></services-vue>
    <esc-footer></esc-footer>
    <scroll-to-top></scroll-to-top>
  </div>
</template>

<style>
body {
  font-family: 'Lato', sans-serif;
}
</style>
<script>
import { call } from 'vuex-pathify'
import Navbar from '../components/Navbar'
import ServicesVue from '../components/Services'
import EscFooter from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
export default {
  components: { ScrollToTop, EscFooter, ServicesVue, Navbar },
  middleware: 'resetServices',
  methods: {
    reset: call('service/reset')
  },
  beforeRouteLeave(to, from, next) {
    this.reset()
    next()
  }
}
</script>
