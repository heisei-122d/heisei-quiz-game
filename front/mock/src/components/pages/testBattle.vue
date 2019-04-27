<template>
    <div id="mainBox">
        <div id="videoContainer">
                <video id="background_video" loop muted autoplay></video>
        </div>
        <div id="mainUp">
            <div id="questionBox">
                <div id="question">あああああああああああああああああああああああああああああああああああああああああ</div>
                <div id="mediaContainer">

                </div>
            </div>
        </div>
        <div id="mainBottom">
            <div class="playerScreen">
                <div class="playerContainer">
                        <video id="player1"  loop muted autoplay></video>
                </div>
            </div>
            <div class="playerScreen">
                    <div class="playerContainer">
                            <video id="player2"  loop muted autoplay></video>
                    </div>
            </div>
            
        </div>
    </div>
</template>
<script>
    import RegisterButton from '../molcules/RegisterButton'
    export default{
        name:'test',
        components:{
            'register-button': RegisterButton
        },
        methods:{
        },
        mounted: function() {
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
        }
    }
</script>

<style lang="stylus" scoped >

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

#mainUp{
	background-color:#f86262;
	height: 30%;
    width: 70%;
    margin: auto ;
    padding: 0;
    top:20%;
    position: relative;
    z-index: -1;
}

#questionBox{
    font-size: 20px;
    color: black;
    font-weight: bolder;
    position: relative;
    background-color: transparent;
    padding-top: 2%; 
    height: 30%;
}

#choiceBox{
    list-style: none;
    background-color: transparent;
    position: relative;
    height:40%;
    text-align: center;
    margin: auto;
}

#choiceBox li{
    position: relative;
    list-style: none;
    background-color: #333;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    width: 30%;
    margin: 1% 2%;
    padding: 6px 4%;
    left: auto;
}
/* #choice1,#choice2{
}
#choice3,#choice4{
} */

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
