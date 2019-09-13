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
        discript: "頼れるリーダー、サメ好きらしい。ガオー。たまに5才児にになるらしいすごい。あとすごいサメ好き。なんかあとよく知らんけどなにかしらすごそうなすごいあれ。",
        charge: "グラフィック、写真、色々"
      },
      hinobori:{
        url: require('../assets/members/hinobori.png'),
        name: "日登舞",
        role: "副リーダー",
        discript: "頼れる副リーダー。ピアノすごい。めっちゃかっこいい。あとなにがすごいって実は…。おっと誰か来たようだ。あとよく知らんけどスキルおばけですごい。たぶん。いや間違いない、だってプロデューｓ……",
        charge: "グラフィック、プロダクト、ピアノ、色々"
      },
      iwaki:{
        url: require('../assets/members/iwaki.png'),
        name: "岩城一真",
        role: "電気工事おじさん",
        discript: "電気工事できるおじさん。しゅごい。写真もばっしゃばっしゃ撮ってくれるから素材に困らんありがとう。電子工作もすごいぞ。あと何を隠そうデレマスのプロデューサー。デレマスはいいぞ。",
        charge: "電気工事、写真、電子工作、ハイエース、しぶりん、色々"
      },
      sudo:{
        url: require('../assets/members/sudo.png'),
        name: "須藤翼",
        role: "おとうさん",
        discript: "おとうさん。みんなのパパ。ビッグダディ。映像制作おじさん。今いろんなとこの映像作んなきゃ、ってなってるっぽい。がんばれ。Web用のやつも頼んだで。あと何を隠そうすどやん。",
        charge: "映像制作、電子工作、みんなのパパ、色々"
      },
      goto:{
        url: require('../assets/members/goto.png'),
        name: "後藤隆太",
        role: "留退力学の申し子",
        discript: "留退力学の申し子。なんかいつも耳につけてて補聴器に間違われたのはいい思い出。入試面接で「君留年するけどいいかい？」って聞かれたのもいい思い出。最近はラシーンが欲しくなってきた。まじでラシーンほしい。",
        charge: "ガンプラ、色々"
      },
      
    }
  }
}
</script>

<style lang="sass" scoped>
  #body
    .member
      padding: 0 15px 100px 15px;
  #footer
</style>