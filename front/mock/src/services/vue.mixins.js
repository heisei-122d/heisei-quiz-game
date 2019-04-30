import store from './../store.js'
import router from './../router.js'
import ProblemData from './../assets/json/problems'

export const Mixin = {
    data(){
      return {
          ProblemData: ProblemData
      }
    },
    methods: {
       SplidWord (word){
           let getMessage = this.SplidWord(message.payloadString);
           return word.split("_");
       }
    },
    computed:{
        player1Result(){
            return store.getters.getPlayersDetails[0].result
        },
        player2Result(){
            return store.getters.getPlayersDetails[1].result
        },
        player3Result(){
            return store.getters.getPlayersDetails[2].result
        },
        player4Result(){
            return store.getters.getPlayersDetails[3].result
        }
    },
    mounted(){
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

            let array = message.payloadString.split("_");


            store.dispatch('UpdatePlayersNumber')
            store.dispatch('UpdateSentMessage',{
                sentMessageController: array[1],
                sentMessageButton: array[0]
            })



            // クエスチョン画面での挙動
            // クエスチョンボタンで送られてきた回答がもし正解だったら、dispatchする。
            //



            if (router.history.current.name === 'question') {
                if (ProblemData[store.getters.getProblemNumber].answer === Number(array[0])) {
                    console.log('正解しました')
                    store.dispatch('UpdateIncrementPlayersResult',{
                        id:array[0]
                    })
                }
                this.$router.push('./answer')
            }
            //if(store.getters.getPlayersDetails[store.getters.problemNumber]){}

        };

    }
}
