<template>
    <div class = "page">
        <div class = "contents">
            <div class = "box">
                <div class = "frame">
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
                            <img :src="Src[3]" v-if="JudgeImage[3]" class="imageSize"/>
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
                console.log(`I'm happy`)
                console.log(`これが送られてきたものです${this.getSentMessage}`)
                console.log(this.getSentMessage)


                console.log(this.getPlayersNumber)

                // 登録
                this.$store.dispatch('UpdateOnlinePlayer',{
                    id: this.getPlayersNumber-1,
                    ControllerId: this.getSentMessage[0]
                })
                console.log('-----')
                console.log(this.getPlayersDetails[this.getPlayersNumber-1].ControllerId)
                console.log(this.getOnControllerInfo)
                let count = this.getPlayersNumber -1
                let self = this

                let UseControllerName = this.getOnControllerInfo.find(function(use){
                    console.log(use.shortName)
                    return use.shortName === (self.getPlayersDetails[count].ControllerId)
                })

                console.log(UseControllerName.shortname)

                this.Src[this.getPlayersNumber] = require(`../../assets/number${this.getPlayersNumber}.jpg`);


                this.JudgeImage[this.getPlayersNumber] = true

                console.log(this.Src);
                console.log(this.JudgeImage);
            }
        },
    }
</script>

<style lang="stylus" scoped>
    .page
        .contents
            .box
                .frame
                    .Images
                        height 400px
                        width 400px
                        float left
                        padding 20px
                        psition relative
                        .ControllerImg
                            height 300px
                            position absolute
                            .imageSize
                                height 100px
                                width 100px
                        .NumberImg
                             height 300px
                             height 300px
                             position absolute
                            .imageSize
                                height 100px
                                width 100px
                                opacity 0.5

</style>
