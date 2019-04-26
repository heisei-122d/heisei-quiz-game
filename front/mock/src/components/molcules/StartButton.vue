<template>
    <div>
        <start-button @onClick="initClick()" class="button">start</start-button>
    </div>
</template>

<script>
    import StartButton from '../atoms/AtomStartButton'
    export default{
        name:'StartButton',
        components:{
            'start-button':StartButton
        },
        methods:{
            initClick(){
                this.$router.push(`/register`);
                console.log('init');
            }
        }
    }
</script>

<style lang="stylus" scoped >
</style>
