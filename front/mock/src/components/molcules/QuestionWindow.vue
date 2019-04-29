<template>
    <div id="mainUp">
        <div id="questionBox">
            <div class="mediaContainer">
                <p><img src="a" /></p>
                <p><video src="b" /></p>
            </div>
            <div class="questionNum">
                <p>Q{{this.getProblemNumber}}</p>
            </div>
            <div class="question">
                <p>{{this.ProblemData[this.getProblemNumber].problemContent}}?</p>
            </div>

        </div>
        <ul id="choiceBox">
            <li id="choiceindex1">AAA</li>
            <li id="choiceindex2">BBB</li>
        </ul>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import ProblemData from '../../assets/json/problems'

    export default{
        name:'QuestionWindow',
        components:{
        },
        methods:{
        },
        data(){
            return {
                ProblemData: ProblemData
            }
        },
        computed:{
            ...mapGetters({
                getOnControllerId:'getOnControllerId',
                getPlayersDetails:'getPlayersDetails',
                getPlayersNumber: 'getPlayersNumber',
                getSentMessage: 'getSentMessage',
                getOnControllerInfo:'getController',
                getProblemNumber: 'getProblemNumber'
            }),
        }

    }
</script>

<style scoped >

#questionBox{
    position: relative;
    background-color: transparent;
    height: 100%;
    padding: 0;
    margin:0;
    vertical-align: top;
    text-align: left;

}
.questionNum{
    font-size: 100px;
    color: rgba(0, 0, 0, 0.151);
    font-weight: bolder;
    position: relative;
    background-color: transparent;
    height: 40%;
    width: 10%;
    /* top:-75%; */
    left: 30px;
    display: inline-block;
}

.questionNum{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 100px;
    color: rgba(0, 0, 0, 0.151);
    font-weight: bolder;
    position: relative;
    background-color: transparent;
    height: 40%;
    width: 100%;
    /* top:-75%; */
    left: 30px;
    display: inline-block;
}
.question{
    font-size: 6em;
    color: black;
    font-weight: bolder;
    position: absolute;
    background-color: transparent;
    height: 100%;
    padding: 4% 5%;
    top:80%;
    left:-5%;
    width: 50%;
    /* left: 0px; */
    /* top: -30px; */
    /* top:5%; */
    display: inline-block;
}

.question p{
    margin: -40% 10% auto;
    font-size: 40px;
}
.mediaContainer img{
    background-color: rgba(255, 255, 255, 0.534);
    height:85%;
    width: 95%;
    margin: 5%;
}

.mediaContainer video{
    background-color: rgba(255, 255, 255, 0.534);
    height:85%;
    width: 95%;
    margin: 5%;
    /* top:-100px; */
    display:none;
}

.mediaContainer{
    background-color:transparent;
    height: 100%;
    width:40%;
    left: 0;
    z-index:10;
    text-align: left;
    display: none;
}

#choiceBox{
    font-size: 3em;
    list-style: none;
    background-color: transparent;
    position: relative;
    top: -100%;
    height:100%;
    width: 60%;
    margin: auto 0 0 auto;
    padding: 2% 0;
}

#choiceBox li{
    position: relative;
    list-style: none;
    /* background-color: #333; */
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    width: 30%;
    right: -40px;
    margin: 10px 15px;
    padding: 3%;
    /* border-radius: 30px; */

}
#mainSide{
    position:fixed;
    background-color: transparent;
    height: 65%;
    width: 5;
    top: 0;
    right: 190px;
    z-index: 12;
}

#mainUp{
	background-color:#dbdbdb;
	height: 30%;
    width: 70%;
    margin: auto ;
    padding: 0;
    top:20%;
    position: relative;
    z-index: -1;
}

.questionNum p {
    margin: 0;
}

#choiceindex1{
    background-color: rgb(255, 38, 0);
}

#choiceindex2{
    background-color: rgb(0, 189, 63);

}

#choiceindex3{
    background-color: blue;

}

#choiceindex4{
    background-color: yellow;

}
</style>
