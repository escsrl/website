<template>
  <b-card
    :title="title"
    class="card fontPinkText shadow p-3 mb-5 bg-white rounded"
  >
    <b-card-text
      class="fontSizeText fontLatoRegular fontGrayText"
      v-html="content"
    >
    </b-card-text>
    <iframe
      :src="link"
      width="100%"
      height="325"
      frameborder="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
      allowfullscreen
    >
    </iframe>
    <div style="margin-bottom:5px">
      <u>
        <a
          :href="link"
          title="Visualizza"
          target="_blank"
          style="color: #555555"
        >
          {{ title }}
        </a>
      </u>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'CaseCard',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 30rem;
  border-radius: 10px;
  height: 100%;
}
</style>
