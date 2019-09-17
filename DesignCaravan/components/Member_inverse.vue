<template lang="pug">
  div.columns.is-centered.is-mobile
    div.column
      div.footer-item
        h1 {{ name }}
        h2 {{ role }}
        span {{ discription }}
        h3 担当：{{ charge }}
    div.column
      div.card-content
        div.content
          img(:src="imgSrc", alt="")


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
  .columns
    .column
      margin-top: 35px;
      margin-right: 10px;
      max-width: 190px;
      max-height: 190px;
      padding: 0px;
      .card-content
        padding: 0px;
        .content
          img
            margin-left: 10px;
    .footer-item
      display: inline;
      padding: 0px;
      h1
        margin-top: 5px;
        font-size: 17px;
        font-weight: 500;
      h2
        font-size: 13px;
      span
        font-size: 10px;
        line-height: 1.2em;
        display: block;
        font-weight: 300;
        margin: 5px 0px 10px 0px;
      h3
        font-size: 10px;
  @media screen and (min-width: 600px)
    .columns
      .column
        margin: 3vh 2vw;
        max-width: 23vw;
        max-height: 41vh;
        padding: 0px;
        .card-content
          padding: 0px;
          .content
            img
              margin-right: 10px;
      .footer-item
        display: inline-block;
        padding: 0px;
        margin-top: 5vh;
        h1
          margin-top: 5px;
          font-size: 2.0rem;
          font-weight: 500;
        h2
          font-size: 1.5rem;
        span
          font-size: 1.2rem;
          line-height: 1.2em;
          display: block;
          font-weight: 300;
          margin: 5px 0px 10px 0px;
        h3
          font-size: 1.0rem;
</style>
