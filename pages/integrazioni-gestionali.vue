<template>
  <div>
    <hero-section
      top-classes="businessUno backgroundSchermataTre"
      slide-class="slideBusinessIG"
      image="/img/new_service/integrazgest_header.png"
      alt-text="Interoperabilità"
      text="AUTOMATIZZA L'IMPOSSIBILE"
    ></hero-section>

    <div class="row pt-md-5 pt-sm-3 pt-3 pt-integrazioni ">
      <div
        class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
      >
        integrazione gestionali
      </div>
    </div>
    <b-container
      class="text-center pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5"
    >
      <b-row
        class="col-9 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          I nostri progetti di Data Integration automatizzano i processi di
          elaborazione e lo scambio di informazioni tra gli applicativi.<br />
          L’utilizzo di Docsmarshal agevola la trasformazione,
          l'interoperabilità e la flessibilità gestionale di informazioni
          provenienti da fonti dati diversificate.
        </p>
      </b-row>

      <div class="row" style="margin-top: 60px">
        <div
          class="col-12 text-center fontSizeTitle fontLatoBlack fontPinkText text-uppercase"
        >
          Strumenti
        </div>
        <b-container class="text-center">
          <b-row class="d-flex flex-row justify-content-center">
            <nuxt-link to="/docsmarshal" class="click_link">
              <img
                src="/docsm/dm_logo_grey.png"
                alt="Docsmarshal"
                class="logo_docsmarshal"
              />
            </nuxt-link>
          </b-row>
        </b-container>
      </div>
      <!--
      <b-row align-v="center">
        <b-col class="text-center">
          <b-img
            src="../static/img/integrazioni_gestionali/shopify.png"
            fluid
            class="text-center"
          />
        </b-col>
        <b-col>
          <b-img
            src="../static/img/integrazioni_gestionali/sap_one.png"
            fluid
          />
        </b-col>
      </b-row>

      <b-row align-v="center">
        <b-col>
          <b-img src="../static/img/integrazioni_gestionali/sap_r3.png" fluid />
        </b-col>
        <b-col>
          <b-img src="../static/img/integrazioni_gestionali/sigla.png" fluid />
        </b-col>
        <b-col>
          <b-img
            src="../static/img/integrazioni_gestionali/power_bi.png"
            fluid
          />
        </b-col>
      </b-row>

      <b-row align-v="center">
        <b-col>
          <b-img
            src="../static/img/integrazioni_gestionali/sales_force.png"
            fluid
          />
        </b-col>
        <b-col>
          <b-img
            src="../static/img/integrazioni_gestionali/ibm_mdm.png"
            fluid
          />
        </b-col>
      </b-row>
      -->
    </b-container>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify'
