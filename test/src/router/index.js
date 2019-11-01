import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue"; 
/* import First from "../views/First.vue"; */

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }, 
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/First",
    name: "first",
    component: () =>
      import("../views/First.vue")  
      /* component: First */

     /* component: () => 后 没有花括号，错误写法：
      component: () =>  {
        import("../views/First.vue")
      }  
    */
  }
];

const router = new VueRouter({
  routes
});

export default router;
 