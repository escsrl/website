<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataQuattro"
      slide-class="slideBusiness"
      image="/img/new_service/businessintell_header.png"
      alt-text="Massima fruibilità per l'utente"
      text="MASSIMA FRUIBILITÀ PER L'UTENTE"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        business intelligence self service
      </div>
    </div>

    <div class="container">
      <div
        class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5 text-center"
      >
        <div
          class="col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
        >
          <p>
            Mettiamo a disposizione le nostre tecniche e competenze per
            permettere all’utente finale di<br />
            ottenere le informazioni il prima possibile e nella maniera più
            semplice possibile, senza il<br />
            supporto continuo del personale informatico. Un modo innovativo,
            quindi, di definire la<br />
            reportistica e l'analisi dei dati per soddisfare bisogni e
            flessibilità di ogni fruitore.<br />
          </p>
          <p class="pt-lg-5 pt-xl-5 pt-xl-3 pt-sm-3 pt-2 mb-lg-1 ">
            <i>Strumenti:</i>
          </p>
        </div>
      </div>
    </div>

    <div class="container container_business">
      <div class="row pb-md-5 pb-sm-3 pb-3 mb-xl-5 text-center">
        <div
          class="col-sm-6 col-6 text-center business_images fontGrayText"
          style="border-right: 1px solid #dedede; padding-bottom: 2%;"
        >
          <i>Visita il sito:</i>
        </div>
        <div
          class="col-sm-6 col-6 text-center business_images fontGrayText"
          style="padding-bottom: 2%;"
        >
          <i>Visita il sito:</i>
        </div>

        <div
          class="col-sm-6 col-6 text-center business_images"
          style="border-right: 1px solid #dedede;"
        >
          <a href="https://powerbi.microsoft.com/it-it/" target="_blank">
            <img
              class="powerbi"
              src="/img/service/powerbi_logo.png"
              alt="powerbi"
            />
          </a>
        </div>
        <div class="col-sm-6 col-6 text-center business_images">
          <a href="https://www.metabase.com/" target="_blank">
            <img
              class="metabase"
              src="/img/service/metabase_logo.png"
              alt="metabase"
            />
          </a>
        </div>

        <!-- Download broschure -->
        <nuxt-link
          to="/brochure/Esc_Presentazione_PBI.pdf"
          target="_blank"
          class="box_download"
          style="margin-top: 20%;"
        >
          <img src="/img/common/pdf.png" />
          <div class="testo fontGrayText">
            Scarica <br />la brochure di <br /><span class="underline"
              >Power BI</span
            >
          </div>
        </nuxt-link>
      </div>
    </div>

    <div class="row">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        Case history
      </div>
    </div>

    <div class="container container_business_case_history">
      <div class="row pt-md-1 pb-md-5 pb-sm-3 pb-3 mb-xl-5">
        <!-- Download broschure -->
        <div class="box_case_history">
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiZjVhNTg2NGUtNWFhZi00YTE3LWJjZjgtZTdiMTc2ZGMwNzY0IiwidCI6ImUzZGM5NmY4LTU4YWQtNDM5ZC1iNTc4LWFjMzBmZjQ3OTQ0MSIsImMiOjh9"
            target="_blank"
            class="box_example"
          >
            <img src="/img/common/mdm_icon.png" />
            <div class="testo fontGrayText">
              Demo
              <div class="underline">Fatturato</div>
            </div>
          </a>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiMzM5Mzk0ZDYtMDljZC00ZGQyLWFhOTItNDc2NTJhYWE4OWEwIiwidCI6ImUzZGM5NmY4LTU4YWQtNDM5ZC1iNTc4LWFjMzBmZjQ3OTQ0MSIsImMiOjh9"
            target="_blank"
            class="box_example"
          >
            <img src="/img/common/mdm_icon.png" />
            <div class="testo fontGrayText">
              Demo
              <div class="underline">Ciclo Attivo</div>
            </div>
          </a>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiYjI3MmUwNjgtNWRiMC00ZDUwLTlmMjYtNmM4YzY3OTljZDU0IiwidCI6ImUzZGM5NmY4LTU4YWQtNDM5ZC1iNTc4LWFjMzBmZjQ3OTQ0MSIsImMiOjh9"
            target="_blank"
            class="box_example"
          >
            <img src="/img/common/mdm_icon.png" />
            <div class="testo fontGrayText">
              Demo
              <div class="underline">Contabilità</div>
            </div>
          </a>
          <a
            href="https://app.powerbi.com/view?r=eyJrIjoiMmJlMjM1M2YtZGQzNy00YjU1LWFmNWItN2I2ZTYzMGM5ZTAxIiwidCI6ImUzZGM5NmY4LTU4YWQtNDM5ZC1iNTc4LWFjMzBmZjQ3OTQ0MSIsImMiOjh9"
            target="_blank"
            class="box_example"
          >
            <img src="/img/common/mdm_icon.png" />
            <div class="testo fontGrayText">
              Demo
              <div class="underline">Produzione</div>
            </div>
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
  name: 'Bi',
  components: { HeroSection },
  layout: 'services',
  computed: {
    keyToOmit: sync('service/keyToOmit')
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.keyToOmit = 3
    })
  }
}
</script>

<style scoped></style>
