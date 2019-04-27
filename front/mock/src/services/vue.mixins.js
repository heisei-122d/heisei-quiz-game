import store from './../store.js'

export const Mixin = {
    methods: {
       SplidWord (word){
           let getMessage = this.SplidWord(message.payloadString);
           console.log(getMessage)
           return word.split("_");

       },

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

            let array = message.payloadString.split("_")

            store.dispatch('UpdatePlayersNumber')
            store.dispatch('UpdateSentMessage',{
                sentMessageController: array[1],
                sentMessageButton: array[0]
            })

        };

    }
}
