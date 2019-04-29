<template>
    <div id="mainUp">
        <div id="questionBox">
            <div class="mediaContainer">
                <p><img src="video.js/video_cover.jpeg" /></p>
                <p><video src="b" /></p>
            </div>
            <div class="answerNum">
                <p>Q{{this.getProblemNumber}}</p>
            </div>
            <div class="answer">
                <p>A. {{this.problemData[this.getProblemNumber].answer}}</p>
            </div>
            <div class="question">
                <p>ああああああ</p>
            </div>

            <div class="detail">
                <p>鶴ヶ城はいつでもきれいだから見に来てね</p>
            </div>
        </div>
    </div>
</template>

<script>
    import ProblemData from '../../assets/json/problems'
    import {
        mapGetters
    } from 'vuex'
    export default{
        name:'AnswerWindow',
        components:{
        },
        data(){
            return {
                problemData:ProblemData
            }
        },
        methods:{
        },
        computed:{
            ...mapGetters({
                getProblemNumber:'getProblemNumber'
            })
        }
    }
</script>

<style scoped >

#questionBox{
    position: relative;
    background-color: transparent;
    height: 100%;
    /* padding: 1%; */
    margin:0;
    vertical-align: top;
    text-align: left;

}

.question{
    font-size: 1em;
    color: rgb(0, 0, 0);
    font-weight:bold;
    position: absolute;
    top:1.4em;
    left: 5em;
    /* margin: 0 0 0 2%; */
    width: 40%;
}

.answer{
    background-color: #333;
    color:rgba(255, 0, 0, 0.692) ;

    font-size:5em;
    /* color: rgb(0, 0, 0); */
    font-weight: bolder;
    top:15%;
    left: 5%;
    position: absolute;
    background-color: transparent;
    text-align: left;
    z-index: 14;
}

.mediaContainer img{
    background-color:transparent;
    height: 90%;
    width: 90%;
    margin: 3%;
}


.mediaContainer video{
    background-color:transparent;
    height: 90%;
    width: 90%;
    margin: 3%;
    display:none;
}

.mediaContainer{
    background-color:transparent;
    height: 60%;
    bottom: 0;
    width:34%;
    z-index:10;
    text-align: left;
    position: absolute;
    overflow: hidden;
}

.detail{
    
    height: 100%;
    width: 70%;
    position: absolute;
    top:0;
    right: 0;
    z-index: 15;
}

.detail p{
    font-size: 25px;
    height: 60%;
    color: rgb(255, 255, 255);
    font-weight:300;
    padding: 2%;
    margin: 5%;
    border-radius: 10px;
    background-color:rgba(255, 0, 0, 0.692) ;
}

#mainUp{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	background-color:#dbdbdb;
	height: 30%;
    width: 70%;
    margin: auto ;
    padding: 0;
    top:20%;
    position: relative;
    z-index: -1;
}

.answerNum p {
    margin: 0;
}

.answerNum{
    font-size: 8em;
    color: rgba(0, 0, 0, 0.151);
    left: 0.5%;
    top:-5%;
    font-weight: bolder;
    position: relative;
    background-color: transparent;
    display: inline-block;
    position: absolute;
}

</style>
