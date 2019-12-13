<template>
  <div >
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <h3>Installed CLI Plugins</h3>
    <h1>直接获取的值：{{this.$store.state.count}}</h1>
    <h1>计算加一后的值：{{this.$store.getters.getStateCount}}</h1>
    
    <button v-on:click="addFun"> + </button>
    <button v-on:click="reductionFun"> - </button>
  </div>
</template>

<script>
export default {
  name: "componets1",
  methods:{
    addFun(){
      //this.$store.commit("add");
      this.$store.dispatch("addFun");
    },
    reductionFun(){
      //this.$store.commit("reduction");
      this.$store.dispatch("reductionFun");
    }
  }
};
</script>
 