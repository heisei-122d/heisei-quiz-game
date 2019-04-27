<template>
    <div id="test">
        <register-image></register-image>
        <register-button></register-button>
    </div>
</template>

<script>
    import RegisterButton from '../molcules/RegisterButton'
    import RegisterImage from '../molcules/RegisterImage'
    export default{
        name:'test',
        components:{
            'register-button':RegisterButton,
            'register-image':RegisterImage
        },
        methods:{
        }
    }
</script>

<style lang="stylus" scoped >
    .test
        height 500px
        width  500px
</style>
