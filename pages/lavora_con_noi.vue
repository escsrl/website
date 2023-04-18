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

    <!--Contattaci-->
    <div id="contatti" class="container-fluid">
      <div class="container">
        <div class="row pt-contatti pb-contatti">
          <div class="col-12 text-left fontSizeText fontGrayText">
            <p>
              Siamo alla ricerca di due sviluppatori da inserire nel nostro
              team:<br />
            </p>
            <p><b>Full Stack Developer - Senior</b><br /></p>

            <b>
              La persona che stiamo cercando deve possedere i seguenti
              requisiti:
            </b>
            <ul>
              <li>Conoscenza PHP</li>
              <li>Conoscenza SQL</li>
              <li>Conoscenza Javascript</li>
              <li>Capacità di lavorare in team</li>
              <li>Esperienza di almeno 3/4 anni</li>
            </ul>

            <b>E' gradito:</b>
            <ul>
              <li>Esperienza API REST</li>
              <li>Esperienza nello sviluppo di applicazione frontend</li>
              <li>Utilizzo di VueJs</li>
              <li>Docker</li>
            </ul>

            <p class="link">
              Se hai queste caratteristiche invia il curriculum a
              <a
                href="mailto:info@esconsulting.it?subject=CANDIDATURA - FULL STACK DEVELOPER - JUNIOR"
                target="_blank"
              >
                <u>info@esconsulting.it</u>
              </a>
            </p>
            <p><b>Developer - Junior</b><br /></p>

            <b>
              La persona che stiamo cercando deve possedere i seguenti
              requisiti:
            </b>
            <ul>
              <li>Conoscenza PHP</li>
              <li>Conoscenza SQL</li>
              <li>Conoscenza Javascript</li>
              <li>Capacità di lavorare in team</li>
              <li>Esperienza di almeno 2 anni</li>
            </ul>

            <p class="link">
              Se hai queste caratteristiche invia il curriculum a
              <a
                href="mailto:info@esconsulting.it?subject=CANDIDATURA - DEVELOPER - JUNIOR"
                target="_blank"
              >
                <u>info@esconsulting.it</u>
              </a>
            </p>
            <p>
              <b>Perché scegliere ESC </b><br />
              Utilizzerai le più recenti tecnologie e framework di sviluppo<br />
              Lavorerai in un team giovane<br />
              Sarai coinvolto nelle principali scelte di sviluppo e contribuirai
              stabilmente alla crescita del team <br />
            </p>

            <b>Il nostro stack tecnologico</b><br />
            <ul>
              <li>PHP</li>
              <li>JS</li>
              <li>VueJs</li>
              <li>PostgreSQL/MySQL</li>
              <li>Docker</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '../components/Animation'

export default {
  name: 'Contatti',
  components: { Animation },
  layout: 'noservices',
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
            text: "AUTOMATIZZA L'IMPOSSIBILE"
          },
          subTitle: {
            animation: 'fadeInRight',
            classes: 'textDue fontPinkText',
            text: 'INTEGRAZIONE GESTIONALI'
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
