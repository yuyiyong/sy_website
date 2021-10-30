/*
 * @LastEditors:
 * @LastEditTime: 2021-06-09 11:07:33
 * @FilePath: /sy_website/src/router/index.ts
 */
import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Home from "../views/Home01.vue";
import Product from "../views/Product.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
