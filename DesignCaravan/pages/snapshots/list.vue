<template lang="pug">
  div
    div#body
      Subtitle(jp="旅のきろく", en="Snapshots")
      div.columns.is-multiline.is-mobile.is-centered
        div.column(v-for="item in snapshots")
          Snapshots.is-narrow(:title="item.title", :imgSrc="item.img", :obj="item")
        //Snapshots.item.column.is-half(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        //div.link
          div
            a.first &lt;&lt;
          div
            ul
              li 1
              li 2
              li 3
              li 4
              li 5
          div
            a.last &gt;&gt;
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Snapshots from '~/components/Snapshots'
import Subtitle from '~/components/Subtitle'

export default {
  name: 'SnapshotsPage',
  components: {
    Card,
    Snapshots,
    Subtitle
  },
  data: function(){
    return{
      snapshots:[
        {
          img: require('~/assets/snapshots/1.jpg'),
          title: "サービスエリアで休憩",
          date: "2019.July.1",
        },
        {
          img: require('~/assets/snapshots/2.jpg'),
          title: "札持ちとりっぴーさん",
          date: "2019.June.28",
        },
        {
          img: require('~/assets/snapshots/3.jpg'),
          title: "すどやん！！",
          date: "2019.June.28",
        },
        {
          img: require('~/assets/snapshots/4.jpg'),
          title: "ぐーな二人",
          date: "2019.June.28",
        },  
        {
          img: require('~/assets/snapshots/5.jpg'),
          title: "キューブ",
          date: "2019.June.25",
        },
        {
          img: require('~/assets/snapshots/6.jpg'),
          title: "いろんな松ぼっくり",
          date: "2019.July.1",
        },
        {
          img: require('~/assets/snapshots/7.jpg'),
          title: "ダークマター",
          date: "2019.June.28",
        },
        {
          img: require('~/assets/snapshots/8.jpg'),
          title: "膝が…",
          date: "2019.July.1",
        },      
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  #body
    padding: 0px 0px 90px 0px;
    .columns
        width: 90vw;
        margin: 0 auto;
        .column
          display: inline-block;
          width: 40%;
          height: auto;
          margin: 0 auto;
  
  @media screen and (min-width: 600px)
    #body
      padding-top: 12vh;
      padding-right: auto;
      padding-bottom: 20vh;
      padding-left: auto;
      .columns
        width: 80vw;
        margin: 0 auto;
        .column
          display: inline-block;
          width: 40%;
          height: auto;
          margin: 0 auto;

</style>