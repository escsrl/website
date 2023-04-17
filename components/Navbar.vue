<template>
  <b-navbar class="navbar" toggleable="lg" sticky>
    <b-navbar-brand href="#" to="/">
      <img src="/img/common/logo_esc.png" height="40" alt="ESC" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="topnav mr-8">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-item voce_menu" href="#" to="/">HOME</b-nav-item>
        <b-nav-item-dropdown text="SERVIZI" right class="voce_menu">
          <b-dropdown-item class="voce_sottomenu" to="/webapp"
            >WEB APPLICATIONS</b-dropdown-item
          >
          <b-dropdown-item class="voce_sottomenu" to="/data"
            >DATA CLEANER / GOVERNANCE / QUALITY</b-dropdown-item
          >
          <b-dropdown-item class="voce_sottomenu" to="/bi"
            >BUSINESS INTELLIGENCE SELF SERVICE</b-dropdown-item
          >
          <!--          <b-dropdown-item-->
          <!--            class="voce_sottomenu"-->
          <!--            href="https://landing.esconsulting.it/"-->
          <!--            target="_blank"-->
          <!--            >WEBINAR-->
          <!--          </b-dropdown-item>-->
          <b-dropdown-item
            class="voce_sottomenu"
            href="https://covid19.esconsulting.it/"
            target="_blank"
            >COVID19
          </b-dropdown-item>
          <b-dropdown-item class="voce_sottomenu" to="/approfondimenti"
            >APPROFONDIMENTI</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item class="nav-item voce_menu" href="#" to="/case-histories"
          >CASE HISTORIES</b-nav-item
        >
        <b-nav-item class="nav-item voce_menu" href="#" to="/lavora_con_noi"
          >LAVORA CON NOI</b-nav-item
        ><b-nav-item class="nav-item voce_menu" href="#" to="/contatti"
          >CONTATTI</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {}
}
</script>

<style scoped></style>
