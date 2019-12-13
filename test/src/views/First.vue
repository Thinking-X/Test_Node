<template>
  <div class="about">
    <h1>This is an First page</h1>
    <componets1> </componets1>
    <HelloWorld> </HelloWorld>
  </div>
</template>


<script>
// @ is an alias to /src
import componets1 from "@/components/componets1.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import request from "@/Util/request.js";

export default { 
  name:"First1",
  components: { 
    componets1,
    HelloWorld
  },
   data(){
    return{
      info:{}
    }
  },
  created:function() {
    this.init() 
  },
  methods:{
    init(){
      this.handleGet();
      //this.handlePost();
    },
    async handleGet(){
       let response = await request({
          // url:"/api/news/1",
          // method:"get" 

          url: "api/news/GetNewsByID",
          method: "get",
          params: { id: 1 } 
       });
       this.info = response.data;
       
       //response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
       //document.write(this.info)
       // eslint-disable-next-line no-console
       console.log(this.info);
    },
     async handlePost(){
      let response = await request({
        url:"/api/news/AddManage",
        method:"post",
        data:{
          TrueName:1,
          Phone:"2",
          Pwd:"3"
        }
      });
      this.info = response.info;
      // eslint-disable-next-line no-console
      console.log(this.info);
    }
  }
};
</script>
