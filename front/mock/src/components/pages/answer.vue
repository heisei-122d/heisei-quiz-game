<template>
    <div id="mainBox">
        <div id="videoContainer">
            <video id="background_video" loop muted autoplay></video>
        </div>
        <answer-window></answer-window>
        <div id="mainBottom">
            <player-screen> </player-screen>
        </div>
    </div>
</template>
<script>
    import RegisterButton from '../molcules/RegisterButton'
    import QuestionWindow from '../molcules/QuestionWindow'
    import PlayerScreen from '../molcules/PlayerScreen'
    import AnswerWindow from '../molcules/AnswerWindow'
    import ResultWindow from '../molcules/ResultWindow'
    import {
        mapActions,
        mapGetters
    } from 'vuex'
    export default{
        name:'test',
        components:{
            'register-button': RegisterButton,
            'question-window': QuestionWindow,
            'player-screen': PlayerScreen,
            'answer-window': AnswerWindow,
            'result-window': ResultWindow
        },
        data(){
            return {
                rankingArray: []
            }
        },
        methods:{
        },
        computed:{
          ...mapActions({
              UpdateProblemNumber:'UpdateProblemNumber'
          }),
          ...mapGetters({
              getProblemNumber: 'getProblemNumber',
              getPlayersDetails: 'getPlayersDetails'
          })
        },
        mounted: function() {
            const self = this
            setTimeout(function(){
                if(self.problemNumber === 15){
                    // self.$router.push('/result')
                }  else if(self.problemNumber%5 === 0 ) {
                    // self.$router.push('/newage')
                } else {
                    // self.$router.push('/question')
                }
            },5000)
            // 背景動画の再生
            let bv = new window.Bideo();
            console.log(bv);
            bv.init({
                // Video element
                videoEl: document.querySelector('#background_video'),

                // Container element
                container: document.querySelector('#videoContainer'),

                // Resize
                resize: true,

                autoplay: true,

                isMobile: window.matchMedia('(max-width: 768px)').matches,

                playButton: document.querySelector('#play'),
                pauseButton: document.querySelector('#pause'),

                // Array of objects containing the src and type
                // of different video formats to add
                src: [
                    {
                        src: './hawaii.mp4',
                        type: 'video/mp4'
                    },
                ],

                // What to do once video loads (initial frame)
                /*onLoad: function () {
                    document.querySelector('#video_cover').style.display = 'none';
                }*/
            });

            this.getPlayersDetails.forEach(function( value ){
                this.rankingArray.push({
                    player: value.id,
                    result:value.result
                })
            })

            // ランキングを作るところ
            if(this.getProblemNumber === 15){
                this.rankingArray.sort(function(a,b){
                    if(a.result < bn.result) return -1
                    if(a.result > b.result) return 1
                    return 0
                })
            }



            this.$store.dispatch('UpdateProblemNumber');
            console.log('--------------------')
            // console.log(this.getProblemNumber)
        }
    }
</script>

<style scoped >

    html, body {
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
        padding: 0;
        margin: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    * {
        margin: 0; padding: 0;
    }

    #mainBox{
        width: 100%;
        height: 100%;
        text-align:center;
        background-color:antiquewhite;
        max-width: 100%;
        max-height: 100%;
        z-index: 100;
        position: absolute;
        overflow: hidden;
    }

    /*#mainUp{
        background-color:#f86262;
        height: 30%;
        width: 70%;
        margin: auto ;
        padding: 0;
        top:20%;
        position: relative;
        z-index: -1;
    }*/

    #mainBottom{
        background-color:#000000;
        bottom: 0;
        padding: 0;
        margin: 0;
        right: 10%;
        height: 35%;
        width: 80%;
        z-index: 1;
        position: fixed;
    }

    .playerScreen video {
        position: relative;
        /* top: 50%; left: 50%;
        transform: translate(-50%, -50%); */
        display: none;
    }

    .playerScreen{
        background-color: gray;
        overflow: hidden;
        height: 100%;
        width: 100%;
        bottom: 0;

    }

    .playerContainer{
        text-align: center;
        background-color: rgb(114, 114, 114);
        outline: solid black medium;
        height: 100%;
        width: 25%;
        float: left;
        list-style: none;
    }

    video{
        /* display: none; */
    }

    #question{
        font-size: 3em;
        background-color: antiquewhite;
        width: 60%;
        vertical-align: middle;
        margin: 0 auto;
    }

    /* Background Video */

    #videoContainer {
        overflow: hidden;
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        z-index: -1;
    }

    #background_video {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%) scale(2,2);
        z-index: -1;
    }

    #video_cover {
        position: absolute;
        width: 100%; height: 100%;
        background-color: black;
        background-size: cover;
        background-position: center;
    }

</style>
