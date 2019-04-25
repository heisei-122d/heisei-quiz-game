<template>
    <div id="contents">
        <button @click="onClick" class="myButton" onfocus="this.blur();"><slot></slot></button>
    </div>
</template>

<script>
    export default{
        name:'AtomButton',
        methods:{
            onClick(){
                this.$emit('onClick');
            }
        }

    }
</script>

<style lang="stylus" scoped>
    #contents
        height 100%
        width 100%
        .myButton
            width 30%
            height 300px
            display inline-block
            padding 0.5em 1em
            text-decoration none
            font-weight bold
            border-radius 8px
            color rgba(0, 69, 212, 0.47)
            text-shadow 5px 5px 5px rgba(255, 255, 255, 0.5)
            background-image linear-gradient(#6795fd 0%, #67ceff 100%)
            box-shadow 0px 2px 2px rgba(0, 0, 0, 0.29)
            border-bottom solid 5px #5e7fca
            size 20px
        .myButton:active
            transform translateY(4px)
            box-shadow 0px 0px 1px rgba(0, 0, 0, 0.2)
            border-bottom none
            outline none
</style>
