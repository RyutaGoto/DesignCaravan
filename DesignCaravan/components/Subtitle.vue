<template lang="pug">
  div#subtitle
    div
      h1 {{ jp }}
      h2 {{ en }}

</template>

<script>
export default {
  props: {
    jp: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
    
  }
}
</script>

<style lang="sass" scoped>
  #subtitle
    position: relative;
    margin-right: auto;
    margin-left: auto;
    margin-top: 100px;
    margin-bottom: 10px;
    width: 100%
    height: 80px;
    background-image: url("~assets/sub.png");
    background-size: 25% auto;
    background-repeat: no-repeat;
    background-position: center center; 
    line-height: 1.0em;
    div
      width: 100%
      height: 80px;
      display: block;
      text-align: center;
      position: absolute;
      top: 35%;
      h1
        font-size: 17px;
        font-weight: 400;
      h2
        font-size: 14px;
        font-weight: 300;
</style>
