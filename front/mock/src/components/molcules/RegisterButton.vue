<template>
    <div >
        <register-button @onClick="addClick()" class="button">register</register-button>
    </div>
</template>

<script>
    import ResisterButton from '../atoms/AtomStartButton'
    export default{
        name:'test',
        components:{
            'register-button':ResisterButton
        },
        methods:{
            addClick(){
                this.$router.push(`/`);
                // eslint-disable-next-line
                console.log('resister');
            }
        }
    }
</script>

<style lang="stylus" scoped >
</style>
