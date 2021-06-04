/*
 * @LastEditors:
 * @LastEditTime: 2021-06-04 16:33:28
 * @FilePath: /sy_website/src/constant/consts.ts
 */

import { productCate } from "@/store/storeItf/product.itf";

class CONSTS {
  productList: Array<productCate> = [
    {
      name: "虚拟币资产包",
      list: ["量化", "本位币", "期限套利", "cta"],
    },
    {
      name: "期货",
      list: ["cta"],
    },

    {
      name: "外汇",
      list: ["cta"],
    },
  ];
}

export default new CONSTS();
