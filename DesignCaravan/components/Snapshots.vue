<template lang="pug">
  div.column
    div.card
      div.card-content
        div.content
          img(src="", alt="")
    footer
      div
        h1.has-text-grey {{ title }}
        

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
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
</style>
