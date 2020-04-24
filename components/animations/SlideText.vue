<template>
  <transition :appear="animationOnRender" :enter-active-class="animationClass">
    <div v-show="show || animationOnRender" :class="titleClass">
      {{ text }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SlideText',
  props: {
    animation: {
      type: String,
      default: 'fadeInDown',
      required: true
    },
    titleClass: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    animationOnRender: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    animationClass() {
      return `animated ${this.animation}`
    }
  }
}
</script>

<style scoped></style>
