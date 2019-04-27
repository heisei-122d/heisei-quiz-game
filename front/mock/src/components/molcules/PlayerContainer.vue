<template>
    <li class="playerContainer">
        <div><div class="score">score: 100</div><video id="player1"  loop muted autoplay></video></div>
    </li>
</template>

<script>
    // ref: https://github.com/videojs/video.js/issues/4167
    import videojs from'video.js'
    require('video.js/dist/video-js.css');
    export default{
        name:'PlayerContainer',
        components:{
        },
        methods:{
        },
        mounted() {
            window.playerEvents = this
            console.log(this);
            this.player = videojs('player1',{
                techOrder: ['html5'],
                autoplay: true,
                sources: [{
                    type: "video/mp4",
                    src: "fc.mp4"
                }],
                html5: {
                    nativeTextTracks: false
                }
            });
        }
    }
</script>

<style scoped >
    .playerContainer{
        display: flex;
        justify-content: center; 
        align-items: center;  
        text-align: center;
        background-color: rgb(114, 114, 114);
        outline: solid black medium;
        height: 100%;
        width: 25%;
        float: left;
        list-style: none;
    }
</style>
