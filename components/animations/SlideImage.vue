<template>
  <div :class="imageClass">
    <transition
      :appear="animationOnRender"
      :enter-active-class="animationClass"
    >
      <img v-show="show || animationOnRender" :src="image" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SlideImage',
  props: {
    animation: {
      type: String,
      default: 'fadeInDown',
      required: true
    },
    imageClass: {
      type: String,
      default: '',
      required: true
    },
    image: {
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
      return `${this.imageClass} animated ${this.animation}`
    }
  }
}
</script>

<style scoped></style>