import HeroSection from '../components/HeroSection'
export default {
  name: 'IntegrazioniGestionali',
  components: { HeroSection },
  layout: 'services',
  data() {
    return {
      cards: [
        {
          key: 0,
          title: 'Integrazione SAP R/3 e SALESFORCE CRM',
          content:
            'Nello sviluppo dell’integrazione di questi due applicativi abbiamo avuto modo di\n' +
            '                  approfondire la diversità delle due architetture a confronto,le specificità di una\n' +
            '                  piattaforma in Cloud PaaS quale quella di SALESFORCE, la gestione del flusso dati\n' +
            '                  attraverso funzioni ETL, la conversione dei dati e le diverse tipologie di\n' +
            '                  integrazione realizzate sia di tipo Batch che on-line.'
        },
        {
          key: 1,
          title: 'Integrazione SAP R/3 e PRESENZE WEB',
          content:
            'Questa integrazione si è resa necessaria per evitare la doppia gestione\n' +
            '                  dell’anagrafica Dipendenti nell’applicativo PRESENZE WEB di TPC&Join S.r.l.\n' +
            '                  (<a href="http://www.tpc.it" class="fontPinkText"\n' +
            '                      target="_blank">www.tpc.it</a>)\n' +
            '                  per la gestione delle risorse umane. La funzione principale dell’applicazione\n' +
            '                  viene eseguita su richiesta dell’utente e prevede l’estrazione dei dati dei\n' +
            '                  dipendenti dal modulo HR di SAP, il controllo per differenza dei dati estratti\n' +
            '                  nell’ultimo trasferimento effettuato, ne completa i dati per poi generare le\n' +
            '                  corrispondenti anagrafiche o aggiornamenti delle pre-esistenti.'
        },
        {
          key: 2,
          title:
            'Integrazione tra anagrafiche Salesforce e i nominativi raccolti dal\n' +
            '                  Marketing',
          content:
            'Attraverso specifiche procedure ETL abbiamo attivato funzioni di Cleaning,\n' +
            '                  conversione e completamento dei contatti raccolti nelle attività di marketing per\n' +
            '                  comporre l’input necessario per l’importazione dati per le tre tipologie\n' +
            '                  anagrafiche previste in Salesforce (Leads, Contact, Account).'
        },
        {
          key: 3,
          title:
            'Integrazione SAP R/3 - PLM e MDM (Master Data Management) IBM',
          content:
            'Negli anni si è notato che la stessa informazione veniva replicata su più sistemi\n' +
            '                  manualmente e quindi con lo stesso dato scritto in maniera diversa.<br/>\n' +
            '                  Tramite l’utilizzo di ETL si è provveduto a gestire il dato dal proprietario ad un\n' +
            '                  accentratore di informazioni e certificatore delle stesse per la distribuzione su\n' +
            '                  vari sistemi.<br/>\n' +
            '                  In particolare il dato tecnico viene preso da un PLM e il dato gestionale da SAP\n' +
            '                  R/3, le informazioni vengono poi ridistribuite nei vari sistemi (PLM;SAP;WEB;ECC…)'
        },
        {
          key: 4,
          title: 'Integrazione gestionali con Microsoft Power BI',
          content:
            'Tramite l’utilizzo di ETL e grazie ai numerosi connettori presenti all’interno\n' +
            '                  dello strumento Microsoft Power BI si è provveduto a costruire vere e proprie\n' +
            '                  business intelligence, raccogliendo dati provenienti da fonti diversificate\n' +
            '                  (gestionali come Sigla++, SAP Business One e SAP R/3; WMS come Stocksystem di Replica\n' +
            '                  Sistemi; MES come net@pro di Qualitas; Excel; DB di Access) per generare report\n' +
            '                  dinamici e dashboard presentate in monitor installati sulle linee di montaggio o\n' +
            '                  da distribuire a varie funzioni dell’azienda.<br/>\n' +
            '                  Sono state coperte aree finanziarie con analisi dei costi/ricavi e flussi di\n' +
            '                  cassa, contabili, di budgeting e controllo KPI oltre che strumenti di controllo\n' +
            '                  del flusso attivo e passivo.'
        },
        {
          key: 5,
          title:
            'Scambio documenti bidirezionale tra 2 gestionali diversi Sigla++ e SAP\n' +
            'Business One',
          content:
            "L'implementazione richiedeva la comunicazione tra i 2 gestionali presenti in azienda per\n" +
            '                  mantenere allineate le giacenza di magazzino ed il flusso documentale, l’esigenza\n' +
            '                  è nata perché su SIGLA++ si gestisce la produzione/magazzino mentre si SAP Business One la\n' +
            '                  parte commerciale/amministrativa.<br/>\n' +
            '                  Tramite ETL e programmi scritti ad hoc i due sistemi si passano informazioni in\n' +
            '                  tempo reale in modo che per l’utente finale risulti tutto trasparente senza dover\n' +
            '                  intervenire per la duplicazione delle informazioni.<br/>\n' +
            '                  Per importare documenti in SAP Business One abbiamo utilizzato lo strumento SAP Data\n' +
            '                  Transfer Workbench, che fornisce dei template per l’importazione ed abbiamo\n' +
            '                  prodotto i file da importare tramite ETL.'
        },
        {
          key: 6,
          title:
            'Integrazione SIGLA++ (gestionale) con produzione personalizzata',
          content:
            'Il cliente ha sollevato la necessità di gestire tutto il ciclo passivo in maniera\n' +
            '                  del tutto personalizzata quindi si è deciso di creare un’applicazione WEB che si\n' +
            '                  sincronizza con il gestionale per le anagrafiche di base, permette di integrarle\n' +
            '                  con dati personalizzati e di gestire i documenti da qualsiasi strumento e\n' +
            '                  sincronizzare il flusso documentale generato dalla WEBAPP con il gestionale.'
        },
        {
          key: 7,
          title:
            'Integrazione gestionale con cartelli elettronici per negozi al dettaglio',
          content:
            'L’esigenza del cliente è quella di tenere sincronizzati, per ogni articolo, i\n' +
            '                  prezzi, le promozioni, le giacenze e consistenze nei vari magazzino per essere poi\n' +
            '                  esposti sugli scaffali.<br/>\n' +
            '                  Tramite un programma sempre in ascolto sul server principale dell’azienda vengono\n' +
            '                  applicate determinate regole a seconda del tipo di articolo e della promozione,\n' +
            '                  ogni trenta minuti vengono lette le informazioni aggiornate dal gestionale per\n' +
            '                  essere poi inviate ad ogni singolo cartellino elettronico presente in negozio ed\n' +
            '                  associato ognuno al proprio articolo.<br/>\n' +
            '                  Questa soluzione evita di ristampare ogni volta dei cartellini per ogni articoli,\n' +
            '                  applicarli allo scaffale e tenerli costantemente aggiornati.'
        },
        {
          key: 8,
          title: 'SAP R/3 Flussi/Ordini METEL',
          content:
            'L’esigenza del cliente è quella di gestire il flusso giornaliero dei dati da e\n' +
            '                  verso METEL.<br/>\n' +
            '                  E’ stato creato in SAP un cruscotto per importare gli ordini cliente provenienti\n' +
            '                  da METEL, in modo da poterli visualizzare ed eventualmente modificare prima che\n' +
            '                  vengano importati in SAP. E’ possibile visualizzare le note del cliente, e\n' +
            '                  modificare gli importi richiesti dal cliente secondo le logiche interne. Sono\n' +
            '                  stati inoltre sviluppati altri cruscotti per esportare in maniera automatica le\n' +
            '                  fatture e il listino prezzi.'
        },
        {
          key: 9,
          title: 'SAP R/3 Ordini WEB',
          content:
            'L’esigenza del cliente è quella di consentire una rapida immissione degli ordini\n' +
            '                  cliente in SAP direttamente al cliente o all’agente, senza passare dal back\n' +
            '                  office.<br/>\n' +
            '                  Abbiamo sviluppato un’interfaccia che consentisse l’inserimento dei dati via web,\n' +
            '                  in maniera molto rapida e con la possibilità di importare un file di testo creato\n' +
            '                  direttamente dal gestionale del cliente.<br/>\n' +
            '                  E’ stato poi creato un monitor degli ordini per verificarli e controllarli prima\n' +
            '                  di crearli in automatico su SAP, velocizzando così il lavoro del back office.'
        },
        {
          key: 10,
          title: 'SAP R/3 e ShapePlus',
          content:
            'Per gestire al meglio il flusso di vita utile di un articolo all’interno di SAP\n' +
            '                  R/3, sono state costruite tramite sviluppi ad hoc una serie di interazioni con \n' +
            '                  Shape+.<br/>\n' +
            '                  Questo ha permesso all’azienda di snellire e velocizzare le varie attività di\n' +
            '                  creazione e gestione di un articolo, oltre che poterne controllare la coerenza\n' +
            '                  rispetto alle regole aziendali.'
        },
        {
          key: 11,
          title:
            'Integrazione tra piattaforma ECommerce Shopify e SAP Business One',
          content:
            'L’esigenza era quella di far comunicare la piattaforma di ECommerce Shopify e il gestionale SAP Business One, importando gli ordini dal web e aggiornando la giacenza della merce sulla piattaforma web.<br />' +
            'Utilizzando le API di Shopify abbiamo gestito il flusso dati da e verso la piattaforma web, mentre per importare i corrispettivi in SAP Business One abbiamo utilizzato lo strumento SAP Data Transfer Workbench, che fornisce dei template per l’importazione ed abbiamo prodotto i file da importare tramite ETL.'
        },
        {
          key: 12,
          title: 'Creazione data warehouse per statistiche aziendali',
          content:
            'L’esigenza del cliente era di creare un unico data warehouse aziendale, incorporando i dati provenienti da ERP differenti (ACG, Galileo, SAP R/3) legati alle diverse società del gruppo.<br/>' +
            'Tramite l’utilizzo di trasformazioni ETL ogni giorno i dati vengono storicizzati e accodati, creando un’unica view dei dati del gruppo. Tramite Microsoft Power BI sono state poi preparate le dashboard necessarie per la visualizzazione e l’interrogazione dei dati.'
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

<style scoped>
.logo_docsmarshal {
  width: 200px;
  margin-top: 30px;
}
</style>
