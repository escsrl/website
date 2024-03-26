<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataCinque"
      slide-class="slideBusinessWA"
      image="/img/new_service/webapplication_header.png"
      alt-text="Massima flessibilità"
      text="INTERFACCE SEMPLICI, ALTA PRODUTTIVITÀ"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        web applications
      </div>
    </div>
    <div
      class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center"
    >
      <div
        class="col-9 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Per garantire una maggior fruibilità delle informazioni, sviluppiamo
          “Web Application” <br />
          che garantiscono soluzioni ad alta produttività ed efficienza
          gestionale. <br />Direttamente dal browser e da qualsiasi dispositivo,
          gestiamo informazioni e processi in maniera <br />semplice e
          funzionale per chiunque, ovunque e in qualsiasi momento.
        </p>

        <div class="col-12 text-center pb-shape mt-md-5 mt-sm-2 pt-sm-3">
          <div class="row">
            <div
              class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
            >
              Strumenti
            </div>
          </div>

          <b-container class="text-center">
            <b-row class="pt-4 d-flex flex-row justify-content-between">
              <b-col class="col-12 col-lg-5">
                <div class="d-flex flex-column align-items-center text-left">
                  <img src="../static/img/webapps/symfony_vuejs.png" />
                  <div class="mt-4">
                    <small>
                      <b>VUEJS</b> Un framework accessibile, performante e
                      versatile per la creazione di interfacce utente web.
                      <br />
                      <b>SYMFONY</b> Un potente framework PHP per creare
                      applicazioni web, API, microservizi e servizi web.
                    </small>
                  </div>
                </div>
              </b-col>
              <b-col class="col-12 col-lg-5">
                <div class="d-flex flex-column align-items-center text-left">
                  <nuxt-link to="/docsmarshal" class="click_link">
                    <img
                      src="/docsm/dm_logo_grey.png"
                      alt="Docsmarshal"
                      class="logo_docsmarshal"
                    />
                  </nuxt-link>
                  <div class="mt-4">
                    <small>
                      <b>Docsmarshal</b> è un sistema di Business Process
                      Management che aiuta a gestire e a misurare i processi
                      aziendali, combinando tecnologie informatiche e
                      metodologie organizzative.</small
                    >
                  </div>
                  <!-- Download broschure
                <nuxt-link
                  to="/brochure/web_architecture.pdf"
                  target="_blank"
                  class="click_link box_download"
                  style="margin-top: 5%;"
                >
                  <img src="/img/common/pdf.png" />
                  <div class="testo fontGrayText">
                    Scarica <br />la brochure
                  </div>
                </nuxt-link>
                 -->
                </div>
              </b-col>
            </b-row>
          </b-container>
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

<style scoped>
.logo_docsmarshal {
  width: 155px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
