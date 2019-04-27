<template>
    <div id="contents">
        <img :src = "ImgSrc" class="atomImg">
    </div>
</template>

<script>
    export default {
      name:'AtomImg',
      props:{
          imageSrc:{
              type: String
          }
      },
      data(){
          return {
              ImgSrc: this.imageSrc
          }
      },
      mounted(){
          console.log(this.imageSrc);
          console.log(this.ImgSrc);
      }
    };
</script>

<style lang="stylus" scoped>
    #contents
        height 100px
        width 100px
        .atomImg
            width 100px
            height 100px
</style>
