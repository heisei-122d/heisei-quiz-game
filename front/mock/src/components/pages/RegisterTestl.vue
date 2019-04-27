<template>
    <div class = "page">
        <div class = "contents">
            <div class = "box">
                <img src="../../assets/logo.png" class = "ControllerImg" width="100" />
                <img src="../../assets/logo.png" class = "ControllerImg" width="100" />
                <img src="../../assets/logo.png" class = "ControllerImg" width="100" />
            </div>
            <div class = "box">
                <img src="../../assets/logo.png" class = "ControllerImg" width="100" />
                <img src="../../assets/logo.png" class = "ControllerImg" width="100" />
                <img src="../../assets/logo.png" class = "ControllerImg" width="100" />
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'register',
        watch: {

        },
        data(){
            return {
                SetCount: 0,
                id: [
                    0,1,2,3,4,5
                ],
                GetController:


            }
        },
        methods: {
            AddSetCount () {
                this.SetCount += 1;
            },




        }
    }
</script>

<style lang="stylus" scoped>
    .page
        .contents
            .box
                .ControllerImg
                    height 300px
                    width 300px
                    padding-left 50px
</style>
