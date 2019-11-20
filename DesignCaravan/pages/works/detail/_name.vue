<template lang="pug">
  div
    div#body
      Subtitle(jp="作品たち", en="Works")
      div.works
        h1.title {{ json_data.name }}
        div.carousel
          Carousel(:perPage="1", :paginationPadding="6" :paginationColor="'#c0c0c0'")
            slide(v-for="i in json_data.item")
              img(:src="i")
        div.term
          h2 制作時期
          p {{ json_data.period }}
        div.skill
          h2 使用技術
          p {{ json_data.skill }}
        div.abstract
          h2 作品概要
          p {{ json_data.discription }}
      //div.link
        div
          a.prev まえの作品へ
        div
          a.all 作品一覧を見る
        div
          a.next つぎの作品へ
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Subtitle from '~/components/Subtitle'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'

const axios = require('axios');

export default {
  name: 'WorksPage',

  head() {
     return {
       title: 'Works'
     }
   },

  components: {
    Card,
    Subtitle,
    Carousel,
    Slide
  },

  data: function(){
    
  },
  asyncData: async function({params}){
    let url = "https://designcaravan-60b57.firebaseio.com/works/" + params.name + ".json";
    let result = await axios.get(url);
    return {
      json_data: result.data,
    };
  }
}
</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 100px;
    h1
      font-family: 'ゴシックMB101 B';
      font-weight: 600;
      font-size: 1.3rem;
      margin-bottom: 10px;
      text-align: center;
    h2
      color: #555;
      font-size: 1.2rem;
      margin-top: 10px;
      font-weight: 600;
    .carousel
      margin-bottom: 20px;
      img
        width: 335px;
        height: 250px;
        object-fit: cover;
    p
      color: #555;
      font-weight: 300;
      font-size: 1.0rem;
  @media screen and (min-width: 600px)
    #body
      padding-top: 0;
      padding-right: 25vw;
      padding-bottom: 10vh;
      padding-left: 25vw;
      margin-bottom: 10vh;
      .works
        width: 40vw;
        margin: 0 auto;
      h1
        font-family: 'ゴシックMB101 B';
        font-weight: 600;
        font-size: 1.5rem;
        //margin-bottom: 3px;
        text-align: center;
        color: #333;
      h2
        font-size: 1.3rem;
        margin-top: 10px;
      .carousel
        width: 40vw;
        display: block;
        margin: 1vh auto 3vh auto;
        img
          width: 100%;
          height: 45vh;
          object-fit: cover;
      p
        font-weight: 300;
        font-size: 1.0rem;
</style>