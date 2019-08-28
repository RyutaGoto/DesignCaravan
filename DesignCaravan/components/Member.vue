<template lang="pug">
  div.column
    div.card
      div.card-content
        div.content
          img(src="", alt="")
    footer.card-footer
      div.card-footer-item
        h1.has-text-grey {{ name }}
        h2 {{ role }}
        h3 {{ discription }}
        h4 {{ charge }}

</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    discription : {
      type: String,
      required: true
    },
    charge: {
      type: String,
      required: true
    },
    
  }
}
</script>

<style lang="sass" scoped>
</style>
