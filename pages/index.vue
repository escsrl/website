<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="currentSlide"
      :interval="5000"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="slide in slides" :key="slide.key">
        <animation
          :active="showSlide(slide.key)"
          :background-class="slide.background"
          :main-title="slide.mainTitle"
          :sub-title="slide.subTitle"
          :images="slide.images"
          :slide-class="slide.slideClass"
          :animation-on-render="slide.key === 0 && sliding === null"
        ></animation>
      </div>
    </b-carousel>

    <div id="chi_siamo" class="container">
      <div class="row pt-title1 pt-sm-3 pt-3">
        <div
          class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
        >
          Vicini a tutte le aziende <br />per la gestione e analisi dei dati
        </div>
      </div>
      <div class="row pt-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 text-center">
        <div
          class="col-10 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
        >
          <p>
            ESC nasce nel 2003 come gruppo di professionisti e consulenti
            tecnici specializzati nel fornire ai clienti supporto strategico e
            tecnologico nello sviluppo di soluzioni legate ai dati.
          </p>
          <p class="pt-md-2 pt-sm-3 pt-2">
            La partnership con <b>Zend Technologies</b> ci ha permesso, nel
            2009, di diventare un importante punto di riferimento nel campo
            dello sviluppo di applicazioni web in ambiente PHP.
          </p>
          <p class="pt-paragrafo pb-paragrafo pt-sm-3 pt-2">
            Dopo aver maturato esperienza nello sviluppo di applicazione
            <b>ABAP</b> seguendo i processi di innovazione all’interno
            dell’ecosistema <b>SAP</b>, le nostre competenze web ci hanno
            portato ad utilizzare <b>SAPUI5</b> come piattaforma di sviluppo di
            applicazioni aziendali.
            <br />
            Con SAPUI5 le applicazioni sono ora responsive a tutti i browser e
            dispositivi, garantendo la massima libertà di movimento.
          </p>
        </div>
      </div>
    </div>
    <div class="container-fluid fontGrayText">
      <!--MISSION-->
      <div class="container">
        <div class="row pt-mission pt-sm-3 pt-3">
          <div class="barretta"></div>
          <div
            class="col-12 missionSfida text-center fontLatoBlack fontPinkText text-uppercase"
          >
            Mission
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-2 pb-3 text-center">
          <div class="col-10 text-center mx-auto fontLatoBlack fontSizeText">
            <p>
              La nostra mission è quella di affiancamento all’ITC nel valutare
              le problematiche aziendali, identificare i processi critici,
              condividere soluzioni di change management ed introdurre nuove
              metodologie di sviluppo per favorire il cambiamento culturale in
              azienda.<br />
              La nostra competenza in ambito ITC e gestionale motiva il team in
              creatività, ispirazione, apertura mentale e la giusta curiosità
              nell’identificare la soluzione dei problemi.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid fontGrayText">
      <!--SFIDA-->
      <div class="container">
        <div class="row pt-sfida pt-sm-3 pt-3">
          <div class="barretta"></div>
          <div
            class="col-12 missionSfida text-center fontLatoBlack fontPinkText text-uppercase"
          >
            Sfida
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row pt-md-5 pb-sfida pt-sm-3 pb-sm-3 pt-2 pb-3 text-center">
          <div
            class="col-10 text-center mx-auto fontLatoBlack fontSizeText fontGrayText"
          >
            <p>
              I nostri esperti affrontano le nuove sfide tecnologiche,
              accompagnando il cliente a ricercare e utilizzare la miglior
              soluzione in campo di Business Intelligence Open Source e a
              trasformare i dati aziendali in valore aggiunto.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="servizi" class="container-fluid backgroundGrayLight">
      <div class="container">
        <div class="row pt-title2 pt-sm-3 pt-3">
          <div
            class="col-12 pt-datimano text-center fontLatoBlack fontSizeTitle fontPinkText text-uppercase"
          >
            Dati alla mano <br />per strategie più efficaci
          </div>
        </div>
        <div class="row pt-md-4 pt-sm-3 pt-3 text-center">
          <div class="col-10 text-center mx-auto fontSizeText fontGrayText">
            <p>
              ESC Consulting realizza soluzioni per risolvere le problematiche
              di gestione del dato, trasformando quest’ultimo in informazione di
              valore.
            </p>
            <p>
              Seguiamo l’intero processo di data analytics per fornire una
              soluzione finale semplice, efficace, utile al raggiungimento del
              business aziendale:
            </p>
          </div>
        </div>
        <div class="row pt-md-2 pt-sm-3 pb-sm-3 pt-2 pb-2 text-center">
          <div
            class="col-10 text-center mx-auto fontLatoBlackBolder fontSizeText fontPinkText"
          >
            <p>
              RACCOLTA - TRASFORMAZIONE - AGGREGAZIONE<br />
              INTEGRAZIONE DA DIVERSI SISTEMI<br />
              MONITORAGGIO E RACCOLTA TRAMITE DASHBOARD<br />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { call } from 'vuex-pathify'
