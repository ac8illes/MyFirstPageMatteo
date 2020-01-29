import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../components/Index.vue")
  },
  {
    path: "/moreInfos",
    name: "moreInfos",
    component: () => import("../components/MoreInfos.vue")
  }
];

const router = new VueRouter({ routes });

export default router;
