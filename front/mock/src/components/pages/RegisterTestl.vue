<template>
    <div class = "page">
        <div class = "contents">
            <div class= "select">
                <div id="up">
                    <img src="../../assets/logo.png"/>
                    <img src="../../assets/logo.png"/>
                    <img src="../../assets/logo.png"/>
                </div>
                <p id="title">push button to start</p>
                <div id="down">
                    <img src="../../assets/logo.png"/>
                    <img src="../../assets/logo.png"/>
                    <img src="../../assets/logo.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // export default{
    //     name:'register',
    //     watch: {

    //     },
    //     data(){
    //         return {
    //             SetCount: 0,
    //             id: [
    //                 0,1,2,3,4,5
    //             ]
    //             // GetController:
    //         }
    //     },
    //     methods: {
    //         AddSetCount () {
    //             this.SetCount += 1;
    //         },
    //     }
    // }
</script>

<style>
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
    .select{
        background-color : rgba(255, 0, 0, 0.692);
        height: 100%;
        width: 100%;
        padding: auto;
    }
    .select img{
        padding: 2%;
        margin: 3%;
        height: 80%;
        width: auto;
        border-radius: 40px;
        background-color: rgba(0, 0, 0, 0.411);
    }
    #up{
        height: 25%;
        position: relative;
        padding: 5%;
    }
    #title{
        padding: 2%;
        font-size: 70px;
        font-weight: bolder;
        height: 5%;
    }
    #down{
        height: 25%;
        position: relative;
        padding: auto;
    }

</style>
