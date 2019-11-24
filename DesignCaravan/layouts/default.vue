<template lang="pug">
  div#app
    nav.navbar(role="navigation", aria-label="main navigation")
      div.navbar-brand
        nuxt-link.navbar-item(to="/")
          img(src="~assets/logo.png", alt="")#logo
          span#copyright(v-if="$mq != 'sm'") ©2019 DesignCaravan
        a.navbar-burger.burger(data-target="navbarBasicExample", role="button", aria-label="menu", aria-expanded="false", v-on:click="isOpen = !isOpen", v-bind:class="{'is-active': isOpen}")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")

      div#navbarBasicExample.navbar-menu(v-bind:class="{'is-active': isOpen}")
        div.navbar-start(v-on:click="isOpen = !isOpen")
          nuxt-link.navbar-item(to="/about")
            p Design Caravan とは
          nuxt-link.navbar-item(to="/member") キャラバンメンバー
          nuxt-link.navbar-item(to="/works/list") 作品たち
          nuxt-link.navbar-item(to="/snapshots/list") 旅のきろく
          nuxt-link.navbar-item(to="/") トップページ
          
    div#body
      nuxt
    div#footer(v-if="$mq === 'sm'") ©2019 DesignCaravan
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
  @import url(http://fonts.googleapis.com/earlyaccess/notosansjp.css);
  #app
    font-family: 'Noto Sans JP', sans-serif;
    .navbar
      height: 65px;
      box-shadow: 0 2px 5px #cccccc;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      #logo
        width: 63px;
        height: 50px;
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
          .navbar-item
            color: #666666;
            padding-top: 30px;
            text-align: center;
            font-size: 28px;
    #body
      background-image: url("~assets/background_30.png");
      background-size: 90% auto;
      padding-top: 40px;
      padding-right: 5vw;
      padding-left: 5vw;
    #footer
      margin: 0 auto;
      width: 100%
      height: 50px;
      background-color: #f1eadc;
      text-align: center;
      font-size: 12px;
      line-height: 50px;


  @media screen and (min-width: 600px)
    #app
      width: 100vw;
      height: 98vh;
      //position: relative;
      .navbar
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 0;
        left: 0;
        top: auto;
        height: 12vh;
        box-shadow: 0 -2px 5px #cccccc;
        .navbar-brand
          width: 12vw;
          background-color: #f5f5f5;
          padding-left: 2vw;
          .navbar-item
            display: flex;
            flex-direction: column;
            padding: 0 auto;
            #logo
              padding: 0.1vh 0;
              margin: -0.4vh 1.5vw 0 1.5vw;
              height: 8.5vh;
              width: auto;
              max-height: 9vh;
            #copyright
              font-size: 9px;
        #navbarBasicExample
          display: flex;
          align-items: center;
          justify-content: center;
          height: 8vh;
          width: 85vw;
          padding: 0;
          .navbar-start
            margin: 0 1vw 0 auto;
          .navbar-item
            letter-spacing: 2px;
            //height: 12vh;
            //line-height: 12vh;
            display: block;
            main: 0, auto;
            width: 190px;
            color: #777;
            font-size: 0.8rem;
            font-weight: 600;
            padding: 0 0.8vw;
            p
             letter-spacing: 0;
             font-size: 0.85rem;
          .navbar-item+ .navbar-item
            border-left: 2px solid #888;
            height: 10%;
      #body
        padding-top: 0;
        padding-right: 0;
        padding-bottom: 0;
        padding-left: 0;
</style>