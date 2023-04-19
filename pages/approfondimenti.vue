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
    <b-container class="text-center">
      <b-row
        class="col-9 text-center mx-auto fontSizeText fontLatoRegular fontGrayText"
      >
        <p>
          Riflessioni ed approfondimenti sulle tematiche informatiche e
          sull'evoluzione tecnologica
        </p>
      </b-row>
    </b-container>

    <b-container
      class="text-center pt-md-5 pb-md-5 pt-sm-3 pb-sm-3 pt-3 pb-3 mb-xl-5"
    >
      <b-row class="pt-4">
        <b-col class="d-flex flex-column">
          <div
            v-for="card in cardsReversedOrder()"
            :key="card.key"
            class="mb-3"
          >
            <case-card
              :title="card.title"
              :content="card.content"
              :link="card.link"
              :type="card.type"
            ></case-card>
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
          type: 'slide',
          link:
            'https://www.slideshare.net/slideshow/embed_code/key/sYjl8PKmqKriyh',
          content:
            'Dato e informazione sono spesso utilizzati come sinonimi, ma in realtà i due termini, dal punto' +
            'di vista informatico, possiedono un significato differente.<br />' +
            'Il dato contestualizzato diventa informazione: differenziazione tra dato e informazione con' +
            'definizione del contesto.'
        },
        {
          key: 1,
          title: 'Il percorso delle informazioni',
          type: 'slide',
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
          type: 'slide',
          content:
            'La Business Intelligence: i processi e gli strumenti utili per raccogliere dati di diversa natura per analizzarli e trarre decisioni strategiche, semplificando il processo di comprensione e analisi dei dati.'
        },
        {
          key: 3,
          title: 'Cos’è la cultura del dato',
          content:
            "L’effetto positivo di una consolidata cultura dei dati è quello di consentire a tutti gli utenti di utilizzare attivamente le informazioni. Questo non solo facilita il loro lavoro quotidiano, ma consente anche all'azienda di sfruttare appieno il proprio potenziale. Dopotutto, l'uso attivo dei dati, rende le decisioni più autorevoli e spesso più efficaci rispetto al passato. Il modello di business di queste aziende si deve basare sulla valorizzazione e fruibilità delle informazioni, costruite da una consolidata base dati,organizzata, strutturata e alimentata da svariate fonti di acquisizione.<br />" +
            '<br />' +
            "Le aziende che utilizzano i dati per specifici casi d’uso, oltre al loro utilizzo strategico, possono anche sfruttarli per la generazione di nuove idee o approcci evolutivi come ad esempio, la riqualificazione continua dei loro data warehouse o per l'implementazione di una BI self-service sempre più invasiva a supporto dell’utente.<br />" +
            '<br />' +
            "Indipendentemente dall'approccio che un'azienda utilizza per ottenere informazioni dai propri dati, il processo di acquisizione e sfruttamento dei dati è determinante, perché solo comprendendo e analizzando il loro contenuto, un'azienda può soddisfare con successo le esigenze del proprio business.<br />" +
            'La cultura dei dati è un percorso aziendale evolutivo che determina, nel tempo, fattori di influenza positiva nella struttura organizzativa, nel contesto aziendale, nella comunicazione e nel processo decisionale dei manager.<br />' +
            '<br />' +
            'La Tecnologia in questi contesti è solo uno strumento a disposizione dell’utente per poter verificare la congruità dei risultati e la veridicità dell’informazione.<br />' +
            'Le persone invece sono il vero punto di forza di questi progetti purché dotate delle giuste competenze per avere la capacità di valutare le informazioni e poterle monetizzarle nei processi quotidiani.<br />' +
            '<br />' +
            'Eppure quasi tutti ancora ci illudiamo che il futuro somiglierà al passato!'
        },
        {
          key: 4,
          title: 'Business Process Management',
          content:
            "Come il business process management può aiutarci a ottimizzare e automatizzare continuamente i processi aziendali per migliorare l'efficienza e ridurre i costi.<br />" +
            '<br />' +
            'Cos’ è il BPM<br />' +
            'Il Business process management (BPM), è uno strumento che permette di analizzare modellare,misurare, migliorare e ottimizzare i processi aziendali.<br />' +
            'Attraverso la revisione dei processi, si possono snellire i flussi di lavoro portando una maggiore efficienza e risparmio dei costi ed accelerare le strategie di trasformazione digitale.<br />' +
            '<br />' +
            'Tipologia di BPM<br />' +
            'Possiamo identificare tre tipi principali di business process management: <br />' +
            "finalizzata sull'integrazione, rivolta alle persone e focalizzata sui documenti<br />" +
            '<br />' +
            'BPM Finalizzato sull’integrazione: si concentra sui processi che non richiedono molto coinvolgimento umano. Sono processi che integrano i dati tra i sistemi, come sviluppi Custom o la gestione delle relazioni con i clienti (CRM).<br />' +
            '<br />' +
            'BPM rivolto alle persone: è incentrato sul coinvolgimento umano, tipicamente dove sono richieste le approvazioni. Sono costituiti da Interfacce utente intuitive con funzioni che permettono di assegnare compiti a diversi livelli, rendendo più facile responsabilizzare gli individui lungo il processo.<br />' +
            '<br />' +
            'BPM focalizzato sui documenti: è specifico su un tipo di documento, come un contratto. Quando le aziende acquistano un prodotto o un servizio, questo deve passare attraverso diverse forme e giri di approvazione per arrivare a un accordo tra il cliente e il venditore.<br />' +
            '<br />' +
            'Le soluzioni BPM consentono di definire processi strutturati e produrre una serie di vantaggi tra i quali: l’eliminazione della carta, la drastica diminuzione di mail, la tracciatura delle attività svolte, la gestione dei solleciti nel caso il task non venga evaso nel tempo stabilito,maggior trasparenza nelle responsabilità e comunicazione tra i gruppi e l’eliminazione di lavori ripetitivi a basso valore.'
        },
        {
          key: 5,
          title: "Cos'è il Data Warehouse?",
          content:
            'Un Data Warehouse (DW) è un contenitore di dati organizzati. I dati possono essere consolidati da più fonti ed integrati rendendoli unici ed organizzati per essere facilmente interrogati. I dati nei DW sono memorizzati in database relazionali progettati e pronti per essere utilizzati in report analitici, nei processi decisionali e grazie alla loro univocità per analizzare il contesto dei dati aziendali. <br />' +
            "I dati memorizzati in un DW sono isolati e ottimizzati dai dati delle transazioni di origine, da cui sono stati generati e quindi non influiscono sull'attività quotidiana.<br />" +
            '<br />' +
            'I DW sono principalmente sistemi di sola lettura, contengono i dati storici ritenuti significativi per l’azienda. Pertanto il DW fungerà da motore di back-end per gli strumenti di Business Intelligence che mostrano report e dashboard agli utenti aziendali. I DW sono ampiamente utilizzati in tutti i settori di business in quanto trasversali, fondamentali e universali nella loro struttura e tipologia.<br />' +
            '<br />' +
            'Il DW infine non è una tecnologia, ma una metodologia che caratterizza le diverse modalità di archiviazione dei dati. È opportuno individuare fin da subito, la tipologia di data warehouse che più si avvicina alle nostre esigenze per evitare di sviluppare soluzioni inadeguate alle proprie necessità. Da non sottovalutare è anche la scelta dello strumento (tools) da utilizzare per alimentare il data warehouse. E’ fortemente consigliato l’utilizzo di un prodotto ETL per le sue peculiari caratteristiche di base come la flessibilità, facilità di implementazione e la manutenzione nel tempo a discapito dei classici sviluppi custom che inizialmente sembrano i più efficaci.'
        },
        {
          key: 6,
          title: "Cos'è l'analisi dei dati",
          content:
            "Lo scopo dell'analisi dei dati è comprendere le relazioni tra diverse variabili al fine di prendere decisioni informate. Comprendendo le relazioni tra le variabili, possono indirizzare meglio gli sforzi nel prendere decisioni più informate sulle strategie aziendali.<br />" +
            '<br />' +
            'Ma per fare tutte queste cose meravigliose, prima di tutto hai bisogno dei dati, giusto? È qui che entrano in gioco le attività meno riconosciute, le meno pubblicizzate, le meno amate,ma le più importanti del processo di analisi e che sono la causa principale di insuccesso dei progetti di business intelligence.<br />' +
            '<br />' +
            'Come posso migliorare le mie capacità di analisi dei dati?<br />' +
            'Quali sono i dati di cui devo disporre per le mie analisi dei dati?<br />' +
            'Come posso integrare diverse fonti di dati nella mia analisi?<br />' +
            'Dove si trovano e come sono organizzati i miei dati?<br />' +
            'I dati disponibili sono congruenti, strutturati ed organizzati e pronti per essere utilizzati?<br />' +
            'Quali sono i processi più importanti che influenzano i dati?<br />' +
            'Altri importanti fattori che influenzano i dati sono, il tipo di dati e il relativo formato. <br />' +
            'Se i dati sono in formato testo o inclusi in fogli di calcolo possono essere utilizzati come base di analisi, diversamente dai dati che sono parte integrante di documenti aziendali che invece necessitano di competenze, strumenti ed attività per renderli disponibili.<br />' +
            'Se i dati sono integrati in un altro sistema o database si dovranno sviluppare funzionalità per includerli nella base dati di analisi.<br />' +
            '<br />' +
            'Le piattaforme di integrazione consentono di prendere i dati estratti da una piattaforma, condividerli e convogliarle le informazioni verso una fonte comune per essere organizzati e strutturati per essere analizzati senza grossi problemi.<br />' +
            '<br />' +
            'Gli strumenti di visualizzazione dei dati possono aiutarti a vedere modelli e approfondimenti nei tuoi dati che altrimenti non avresti mai visto e possono aiutarti a prendere decisioni migliori e a vedere come i tuoi dati influiscono sulla tua attività.<br />' +
            '<br />' +
            'Come più volte ricordato l’analisi dei dati è un percorso necessario se vuoi traguardare il futuro della tua azienda.<br />' +
            'Non è più un problema tecnologico, la tecnologia oramai è disponibile e matura e sta già correndo verso l’intelligenza artificiale per darti sempre più supporto nelle tue decisioni,ma per imparare ed essere esaustiva avrà bisogno dei tuoi dati.<br />' +
            '<br />' +
            'Per il bene della tua azienda non puoi più aspettare, prendi l’ultima decisione senza il supporto dei dati e non sarai più solo nel decidere consapevolmente.<br />' +
            '<br />' +
            '<i>"Non vediamo le cose come sono. Vediamo le cose come siamo."<br />' +
            'Anais Nin</i>'
        },
        {
          key: 7,
          title: "Che cos'è la preparazione dei dati?",
          content:
            'I dati grezzi sono ovunque e sono disordinati, travolgenti e inutili finché tu o qualcun altro non ne vedete il valore, li ordinate e li etichettate.<br />' +
            'La preparazione dei dati è una serie di passaggi utilizzati per identificare, raccogliere, pulire e rendere i dati disponibili ad altre parti interessate, dai team di business intelligence (BI) ad altri team di analisi fino alla soluzione esecutiva, assicurando che ogni persona disponga della fornitura di dati di cui ha bisogno per essere supportato nelle decisioni. Dobbiamo partire da risposte semplici per ridurre la complessità: le risposte diventano meno monolitiche quando le persone interessate possono vedere il prodotto finale costruito mattone dopo mattone. <br />' +
            'Non possiamo solo acquisire nuovi strumenti o capacità e sperare per il meglio<br />' +
            "Invece, dobbiamo reinventare la presentazione dell'analisi e ripensare a come trasformare le informazioni a supporto del processo decisionale.<br />" +
            '<br />' +
            "Siamo limitati solo dalla debolezza dell'attenzione e dalla povertà dell'immaginazione."
        },
        {
          key: 8,
          title: 'Come funziona la Business Intelligence?',
          content:
            'Come sappiamo, la maggior parte delle organizzazioni ha i propri obiettivi e bisogni specifici. Queste esigenze aumentano di giorno in giorno, all’incrementare del nostro business associato a variabili sempre più variabili. Per mantenere il controllo dei costi e continuare a migliorare i ricavi è necessario raccogliere dati  (ad esempio, dati sui clienti e dati di vendita) da analizzare per definire le azioni atte a determinare gli obiettivi prefissati.<br />' +
            '<br />' +
            'Pertanto, possiamo riassumere che, la BI copre il processo di raccolta e archiviazione dei dati e dei metodi per analizzarli e migliorare l’efficacia dei risultati.<br />' +
            'Complessivamente, questi flussi di lavoro creano una rappresentazione della conoscenza aziendale attraverso un percorso articolato e impegnativo di selezione, raccolta e archiviazione dei dati.<br />' +
            'L’intero processo BI può essere sintetizzato in questi punti:<br />' +
            "Preparazione dei dati: assemblaggio di più risorse di dati, pulizia delle stesse e traduzione dei dati grezzi per l'analisi dei dati.<br />" +
            '<br />' +
            "Reporting: organizzare e curare i dati in un formato per l'analisi per trarre conclusioni e ottenere una decisione fruttuosa.<br />" +
            '<br />' +
            'Analisi operativa: confronto con i dati storici per monitorare le prestazioni rispetto agli obiettivi aziendali.<br />' +
            '<br />' +
            "Analisi descrittiva: un punto di partenza introduttivo applicato per preparare i dati per un'analisi aggiuntiva.<br />" +
            '<br />' +
            'Visualizzazione dei dati: analisi dei dati sotto forma di interpretazioni visive (ad es. grafici, grafici e istogrammi ).<br />' +
            '<br />' +
            "Analisi visiva: narrazione visiva (cioè colore, linea, trama e scala ) per trasmettere le percezioni dell'analisi.<br />" +
            '<br />' +
            'Oltre agli step previsti dal processo di BI, per la buona riuscita del progetto, è necessario gestire gli imprevisti, pianificare un periodo di approfondimento del dominio aziendale, conoscere le regole adottate nell’organizzazione dei dati, l’affidabilità e l’attendibilità dei processi operativi valutando l’efficacia e l’attendibilità dei risultati. Senza questi presupposti le informazioni raccolte risulteranno poco affidabili e suscettibili di interpretazioni, rendendo vano lo sforzo di conoscenza dei dati aziendali.'
        },
        {
          key: 9,
          title:
            'I problemi sono più facili da affrontare quando sono stati ben specificati.',
          content:
            '<i>"Puoi avere dati senza informazioni, ma non puoi avere informazioni senza dati."<br />' +
            'Daniel Keys Moran</i>' +
            '<br /><br />' +
            'Per affrontare il problema delle informazioni necessarie all’azienda potremmo sintetizzarli in questi punti:<br />' +
            '<ul>' +
            '<li>Input (quali sono i dati a nostra disposizione): Contesto aziendale</li>' +
            "<li>Rappresentazione dell'input: chi e quali sono gli stakeholders attivamente coinvolti che possono influenzare il risultato della nostra azienda.</li>" +
            '<li>Output (ciò di cui abbiamo bisogno o che maggiormente potrebbe scatenare la nostra curiosità di sapere per conoscere i processi aziendali): Valore, quantità,flussi informativi, costi, gestione quotidiana e processi operativi.</li>' +
            '<li>Chi è interessato: ogni ruolo strategico deve poter disporre delle informazioni necessarie per poter prendere decisioni consapevoli, agire di concerto con altri settori, dare servizi informativi puntuali e precisi agli stakeholders.</li>' +
            '</ul>' +
            'Pertanto, essendo le informazioni generate dal nostro processo evolutivo, vantaggiose e necessarie per stimare e valorizzare il lavoro di ognuno, inducono un ciclo virtuoso win to win, che integra e completa la fase di transizione tecnologica con la crescita di conoscenza e consapevolezza delle persone coinvolte, stimolando il loro senso di appartenenza.<br /><br />' +
            'Per raggiungere certi obiettivi dovremmo essere capaci di rivolgerti a tre tipi di persone:<br />' +
            '<ol>' +
            '<li>Chi vorrebbe essere come te. Cercano consigli e ispirazione</li>' +
            '<li>Chi è già come te. Cercano storie ed esperienze condivise</li>' +
            '<li>Le persone a cui ti ispiri. Non cercano nulla, ma si accorgono di te se sei capace di finire nella loro rete con contenuti interessanti e una buona costanza</li>' +
            '</ol>'
        },
        {
          key: 10,
          title:
            'Se avete soluzioni software individuali che funzionano, ma che non si “parlano”, probabilmente state registrando informazioni più di una volta e vi manca una panoramica completa di ciò che sta succedendo.',
          content:
            'Se avete metodi macchinosi, che richiedono un grande dispendio di energia per supportare i processi con attività manuali e ripetitive, probabilmente state disperdendo tempo e risorse.<br />' +
            '<br />' +
            'Se avete dati replicati in più sistemi che necessitano di attività manuali per mantenerli allineati e non disponete di processi che li centralizzano, probabilmente avrete difficoltà nell’avere informazioni coerenti e precise su cui basare le vostre decisioni.<br />' +
            '<br />' +
            'Se pensate che possa bastare l’acquisizione di un software per risolvere i problemi, probabilmente andrete in contro a grossi dispiaceri.<br />' +
            '<br />' +
            'Se pensate che possa bastare conoscere le macro funzionalità di Excel e che queste siano le sole competenze informatiche necessarie per gestire dati e processi aziendali, probabilmente sarete costretti a ricredervi.<br />' +
            '<br />' +
            'Se pensate che qualcuno, anche con comprovata esperienza, possa risolvere  problemi senza prima aver  “vissuto” l’azienda, vi suggerisco di meditare sul contenuto di questo aforisma.<br />' +
            '“Nessun uomo entra mai due volte nello stesso fiume, perché il fiume non è mai lo stesso, ed egli non è lo stesso uomo.”  Eraclito (535-475 a.C.)<br />' +
            '<br />' +
            'Attraverso un percorso di reciproca crescita “win to win” date ai vostri collaboratori la possibilità di suggerire proposte per automatizzare le operazioni più comuni, chiedendo loro di essere aperti al cambiamento per accogliere quell’innovazione che arricchirà le loro competenze e migliorerà il loro vivere in azienda.<br />' +
            '<br />' +
            'Siate consapevoli che il vero valore del “change management” sarà determinato dall’integrazione uomo/macchina, senza uno dei due fattori il risultato della moltiplicazione è pari a zero.'
        },
        {
          key: 11,
          title:
            'Se le tue capacità professionali possono essere riassunte in una macro di Excel e la tua principale attività in quella di foglio di lavoro umano, forse è arrivato il momento di riflettere sul tuo futuro.',
          content:
            'Prova a valutare quanto tempo spendi in attività repetitive a zero valore aggiunto e quanti di questi lavori potrebbero essere svolti da macchine o da processi informatici più o meno intelligenti. <br />' +
            'Prova ora a considerare se questo tempo fosse impegnato nella tua crescita professionale, nell’imparare facendo qualcosa che possa influenzare la tua mentalità, il tuo vissuto e il tuo futuro per poter un giorno guardare indietro e realizzare quanto poco sapevi, quando pensavi di sapere tutto.'
        },
        {
          key: 12,
          title:
            'Le competenze specialistiche non bastano:<br />è necessario che qualcuno le coordini e le integri.',
          content:
            "Le sfide in atto richiedono la gestione dell'incertezza e la difficile interpretazione del futuro per questo ci affidiamo a degli specialisti.<br />" +
            '<br />' +
            'La quantità delle cose da sapere, la profondità delle cose da sapere e la capacità di riconoscere il valore di quello che si deve sapere rende la gestione quotidiana sempre più complessa.<br />' +
            '<br />' +
            'La chiave per affrontare la complessità richiede un approccio interdisciplinare che contempli competenze specialistiche “orizzontali”, sempre più importanti per la gestione del contesto, della vision generale e il coordinamento delle competenze specialistiche "verticali".<br />' +
            '<br />' +
            'Per poter contare su una dimensione prospettica,sempre più estesa, e sulla capacità di integrare ambiti diversi, è necessario avere competenze di integrazione e gestione dei dati correlato da una capacità di collegare i “puntini” tra soluzioni complesse oltre che a disporre di competenze con capacità di generare nuove conoscenze.<br />' +
            '<br />' +
            'Uno degli ostacoli riguarda la mancanza di risorse necessarie a mettere in atto il cambiamento indispensabile per la sopravvivenza dell’azienda.<br />' +
            'Le persone con competenze interdisciplinari dovrebbero,quindi, definire un percorso “attuabile” di transizione tecnologica, impegnandosi in prima persona nel dare priorità alle esigenze dell’azienda, nell’introdurre nuove idee da sviluppare in collaborazione con gli specialisti per disegnare il futuro dell’azienda.<br />' +
            '<br />' +
            'Le aziende, di contro, non possono aspettarsi che le persone adottino un approccio evolutivo senza disporre degli strumenti e competenze necessarie per farlo con successo. Il personale deve essere messo in grado di lavorare in strutture agili, con un software che facilitino loro la collaborazione, l’integrazione applicativa e la disponibilità di informazioni consolidate da una dati “certi”, per prendere decisioni consapevoli in linea con quel business,  che ci accompagnerà nell’ “era del cliente”, che avrà un ruolo sempre più importante, e richiederà sempre più attenzione e nuove esigenze.'
        }
        // ,
        // {
        //   key: 13,
        //   title: '',
        //   content: ''
        // }
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
  },
  methods: {
    cardsReversedOrder() {
      return [...this.cards].reverse()
    }
  }
}
</script>

<style scoped></style>
