/* eslint-disable vue/no-deprecated-slot-attribute */
<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-04 11:01:50
 * @FilePath: /sy_website/src/components/Navagation/MainTabBar.vue
-->
<template>
  <!--父组件   path就是传给子组件的值-->
  <div>
    <nav-bar class="nav_wrap">
      <template v-slot:logo-title> 三猿科技 </template>
      <tab-bar-item path="/">
        <template v-slot:li-title>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/product">
        <template v-slot:li-title>
          <span>产品</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/about">
        <template v-slot:li-title>
          <span>关于我们</span>
        </template>
      </tab-bar-item>
    </nav-bar>
  </div>
</template>

<script>
// import TabBar from "./TabBar";
import NavBar from "./NavBar";
import TabBarItem from "./TabBarItem";

export default {
  name: "MainTabBar",
  components: { TabBarItem, /* TabBar ,*/ NavBar },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.nav_wrap {
}
</style>
