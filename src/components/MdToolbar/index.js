/*
 * @LastEditors:
 * @LastEditTime: 2021-06-03 14:37:53
 * @FilePath: /sy_website/src/components/MdToolbar/index.js
 */
import material from "./material";
import MdToolbar from "./MdToolbar";

export default (Vue) => {
  material(Vue);
  Vue.component(MdToolbar.name, MdToolbar);
};
