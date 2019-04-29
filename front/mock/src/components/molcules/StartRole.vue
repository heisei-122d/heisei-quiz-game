<template>
    <div class="cp_cont">
        <div class="cp_anime14">
            <div class="text1">平成度診断テスト</div>
			<audio id="CSound" preload="auto">
				<source src="./heisei.mp3" type="audio/mp3">
			</audio>
        </div>
    </div>
</template>




<script>
/*降りた時に再生-> document.getElementById("CSound").play();*/

    export default{
            name:'EndWindow',
            components:{
            },
            methods:{
            }
        }
</script>

<style>
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
    
    .cp_cont {
        text-align: center;
        /* overflow: hidden; */
        position: relative;
        /* margin: 2em auto; */
        width: 100%;
        height: 100%;
        background:#eeeeee;

        }
    .cp_anime14 {
        position: relative;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        -webkit-animation: anime14_text 4s linear forwards;
                animation: anime14_text 4s linear forwards ;
        text-align: center;
        color: #616161;
    }

    .cp_anime14 .text1 {
        top:50%;
        font-size: 5em;
        font-weight: bold;
        margin-bottom: 50px;

    }
    @-webkit-keyframes anime14_text {
        from  { top: -100%; }
        to { top: 50%; }
    }
    @keyframes anime14_text {
        from   { top: -100%; }
        to { top: 50%; }
    }
</style>
