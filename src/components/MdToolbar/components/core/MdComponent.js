/*
 * @LastEditors:
 * @LastEditTime: 2021-06-03 12:42:24
 * @FilePath: /sy_website/src/components/MdToolbar/components/core/MdComponent.js
 */
import MdTheme from "./MdTheme";
import deepmerge from "deepmerge";

export default function (newComponent) {
  const defaults = {
    props: {
      mdTheme: null,
    },
    computed: {
      $mdActiveTheme() {
        const { enabled, getThemeName, getAncestorTheme } = MdTheme;

        if (enabled && this.mdTheme !== false) {
          return getThemeName(this.mdTheme || getAncestorTheme(this));
        }

        return null;
      },
    },
  };

  return deepmerge(defaults, newComponent);
}
