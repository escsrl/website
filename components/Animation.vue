<template>
  <div :class="['carousel-item', { active: active }, backgroundClass]">
    <div
      class="carousel-caption containerSlider carousel-caption-esc d-md-block"
    >
      <div :class="slideClass">
        <slide-text
          :animation="mainTitle.animation"
          :text="mainTitle.text"
          :title-class="mainTitle.classes"
          :show="active"
          :animation-on-render="animationOnRender"
        ></slide-text>
        <slide-text
          :animation="subTitle.animation"
          :text="subTitle.text"
          :title-class="subTitle.classes"
          :show="active"
          :animation-on-render="animationOnRender"
        ></slide-text>
      </div>
      <div v-for="image in images" :key="image.src">
        <slide-image
          :image-class="image.class"
          :image="image.src"
          :animation="image.animation"
          :show="active"
          :animation-on-render="animationOnRender"
        ></slide-image>
      </div>
    </div>
  </div>
</template>

<script>
import SlideText from './animations/SlideText'
import SlideImage from './animations/SlideImage'
export default {
  name: 'Animation',
  components: { SlideImage, SlideText },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    backgroundClass: {
      type: String,
      default: ''
    },
    slideClass: {
      type: String,
      default: ''
    },
    mainTitle: {
      type: Object,
      required: true
    },
    subTitle: {
      type: Object,
      required: true
    },
    images: {
      type: Array,
      default() {
        return []
      }
    },
    animationOnRender: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped></style>
