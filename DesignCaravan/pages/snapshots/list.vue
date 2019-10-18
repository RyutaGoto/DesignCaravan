<template lang="pug">
  div
    div#body
      Subtitle(jp="旅のきろく", en="Snapshots")
      div.columns.is-multiline.is-mobile.is-centered
        div.column(v-for="item in json_data")
          Snapshots.is-narrow(:title="item.name", :imgSrc="item.item", :obj="item")
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Snapshots from '~/components/Snapshots'
import Subtitle from '~/components/Subtitle'

const axios = require('axios');

export default {
  name: 'SnapshotsPage',
  components: {
    Card,
    Snapshots,
    Subtitle
  },
  data: function(){
  },
  asyncData: async function({params}){
    let url = "https://designcaravan-60b57.firebaseio.com/snapshots.json";
    let result = await axios.get(url);
    return {
      json_data: result.data,
    };
  }
}
</script>

<style lang="sass" scoped>
  #body
    padding: 0px 0px 90px 0px;
    .columns
        width: 90vw;
        margin: 0 auto;
        .column
          display: inline-block;
          width: 40%;
          height: auto;
          margin: 0 auto;
  
  @media screen and (min-width: 600px)
    #body
      padding-top: 12vh;
      padding-right: auto;
      padding-bottom: 20vh;
      padding-left: auto;
      .columns
        width: 80vw;
        margin: 0 auto;
        .column
          display: inline-block;
          width: 40%;
          height: auto;
          margin: 0 auto;

</style>