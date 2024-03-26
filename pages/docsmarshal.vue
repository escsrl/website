<template>
  <div>
    <div class="businessUno backgroundSchermataDocsmarshal">
      <div class="slideBusinessWA">
        <img src="../static/docsm/dm_logo_white.png" class="logoDocms" />
        <div
          class="textUno fontWhitetext"
          style="line-height: 1em; padding-top: 10px"
        >
          docsmarshal<br />
        </div>
        <div class="fontWhitetext" style="font-size: 24px">
          Gestione dinamica dei processi aziendali
        </div>
        <div class="textTre fontWhitetext">
          per qualsiasi esigenza produttiva
        </div>
      </div>
    </div>

    <div class="row pt-md-5 pt-sm-3 pt-3 ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack text-uppercase"
      ></div>
    </div>
    <div class="row pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center">
      <div
        class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          <b>Docsmarshal</b> è un sistema di
          <b>Business Process Management</b> che aiuta a gestire e a misurare i
          <b>processi aziendali</b>, combinando tecnologie informatiche e
          metodologie organizzative.
        </p>
      </div>
      <div
        class="col-12 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
        style="max-width: 1530px;"
      >
        <div class="row">
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center mt-md-5 mt-sm-2 pt-sm-3 boxDocsms"
          >
            <div class="iconDocsms bpm"></div>
            <h2>Business Process Management</h2>
            <p>
              Un efficace strumento a supporto della gestione e
              dell’ottimizzazione dei processi aziendali
            </p>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center mt-md-5 mt-sm-2 pt-sm-3 boxDocsms"
          >
            <div class="iconDocsms sysint"></div>
            <h2>System Integration</h2>
            <p>
              La soluzione software che fa da collante tra tutti i diversi
              sistemi aziendali
            </p>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center mt-md-5 mt-sm-2 pt-sm-3 boxDocsms"
          >
            <div class="iconDocsms bi"></div>
            <h2>Business Intelligence</h2>
            <p>
              Una finestra a 360 gradi sui tuoi dati aziendali per un data
              mining efficiente
            </p>
          </div>
          <!-- -->
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center mt-md-5 mt-sm-2 pt-sm-3 boxDocsms"
          >
            <div class="iconDocsms docsman"></div>
            <h2>Document Management</h2>
            <p>
              Un efficace strumento a supporto della gestione e
              dell’ottimizzazione dei processi aziendali
            </p>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center mt-md-5 mt-sm-2 pt-sm-3 boxDocsms"
          >
            <div class="iconDocsms dynamic"></div>
            <h2>Dynamic Docs Engine</h2>
            <p>
              Progetta e genera in modo dinamico e semplice molteplici tipi di
              documenti
            </p>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 text-center mt-md-5 mt-sm-2 pt-sm-3 boxDocsms"
          >
            <div class="iconDocsms serviceapp"></div>
            <h2>Service Oriented App</h2>
            <p>
              Un potente strumento che ti supporta nella realizzazione di
              soluzioni versatili e sofisticate
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import { fab } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'Webapp',
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