import Animation from '../components/Animation'
export default {
  components: { Animation },
  data() {
    return {
      currentSlide: 0,
      sliding: null,
      slides: [
        {
          key: 0,
          background: 'backgroundSchermataQuattro',
          slideClass: 'slideUno',
          mainTitle: {
            animation: 'fadeInDown',
            classes: 'textUno fontLatoBlack',
            text: "MASSIMA FRUIBILITÀ \n PER L'UTENTE"
          },
          subTitle: {
            animation: 'fadeInUp',
            classes: 'textDue fontPinkText',
            text: 'BUSINESS INTELLIGENCE SELF SERVICE'
          },
          images: [
            {
              animation: 'fadeInLeft',
              class: 'distributori',
              src: '/img/animazioni/distributori.png'
            },
            {
              animation: 'fadeInLeft',
              class: 'pallini',
              src: '/img/animazioni/pallini.png'
            },
            {
              animation: 'fadeInUp',
              class: 'mano',
              src: '/img/animazioni/mano.png'
            }
          ]
        },
        {
          key: 1,
          background: 'backgroundSchermataDue',
          slideClass: 'slideDue',
          mainTitle: {
            animation: 'fadeInLeft',
            classes: 'textUno fontLatoBlack',
            text: 'SISTEMI \n INNOVATIVI \n SU MISURA'
          },
          subTitle: {
            animation: 'fadeInRight',
            classes: 'textDue fontPinkText',
            text: 'SVILUPPO CUSTOM SAP'
          },
          images: [
            {
              animation: 'fadeInUp',
              class: 'manichino',
              src: '/img/animazioni/manichino.png'
            },
            {
              animation: 'fadeInUp',
              class: 'maniMetro',
              src: '/img/animazioni/mani_metro.png'
            },
            {
              animation: 'fadeInRight',
              class: 'maniForbice',
              src: '/img/animazioni/mani_forbice.png'
            },
            {
              animation: 'fadeInUp',
              class: 'maniSpilli',
              src: '/img/animazioni/mano_spilli.png'
            },
            {
              animation: 'fadeInRight',
              class: 'maniLente',
              src: '/img/animazioni/mano_lente.png'
            }
          ]
        },
        {
          key: 2,
          background: 'backgroundSchermataUno',
          slideClass: 'slideTre',
          mainTitle: {
            animation: 'fadeInDown',
            classes: 'textUno fontLatoBlack',
            text: "QUALITÀ DEI DATI \n LUNGO L'INTERO \n CICLO DI VITA"
          },
          subTitle: {
            animation: 'fadeInUp',
            classes: 'textDue fontPinkText',
            text: 'DATA CLEANER-QUALITY-GOVERNANCE'
          },
          images: [
            {
              animation: 'fadeInRight',
              class: 'data0',
              src: '/img/animazioni/datacleaner_00.png'
            },
            {
              animation: 'fadeInDown',
              class: 'data1',
              src: '/img/animazioni/datacleaner_01.png'
            },
            {
              animation: 'fadeInDown',
              class: 'data2',
              src: '/img/animazioni/datacleaner_02.png'
            },
            {
              animation: 'fadeInDown',
              class: 'data3',
              src: '/img/animazioni/datacleaner_03.png'
            }
          ]
        },
        {
          key: 3,
          background: 'backgroundSchermataTre',
          slideClass: 'slideQuattro',
          mainTitle: {
            animation: 'fadeInLeft',
            classes: 'textUno fontLatoBlack',
            text: "PAROLA D'ORDINE: \n INTEROPERABILITÀ"
          },
          subTitle: {
            animation: 'fadeInRight',
            classes: 'textDue fontPinkText',
            text: 'INTEGRAZIONI GESTIONALI'
          },
          images: [
            {
              animation: 'fadeInRight',
              class: 'polipo0',
              src: '/img/animazioni/polipo_00.png'
            },
            {
              animation: 'bounceInRight',
              class: 'vasetti',
              src: '/img/animazioni/vasetti.png'
            },
            {
              animation: 'fadeInDown',
              class: 'informations',
              src: '/img/animazioni/informations.png'
            },
            {
              animation: 'fadeInDown',
              class: 'provetta1',
              src: '/img/animazioni/provetta_01.png'
            },
            {
              animation: 'fadeInRight',
              class: 'provetta2',
              src: '/img/animazioni/provetta_02.png'
            },
            {
              animation: 'fadeIn',
              class: 'tentacolo1',
              src: '/img/animazioni/tentacolo_01.png'
            },
            {
              animation: 'fadeIn',
              class: 'tentacolo2',
              src: '/img/animazioni/tentacolo_02.png'
            }
          ]
        },
        {
          key: 4,
          background: 'backgroundSchermataCinque',
          slideClass: 'slideCinque',
          mainTitle: {
            animation: 'fadeInLeft',
            classes: 'textUno fontLatoBlack',
            text:
              'SEMPLICI INTERFACCE \n PER LA MASSIMA \n REPERIBILITÀ DEI DATI'
          },
          subTitle: {
            animation: 'fadeInRight',
            classes: 'textDue fontPinkText',
            text: 'WEB APPLICATION'
          },
          images: [
            {
              animation: 'fadeInDown',
              class: 'webapplications',
              src: '/img/animazioni/webapplucations_00.png'
            },
            {
              animation: 'fadeInRight',
              class: 'lettera',
              src: '/img/animazioni/lettera_alata.png'
            },
            {
              animation: 'fadeIn',
              class: 'computer',
              src: '/img/animazioni/computer.png'
            },
            {
              animation: 'fadeIn',
              class: 'tratteggio',
              src: '/img/animazioni/tratteggio.png'
            },
            {
              animation: 'fadeInUp',
              class: 'cassetti',
              src: '/img/animazioni/cassetti.png'
            }
          ]
        }
      ]
    }
  },
  methods: {
    reset: call('service/reset'),
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showSlide(slide) {
      return this.currentSlide === slide && !this.sliding
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.reset()
    })
  }
}
</script>

<style scoped></style>
