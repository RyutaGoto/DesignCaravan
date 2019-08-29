<template lang="pug">
  div
    div#top
      div.thumnail
    div#body
      div.about
        Subtitle(jp="DesignCaravan とは", en="About")
        div.discription
          p なんか色々目標とか理念とか色々いろりろ書いていくところ、そういえばトップの写真どうしようなスワイプかフェードか動画という手も無きにしもあらずだしなあ
        div.link.buttons.is-centered
          a.button Aboutページへ→
      div.works
        Subtitle(jp="作品たち", en="Works")        
        div
          Card(title="RHPスタンプ", :imgSrc="works.stamp.img.thum") 道南杉とMDF使ったやつ、上にロゴマークが彫ってある、めっちゃエモい
        div
          Card(title="缶バッジのパッケージ", :imgSrc="works.badge.img.thum") いいなあ、いいぞ、何が良いって最高に見た目が好き、あと言わずもがなめっちゃイカしてる
        div
          Card(title="靴下のパッケージ", :imgSrc=" works.socks.img.thum") 靴下はさむやつ、めっちゃキレイ、色かわいい、見えてるの良き、イカしてるなあ、いいぞ
        div.link.buttons.is-centered
          a.button Worksページへ→
      div.snapshots
        Subtitle(jp="旅のきろく", en="Snapshots") 
        div.columns.is-multiline.is-mobile
          Snapshots(:title="snapshots.bar.title", :imgSrc="snapshots.bar.img").column.is-half
          Snapshots(:title="snapshots.pine.title", :imgSrc="snapshots.pine.img").column.is-half
          Snapshots(:title="snapshots.smile.title", :imgSrc="snapshots.smile.img").column.is-half
          Snapshots(:title="snapshots.tri.title", :imgSrc="snapshots.tri.img").column.is-half
        div.link.buttons.is-centered
          a.button Snapshotsページへ→
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Snapshots from '~/components/Snapshots'
import Subtitle from '~/components/Subtitle'

export default {
  name: 'HomePage',
  components: {
    Card,
    Snapshots,
    Subtitle,
  },
  data: function(){
    return{
      works:{
        stamp:{
          img:{
            thum: require('../assets/works/stamp_1.JPG'),
          },
        },
        badge:{
          img:{
            thum: require('../assets/works/badge_1.jpg'),
          },
        },
        socks:{
          img:{
            thum: require('../assets/works/socks_1.jpg')
          }
        },
      },
      snapshots:{
        bar:{
          img: require('../assets/snapshots/1.jpg'),
          title: "サービスエリアで休憩",
        },
        pine:{
          img: require('../assets/snapshots/2.jpg'),
          title: "札持ちとりっぴーさん",
        },
        smile:{
          img: require('../assets/snapshots/3.jpg'),
          title: "すどやん！！",
        },
        tri:{
          img: require('../assets/snapshots/4.jpg'),
          title: "ぐーな二人",
        },        
      }
    }
  }
}
</script>

<style lang="sass" scoped>
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

</style>