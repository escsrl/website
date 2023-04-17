<template>
  <b-card
    :title="title"
    class="card fontPinkText shadow p-3 mb-5 bg-white rounded text-left"
  >
    <b-card-text
      class="fontSizeText fontLatoRegular fontGrayText text-justify"
      v-html="content"
    >
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'CaseHistoryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  /*max-width: 30rem;*/
  border-radius: 10px;
  height: 100%;
}
</style>
