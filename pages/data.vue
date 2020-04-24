<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataUno"
      slide-class="slideBusiness"
      image="/img/new_service/datacleaner_header.png"
      alt-text="Qualità dei dati lungo l'intero ciclo di vita"
      text="QUALITÀ DEI DATI LUNGO L'INTERO CICLO DI VITA"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        data cleaner-data-quality-data governance
      </div>
    </div>
    <div
      class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center"
    >
      <div
        class="col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Ottenere e mantenere la qualità del dato è un fattore determinante ed
          imprescindibile per<br />
          affrontare e incrementare attività di business. Le soluzioni da noi
          proposte mirano a sviluppare<br />
          un ciclo continuo e regolare per mantenere i dati legacy fino alla
          massima qualità, integrità e<br />
          coerenza standard.
        </p>
        <p class="pt-md-5 pt-sm-3 pt-2 mb-md-1 ">
          <i>Strumento:</i>
        </p>

        <div class="col-12 text-center pb-pentaho pt-md-0 mb-xl-4 pentaho">
          <a
            href="https://community.hitachivantara.com/docs/DOC-1009855-data-integration-kettle"
            target="_blank"
          >
            <img src="/img/service/pentaho_logo.png" alt="Pentaho" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import HeroSection from '../components/HeroSection'
export default {
  name: 'Data',
  components: { HeroSection },
  layout: 'services',
  computed: {
    keyToOmit: sync('service/keyToOmit')
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 2
    })
  }
}
</script>

<style scoped></style>
