<template lang="pug">
  div.column
    div.card
      div.card-content
        div.content
          img(src="", alt="")
    footer.card-footer
      div.card-footer-item
        h1.has-text-grey {{ title }}
        h2 {{ date }}
        span
          slot

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
  .column
    .card
      .card-content
        .content
          img
    .card-footer
      .card-footer-item
        h1
        h2
        span
</style>
