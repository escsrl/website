<template>
  <div :class="topClasses">
    <div :class="slideClass">
      <img :src="image" :alt="altText" />
      <div class="textUno fontWhitetext" v-html="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    topClasses: {
      type: String,
      default: ''
    },
    slideClass: {
      type: String,
      default: 'slideBusiness'
    },
    image: {
      type: String,
      default: ''
    },
    altText: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
