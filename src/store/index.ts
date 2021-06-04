/*
 * @LastEditors:
 * @LastEditTime: 2021-06-04 16:36:51
 * @FilePath: /sy_website/src/store/index.ts
 */
import { createStore } from "vuex";
import productStore from "./modules/productStore";
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    productStore,
  },
});
