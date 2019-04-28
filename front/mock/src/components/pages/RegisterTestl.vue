<template>
    <div class = "page">
        <div class = "contents">
            <div class = "box">
                <div id="up">
                    <div class = "Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/fc.jpeg" class="imageSize"/>
                        </div>
                        <div class = "NumberImg">
                            <img :src="Src[0]" v-if="JudgeImage[0]" class="imageSize">
                        </div>
                    </div>
                    <div class="Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/sf.jpeg" class="imageSize"/>
                        </div>
                        <div class = "NumberImg">
                            <img :src="Src[1]"  v-if="JudgeImage[1]" class="imageSize"/>
                        </div>
                    </div>
                </div>
                <p id="title">push button to start</p>
                <div id="down">
                    <div class="Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/dm.jpg" class="imageSize"/>
                        </div>
                        <div class = "NumberImg" >
                            <img :src="Src[2]" v-if="JudgeImage[2]" class="imageSize">
                        </div>
                    </div>
                    <div class="Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/ps.png" class="imageSize"/>
                        </div>
                        <div class = "NumberImg" >
                            <img :src="Src[3]" v-if="JudgeImage[3]" class="imageSize toumei"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import {Mixin} from '../../services/vue.mixins.js'

    export default{
        name:'register',
        mixins:[
            Mixin
        ],
        data(){
            return {
                ImageSrc : [] ,
                JudgeImage: [
                    false,false,false,false
                ],
                Src : []
            }
        },
        computed: {
            ...mapGetters({
                getOnControllerId:'getOnControllerId',
                getPlayersDetails:'getPlayersDetails',
                getPlayersNumber: 'getPlayersNumber',
                getSentMessage: 'getSentMessage',
                getOnControllerInfo:'getController'
            }),
            PlayersNumber(){
                return this.getPlayersNumber;
            }
        },
        methods: {
            setSrc(id , path){
                console.log(path)
                this.Src[id] = require(path);
            }
        },
        mounted() {
        },
        watch: {
            PlayersNumber : function (){

                console.log('start');
                console.log(this.getPlayersNumber)

                // 登録
                this.$store.dispatch('UpdateOnlinePlayer',{
                    id: this.getPlayersNumber-1,
                    ControllerId: this.getSentMessage[0]
                });

                console.log(this.getPlayersDetails);


                let count = this.getPlayersNumber -1;

                console.log('count'+count)

                console.log(this.getPlayersDetails)

                console.log('sssss')

                let self = this

                let UseControllerName = this.getOnControllerInfo.find(function(use){
                    console.log('aaaaaaaaaaaa')
                    console.log(use.shortName)
                    console.log('bbbbbbbbbbbb')
                    console.log(self.getPlayersDetails[count].ControllerId)
                    return use.shortName === (self.getPlayersDetails[count].ControllerId)
                })
                console.log('aaaaa');
                console.log(UseControllerName)

                this.Src[UseControllerName.id] = require(`../../assets/number${this.getPlayersNumber}.jpg`);

                //this.JudgeImage[this.getPlayersNumber] = true
                this.$set(this.JudgeImage,UseControllerName.id,true)

                console.log(this.Src);
                console.log(this.JudgeImage);
                if ( this.getPlayersNumber === 4){
                    this.$router.push(`/newage`)
                }
            }
        },
    }
</script>

<style>
    /* .Images{
        height:400px;
        width: 400px;
        float:left;
        padding:20px;
        position:relative;
    } */
    /* .ControllerImg{
        height:300px;
        position:absolute;
    } */
    /* .imageSize{
        height:100px;
        width:100px;
    } */
    /* .NumberImg{
        height :300px;
        height :300px;
        position :absolute;
    } */
    /* .imageSize{
        height :100px;
        width :100px;
        opacity :0.5;
    } */
    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    *{
        margin: 0;
        padding: 0;
    }  
    #app,.home{
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }
    .page{
        height: 100%;
        width : 100%;
        /* background-color: rgba(0, 0, 255, 0.794); */
    }
    .contents{
        height: 100%;
        width : 100%;
        /* background-color: rgba(0, 128, 0, 0.678); */
    }
    .box{
        background-color : rgba(255, 0, 0, 0.692);
        height: 100%;
        width: 100%;
    }

    #up{
        height: 25%;
        position: relative;
        padding: 5%;
        /* background-color: black; */
    }
    #title{
        padding: 2%;
        font-size: 70px;
        font-weight: bolder;
        height: 6%;
    }
    #down{
        /* background-color: black; */
        height:25%;
        position: relative;
        padding: 5%;
    }

    .Images{
        /* background-color: violet; */
        height: 100%;
        width: 25%;
        left: 3%;
        margin: auto 6% auto auto;
        text-align: center;
        display: inline-block;
        position: relative;
        border-radius: 30px;
        /* border: 10px black; */
        border: dashed 10px #ffffff96;
        /* padding: 2%; */
        /* top:-20%;  */
    }
    
    /* .Images .ControllerImg{
        padding: 25%;
        height: 80%;
        width: auto;
        border-radius: 40px;
        background-color: rgba(0, 0, 0, 0.411);
    } */

    .NumberImg{
        height: 100%;
        width: 100%;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.411);
        /* display: none; */
    }

    .ControllerImg .imageSize{
        /* padding: 25%; */
        height: 100%;
        width: 100%;
        border-radius: 30px;
        background-color: rgba(0, 0, 0, 0.411);
        /* display: none;  */
    }

    .imageSize{
        top:0;
        left: 0;
        position: absolute;
        height: 100%;
        width:auto;
        margin: 0;
        padding: 0;
    }
    /* .Images p{
        line-height: 1em;
        text-align: left;
        position: absolute;
        font-size: 130px;
        font-weight: bolder;
        top:25%;
        color: rgba(255, 255, 255, 0.568);
        transform: rotate(-20deg);
        -moz-transform: rotate(-20deg);
        -webkit-transform: rotate(-20deg);
    } */
</style>
