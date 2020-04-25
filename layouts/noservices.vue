<template>
  <div>
    <navbar></navbar>
    <nuxt />
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
import EscFooter from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
export default {
  components: { ScrollToTop, EscFooter, Navbar }
}
</script>
