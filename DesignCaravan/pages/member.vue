<template lang="pug">
  div
    div#body
      div.member-main
        Subtitle(jp="キャラバンメンバー", en="Member")
        Member(:imgSrc="suzuki.url", :name="suzuki.name", :role="suzuki.role", :discription="suzuki.discript", :charge="suzuki.charge")
        Member(:imgSrc="hinobori.url", :name="hinobori.name", :role="hinobori.role", :discription="hinobori.discript", :charge="hinobori.charge")
        Member(:imgSrc="iwaki.url", :name="iwaki.name", :role="iwaki.role", :discription=" iwaki.discript", :charge="iwaki.charge")
        Member(:imgSrc="sudo.url", :name="sudo.name", :role="sudo.role", :discription="sudo.discript", :charge="sudo.charge")
        Member(:imgSrc="goto.url", :name="goto.name", :role="goto.role", :discription="goto.discript", :charge="goto.charge")
      div.member-friends
        Subtitle(jp="ゆかいな仲間たち", en="Friends")
        div.text
          p 私達の活動の中で行動を共にしたり、サポートをしてくださる方々です。いつもありがとうございますのお気持ちですわ、はい。
        div.columns.is-.is-multiline.is-mobile.is-centered(v-if="$mq === 'sm'")
          div.column.is-half(v-for="i in json_friends")
            Member_other(:imgSrc="i.item", :name="i.name")
        div.columns.is-.is-multiline.is-desktop.is-centered(v-else)
          div.column.is-one-quarter(v-for="i in json_friends")
            Member_other(:imgSrc="i.item", :name="i.name")
          
    div#footer


</template>

<script>
import Card from '~/components/Card'
import Subtitle from '~/components/Subtitle'
import Member from '~/components/Member'
import Member_other from '~/components/Member_other'

const axios = require('axios');

export default {
  name: 'MemberPage',

  head() {
     return {
       title: 'Member'
     }
   },
   
  components: {
    Card,
    Subtitle,
    Member,
    Member_other
  },
  data: function(){
    return{
      suzuki:{
        url: require('../assets/members/suzuki.png'),
        name: "鈴木ほのか",
        role: "リーダー",
        discript: "頼れるリーダー。メンバーやスケジュールのマネジメントだけでなく、ものづくりやデザインに対する意識もすごい。結構マイペース。スマートフォンは使い捨て派。あとサメがすごく好き。たまに5歳児。",
        charge: "グラフィック、写真、プロダクト、色々"
      },
      hinobori:{
        url: require('../assets/members/hinobori.png'),
        name: "日登舞",
        role: "副リーダー",
        discript: "頼れる副リーダー。主にグラフィカル部分を担当していて、これまでにフライヤー、パネルなどの制作を手がけてきた。音楽バンド「KUWADATE-HAKODATE」ではピアノなどを担当している。あと「しきフレ」を眺める人。",
        charge: "グラフィック、プロダクト、ピアノ、色々"
      },
      iwaki:{
        url: require('../assets/members/iwaki.png'),
        name: "岩城一真",
        role: "電気工事おじさん",
        discript: "資格取得して電気工事ができるようになった。秋の函館BAR街では実際に配線をよしなにやってくれていた。また、写真をたくさん撮ってくれるメンバーでもある。あとなにを隠そうプロデューｓ…",
        charge: "電気工事、写真、電子工作、ハイエース、しぶりん、色々"
      },
      sudo:{
        url: require('../assets/members/sudo.png'),
        name: "須藤翼",
        role: "おとうさん",
        discript: "RHPでくるくるレインボーのデモ機や、中間発表用の動画を制作してきた。主に電子工作、映像担当のおとうさん。現在は3Dモデリングを用いた作品制作に注力しているモデリングおじさん。パパすごい。",
        charge: "映像制作、電子工作、みんなのパパ、色々"
      },
      goto:{
        url: require('../assets/members/goto.png'),
        name: "後藤隆太",
        role: "留退力学の申し子",
        discript: "某無料ホームページ制作ツールで作ったサイトの見た目をどうにかしなきゃいけなかったときはタグの中に直書きをするなど、手段は選ばない人間。先日、アニメ「THE IDOLM@STER」を視聴して一層アイマスが好きになった人。",
        charge: "如月千早"
      },
      
    }
  },
  asyncData: async function({params}){
    let friends = "https://designcaravan-60b57.firebaseio.com/members/friends.json"

    let res_friends = await axios.get(friends);

    return{
      json_friends: res_friends.data,
    }
  }
}
</script>

<style lang="sass" scoped>
  #body
    width: auto;
    .member-main
      padding: 0 10px 10px 10px;
    .member-friends
      .text
        p
          padding: 10px 25px;
          font-size: 13px;
          text-align: center
          color: #666;
          line-height: 1.2em;
      .columns
        width: 100%;
        margin: 0 auto;
        .column
          display: inline-block;
          margin: 0 auto;
  #footer

  @media screen and (min-width: 600px)
    #body
      //padding: 12vh auto 8vh auto;
      padding-top: 0;
      padding-right: 23vw;
      padding-bottom: 10vh;
      padding-left: 23vw;
      .member-friends
        margin-bottom: 50px;
        
        .text
          width: 600px;
          margin: 0 auto;
          p
            padding: 30px 0;
            font-size: 18px;
            text-align: center
            color: #666;
            line-height: 1.3em;
        .columns
          width: 100%;
          margin: 0 auto;
          .column
            display: inline-block;
            margin: 0;
</style>