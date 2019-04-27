<template>
    <div>
        <register-image :imageSrc="imgSrc" class="imgContent"></register-image>
    </div>
</template>

<script>
    import RegisterImage from '../atoms/AtomImage'

    export default {
        name:'RegisterImage',
        components:{
            'register-image':RegisterImage
        },
        data(){
            return {
                imgSrc:'http://e-village.main.jp/gazou/image_gazou/gazou_0484.jpg'
            }
        }
    }
</script>

<style lang="stylus" scoped >
    .imageContent
        height 150px
        width  150px

</style>
