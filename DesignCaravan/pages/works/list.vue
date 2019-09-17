<template lang="pug">
  div
    div#body
      Subtitle(jp="作品たち", en="Works")
      div.works.columns.is-centered.is-multiline
        Card.column.is-narrow(title="RHPスタンプ", :imgSrc="works.stamp.img.thum", :link="works.stamp.link") 道南杉とMDFで作成したスタンプ。上面にはイベント用でのロゴマークをあしらってある。        
        Card.column.is-narrow(title="缶バッジのパッケージ", :imgSrc="works.badge.img.thum", :link="works.badge.link") LGBTイベント「虹をはいて歩こう」での返礼品のパッケージ。        
        Card.column.is-narrow(title="靴下のパッケージ", :imgSrc="works.socks.img.thum" :link="works.socks.link") LGBTイベント「虹をはいて歩こう」での返礼品のパッケージ。
        Card.column.is-narrow(title="くるくるレインボーマシン", :imgSrc="works.rainbow.img.thum", :link="works.rainbow.link") くるくるレインボーのデモ用マシン。素材はMDF、中身の制御にはArduinoを使用。
        Card.column.is-narrow(title="薬莢らんぷ", :imgSrc="works.shell.img.thum", :link="works.shell.link") 空の薬莢を用いたLEDランプ。薬莢は実際の狩りに使われたものを再利用した。
        Card.column.is-narrow(title="エコロジカ", :imgSrc="works.deer.img.thum", :link="works.deer.link") 木彫りの鹿。角を刺す穴に草やその他の植物を刺すこともできる。
        
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
import Subtitle from '~/components/Subtitle'

export default {
  name: 'ListPage',

  components: {
    Card,
    Subtitle,
  },
  data: function(){
    return{
      works:{
        stamp:{
          img:{
            thum: require('~/assets/works/stamp_1.jpg'),
          },
          skill: "",
          subscription: "",
          link: "/works/detail/stamp",
        },
        badge:{
          img:{
            thum: require('~/assets/works/badge_1.jpg'),
          },
          link: "/works/detail/badge",
        },
        socks:{
          img:{
            thum: require('~/assets/works/socks_1.jpg'),
          },
          link: "/works/detail/socks",
        },
        rainbow:{
          img:{
            thum: require('~/assets/works/rainbow_1.jpg')
          },
          link: "/works/detail/rainbow",
        },
        shell:{
          img:{
            thum: require('~/assets/works/shell_1.jpg'),
          },
          link: "/works/detail/shell",
        },
        deer:{
          img:{
            thum: require('~/assets/works/deer_1.jpg'),
          },
          link: "/works/detail/deer",
        },
        
      },
    }
  } 
}

</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 80px;

  @media screen and (min-width: 600px)
    #body
      padding-top: 12vh;
      padding-right: auto;
      padding-bottom: 20vh;
      padding-left: auto;
      .works
        width: 60vw;
        margin: 0 auto;
</style>