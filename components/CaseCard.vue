<template>
  <b-card class="card shadow p-3 bg-white rounded text-left">
    <h4
      class="card-title fontPinkText pb-4 font-weight-bold"
      v-html="title"
    ></h4>
    <b-card-text class="fontLatoRegular fontGrayText text-justify">
      <div class="d-flex flex-column flex-md-row">
        <iframe
          v-if="link"
          :src="link"
          width="100%"
          height="325"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          scrolling="no"
          style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
          allowfullscreen
          class="mr-md-4"
        >
        </iframe>
        <div>
          <p v-html="content"></p>
          <div v-if="link" style="margin-bottom:5px" class="text-right">
            <a
              :href="link"
              class="btn btn-outline-primary btn-sm"
              role="button"
              aria-pressed="true"
              >{{ title }}</a
            >
          </div>
        </div>
      </div>
    </b-card-text>
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
  /*max-width: 30rem;*/
  border-radius: 10px;
  height: 100%;
}
</style>
