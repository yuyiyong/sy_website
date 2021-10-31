/*
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 15:50:12
 * @FilePath: /sy_website/src/store/index.ts
 */
import { createStore } from "vuex";
import productStore from "./modules/productStore";
import selectStore from "./modules/selectStore";
export default createStore({
  state: {},
  mutations: {},
  actions: {
    ...selectStore,
  },
  modules: {
    productStore,
  },
});
