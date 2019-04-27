export const Mixin = {
    methods: {
        OnConnect (client){
            console.log("Connect to broker with MQTT!");
            client.subscribe("test");
        },
        OnConnectionLost(responseObject){
            if (responseObject.errorCode !== 0)
                console.log("connectionLost:" + responseObject.errorMessage);
        },
        onMessageArrived(message) {
            let nowTime = Date.now();
            if (nowTime - beforeArrivedTime < 100) return;
            beforeArrivedTime = nowTime;
            console.log(message.payloadString);
        },
        GoStart(){
            console.log('ready gooooooooooooooo');
            //MQTT
            const client = new Paho.MQTT.Client("192.168.1.3", 8080, "clientId-wREnNxL12n");
            client.onConnectionLost = onConnectionLost;
            client.onMessageArrived = onMessageArrived;
            client.connect({
                onSuccess: onConnect
            });

            this.OnConnect(client);
            this.OnConnectionLost();
        }
    }
}
