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
    }
  },
  asyncData: async function({params}){
    let works = "https://designcaravan-60b57.firebaseio.com/works.json";
    let res_works = await axios.get(works);

    var sort_works = {
      "data" : [],
    };

    var j = res_works.data.length - 1;
    for (var i = 0; i < res_works.data.length; i++) {
      sort_works.data[j] = res_works.data[i];
      j = j - 1;
    }

    return {
      json_data: sort_works.data,
    };
  }
}

</script>

<style lang="sass" scoped>
  #body
    padding-bottom: 80px;

  @media screen and (min-width: 600px)
    #body
      padding-top: 0;
      padding-right: 25vw;
      padding-bottom: 10vh;
      padding-left: 25vw;
      margin-bottom: 10vh;
      Subtitle
      .works
        width: 50vw;
        margin: 0 auto;
</style>