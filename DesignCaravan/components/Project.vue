<template lang="pug">
  div.column
    div.card
      div.card-content
        div.content
          img(:src="imgSrc", alt="")
    footer.card-footer
      div.card-footer-item
        h1 {{ title }}
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
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
  .column
    padding: 3px 0 20px 0;
    .card
      height: 160px;
      .card-content
        height: 100%;
        padding: 0px;
        .content
          img
            width: 100%;
            height: 160px;
            object-fit: cover;
    .card-footer
      .card-footer-item
        display: inline;
        padding: 12px 0;
        h1
          font-size: 0.9rem;
          font-weight: 600;
          color: #555555;
        h2
          font-size: 0.8rem;
          font-weight: 400;
          color: #666666;
        span
          font-size: 0.8rem;
          line-height: 1.2em;
          display: block;
  @media screen and (min-width: 600px)
    .column
      .card
        height: 40vh;
        .card-content
          height: 100%;
          padding: 0px;
          .content
            img
              width: 100%;
              height: 40vh;
              object-fit: cover;
      .card-footer
        .card-footer-item
          display: inline;
          h1
            font-size: 1.8rem;
            font-weight: 600;
            color: #555555;
          h2
            font-size: 1.2rem;
            font-weight: 400;
            color: #666666;
            //padding-left: 1vw;
          span
            font-size: 1.3rem;
            line-height: 1.2em;
            display: block;
            //padding-left: 1vw;
</style>
