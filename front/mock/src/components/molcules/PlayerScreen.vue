<template>
    <ul class="playerScreen">
        <player></player>
        <player></player>
        <player></player>
        <player></player>
    </ul>
</template>

<script>
    import player from '../molcules/PlayerContainer'
    export default{
        name:'PlayerScreen',
        components:{
            'player': player
        },
        methods:{
        }
    }
</script>

<style scoped >
    .playerScreen{
        background-color: gray;
        overflow: hidden;
        height: 100%;
        width: 100%;
        bottom: 0;
    }
</style>
