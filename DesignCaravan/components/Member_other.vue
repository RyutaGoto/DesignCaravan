<template lang="pug">
  div.columns
    div.column.is-centered
      img(:src="imgSrc", alt="")
      div.text-wrapper
        h1 {{ name }}
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
    
  }
}
</script>

<style lang="sass" scoped>
  .columns
    .column
      padding: 5px;
      img
      .text-wrapper
        h1
          text-align: center;
          font-weight: 600;
          color: #777;
    
  @media screen and (min-width: 600px)
    .columns
      .column
        padding: 12px;
        img
        .text-wrapper
          h1
</style>
