<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataTre"
      slide-class="slideBusinessIG"
      image="/img/new_service/integrazgest_header.png"
      alt-text="Interoperabilità"
      text="PAROLA D'ORDINE: INTEROPERABILITÀ"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 pt-integrazioni ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        integrazioni gestionali
      </div>
    </div>
    <div
      class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center"
    >
      <div
        class="col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          I nostri progetti di data integration mirano a migliorare la gestione
          dei dati, la raccolta,<br />
          l’elaborazione e lo scambio di informazioni attraverso processi che
          garantiscano la qualità<br />
          del dato. Il risultato è ottenuto tramite tools open source che
          agevolano la generazione di nuove<br />
          informazioni a partire da dati provenienti da fonti diverse.<br />
          Per le integrazione tra applicazioni ci serviamo di strumenti software
          che migliorano<br />
          l'interoperabilità tra diversi sistemi al fine di modernizzare,
          consolidare e coordinare i servizi in<br />
          ambiente enterprise.
        </p>
        <p class="pt-md-5 pt-sm-3 pt-2 mb-md-1 ">
          <i>Strumento:</i>
        </p>

        <div class="col-12 text center pt-md-0 mb-xl-4 pentaho">
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
  name: 'IntegrazioniGestionali',
  components: { HeroSection },
  layout: 'services',
  computed: {
    keyToOmit: sync('service/keyToOmit')
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 1
    })
  }
}
</script>

<style scoped></style>
