<template>
  <div>
    <h1>This is an father page</h1>
    <child :message="parentMsg" v-on:fatherMethod="Show"></child>
  </div>
</template>
<script >
import child from "@/components/child.vue";

export default {
 data(){
   return{
     parentMsg:"11111"
   }
 },
 components: {
   child
 },
 methods:{
   Show:function(data){
     alert(data);
   }
 }
}
</script>
