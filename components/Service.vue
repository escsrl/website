<template>
  <nuxt-link :to="service.link">
    <img :src="service.image" />
    <div
      class="testi pt-md-3 pt-sm-2 pt-2 fontLatoBlackBolder fontSizeText fontPinkText text-uppercase text-center fontLineHeightSmall"
    >
      <div class="pre-formatted">{{ service.text }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Service',
  props: {
    service: {
      type: Object,
      default() {
        return {
          link: '/',
          image: '',
          text: ' '
        }
      }
    }
  }
}
</script>

<style scoped>
.pre-formatted {
  white-space: pre;
}
</style>
