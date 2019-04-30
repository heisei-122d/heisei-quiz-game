<template>
    <div id="mainUp">
        <div id="questionBox">
            <p id="king">結果発表</p>
            <div class="mediaContainer">
                <p><img src="bideo.js/video_cover.jpeg" /></p>
                <p><video src="b" /></p>
            </div>
            <div class="results">
                <div class="resultDetailKing">
                        <p class="resultNum">1位</p>
                        <p class="result">P{{this.getPlayersDetails[0].id}}</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">{{this.getPlayersDetails[0].result}}</p>
                </div>
                <div class="detailBox">
                    <div class="resultDetail">
                        <p class="resultNum">2位</p>
                        <p class="result">P{{this.getRanking[1].id}}</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">Null</p>
                    </div>
                    <div class="resultDetail">
                        <p class="resultNum">2位</p>
                        <p class="result">P{{this.getRanking[2].id}}</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">Null</p>
                    </div>
                    <div class="resultDetail">
                        <p class="resultNum">2位</p>
                        <p class="result">P{{this.getRanking[3].id}}</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">NUll</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    }from 'vuex'
    export default{
        name:'ResultWindow',
        components:{
        },
        methods:{
        },
        computed:{
            ...mapGetters({
                getPlayersDetails:'getPlayersDetails',
                getRanking:'getRanking'
            })
        }
    }
</script>

<style scoped >

#questionBox{
    position: relative;
    background-color: transparent;
    /* padding: 1%; */
    margin:0;
    vertical-align: top;
    text-align: left;
}


.mediaContainer img{
    background-color: transparent;
    width: 600px;
    /* margin: 28% 0 0 20%; */
    display:none;

}


.mediaContainer video{
    position: absolute;
    background-color: transparent;
    height:50%;
    width: 95%;
    /* margin: 28% 10% auto; */
    display:none;
}

.mediaContainer{
    background-color:transparent;
    height: 65%;
    width:25%;
    top: 17%;
    margin: 3%;
    z-index:10;
    text-align: left;
    position: absolute;
    /* overflow: hidden; */
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
	background-color:rgba(255, 27, 27, 0.692);
	height: 60%;
    width: 70%;
    margin: auto ;
    padding: 1%;
    top:5%;
    position: relative;
    z-index: -1;
}

.results{
    /* margin: 5%; */
    padding: 2%;
    background-color: transparent;
    height: 100%;
    font-size: 1.5em;
    /* padding: 1%; */
    top:10%;
    margin:0;
    position: relative;
    vertical-align: top;
    text-align: left;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}

#questionBox {
    position: relative;
    background-color: transparent;
    height: 100%;
    /* margin:3%; */
    vertical-align: top;
    text-align: left;
}

.resultNum{
    height: 7%;
    font-size: 2.5em;
    color: rgba(0, 0, 0, 0.294);
    font-weight: bolder;
    position: relative;
    text-align: left;
    left: 0%;
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */

}

.result{
    color: aliceblue;
    position: absolute;
    height: 10%;
    top:-30px;
    font-size: 5em;
    font-weight: bolder;
    left: 13%;
    width: 30%;
    text-align: left;
    vertical-align: bottom;
}

.heiseiText{
    /* background-color: aqua; */
    font-size:60px;
    position: relative;
    color: #000000;
    font-weight: bolder;
    height: 20%;
    left: 50%;
    top: -1em;
    display: inline-block;
    text-align: right;
    vertical-align: bottom;
}

.heisei{
    /* background-color: aqua; */
    font-size:5.5em;
    position: relative;
    color: #000000;
    font-weight: bolder;
    /* height: 10%; */
    /* width: 15%; */
    top: -0.6em;
    right: 3%;
    left: 57%;
    display: inline-block;
    text-align: right;
    /* vertical-align: bottom; */
    /* background-color: aqua; */

}

.resultDetailKing{
    height: 100%;
    width: 70%;
    position: absolute;
    top:9%;
    right: 0;
    z-index: 15;
}

.resultDetail{
    /* width: 40%;
    right: 0px; */
    position: relative;
    top: 25%;
    margin: 2%;
}

.resultDetail .result{
    font-size: 2.5em;
    left: 17%;
    margin: 0;
    top: 20%;
}
.resultDetail .resultNum{
    font-size: 1.3em;
    top:10px;
    left: 10%;
    margin: 0;
    font-weight: bolder;

}
.resultDetail .heiseiText{
    left: 40%;
    font-size: 30px;
    top: 0em;
    width: 30%;
}
.resultDetail .heisei{
    left: 80%;
    font-size: 80px;
    width: 10%;
    position: absolute;
    top: 0.2em;
}

#king{
    background-color: #333;
    width: 100%;
    height: 100%;
    font-weight: bolder;
    position: absolute;
    background-color: transparent;
    z-index: 14;
    top:0;
    left: 30px;
    font-size: 5.5em;
    /* border: dotted 10px white; */
    color: rgb(255, 253, 132);
}

.detailBox {
    height: 100%;
    width: 70%;
    position: absolute;
    top:0;
    right: 0;
    z-index: 15;
}
</style>
