<template>
  <!-- Footer-->
  <div
    class="container-fluid text-white footer"
    style="background-color: black;"
  >
    <div class="row pt-bottom pb-bottom">
      <div class="esc_img col-xl-1 col-lg-2 col-md-2 col-sm-3 col-3 text-left">
        <img src="/img/common/esc_logo_white.png" alt="ESC" class="text-left" />
      </div>
      <div class="col-xl-5 col-lg-6 col-md-5 col-sm-9 col-9">
        <div class="fontLatoBlackBolder fontGrayText esc_1">
          ESC Enterprise Software Consulting srl
        </div>
        <div class="fontLatoRegular fontContatti pt-2 esc_2">
          PI/CF IT 03031480167 <br />
          <a href="mailto:info@esconsulting.it" class="text-white"
            >info@esconsulting.it</a
          >
          <br />
          ESC Copyright. All Rights Reserved. <br />
        </div>
      </div>
      <div class="col-xl-1 col-lg-1 col-md-1 col-sm-12"></div>
      <div
        class="col-xl-4 col-lg-3 col-md-4 col-sm-12 col-12 pt-md-0 pt-sm-3 pt-3 pl-icon text-right text-black-50 footer_icone"
      >
        <a
          href="https://www.facebook.com/esctreviglio/"
          target="_blank"
          class="sfondoCerchio"
          ><font-awesome-icon :icon="fab.faFacebookF" class="fa-2x"
        /></a>
        <a
          href="https://twitter.com/esctreviglio"
          target="_blank"
          class="sfondoCerchio"
          ><font-awesome-icon :icon="fab.faTwitter" class="fa-2x"
        /></a>
        <a
          href="https://www.youtube.com/channel/UCNRnu3fnIXAg8OMnh87NHOw"
          target="_blank"
          class="sfondoCerchio"
          ><font-awesome-icon :icon="fab.faYoutube" class="fa-2x"
        /></a>
        <a
          href="https://www.linkedin.com/company/esc-enterprise-software-consulting/"
          target="_blank"
          class="sfondoCerchio"
          ><font-awesome-icon :icon="fab.faLinkedin" class="fa-2x"
        /></a>
        <a
          href="https://www.github.com/escsrl"
          target="_blank"
          class="sfondoCerchio"
          ><font-awesome-icon :icon="fab.faGithub" class="fa-2x"
        /></a>
      </div>
      <div class="col-xl-1"></div>
    </div>
  </div>
</template>

<script>
import { fab } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'EscFooter',
  computed: {
    fab() {
      return fab
    }
  }
}
</script>

<style scoped></style>
