<template lang="pug">
  div
    div#body
      div.about
        div.subtitle
          h1 Design Caravan とは
          h2 About
        div.discription
          p なんか色々目標とか理念とか色々いろりろ書いていくところ、そういえばトップの写真どうしようなスワイプかフェードか動画という手も無きにしもあらずだしなあ
      div.project
        div.subtitle
          h1 進行プロジェクト
          h2 Project
        Project(title="レインボーはこだてプロジェクト", date="2019-May-09", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Project(title="木づかいプロジェクト", date="2019-May-09", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Project(title="モビールワークショップ", date="2019-May-09", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Project(title="江差いにしえBAR街", date="2019-May-09", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
    div#footer
</template>

<script>
import Project from '~/components/Project'

export default {
  name: 'AboutPage',

  components: {
    Project
  }
}
</script>

<style lang="sass" scoped>
</style>