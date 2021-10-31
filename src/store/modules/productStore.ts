/*
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 17:24:57
 * @FilePath: /sy_website/src/store/modules/productStore.ts
 */
import CONST, { LANG_KEY } from "@/constant/CONSTS";
import TwLg from "@/constant/TwLg";
import EnLg from "@/constant/EnLg";
const productStore = {
  state: {
    t: CONST.t,
    productList: CONST.productList,
    categoryIndex: 0,
    productIndex: 0,
    count: 0,
  },
  mutations: {
    setCategoryIndex(state: any, index: number) {
      state.categoryIndex = index;
    },
    setProductIndex(state: any, index: number) {
      state.productIndex = index;
    },
    increment(state: any) {
      state.count++;
    },
    setProductList(state: any, { langKey }: { langKey: string }) {
      console.log("langKey---1--", langKey, LANG_KEY.EN);

      let productList: any[];
      let langT: any;
      switch (parseInt(langKey)) {
        case LANG_KEY.EN:
          console.log("11111");
          langT = EnLg.t;
          productList = EnLg.productList;

          break;
        case LANG_KEY.TW:
          console.log("222222");
          langT = TwLg.t;
          productList = TwLg.productList;
          break;

        default:
          console.log("333333");

          productList = [];
          langT = null;
          break;
      }
      console.log("productList=--", productList);
      console.log("langT=--", langT);

      state.productList = productList;
      state.t = langT;
    },
  },
  action: {
    // increment(context: any) {
    //   context.commit("increment");
    // },
    // aa({ commit, state }: { commit: any; state: any }, payload: any) {
    //   console.log("====>>>>", payload.langKey);
    //   console.log("====>>>>", state);
    // },
    // // setUser({commit},value:any){
    // //     return commit('setUser',value)
    // // }
  },
};

export default productStore;
