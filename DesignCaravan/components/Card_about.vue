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
  div
    .box
      box-shadow: none;
      padding: 0em;
      position: relative;
      .card-content
        padding: 0em;
        position: relative;
        width: 33vw;
        height: 23vh;
        .content
          img
            width: 33vw;
            height: 23vh;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 2px 2px 4px rgba(10, 10, 10, 0.3);
      .card-footer
        width: 33vw;
        height: 7vh;
        position: absolute;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.7);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        .card-footer-item
          padding: 12px 5px;
          h1
            color: #666;
            font-weight: 700;
            font-size: 0.7rem;
            text-align: center;

  @media screen and (min-width: 600px)
    div
      .box
        box-shadow: none;
        padding: 0em;
        position: relative;
        width: 11vw;
        height: 25vh;
        margin: 0 auto;
        .card-content
          width: 11vw;
          height: 25vh;
          position: relative;
          padding: 0px;
          .content
            img
              width: 11vw;
              height: 25vh;
              object-fit: cover;
              border-radius: 10px;
              box-shadow: 2px 2px 4px rgba(10, 10, 10, 0.3);
              margin: 0 auto;
              display: block;
        .card-footer
          width: 11vw;
          height: 8vh;
          position: absolute;
          bottom: 0;
          right: auto;
          left: auto;
          background-color: rgba(255, 255, 255, 0.7);
          padding-right: 4px;
          padding-left: 4px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          .card-footer-item
            display: block;
            h1
              color: #666;
              font-weight: 500;
              font-size: 0.8rem;
              text-align: center;
            
</style>
