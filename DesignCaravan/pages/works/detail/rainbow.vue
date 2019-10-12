<template lang="pug">
  div
    div#body
      Subtitle(jp="作品たち", en="Works")
      div.works
        h1.title RHPスタンプ 
        div.carousel
          Carousel(:perPage="1", :paginationPadding="6" :paginationColor="'#c0c0c0'")
            slide(v-for="i in works.rainbow.img.item")
              img(:src="i")
        div.term
          h2 制作時期
          p 2019.May
        div.skill
          h2 使用技術
          p Illustrator, Photoshop
        div.abstract
          h2 作品概要
          p 函館で開催されたLGBTイベント「虹をはいて歩こう」で制作するくるくるレインボーを自動で回すデモ機。筐体にはMDFを用いて強度を確保した。また、連続して順方向と逆方向に回転するためにブリッジ回路を組んだ。
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

const axios = require('axios');

let url = "https://designcaravan-60b57.firebaseio.com/works.json"

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
        rainbow:{
          title: "",
          img:{
            thum: require('~/assets/works/rainbow_1.jpg'),
            item: [require('~/assets/works/rainbow_1.jpg'), require('~/assets/works/rainbow_2.jpg'), require('~/assets/works/rainbow_3.jpg'), require('~/assets/works/rainbow_4.jpg'), require('~/assets/works/rainbow_5.jpg'), ]
          },
          term: "数週間",
          skill: "Illustrator, レーザーカッター, Arduino",
          subscription: "",
          link: "/works/detail/rainbow",
        },
        
      },
    }
  },
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