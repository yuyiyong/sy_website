/*
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 17:16:35
 * @FilePath: /sy_website/src/store/modules/productStore.ts
 */
import CONST from "@/constant/CONSTS";
const selectStore = {
  // state: {
  //   // productList: CONST.productList,
  //   // categoryIndex: 0,
  //   // productIndex: 0,
  //   // count: 0,
  // },
  // mutations: {
  //   // setCategoryIndex(state: any, index: number) {
  //   //   state.categoryIndex = index;
  //   // },
  //   // setProductIndex(state: any, index: number) {
  //   //   state.productIndex = index;
  //   // },
  //   // increment(state: any) {
  //   //   state.count++;
  //   // },
  //   // selectLang(state: any, payload: any) {
  //   //   console.log("payload--", payload);
  //   // },
  // },
  // action: {

  selectLang({ commit, state }: { commit: any; state: any }, payload: any) {
    commit({
      type: "setProductList",
      langKey: payload.langKey,
    });
  },
  // setUser({commit},value:any){
  //     return commit('setUser',value)
  // }
  // },
};

export default selectStore;
