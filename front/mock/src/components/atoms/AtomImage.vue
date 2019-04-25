<template>
    <image :src = this.src ></image>
</template>

<script>
    export default {
      name:'image',
      props:{
          imageSrc:{
              type: String
          }
      },
      data(){
          return {
              src: require(this.imageSrc)
          }
      }
    };
</script>

<style lang="stylus" scoped>
    
</style>
