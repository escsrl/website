<template>
  <b-card class="card shadow p-3 bg-white rounded text-left">
    <h4
      class="card-title fontPinkText pb-4 font-weight-bold"
      v-html="title"
    ></h4>
    <b-card-text
      class="fontLatoRegular fontGrayText text-justify"
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
