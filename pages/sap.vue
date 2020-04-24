<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataDue"
      slide-class="slideBusinessWA"
      image="/img/new_service/customsap_header.png"
      alt-text="Sistemi innovativi su misura"
      text="SISTEMI INNOVATIVI SU MISURA"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        sviluppo custom sap
      </div>
    </div>
    <div
      class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center"
    >
      <div
        class="col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Il team di ESC ha sviluppato notevoli competenze in ambito di
          linguaggio di programmazione<br />
          ABAP, utilizzato dai profili informatici per personalizzare ai massimi
          livelli il sistema SAP.<br />
          Dopo aver contribuito alla migrazione dati in diversi roll-out abbiamo
          acquisito un bagaglio<br />
          tecnico nella definizione di flussi dati ed implementazioni di
          importazioni di Massa (LSMW)<br />
          attraverso lo sviluppo di procedure ETL che automatizzano,
          garantiscono e documentano il<br />
          processo di migrazione.
        </p>
        <p class="pt-md-5 pt-sm-3 pt-2 mb-md-1 ">
          <i>Strumento:</i>
        </p>

        <div class="col-12 text-center pt-md-0 mb-xl-4 pentaho">
          <a href="https://sapui5.hana.ondemand.com/" target="_blank">
            <img src="/img/service/sapui_logo.png" alt="Sapui" />
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
  name: 'Sap',
  components: { HeroSection },
  layout: 'services',
  computed: {
    keyToOmit: sync('service/keyToOmit')
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 4
    })
  }
}
</script>

<style scoped></style>
