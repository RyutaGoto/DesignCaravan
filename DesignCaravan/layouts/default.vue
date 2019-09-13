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
        div.navbar-start(v-on:click="isOpen = !isOpen")
          nuxt-link.navbar-item(to="/about") Design Caravan とは
          nuxt-link.navbar-item(to="/member") キャラバンメンバー
          nuxt-link.navbar-item(to="/works/list") 作品たち
          nuxt-link.navbar-item(to="/snapshots/list") 旅のきろく
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
  methods: {
    open(){
      var app = new Vue({
        el: '#app',
        data: {
          isOpen: false
        }
      })
    }
  },
}

</script>

<style lang="sass" scoped>
  .navbar
    height: 70px;
    box-shadow: 0 2px 5px #cccccc;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    #logo
      width: 63px;
      height: 58px;
      max-height: 68px;
    .navbar-brand
      height: 100%;
    .navbar-burger
      height: 100%
      float: right;

    .navbar-menu
      height: 100vh;
      padding-top: 70px;
      background-color: #f5f5f5;
      .navbar-start
        //display: flex;
        //flex-flow: wrap;
        //justify-content: space-around;
        //align-items: center;
        .navbar-item
          color: #666666;
          padding-top: 30px;
          text-align: center;
          font-size: 28px;
      
  #body
    background-image: url("~assets/background_30.png");
    background-size: 170% auto;
    padding-top: 40px;
    padding-right: 5vw;
    padding-left: 5vw;
</style>