/*
 * @LastEditors:
 * @LastEditTime: 2021-06-28 15:23:13
 * @FilePath: /sy_website/src/store/storeItf/product.itf.ts
 */

//产品类别
export interface productCate {
  name: string;
  icon?: string;
  list: Array<product>;
  style?: styleIf;
  content?: string;
}
//产品
export interface product {
  name: string;
  url: string;
  intruduce?: string;
  steps?: step;
  button?: Array<button>;
}
//按钮
export interface button {
  text: string;
  url: string;
}

interface styleIf {
  url: string;
  background: string;
}
interface step {
  title: string;
  list?: Array<setpItem>;
}
interface setpItem {
  icon: string;
  text: string;
  content?: string;
}

