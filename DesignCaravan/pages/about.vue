<template lang="pug">
  div
    div#body
      div.about
        Subtitle(jp="DesignCaravan とは", en="About")
        div.discription
          p なんか色々目標とか理念とか色々いろりろ書いていくところ、そういえばトップの写真どうしようなスワイプかフェードか動画という手も無きにしもあらずだしなあ
      div.project
        Subtitle(jp="進行プロジェクト", en="Project")
        Project(title="レインボーはこだてプロジェクト", date="2019.Mar ~ 2019.Jun", imgSrc="https://bulma.io/images/placeholders/1280x960.png") なんか色々書いたりなんだりすごい目標とかあれやこれやなんやかんや格好いいこととか書くそういえば写真どうしよなあ
        Project(title="木づかいプロジェクト", date="2019.Jun ~ ", imgSrc="https://bulma.io/images/placeholders/1280x960.png") なんか色々書いたりなんだりすごい目標とかあれやこれやなんやかんや格好いいこととか書くそういえば写真どうしよなあ
        Project(title="モビールワークショップ", date="2019.May ~ ", imgSrc="https://bulma.io/images/placeholders/1280x960.png") なんか色々書いたりなんだりすごい目標とかあれやこれやなんやかんや格好いいこととか書くそういえば写真どうしよなあ
        Project(title="江差いにしえBAR街", date="2019.July", imgSrc="https://bulma.io/images/placeholders/1280x960.png") なんか色々書いたりなんだりすごい目標とかあれやこれやなんやかんや格好いいこととか書くそういえば写真どうしよなあ
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
  }
}
</script>

<style lang="sass" scoped>
  #body
    .discription
      font-size: 11px;
      text-align: center;
      padding: 20px;
</style>