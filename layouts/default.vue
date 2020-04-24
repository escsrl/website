<template>
  <div>
    <navbar></navbar>
    <nuxt />
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
import Navbar from '../components/Navbar'
import ServicesVue from '../components/Services'
import EscFooter from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
export default {
  components: { ScrollToTop, EscFooter, ServicesVue, Navbar }
}
</script>
