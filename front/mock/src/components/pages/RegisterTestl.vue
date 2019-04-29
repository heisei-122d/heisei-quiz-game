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
                            <img :src="Src[3]" v-if="JudgeImage[3]" class="imageSize toumei"/>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</template>>

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
