<template lang="pug">
    div.columns.is-centered.is-vcentered.is-desktop
        div.column
            div.card-content
                div.content
                    img(:src="imgSrc", alt="")
        div.column
            div.footer-item
                h1 {{ name }}
                h2 {{ role }}
                span {{ discription }}
                h3 担当：{{ charge }}
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
        margin-top: 20px;
        margin-bottom: 40px;
        .column
            padding: 0 12px;
            .card-content
                padding: 0 1.5rem;
                .content
                    img
            .footer-item
                padding: 0 1.5rem;
                h1
                    font-family: 'ゴシックMB101 B';
                    font-size: 1.35rem;
                    font-weight: 600;
                h2
                    font-size: 0.9rem;
                    font-weight: 300;
                    margin-bottom: 5px;
                span
                    display: block;
                    font-size: 1.0rem;
                    line-height: 1.2em;
                h3
                    margin-top: 5px;
                    font-size: 0.9rem;
                    font-weight: 300;
    @media screen and (min-width: 600px)
        .columns
            margin-bottom: 70px;
            margin-right: 50px;
            .column
                .card-content
                    width: 80%;
                    margin: 0 0 0 auto;
                    padding-right: 0;
                    .content
                        text-align: center;
                        img
                            height: auto;
                            width: 100%;
                            //margin: 0 auto;
                .footer-item
                    padding: 0 0 0 1.5rem;
                    h1
                        font-family: 'ゴシックMB101 B';
                        font-weight: 600;
                        font-size: 1.5rem;
                        letter-spacing: 0.05em;
                    h2
                        font-size: 0.8rem;
                    span
                        font-size: 0.9rem;
                        margin-top: 2vh;
                    h3
                        font-size: 0.8rem;

</style>