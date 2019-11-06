<template lang="pug">
  div
    div#body
      Subtitle(jp="DesignCaravan とは", en="About")
      div.abstract
        h1
          span.num 01
          span.char 様々なフィールドで活動を行う
        div.thum
          img#map(src="~assets/about/map.png")
        div.discription
          p 私達は、公立はこだて未来大学の情報デザインコース5人で結成したグループです。様々な地域を訪問し、実際にその地域の人々や自然に触れることを大切にしています。その中でそれぞれの地域の特徴を理解し、自分たちが提供できる可能性を地域の人々に呈示することを目標に活動しています。
      div.abstract
        h1
          span.num 02
          span.char 作って、試して、振り返る
        div.thum
          img#cycle(src="~assets/about/cycle.png")
        div.discription
          p 私達は、公立はこだて未来大学の情報デザインコース5人で結成したグループです。様々な地域を訪問し、実際にその地域の人々や自然に触れることを大切にしています。その中でそれぞれの地域の特徴を理解し、自分たちが提供できる可能性を地域の人々に呈示することを目標に活動しています。
      div.project
        h1
          span.num 03
          span.char 進行プロジェクト
        div#item(v-for="i in json_about")
          Project(:title="i.name", :date="i.period", :imgSrc="i.item",) {{ i.abstract }}
          div.hidden_box(v-if="i.works")
            label(for="label") 作品を見る
            input#label(type="checkbox")
            div.hidden_show
              div.columns.is-centered.is-multiline.is-mobile
                div.column.is-half(v-for="j in json_works", v-if="i.project === j.project")
                  Card(:title="j.name", :imgSrc="j.item[0]", :link="j.link") {{ j.abstract }}
    div#footer
</template>

<script>
import Project from '~/components/Project'
import Subtitle from '~/components/Subtitle'
import Card from '~/components/Card'

const axios = require('axios');

export default {
  name: 'AboutPage',

  components: {
    Project,
    Subtitle,
    Card
  },

  data: function(){
    return{
      data: []  
    }
  },
  asyncData: async function({params}){
    let about = "https://designcaravan-60b57.firebaseio.com/about.json";
    let works = "https://designcaravan-60b57.firebaseio.com/works.json";
    
    let res_about = await axios.get(about);
    let res_works = await axios.get(works);

    var sort_about = {
      "data" : [],
    };

    var sort_works = {
      "data" : [],
    };

    //aboutオブジェクトのソート
    var j = res_about.data.length - 1;
    for (var i = 0; i < res_about.data.length; i++) {
      sort_about.data[j] = res_about.data[i];
      j = j - 1;
    }

    //worksオブジェクトのソート
    var j = res_works.data.length - 1;
    for (var i = 0; i < res_works.data.length; i++) {
      sort_works.data[j] = res_works.data[i];
      j = j - 1;
    }
    
    return {
      json_about: sort_about.data,
      json_works: sort_works.data,
    };
  },
}
</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 50px;
    .abstract
      padding: 20px;
      margin-bottom: 50px;
      h1
        .num
          padding-right: 10px;
          font-size: 1.2rem;
          border-right: solid 3px #707070
        .char
          margin-left: 10px;
          font-size: 1.0rem;
      .thum
        #map
          margin: 3px 0;
          width: 100%;
          height: 180px;
          object-fit: cover;
        #cycle
          margin: 3px 0;
          width: 100%;
          height: 180px;
          object-fit: scale-down;
      .discription
        font-size: 0.75rem;
    .project
      padding: 20px;
      #item
        padding-bottom: 80px;
      h1
        .num
          padding-right: 10px;
          font-size: 1.2rem;
          border-right: solid 3px #707070
        .char
          margin-left: 10px;
          font-size: 1.0rem;
      .hidden_box
        margin: 0.2em auto;
        padding: 0;
        text-align: center;
        label
          font-size: 0.8rem;
          color: #4e4e4e;
          padding: 15px;
          cursor: pointer;
        label:hover
          //background: #efefef;
          //opacity: 0.2;
        input
          display: none;
        .hidden_show
          height: 0;
          padding: 0;
          overflow: hidden;
          opacity: 0;
          transition: 0.8s;
        input:checked ~ .hidden_show
          padding: 10px 0;
          height: auto;
          opacity: 1;
       
      

  @media screen and (min-width: 600px)
    #body
      padding-top: 0;
      padding-right: 25vw;
      padding-bottom: 10vh;
      padding-left: 25vw;
      .abstract
        h1
          margin-bottom: 1vh;
          .num
            font-family: 'ゴシックMB101 B';
            font-weight: bold;
            padding-right: 10px;
            font-size: 1.5rem;
            border-right: solid 3px #707070
          .char
            font-weight: bold;
            margin-left: 10px;
            font-size: 1.3rem;
        .thum
          #map
            margin: 3px 0;
            width: 100%;
            height: 43vh;
            object-fit: cover;
          #cycle
            margin: 3px 0;
            width: 100%;
            height: 40vh;
            object-fit: scale-down;
        .discription
          font-size: 1.0rem;
          font-weight: 400;
          display: block;
          margin: 0 auto 17vh auto;
          width: auto;
          p
            //text-align: center;
      .project
        h1
          margin-bottom: 1vh;
          .num
            font-family: 'ゴシックMB101 B';
            font-weight: bold;
            padding-right: 10px;
            font-size: 1.5rem;
            border-right: solid 3px #707070
          .char
            font-weight: bold;
            margin-left: 10px;
            font-size: 1.3rem;
        #item
          margin: 0 auto;
          //width: 60vw;
          margin-bottom: 6vh;
        
</style>