<template>
    <div id="mainUp">
        <div id="questionBox">
            <div class="mediaContainer">
                <p><img src="video.js/video_cover.jpeg" /></p>
                <p><video src="b" /></p>
            </div>
            <div class="answerNum">
                <p>{{this.getProblemNumber}}</p>
            </div>
            <div class="answer">
                <p>A.{{this.problemData[this.getProblemNumber].answer}}</p>
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
    font-size: 13px;
    color: rgb(0, 0, 0);
    font-weight: normal;
    position: absolute;
    background-color: transparent;
    height: 10%;
    margin: 0 0 0 5%;
    width: 40%;
}

.question p{
    margin: 6% 3%;
}

.answer{
    background-color: #333;
    font-size: 48px;
    color: rgb(0, 0, 0);
    width: 100%;
    height: 100%;
    font-weight: bolder;
    position: absolute;
    background-color: transparent;
    text-align: right;
    z-index: 14;
}

.answer p{
    margin: 4% 75% auto auto;
}

.mediaContainer img{
    background-color: rgba(255, 255, 255, 0.534);
    width: 300px;
    margin: 28% 0 0 20%;
}


.mediaContainer video{
    background-color: rgba(255, 255, 255, 0.534);
    height:50%;
    width: 95%;
    margin: 28% 10% auto;
    display:none;
}

.mediaContainer{
    background-color:transparent;
    height: 100%;
    width:30%;
    left: 0;
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
    background-color: rgba(0, 0, 0, 0.151);
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

.answerNum p {
    margin: 0;
}

.answerNum{
    font-size: 100px;
    color: rgba(0, 0, 0, 0.151);
    font-weight: bolder;
    position: relative;
    background-color: transparent;
    display: inline-block;
    position: absolute;
}

</style>
