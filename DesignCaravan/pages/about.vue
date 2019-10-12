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
        div#item(v-for="item in data")
          Project(:title="item.title", :date="item.date", :imgSrc="item.img", :link="item.link") {{ item.script }}
    div#footer
</template>

<script>
import Project from '~/components/Project'
import Subtitle from '~/components/Subtitle'

export default {
  name: 'AboutPage',

  components: {
    Project,
    Subtitle,
  },

  data: function(){
    return{
      data: [
        {
          title: "世界で一冊だけの本・展",
          date: "2019.11 ",
          img: require('~/assets/about/project/hon.png'),
          script: "函館で毎年秋に開催されている「世界に一冊だけの本・展」に出展します。一年間の活動を通して学んだことや感じたことをまとめ、一冊の本を制作し、この一年の集大成と考えています。",
          link: "https://handmadebook.wixsite.com/book"
        },
        {
          title: "森町木育活動",
          date: "2019.7 ~ ",
          img: require('~/assets/about/project/kidukai.png'),
          script: "森町では森林環境剰余税の支給に伴い、新しい試みとして道南杉の出生証明書、親から子供に贈るウッドファーストトイの制作の協力を行います。森町の高校生とともに、これらを制作する上でのデザイン案や新しいアイデアなどを提案します。",
        },
        {
          title: "モビールワークショップ",
          date: "2019.5 ~ ",
          img: require('~/assets/about/project/mobile.png'),
          script: "洞爺湖、無印良品シエスタハコダテ、森町産業祭、函館青年青年センターで「風とあそぼう」と題し、モビール制作ワークショップを行いました。小さな子供から大人まで幅広い年代の人たちが参加し、参加者全員が思い思いのモビールを制作しました。",
        },
        {
          title: "レインボーはこだてプロジェクト",
          date: "2019.3 ~ ",
          img: require('~/assets/about/project/rainbow.png'),
          script: "LGBTフレンドリーなまちづくりをテーマに活動する団体であるRHP(レインボーはこだてプロジェクト)主催のイベント、「虹をはいて歩こう」にデザインチームとして参加しました。イベント広報用のポスターやチラシ、返礼品パッケージ、イベントを盛り上げる装置や物品の制作など行いました。",
        },
        {
          title: "バル街",
          date: "2019.3 , 2019.9",
          img: require('~/assets/about/project/bar.png'),
          script: "函館と江差のバル街に参加しました。函館では店舗の設営から運営のお手伝いをしてきました。江差ではライブ、作品出展のために参加しました。作品は薬莢の新たな活用法として制作した薬莢らんぷ、原田先生が制作したエコロジカなどを販売させていただきました。",
        },        
      ]  
    }
  }
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
      //margin-bottom: 30px;
      h1
      h1
        .num
          padding-right: 10px;
          font-size: 1.2rem;
          border-right: solid 3px #707070
        .char
          margin-left: 10px;
          font-size: 1.0rem;
       
      

  @media screen and (min-width: 600px)
    #body
      padding-top: 12vh;
      padding-right: auto;
      padding-bottom: 13vh;
      padding-left: auto;
      .abstract
        .num
          font-size: 12pt;
          border-right: solid 5px #707070
          //&:after
            content: '';
            display: inline-block;
            background: #BD0404;
            height: 22px;
            width: 4px;
            margin-left: 6px;
        .discription
          font-size: 1.4rem;
          font-weight: 400;
          display: block;
          margin: 0 auto 17vh auto;
          width: 65vw;
          p
            text-align: center;
      .project
        #item
          margin: 0 auto;
          width: 60vw;
          margin-bottom: 6vh;
</style>