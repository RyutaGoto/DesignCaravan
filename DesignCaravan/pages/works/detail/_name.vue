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
      //p {{ $route.params.detail }}
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
  /*
  asyncData({ params }){
    return{
      json_data: require('~/assets/json/data.json')
    }
  }
  */
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