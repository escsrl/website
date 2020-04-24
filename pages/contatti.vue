<template>
  <div>
    <div class="map-responsive">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.5724650910493!2d9.58065771578839!3d45.518684437826856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478149f20bb70361%3A0x96964445caa42401!2sESC%20Enterprise%20Software%20Consulting!5e0!3m2!1sen!2sit!4v1578387827216!5m2!1sen!2sit"
        allowfullscreen
      ></iframe>
    </div>

    <!--Contattaci-->
    <div id="contatti" class="container-fluid backgroundGreenLight">
      <div class="container">
        <div class="row pt-contatti pb-contatti">
          <div
            class="col-md-6 col-12 text-left fontLatoBlackBolder fontSizeText text-white"
          >
            <div class="fontLatoBlackBolder esColor">
              ESC Enterprise Software Consulting srl
            </div>
            <div class="fontLatoRegular pt-3">
              Via Torriani, 13<br />
              24047 Treviglio - BG<br />
              Telefono:
              <a href="tel:+390363302050">+390363302050</a>
              <br />
              Mail:
              <a href="mailto:info@esconsulting.it">info@esconsulting.it</a>
            </div>
          </div>

          <div class="col-md-6 col-12 text-left p-sm-0 p-3">
            <form id="form_email" name="form_email" method="post">
              <iframe
                src="https://share.hsforms.com/1n3KtE4ugSnG9iwOxRwbbfg48hpn"
                width="100%"
                height="788px"
              ></iframe>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contatti'
}
</script>

<style scoped></style>
