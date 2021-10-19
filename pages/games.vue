<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataCinque"
      slide-class="slideBusinessWA"
      image="/img/new_service/webapplication_header.png"
      alt-text="GAMES"
      text="CONQUISTA LE TUE SKILL, LE ABILITÀ E MIGLIORA LE COMPETENZE DEI TUOI DIPENDENTI<br/> ATTRAVERSO UNA PIATTAFORMA INNOTIVA E PERSONALIZZABILE"
    />

    <div class="row pt-md-5 pt-sm-3 pt-3 pt-integrazioni ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        ESC gaming skills
      </div>
    </div>
    <b-container
      class="text-center pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5"
    >
      <b-row
        class="col-9 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Una soluzione pensata per le aziende.<br />
          Attraverso un gioco a quiz con domande e risposta, potrai raccogliere
          informazioni preziose sulle competenze che vorrai valutare all'interno
          della tua azienda.
        </p>
      </b-row>

      <b-row align-v="center">
        <b-col>
          <div
            class="click_link quiz_download"
            style="margin-top: 5%;"
            @click="goToLink('https://game.esconsulting.it/quiz/primoSoccorso')"
          >
            <b-img src="/img/game/primo_soccorso.jpg" />
            <div class="testo fontGrayText">
              Quiz <br />
              Primo soccorso<br />
              Gioca ora!
            </div>
          </div>
        </b-col>
        <b-col>
          <div
            class="click_link quiz_download"
            style="margin-top: 5%;"
            @click="goToLink('https://game.esconsulting.it/quiz/antincendio')"
          >
            <b-img src="/img/game/antincendio.jpg" />
            <div class="testo fontGrayText">
              Quiz <br />
              Antincendio<br />
              Gioca ora!
            </div>
          </div>
        </b-col>
        <b-col>
          <div
            class="click_link quiz_download"
            style="margin-top: 5%;"
            @click="
              goToLink('https://game.esconsulting.it/quiz/sicurezzaSulLavoro')
            "
          >
            <b-img src="/img/game/sicurezza_sul_lavoro.jpg" />
            <div class="testo fontGrayText">
              Quiz <br />
              Sicurezza sul lavoro<br />
              Gioca ora!
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="quiz_download" style="margin-top: 5%;">
            <b-img src="/img/game/quiz.jpg" />
            <div class="testo fontGrayText">
              E tanti altri...
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import HeroSection from '../components/HeroSection'

export default {
  name: 'EsCyber',
  components: { HeroSection },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 1
    })
  },
  layout: 'services',
  data() {
    return {}
  },
  computed: {
    keyToOmit: sync('service/keyToOmit')
  },
  methods: {
    goToLink(link) {
      window.open(link, '_blank')
    }
  }
}
</script>

<style scoped></style>
