<template lang="pug">
  div
    div#body
      div.subtitle
        h1 作品たち
        h2 Works
      div.works
        div
          Card(title="くるくるレインボーマシン", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div
          Card(title="缶バッヂのパッケージ", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div
          Card(title="靴下のパッケージ", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div
          Card(title="RHPスタンプ", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        div
          Card(title="フライヤー", imgSrc="https://bulma.io/images/placeholders/1280x960.png") 
      div.link
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

export default {
  name: 'WorksPage',

  components: {
    Card
  }
}
</script>

<style lang="sass" scoped>
</style>