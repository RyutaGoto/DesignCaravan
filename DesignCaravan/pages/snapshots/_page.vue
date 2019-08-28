<template lang="pug">
  div
    div#body
      div.subtitle
        h1 旅のきろく
        h2 Snapshots
      div
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
        Snapshots(title="イカす写真", imgSrc="https://bulma.io/images/placeholders/1280x960.png")
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
import Snapshots from '~/components/Snapshots'

export default {
  name: 'SnapshotsPage',

  components: {
    Card,
    Snapshots
  }
}
</script>

<style lang="sass" scoped>
</style>