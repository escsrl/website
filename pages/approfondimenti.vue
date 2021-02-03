<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataTre"
      slide-class="slideBusinessIG"
      image="/img/new_service/integrazgest_header.png"
      alt-text="Interoperabilità"
      text="INFORMAZIONI A COLPO D'OCCHIO!!"
    />

    <div class="row pt-md-5 pt-sm-3 pt-3 pt-integrazioni ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        Approfondimenti
      </div>
    </div>
    <b-container
      class="text-center pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5"
    >
      <b-row
        class="col-6 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Riflessioni ed approfondimenti sulle tematiche informatiche e
          sull'evoluzione tecnologica
        </p>
      </b-row>

      <b-row class="pt-4">
        <b-col
          class="d-flex justify-content-around flex-wrap align-items-stretch"
        >
          <div v-for="card in cards" :key="card.key" class="mb-3">
            <case-card
              :title="card.title"
              :content="card.content"
              :link="card.link"
            >
            </case-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import HeroSection from '../components/HeroSection'
import CaseCard from '../components/CaseCard'
export default {
  name: 'IntegrazioniGestionali',
  components: { CaseCard, HeroSection },
  layout: 'services',
  data() {
    return {
      cards: [
        {
          key: 0,
          title: 'Dati informazioni e contesto',
          link:
            'https://www.slideshare.net/slideshow/embed_code/key/sYjl8PKmqKriyh',
          content:
            'Dato e informazione sono spesso utilizzati come sinonimi, ma in realtà i due termini, dal punto' +
            'di vista informatico, possiedono un significato differente.\n' +
            'Il dato contestualizzato diventa informazione: differenziazione tra dato e informazione con' +
            'definizione del contesto.'
        },
        {
          key: 1,
          title: 'Il percorso delle informazioni',
          link:
            'https://www.slideshare.net/slideshow/embed_code/key/1l5fog1sOUnNYz',
          content:
            'Il processo decisionale basato sui dati ed è definito sulla base di elementi concreti, in linea con ' +
            'obiettivi, scopi e iniziative aziendali. Il processo di validazione dei dati ha come prerequisito la ' +
            'definizione, la pulizia, la trasformazione e l’organizzazione dei dati.'
        },
        {
          key: 2,
          title: 'Perchè business intelligence',
          link:
            'https://www.slideshare.net/slideshow/embed_code/key/l5YRhjexpUwgEP',
          content:
            'La Business Intelligence: i processi e gli strumenti utili per raccogliere dati di diversa natura per analizzarli e trarre decisioni strategiche, semplificando il processo di comprensione e analisi dei dati.'
        }
      ]
    }
  },
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
