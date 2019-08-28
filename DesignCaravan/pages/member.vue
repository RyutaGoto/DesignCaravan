<template lang="pug">
  div
    div#body
      div.subtitle
        h1 キャラバンメンバー
        h2 Member
      div.member
        Member(imgSrc="", name="鈴木ほのか", role="リーダー", discription="", charge="")
        Member(imgSrc="", name="日登舞", role="副リーダー", discription="", charge="")
        Member(imgSrc="", name="岩城一真", role="ハイエース乗り", discription="", charge="")
        Member(imgSrc="", name="須藤翼", role="お父さん", discription="", charge="")
        Member(imgSrc="", name="後藤隆太", role="留退力学の申し子", discription="", charge="")
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Member from '~/components/Member'

export default {
  name: 'MemberPage',

  components: {
    Card,
    Member
  }
}
</script>

<style lang="sass" scoped>
</style>