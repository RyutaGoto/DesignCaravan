<template lang="pug">
  div
    div#body
      Subtitle(jp="作品たち", en="Works")
      div.works
        h1.title RHPスタンプ
        div.carousel
          Carousel(:perPage="1", :paginationPadding="6")
            slide(v-for="i in works.stamp.img.item")
              img(:src="i")
        div.term
          h2 制作時期
          p 2019.May
        div.skill
          h2 使用技術
          p Illustrator, Photoshop, レーザーカッター
        div.abstract
          h2 作品概要
          p 函館で開催されたLGBTイベント「虹をはいて歩こう」のスタンプラリー用に制作した。スタンプには地元が産地の道南杉とゴム材を使用した。スタンプ上面にはイベントのテーマを象徴するアイコンをレーザーで彫った。
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
        stamp:{
          title: "RHPスタンプ",
          img:{
            thum: require('~/assets/works/stamp_1.jpg'),
            item: [require('~/assets/works/stamp_1.jpg'), require('~/assets/works/stamp_2.jpg'), require('~/assets/works/stamp_3.jpg'), require('~/assets/works/stamp_4.jpg'), require('~/assets/works/stamp_5.jpg'), require('~/assets/works/stamp_6.jpg'), require('~/assets/works/stamp_7.jpg'), ]
          },
          term: "数週間",
          skill: "Illustrator, レーザーカッター",
          subscription: "",
          link: "/works/detail/stamp",
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
</style>