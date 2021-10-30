/*
 * @LastEditors:
 * @LastEditTime: 2021-06-07 11:42:16
 * @FilePath: /sy_website/src/store/modules/productStore.ts
 */
import CONST from "@/constant/CONSTS";
const productStore = {
  state: {
    productList: CONST.productList,
    categoryIndex: 0,
    productIndex: 0,
  },
  mutations: {
    setCategoryIndex(state: any, index: number) {
      state.categoryIndex = index;
    },
    setProductIndex(state: any, index: number) {
      state.productIndex = index;
    },
  },
  action: {
    // setUser({commit},value:any){
    //     return commit('setUser',value)
    // }
  },
};

export default productStore;
