<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-04 15:53:56
 * @FilePath: /sy_website/src/components/Navagation/TabBarItem.vue
-->
<template>
  <!--子组件通过props获取父组件传来的值-->
  <!-- @click="itemClick" -->
  <li>
    <router-link class="item_router" :to="path ? path : ''">
      <slot name="li-icon"></slot>
      <slot name="li-title"></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {};
  },
  props: {
    path: String,
  },
  methods: {
    itemClick() {
      console.log("toPath");
      console.log(this.path);
      this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global/globalStyle";
li {
  list-style: none;
  a {
    text-decoration: none;
    @extend .fontB;
    color: #dbdde1;
    font-weight: 420;
    &.router-link-exact-active {
      color: rgb(228, 228, 228);
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 768px) {
  li {
    margin: 3vh;
    transform: translateX(20px);
    transition: 1s slideIn ease-in;
  }
}
</style>
