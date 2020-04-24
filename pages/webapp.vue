<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataCinque"
      slide-class="slideBusinessWA"
      image="/img/new_service/webapplication_header.png"
      alt-text="Massima felssibilità"
      text="SEMPLICI INTERFACCE PER LA MASSIMA REPERIBILITÀ DEI DATI"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        web application
      </div>
    </div>
    <div
      class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center"
    >
      <div
        class="col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Per facilitare la gestione aziendale e garantire una maggior
          fruibilità delle informazioni,<br />
          sviluppiamo web application che garantiscono soluzioni ad alta
          produttività ed efficienza. In<br />
          maniera funzionale e semplice, infatti, tutti i dati necessari per
          raggiungere gli obiettivi di<br />
          business sono sempre disponibili online.
        </p>

        <!-- Download broschure -->
        <nuxt-link
          to="/brochure/web_architecture.pdf"
          target="_blank"
          class="click_link box_download"
          style="margin-top: 5%;"
        >
          <img src="/img/common/pdf.png" />
          <div class="testo fontGrayText">Scarica <br />la brochure</div>
        </nuxt-link>

        <div
          class="col-12 text-center pb-shape mt-md-5 mt-sm-2 pt-sm-3 pb-md-8-esc web_app"
        >
          <div class="row">
            <div
              class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
            >
              Case history
            </div>
          </div>

          <div
            class="col-12 text-center pb-shape mt-md-5 mt-sm-2 pt-sm-3 pb-md-8-esc web_app"
          >
            <div class="link fontGrayText">
              <i>Visita il sito:</i>
            </div>
            <a href="https://shape-plus.it" target="_blank">
              <img src="/img/service/shapeplus_logo.png" alt="Pentaho" />
            </a>

            <!-- Download broschure -->
            <nuxt-link
              to="/brochure/Esc_Presentazione_PBI.pdf"
              target="_blank"
              class="box_download"
              style="margin-top: 5%;"
            >
              <img src="/img/common/pdf.png" />
              <div class="testo fontGrayText">
                Scarica <br />la brochure di <br /><span class="underline"
                  >Shape+</span
                >
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import { fab } from '@fortawesome/free-brands-svg-icons'
import HeroSection from '../components/HeroSection'
export default {
  name: 'Webapp',
  components: { HeroSection },
  layout: 'services',
  computed: {
    keyToOmit: sync('service/keyToOmit'),
    fab() {
      return fab
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 0
    })
  }
}
</script>

<style scoped></style>
