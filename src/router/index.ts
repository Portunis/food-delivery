import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/pizza",
    name: "MainView",
    meta: {
      layout: "delivery-layout",
    },
    component: () => import("../views/MainView.vue"),
  },
  {
    path: "/cart",
    name: "CartList",
    meta: {
      layout: "delivery-layout",
    },
    component: () => import("../components/Cart/CartList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
