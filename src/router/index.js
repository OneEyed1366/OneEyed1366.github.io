import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chooseVal",
    name: "chooseVal",
    component: () =>
      import("../views/chooseVal.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
