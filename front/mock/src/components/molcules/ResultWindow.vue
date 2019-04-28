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
                        <p class="result">PS4</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">30</p>
                </div>
                <div class="detailBox">
                    <div class="resultDetail">
                        <p class="resultNum">2位</p>
                        <p class="result">ほげほげ</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">26</p>
                    </div>
                    <div class="resultDetail">
                        <p class="resultNum">2位</p>
                        <p class="result">ほげほげ</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">26</p>
                    </div>
                    <div class="resultDetail">
                        <p class="resultNum">2位</p>
                        <p class="result">ほげほげ</p>
                        <p class="heiseiText">平成度</p>
                        <p class="heisei">26</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ResultWindow',
        components:{
        },
        methods:{
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
    background-color: rgba(255, 255, 255, 0.534);
    width: 600px;
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
    top: 100%;
    margin: 0;
    z-index:10;
    text-align: left;
    position: absolute;
    /* overflow: hidden; */
}

#mainUp{
	background-color:#f86262;
	height: 55%;
    width: 70%;
    margin: auto ;
    padding: 0;
    top:7%;
    position: relative;
    z-index: -1;
}

.results{
    /* margin: 5%; */
    padding: 2%;
    background-color: transparent;
    height: 100%;
    /* padding: 1%; */
    margin:0;
    vertical-align: top;
    text-align: left;
}

.questionBox {
    position: relative;
    background-color: transparent;
    height: 100%;
    /* padding: 1%; */
    margin:0;
    vertical-align: top;
    text-align: left;
}

.resultNum{
    height: 7%;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.151);
    font-weight: bolder;
    position: relative;
    text-align: left;
    left: 0%;
}

.result{
    color: aliceblue;
    position: absolute;
    height: 10%;
    top:-30px;
    font-size: 80px;
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
    top: -200px;
    display: inline-block;
    text-align: right;
    vertical-align: bottom;
}

.heisei{
    /* background-color: aqua; */
    font-size:120px;
    position: relative;
    color: #000000;
    font-weight: bolder;
    height: 10%;
    width: 15%;
    top: -180px;
    right: 5%;
    left: 57%;
    display: inline-block;
    text-align: right;
    vertical-align: bottom;
}

.resultDetailKing{
    height: 100%;
    width: 70%;
    position: absolute;
    top:0;
    right: 0;
    z-index: 15;
    top: 1%;
}

.resultDetail{
    /* width: 40%;
    right: 0px; */
    position: relative;
    top: 150px;
}

.resultDetail .result{
    font-size: 50px;
    left: 44%;
    margin: 0;
    top: 20%;
}
.resultDetail .resultNum{
    font-size: 30px;
    top:10px;
    left: 35%;
    margin: 0;
}
.resultDetail .heiseiText{
    left: 40%;
    font-size: 30px;
    top: -50px;
    width: 50%;
}
.resultDetail .heisei{
    left: 80%;
    font-size: 80px;
    position: absolute;
    top: -30px;
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
    left: 0;
    margin: 1%;
    font-size: 60px;
    color: rgb(255, 238, 143);
}

#king p{
    margin: 4% 75% auto auto;
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
