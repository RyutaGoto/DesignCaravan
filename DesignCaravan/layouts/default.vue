<template lang="pug">
  div#app
    nav.navbar(role="navigation", aria-label="main navigation")
      div.navbar-brand
        nuxt-link.navbar-item(to="/")
          img(src="~assets/logo.png", alt="")#logo
        a.navbar-burger.burger(data-target="navbarBasicExample", role="button", aria-label="menu", aria-expanded="false", v-on:click="isOpen = !isOpen", v-bind:class="{'is-active': isOpen}")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")

      div#navbarBasicExample.navbar-menu(v-bind:class="{'is-active': isOpen}")
        div.navbar-start
          nuxt-link.navbar-item(to="/about") Design Caravan とは
          nuxt-link.navbar-item(to="/member") キャラバンメンバー
          nuxt-link.navbar-item(to="/works") 作品たち
          nuxt-link.navbar-item(to="/snapshots") 旅のきろく
          nuxt-link.navbar-item(to="/") トップページ
          
    div#body
      nuxt
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ],
      isOpen: false,
    }
  },
  /*methods: {
    open(){
      var app = new Vue({
        el: '#app',
        data: {
          isOpen: false
        }
      })
    }
  },*/
}

</script>

<style lang="sass" scoped>
  .navbar
    height: 70px;
    box-shadow: 0 2px 5px #cccccc;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%
    #logo
      width: 63px;
      height: 58px;
      max-height: 68px;
    .navbar-brand
      height: 100%;
    .navbar-burger
      height: 100%
      float: right;
      
  #body
    background-image: url("~assets/background_30.png");
    background-size: 170% auto;
    margin-top: 70px;
    padding-right: 20px;
    padding-left: 20px;
</style>