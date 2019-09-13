<template lang="pug">
  div
    div#body
      div.about
        Subtitle(jp="DesignCaravan とは", en="About")
        div.discription
          p 私達は、公立はこだて未来大学の情報デザインコース5人で結成したグループです。様々な地域を訪問し、実際にその地域の人々や自然に触れることを大切にしています。その中でそれぞれの地域の特徴を理解し、自分たちが提供できる可能性を地域の人々に呈示することを目標に活動しています。
      div.project
        Subtitle(jp="進行プロジェクト", en="Project")
        div(v-for="item in data")
          Project(:title="item.title", :date="item.date", :imgSrc="item.img") {{ item.script }}
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
          title: "レインボーはこだてプロジェクト",
          date: "2019.Mar ~ 2019.Jun",
          img: require('~/assets/top/top_30.jpg'),
          script: "LGBTをテーマに、教育大生や地域住民の方々と議論や活動を行うプロジェクトです。6月には教育大主催のLGBTイベント「虹をはいて歩こう」が開催されました。私達はこのプロジェクトのデザインチームとして参加していました。",
        },
        {
          title: "木づかいプロジェクト",
          date: "2019.Jun ~ ",
          img: require('~/assets/top/top_28.jpg'),
          script: "森町で始まった木づかいプロジェクトです。",
        },
        {
          title: "モビールワークショップ",
          date: "2019.May ~ ",
          img: require('~/assets/top/top_25.jpg'),
          script: "子どもたちに工作の楽しさや、材料として使う本物の木の枝や松ぼっくりを通して自然と触れ合う機会を提供することを目的に活動しています。",
        },
        {
          title: "江差いにしえBAR街",
          date: "2019.July",
          img: require('~/assets/top/top_29.jpg'),
          script: "「函館には無いもの江差で」という想いのもと、地域住民によって開催されたイベントです。私達はここのスペースの一角をお借りして演奏などのパフォーマンス、自分たちの取り組みについて知って頂くための物品の披露を行いました。",
        },
      ]  
    }
  }
}
</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 70px;
    .discription
      font-size: 11px;
      text-align: center;
      padding: 20px;
</style>