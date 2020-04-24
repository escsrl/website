<template>
  <div>
    <div id="servizi" class="container-fluid backgroundGrayLight">
      <div class="container">
        <div
          class="pt-immagini pb-sm-3 d-flex justify-content-around flex-wrap"
        >
          <div
            v-for="service in services"
            :key="service.key"
            class="pt-3 immagini"
          >
            <service :service="service"></service>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { get } from 'vuex-pathify'
import Service from './Service'
export default {
  name: 'ServicesVue',
  components: { Service },
  data() {
    return {}
  },
  computed: {
    services: get('service/getPageServices')
  }
}
</script>

<style scoped></style>
