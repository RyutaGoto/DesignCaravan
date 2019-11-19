<template lang="pug">
  div
    div.card
      div.card-content
        div.content
          img(:src="imgSrc", alt="", @click="openModal(obj)")
    Modal(:val="postItem", v-if="showModal", @close="closeModal")
    footer
      div
        h1 {{ title }}
        

</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Modal,
  },
  data: function(){
    return{
      showModal: false,
      postItem: '',
    }
  },
  methods: {
    openModal(item) {
      this.postItem = item;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    obj: Object
  }
}
</script>
<style lang="sass" scoped>
  .column
    //padding: 5px;
    .card
      width: 140px;
      height: 140px;
      margin: 3px;
      box-shadow: 1px 2px 8px rgba(10, 10, 10, 0.3);
      .card-content
        padding: 7px;
        .content
          width: 100%;
          height: 100%;
          img
            max-width: 100%;
            //max-height: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
    footer
      div
        h1
          margin-left: 8px;
          font-size: 12px;
  @media screen and (min-width: 600px)
    .column
      //width: 100%;
      .card
        width: 150px;
        height: 140px;
        margin: 3px;
        box-shadow: 1px 2px 8px rgba(10, 10, 10, 0.3);
        .card-content
          padding: 7px;
          width: 100%;
          height: 100%;
          .content
            width: 100%;
            height: 100%;
            img
              //max-width: 100%;
              width: 100%;
              height: 100%;
              object-fit: cover;
      footer
        div
          h1
            margin-left: 8px;
            font-size: 0.9rem;
            color: #666;

</style>
