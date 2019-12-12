<template lang="pug">
  div
    div#body
      Subtitle(jp="旅のきろく", en="Snapshots")
      div.columns.is-multiline.is-mobile.is-desktop
        div.column.is-4(v-for="item in json_data")
          Snapshots(:title="item.name", :imgSrc="item.item", :obj="item")
    div#footer

</template>

<script>
import Card from '~/components/Card'
import Snapshots from '~/components/Snapshots'
import Subtitle from '~/components/Subtitle'

const axios = require('axios');

export default {
  name: 'SnapshotsPage',

  head() {
     return {
       title: 'Snapshots'
     }
   },

  components: {
    Card,
    Snapshots,
    Subtitle
  },

  data: function(){
  },

  asyncData: async function({params}){
    let snap = "https://designcaravan-60b57.firebaseio.com/snapshots.json";
    let res_snap = await axios.get(snap);

    var sort_snap = {
      "data" : [],
    };

    var j = res_snap.data.length - 1;
    for (var i = 0; i < res_snap.data.length; i++) {
      sort_snap.data[j] = res_snap.data[i];
      j = j - 1;
    }

    return {
      json_data: sort_snap.data,
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
          width: 50%;
          height: auto;
          margin: 0 auto;
  
  @media screen and (min-width: 600px)
    #body
      //padding-top: 0;
      //padding-right: 23vw;
      padding-bottom: 20vh;
      //padding-left: 23vw;
      //margin-bottom: 10vh;
      width: 800px;
      margin: 0 auto;
      .columns
        width: 85%;
        margin: 0 auto;
        .column
          display: inline-block;
          width: auto;
          margin: 0;
          padding: 10px;

</style>