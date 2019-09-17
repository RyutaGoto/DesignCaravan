<template lang="pug">
    div
        transition(name="modal")
            div.modal-mask(@click="$emit('close')")
                div.modal-wrapper
                    div.modal-container
                      img(:src="val.img")
                    div.text-wrapper
                      h1 {{ val.title }}
                      h2 {{ val.date }}
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      // 受け取る属性名を指定
      val: Object // オブジェクトのみ受け取る
    }
  }
</script>

<style lang="sass" scoped>
  .modal-mask
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  
  .modal-wrapper
    display: table-cell;
    vertical-align: middle;
    h1
        margin: 10px 20px 0 20px;
        font-size: 22px;
        color: #fff;
    h2
        margin: 0 20px;
        color: #eee;

  .modal-container
    width: 350px;
    height: 350px;
    margin: 0px auto;
    padding: 15px 15px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    img
        object-fit: cover;
        width: 100%;
        height: 100%;
  @media screen and (min-width: 600px)
    .modal-mask
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;
    
    .modal-wrapper
      display: table-cell;
      vertical-align: middle;
      .text-wrapper
        width: 50vw;
        margin: 0 auto;
        h1
          margin: 10px auto 0 auto;
          font-size: 2.0rem;
          color: #fff;
        h2
          margin: 0;
          font-size: 1.5rem;
          color: #eee;

    .modal-container
      width: 50vw;
      height: 80vh;
      margin: 0px auto;
      padding: 15px 15px;
      background-color: #fff;
      border-radius: 2px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
      transition: all .3s ease;
      font-family: Helvetica, Arial, sans-serif;
      img
          object-fit: cover;
          width: 100%;
          height: 100%;
</style>