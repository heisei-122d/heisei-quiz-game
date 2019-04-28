<template>
    <div id="mainSide">
        <div id="timer"><div id="timer-animation"></div></div>
    </div>
</template>

<script>
    export default{
        name:'CountdownTimer',
        components:{
        },
        methods:{
        }
    }
</script>

<style scoped>

@keyframes  bar-animation{
    0% {
        height: 450px;
        top: 0px;
    }
    100% {
        height: 0px;
        top: 450px;
    }
}

#timer-animation{
    position:absolute;
    background-color: red;
    margin: 10% auto;
    padding: 0;
    height: 0;
    left: 0;
    top: 450px;
    text-align: center;
    width: 50px;
    right: 68px;
    animation-name : bar-animation;
    animation-duration : 10s;
    z-index: 12;
}
#timer{
    position:relative;
    background-color: rgb(255, 189, 47);
    margin: 10% auto;
    padding: 0;
    height: 450px;
    text-align: center;
    width: 50px;
    right: 68px;
    top: 180px;
    z-index: 12;
}

#mainSide{
    position:fixed;
    background-color: transparent;
    height: 65%;
    width: 5%;
    top: 0;
    right: 190px;
    z-index: 12;
}
</style>
