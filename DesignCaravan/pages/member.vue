<template lang="pug">
  div
    div#body
      div.member
        Subtitle(jp="キャラバンメンバー", en="Member")
        Member(:imgSrc="suzuki.url", :name="suzuki.name", :role="suzuki.role", :discription="suzuki.discript", :charge="suzuki.charge")
        Member_i(:imgSrc="hinobori.url", :name="hinobori.name", :role="hinobori.role", :discription="hinobori.discript", :charge="hinobori.charge")
        Member(:imgSrc="iwaki.url", :name="iwaki.name", :role="iwaki.role", :discription=" iwaki.discript", :charge="iwaki.charge")
        Member_i(:imgSrc="sudo.url", :name="sudo.name", :role="sudo.role", :discription="sudo.discript", :charge="sudo.charge")
        Member(:imgSrc="goto.url", :name="goto.name", :role="goto.role", :discription="goto.discript", :charge="goto.charge")
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Member from '~/components/Member'
import Member_i from '~/components/Member_inverse'
import Subtitle from '~/components/Subtitle'

export default {
  name: 'MemberPage',

  components: {
    Card,
    Member,
    Member_i,
    Subtitle,
  },
  data: function(){
    return{
      suzuki:{
        url: require('../assets/members/suzuki.png'),
        name: "鈴木ほのか",
        role: "リーダー",
        discript: "頼れるリーダー。メンバーやスケジュールのマネジメントだけでなく、ものづくりやデザインに対する意識もすごい。結構マイペース。スマートフォンは使い捨て派。あとサメがすごく好き。",
        charge: "グラフィック、写真、色々"
      },
      hinobori:{
        url: require('../assets/members/hinobori.png'),
        name: "日登舞",
        role: "副リーダー",
        discript: "頼れる副リーダー。主にグラフィカル部分を担当していて、これまでにフライヤー、パネルなどの制作を手がけてきた。音楽バンド「KUWADATE-HAKODATE」ではピアノなどを担当している。",
        charge: "グラフィック、プロダクト、ピアノ、色々"
      },
      iwaki:{
        url: require('../assets/members/iwaki.png'),
        name: "岩城一真",
        role: "電気工事おじさん",
        discript: "資格取得して電気工事ができるようになった。秋の函館BAR街では実際に配線をよしなにやってくれていた。あと写真をたくさん撮ってくれるメンバーでもある。",
        charge: "電気工事、写真、電子工作、ハイエース、しぶりん、色々"
      },
      sudo:{
        url: require('../assets/members/sudo.png'),
        name: "須藤翼",
        role: "おとうさん",
        discript: "RHPでくるくるレインボーのデモ機や、中間発表用の動画を制作してきた。主に電子工作、映像担当のおとうさん。現在は3Dモデリングを用いた作品制作に注力している。",
        charge: "映像制作、電子工作、みんなのパパ、色々"
      },
      goto:{
        url: require('../assets/members/goto.png'),
        name: "後藤隆太",
        role: "Web担当",
        discript: "主にWeb周りを担当している。無料版wordpressの見た目どうにかしなきゃいけなかったときはタグの中に直書きをするなど、手段は選ばない人間。",
        charge: "Web、ガンプラ、色々"
      },
      
    }
  }
}
</script>

<style lang="sass" scoped>
  #body
    .member
      padding: 0 10px 100px 10px;
  #footer

  @media screen and (min-width: 600px)
    #body
      padding-top: 12vh;
      padding-right: auto;
      padding-bottom: 8vh;
      padding-left: auto;
</style>