<template>
    <div id="test">
        <register-button></register-button>
    </div>
</template>

<script>
    import RegisterButton from '../molcules/StartButton'
    export default{
        name:'register',
        components:{
            'register-button':RegisterButton
        },
        methods:{
            addClick(){
                // eslint-disable-next-line
                console.log('ああああああああああああ')
            }
        }
    }
</script>

<style lang="stylus" scoped >
</style>
