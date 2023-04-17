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
            ESC Enterprise Software Consulting società di consulenza gestionale
            ed informatica, dal 2003, offre al mercato progetti di
            trasformazione dei processi e valorizzazione dei dati. Le nostre
            soluzioni sono sostenibili, non invasive ma saldamente integrate
            nell’ecosistema azienda con tre presupposti fondamentali: non
            replicare il passato, non anticipare il futuro, soddisfare il
            presente.
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
        // {
        //   key: 2,
        //   background: 'backgroundSchermataTre',
        //   slideClass: 'slideQuattro',
        //   mainTitle: {
        //     animation: 'fadeInLeft',
        //     classes: 'textUno fontLatoBlack',
        //     text: "PAROLA D'ORDINE: \n INTEROPERABILITÀ"
        //   },
        //   subTitle: {
        //     animation: 'fadeInRight',
        //     classes: 'textDue fontPinkText',
        //     text: 'INTEGRAZIONI GESTIONALI'
        //   },
        //   images: [
        //     {
        //       animation: 'fadeInRight',
        //       class: 'polipo0',
        //       src: '/img/animazioni/polipo_00.png'
        //     },
        //     {
        //       animation: 'bounceInRight',
        //       class: 'vasetti',
        //       src: '/img/animazioni/vasetti.png'
        //     },
        //     {
        //       animation: 'fadeInDown',
        //       class: 'informations',
        //       src: '/img/animazioni/informations.png'
        //     },
        //     {
        //       animation: 'fadeInDown',
        //       class: 'provetta1',
        //       src: '/img/animazioni/provetta_01.png'
        //     },
        //     {
        //       animation: 'fadeInRight',
        //       class: 'provetta2',
        //       src: '/img/animazioni/provetta_02.png'
        //     },
        //     {
        //       animation: 'fadeIn',
        //       class: 'tentacolo1',
        //       src: '/img/animazioni/tentacolo_01.png'
        //     },
        //     {
        //       animation: 'fadeIn',
        //       class: 'tentacolo2',
        //       src: '/img/animazioni/tentacolo_02.png'
        //     }
        //   ]
        // },
        {
          key: 2,
          background: 'backgroundSchermataCinque',
          slideClass: 'slideCinque',
          mainTitle: {
            animation: 'fadeInLeft',
            classes: 'textUno fontLatoBlack',
            text: 'INTERFACCE SEMPLICI \n MASSIMA \n PRODUTTIVITÀ'
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
        },
        {
          key: 3,
          background: 'backgroundSchermataTre',
          slideClass: 'slideQuattro',
          mainTitle: {
            animation: 'fadeInLeft',
            classes: 'textUno fontLatoBlack',
            text: "INFORMAZIONI A COLPO D'OCCHIO"
          },
          subTitle: {
            animation: 'fadeInRight',
            classes: 'textDue fontPinkText',
            text: 'APPROFONDIMENTI'
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
        }
      ]
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    showSlide(slide) {
      return this.currentSlide === slide && !this.sliding
    }
  }
}
</script>

<style scoped></style>
