<template lang="pug">
  div
    div.box
      nuxt-link(:to="link")
        div.card-content
          div.content
            img(:src="imgSrc" alt="")
        footer.card-footer
          div.card-footer-item
            h1 {{ title }}
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
    imgSrc: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true,
    }
  },
}
</script>
<style lang="sass" scoped>
  .column
    .box
      box-shadow: none;
      padding: 0em;
      position: relative;
      .card-content
        width: 310px;
        height: 360px;
        position: relative;
        padding: 0px;
        .content
          img
            width: 310px;
            height: 360px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 2px 2px 4px rgba(10, 10, 10, 0.3);
      .card-footer
        width: 310px;
        height: 100px;
        position: absolute;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.7);
        padding-right: 12px;
        padding-left: 12px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .card-footer-item
          display: block;
          h1
            color: #2a2a2a;
            font-weight: 500;
            font-size: 21px
          span
            display: block;
            color: #5a5a5a;
            font-size: 14px;
            line-height: 1.2em;
  
  @media screen and (min-width: 600px)
    .column
      .box
        box-shadow: none;
        padding: 0em;
        position: relative;
        width: 240px;
        height: 256px;
        margin: 0 auto;
        .card-content
          width: 100%;
          height: 100%;
          position: relative;
          padding: 0px;
          .content
            height: 100%;
            img
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 10px;
              box-shadow: 2px 2px 4px rgba(10, 10, 10, 0.3);
              margin: 0 auto;
              display: block;
        .card-footer
          width: 100%;
          height: 40%;
          position: absolute;
          bottom: 0;
          right: auto;
          left: auto;
          background-color: rgba(255, 255, 255, 0.7);
          padding-right: 12px;
          padding-left: 12px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          .card-footer-item
            display: block;
            h1
              color: #444;
              font-weight: 500;
              font-size: 1rem;
              font-weight: bold;
            span
              display: block;
              color: #5a5a5a;
              font-size: 0.8rem;
              line-height: 1.2em;
</style>
