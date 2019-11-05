<template lang="pug">
  div
    div#body
      Subtitle(jp="旅のきろく", en="Snapshots")
      div.columns.is-centered.is-multiline.is-mobile
        div.column(v-for="item in json_data")
          Snapshots.is-one-quarter(:title="item.name", :imgSrc="item.item", :obj="item")
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
          width: 40%;
          height: auto;
          margin: 0 auto;
  
  @media screen and (min-width: 600px)
    #body
      padding-top: 0;
      padding-right: 25vw;
      padding-bottom: 10vh;
      padding-left: 25vw;
      margin-bottom: 10vh;
      .columns
        width: 50vw;
        margin: 0 auto;
        .column
          display: inline-block;
          width: 100%;
          //height: 25%;
          margin: 0 auto;
          padding: 10px;

</style>