<template>
    <div>
        <h1>我是子组件</h1>
        <p>{{message}}</p>
        <button v-on:click="btnClick">点击提示！</button>
    </div>
</template>
<script >
export default {
    name:"child",
    props: {
        message: String
    },
    methods:{
        btnClick:function(){
            this.$emit("fatherMethod","aa");
        }
    }
}
</script>