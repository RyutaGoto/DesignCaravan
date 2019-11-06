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
  }
}
</script>

<style lang="sass" scoped>
  .column
    padding: 0.1rem;
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
        padding: 12px 0 2px 0;
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
      display: flex;
      width: 100%;
      .card
        width: 50%;
        height: 30vh;
        .card-content
          padding: 0px;
          .content
            img
              height: 30vh;
              object-fit: cover;
      .card-footer
        width: 45%;
        margin-left: 5%;
        border: none;
        .card-footer-item
          display: inline;
          h1
            font-family: 'ゴシックMB101 B';
            font-size: 1.6rem;
            //font-weight: 600;
            color: #444;
          h2
            font-size: 1.0rem;
            font-weight: 200;
            color: #777;
            margin-bottom: 2vh;
            //padding-left: 1vw;
          span
            font-size: 1.05rem;
            line-height: 1.2em;
            display: block;
            color: #333;
            //padding-left: 1vw;
</style>
