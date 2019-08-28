<template lang="pug">
  div
    div#top
      div.thumnail
    div#body
      div.about
        Subtitle(jp="DesignCaravan とは" en="About")
        div.discription
          p なんか色々目標とか理念とか色々いろりろ書いていくところ、そういえばトップの写真どうしようなスワイプかフェードか動画という手も無きにしもあらずだしなあ
        div.link
          a Aboutページへ→
      div.works
        Subtitle(jp="作品たち", en="Works")        
        div
          Card(title="くるくるレインボーマシン", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div
          Card(title="くるくるレインボーマシン", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div
          Card(title="くるくるレインボーマシン", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div.link
          a Worksページへ→
      div.snapshots
        Subtitle(jp="旅のきろく", en="Snapshots") 
        div
          Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
          Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
          Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
          Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div.link
          a Snapshotsページへ→
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
  }
}
</script>

<style lang="sass" scoped>
  .discription
    font-size: 11px;
    text-align: center;
    padding: 20px;
  .link
    font-size: 9px;
</style>