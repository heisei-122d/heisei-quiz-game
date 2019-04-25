<template>
    <div id="test">
        <register-button></register-button>
    </div>
</template>

<script>
    import RegisterButton from '../molcules/RegisterButton'
    export default{
        name:'test',
        components:{
            'register-button':RegisterButton
        },
        methods:{
        }
    }
</script>

<style lang="stylus" scoped >
</style>
