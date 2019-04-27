<template>
    <div class = "page">
        <div class = "contents">
            <div class = "box">
                <div class = "frame">
                    <div class = "Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/logo.png" class="imageSize"/>
                        </div>
                        <transition name="demo">
                            <div class = "NumberImg">
                                <img :src="setImageSrc" v-if="JudgeImage(0)" class="imageSize"/>
                            </div>
                        </transition>
                    </div>
                    <div class="Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/logo.png" class="imageSize"/>
                        </div>
                        <div class = "NumberImg">
                            <img :src="setImageSrc"  v-if="JudgeImage(1)" class="imageSize"/>
                        </div>
                    </div>
                    <div class="Images">
                        <div class = "ControllerImg">
                            <img src="../../assets/logo.png" class="imageSize"/>
                        </div>
                        <div class = "NumberImg" >
                            <img :src="setImageSrc" v-if="JudgeImage(2)" class="imageSize"/>
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
    //import {Mixin} from '../../services/vue.mixins.js'

    export default{
        name:'register',
        mixins:[
        ],
        watch: {

        },
        data(){
            return {
                SetCount: 1
            }
        },
        computed: {
            setImageSrc() {
                return require(`../../assets/number${this.SetCount}.jpg`);
            },
            ...mapGetters({
                getOnControllerId:'getOnControllerId',
                getPlayersDetails:'getPlayersDetails'
            })
        },
        methods: {
            AddSetCount () {
                this.SetCount += 1;
                console.log('setcount'+ this.SetCount);
            },
            /**
             * @return {boolean}
             */
            JudgeImage (id) {
                const onbutton = this.getPlayersDetails[id].online;

                console.log(`judge now ${id}`);

                return (onbutton === true);
            }
        },
        mounted() {
            console.log("----------");
            console.log('setcount'+ this.SetCount);
            console.log(this.setImageSrc);

            const client = new Paho.MQTT.Client("192.168.1.3", 8080, "clientId-wREnNxL12n");
            client.onConnectionLost = onConnectionLost;
            client.onMessageArrived = onMessageArrived;
            client.connect({
                onSuccess: onConnect
            });

            function onConnect() {
                console.log("Connect to broker with MQTT!");
                client.subscribe("test");
            };

            function onConnectionLost(responseObject) {
                if (responseObject.errorCode !== 0)
                    console.log("connectionLost:" + responseObject.errorMessage);
            };

            let before = null;
            let beforeArrivedTime = 0;

            function onMessageArrived(message) {
                let nowTime = Date.now();
                if (nowTime - beforeArrivedTime < 100) return;
                beforeArrivedTime = nowTime;
                console.log(message.payloadString);
            };

        }
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
