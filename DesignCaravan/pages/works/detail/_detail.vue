<template lang="pug">
  div
    div#body
      div.subtitle
        h1 作品たち
        h2 Works
      div.works
        h1.title 作品タイトル
        div.carousel
          figure
            img(src="https://bulma.io/images/placeholders/1280x960.png", alt="")
        div.term
          p 2019.May
        div.skill
          p Illustrator, Photoshop, レーザーカッター
        div.abstract
          p めっちゃスタンプ押すやつ、かっこいい、すごく最の高。ハチャメチャに格好が良すぎるんじゃこのスタンプ。ところで作品ごとに誰が担当したかとか書いたほうがええんかな。それはもしかしていらん…？
      div.link
        div
          a.prev まえの作品へ
        div
          a.all 作品一覧を見る
        div
          a.next つぎの作品へ
    div#footer

</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'WorksPage',

  components: {
    Card
  }
}
</script>

<style lang="sass" scoped>
</style>