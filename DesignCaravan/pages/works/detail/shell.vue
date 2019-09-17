<template lang="pug">
  div
    div#body
      Subtitle(jp="作品たち", en="Works")
      div.works
        h1.title 薬莢らんぷ
        div.carousel
          Carousel(:perPage="1", :paginationPadding="6")
            slide(v-for="i in works.shell.img.item")
              img(:src="i")
        div.term
          h2 制作時期
          p 2019.June
        div.skill
          h2 使用技術
          p ミリングマシン
        div.abstract
          h2 作品概要
          p 狩りに使用した弾丸から発生する薬莢を用いたLEDランプ。道南で活動するハンターさんから頂いたものの活用法を考えたものである。台座には道南杉の角材を彫ったものを使用している。
      //div.link
        div
          a.prev まえの作品へ
        div
          a.all 作品一覧を見る
        div
          a.next つぎの作品へ
      //p {{ $route.params.detail }}
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Subtitle from '~/components/Subtitle'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'


export default {
  name: 'WorksPage',

  components: {
    Card,
    Subtitle,
    Carousel,
    Slide
  },
  data: function(){
    return{
      works:{
        shell:{
          title: "薬莢らんぷ",
          img:{
            thum: require('~/assets/works/shell_1.jpg'),
            item: [require('~/assets/works/shell_1.jpg'), require('~/assets/works/shell_2.jpg'), require('~/assets/works/shell_3.jpg'), require('~/assets/works/shell_4.jpg'), require('~/assets/works/shell_5.jpg'), require('~/assets/works/shell_6.jpg'), require('~/assets/works/shell_7.jpg'), require('~/assets/works/shell_8.jpg'), ]
          },
          term: "数週間",
          skill: "ミリングマシン",
          subscription: "",
          link: "/works/detail/shell",
        },
      },
    }
  }
}
</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 100px;
    h1
      font-weight: 400;
      font-size: 20px;
      margin-bottom: 10px;
      text-align: center;
    h2
      font-size: 18px;
      margin-top: 10px;
    .carousel
      margin-bottom: 20px;
      img
        width: 335px;
        height: 250px;
        object-fit: cover;
    .term
      p
        font-weight: 300;
        font-size: 15px;
    .skill
      p
        font-weight: 300;
        font-size: 15px;
    .abstract
      p
        font-weight: 300;
        font-size: 15px;
  @media screen and (min-width: 600px)
    #body
      padding-bottom: 20vh;
      .works
        width: 50vw;
        margin: 0 auto;
      h1
        font-weight: 400;
        font-size: 2.2rem;
        margin-bottom: 10px;
        text-align: center;
      h2
        font-size: 1.8rem;
        margin-top: 10px;
      .carousel
        width: 50vw;
        display: block;
        margin: 5vh auto;
        img
          width: 100%;
          height: 60vh;
          object-fit: cover;
      .term
        p
          font-weight: 300;
          font-size: 1.5rem;
      .skill
        p
          font-weight: 300;
          font-size: 1.5rem;
      .abstract
        p
          font-weight: 300;
          font-size: 1.5rem;
</style>