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
           console.log(getMessage)
           return word.split("_");
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
            console.log(message.payloadString);
            console.log(message.payloadString.split("_"));

            let array = message.payloadString.split("_");


            store.dispatch('UpdatePlayersNumber')
            store.dispatch('UpdateSentMessage',{
                sentMessageController: array[1],
                sentMessageButton: array[0]
            })

            console.log(this.router)

            // クエスチョン画面での挙動
            // クエスチョンボタンで送られてきた回答がもし正解だったら、dispatchする。
            //


            if (router.history.current.name === 'question'){
                if(this.problemData[store.getters.getProblemNumber].answer===  array[0]){
                    console.log('正解しました')
                    store.dispatch('UpdateIncrementPlayersResult',{
                        id : store.getters.PlayersDetails.find( detail =>{
                            return detail.ControllerId === array[1]
                        })
                    })
                }
            }

            //if(store.getters.getPlayersDetails[store.getters.problemNumber]){}

        };

    }
}
