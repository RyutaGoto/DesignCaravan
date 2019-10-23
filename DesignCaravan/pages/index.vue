<template lang="pug">
  div
    div#top
      div.thumnail
        Carousel(:perPage="1", :paginationEnabled="false", :autoplay="true", :loop="true",)
          Slide(v-for="i in top")
            img(:src="i")
        //img(src="~assets/logo.png", alt="")#logo
        //span 旅するデザイン
    div#body
      div.about
        Subtitle(jp="DesignCaravan とは", en="About")
        div.discription
          p 私達は、公立はこだて未来大学の情報デザインコース5人で結成したグループです。様々な地域を訪問し、実際にその地域の人々や自然に触れることを大切にしています。その中でそれぞれの地域の特徴を理解し、自分たちが提供できる可能性を地域の人々に呈示することを目標に活動しています。
        div.link.buttons.is-centered
          nuxt-link.button(to="/about") Aboutページへ→
      div.works
        //h1 {{ rev_json_works }}
        Subtitle(jp="作品たち", en="Works")        
        div.columns.is-centered.is-multiline.is-mobile
          div.column.is-narrow(v-for="(i, index) in json_works",v-if="index < 3")
            Card(:title="i.name", :imgSrc="i.item[0]", :link="i.link") {{ i.abstract }}          
        div.link.buttons.is-centered
          nuxt-link.button(to="/works/list") Worksページへ→
      div.snapshots
        Subtitle(jp="旅のきろく", en="Snapshots") 
        div.columns.is-multiline.is-mobile.is-centered
          div.column.is-half(v-for="(i, index) in json_snap", v-if="index < 4")
            Snapshots.is-narrow(:title="i.name", :imgSrc="i.item", :obj="i")
        div.link.buttons.is-centered
           nuxt-link.button(to="/snapshots/list") Snapshotsページへ→
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Snapshots from '~/components/Snapshots'
import Subtitle from '~/components/Subtitle'
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import SvgElement from '~/components/SvgElement.vue'

const axios = require('axios');

export default {
  name: 'HomePage',
  components: {
    Card,
    Snapshots,
    Subtitle,
    Carousel,
    Slide,
    SvgElement
  },
  data: function(){
    return{
      top:[
        require('~/assets/top/top_1.png'),
        require('~/assets/top/top_2.png'),
        require('~/assets/top/top_3.png'),
        require('~/assets/top/top_4.png'),
        require('~/assets/top/top_5.png'),
        require('~/assets/top/top_6.png'),
        require('~/assets/top/top_7.png'),
        require('~/assets/top/top_8.png'),
        require('~/assets/top/top_9.png'),
        require('~/assets/top/top_10.png'),
        require('~/assets/top/top_11.png'),
        require('~/assets/top/top_12.png'),
        require('~/assets/top/top_13.png'),
        require('~/assets/top/top_14.png'),
        require('~/assets/top/top_15.png'),
        require('~/assets/top/top_16.png'),
        require('~/assets/top/top_17.png'),
        require('~/assets/top/top_18.png'),
        require('~/assets/top/top_19.png'),
        require('~/assets/top/top_20.png'),
        require('~/assets/top/top_21.png'),
        require('~/assets/top/top_22.png'),
        require('~/assets/top/top_23.png'),
        require('~/assets/top/top_24.png'),
        //require('~/assets/top/top_25.png'),
        //require('~/assets/top/top_26.png'),
        //require('~/assets/top/top_27.png'),
        //require('~/assets/top/top_28.png'),
        //require('~/assets/top/top_29.png'),
        //require('~/assets/top/top_30.png'),
         
      ],
    }
  },
  asyncData: async function({params}){
    /*
    if (process.browser) {
      const mq = window.matchMedia( "(min-width: 600px)" );
    }
    */
    let works = "https://designcaravan-60b57.firebaseio.com/works.json";
    let snap = "https://designcaravan-60b57.firebaseio.com/snapshots.json";
    
    let res_works = await axios.get(works);
    let res_snap = await axios.get(snap);

    var sort_works = {
      "data" : [],
    };
    var sort_snap = {
      "data" : [],
    };

    var works_limit = 0;
    var snap_limit = 0;
    /*
    if (mq.matches) {
      works_limit = 6;
      snap_limit = 8;
    }
    else {
      works_limit = 3;
      snap_limit = 4;
    }
    */
    //worksオブジェクトのソート
    var j = res_works.data.length - 1;
    for (var i = 0; i < res_works.data.length; i++) {
      sort_works.data[j] = res_works.data[i];
      j = j - 1;
    }
    
    //snapオブジェクトのソート
    var j = res_snap.data.length - 1;
    for(var i = 0; i < res_snap.data.length; i++){
      sort_snap.data[j] = res_snap.data[i];
      j = j - 1;
    }
    
    return {
      json_works: sort_works.data,
      json_snap: sort_snap.data,
    };
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>
#top
  height: 90vh;
  width: 100vw;
  margin-left: -20px;
  //margin-right: -20px;
  position: relative;
  img
    z-index: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    filter: contrast(60%);
  #logo
    z-index: 20;
    width: 120px;
    height: auto;
    position: absolute;
    left: 4vh;
    //right: 0;
    bottom: 9vh;
    //margin: auto;
    filter: brightness(130%);
  span
    z-index: 20;
    position: absolute;
    left: 5vh;
    //right: 0;
    bottom: 5vh;
    //margin: auto;
    font-size: 16px;
    font-weight: 600;
    color: #222;


#body
  .discription
    font-size: 11px;
    text-align: center;
    padding: 20px;
  .link
    width: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    .button
      font-size: 12px;
      font-weight: 500;
      padding-right: 40px;
      padding-left: 40px;
      padding-top: 20px;
      padding-bottom: 20px;
      color: #eeeeee;
      background-color: #606060;
  .snapshots
    .columns
      margin: 0 auto;
  
@media screen and (min-width: 600px)
  div
    #top
      margin: 0;
      
      img
        
      #logo
        
      span
        
    #body
      .discription
        font-size: 1.4rem;
        font-weight: 400;
        display: block;
        margin: 0 auto;
        width: 65vw;
        p
          text-align: center;
      .link
        margin-top: 5vh;
        .button
          font-size: 1.2rem;
          padding: 3vh 5vw;
      .works
        .columns
          .column
            width: 310px;
            display: inline-block;
            padding: 0;
            margin: 3vh 1.5vw;
      .snapshots
        margin-bottom: 20vh;
        .columns
          width: 55vw;
          .column
            display: inline-block;
            width: 40%;
            height: auto;
            margin: 0 auto;


</style>