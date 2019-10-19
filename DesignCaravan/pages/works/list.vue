<template lang="pug">
  div
    div#body
      Subtitle(jp="作品たち", en="Works")
      div.works.columns.is-centered.is-multiline.is-mobile
        div.column.is-narrow(v-for="i in json_data")
          Card(:title="i.name", :imgSrc="i.item[0]", :link="i.link") {{ i.abstract }}        
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Subtitle from '~/components/Subtitle'

const axios = require('axios');

export default {
  name: 'ListPage',

  components: {
    Card,
    Subtitle,
  },
  data: function(){
    return{
      works:{
        stamp:{
          img:{
            thum: require('~/assets/works/stamp_1.jpg'),
          },
          skill: "",
          subscription: "",
          link: "/works/detail/stamp",
        },
        badge:{
          img:{
            thum: require('~/assets/works/badge_1.jpg'),
          },
          link: "/works/detail/badge",
        },
        socks:{
          img:{
            thum: require('~/assets/works/socks_1.jpg'),
          },
          link: "/works/detail/socks",
        },
        rainbow:{
          img:{
            thum: require('~/assets/works/rainbow_1.jpg')
          },
          link: "/works/detail/rainbow",
        },
        shell:{
          img:{
            thum: require('~/assets/works/shell_1.jpg'),
          },
          link: "/works/detail/shell",
        },
        deer:{
          img:{
            thum: require('~/assets/works/deer_1.jpg'),
          },
          link: "/works/detail/deer",
        },
        
      },
    }
  },
  asyncData: async function({params}){
    let url = "https://designcaravan-60b57.firebaseio.com/works.json";
    let result = await axios.get(url);
    return {
      json_data: result.data,
    };
  }
}

</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 80px;

  @media screen and (min-width: 600px)
    #body
      padding-top: 12vh;
      padding-right: auto;
      padding-bottom: 20vh;
      padding-left: auto;
      .works
        width: 60vw;
        margin: 0 auto;
</style>