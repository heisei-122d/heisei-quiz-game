<template>
    <div>
        <start-button @onClick="initClick()" class="button">start</start-button>
    </div>
</template>

<script>
    import StartButton from '../atoms/AtomStartButton'
    import ProblemData from '../../assets/json/problems'
    export default{
        name:'StartButton',
        components:{
            'start-button':StartButt
        methods:{
            initClick(){
                this.$router.push(`/register`);
                console.log('init');
            }
        },
        mounted(){
            console.log(ProblemData)
        }
    }
</script>

<style lang="stylus" scoped >
</style>
