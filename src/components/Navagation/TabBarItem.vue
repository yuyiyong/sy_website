<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-30 15:22:32
 * @FilePath: /sy_website/src/components/Navagation/TabBarItem.vue
-->
<template>
  <!--子组件通过props获取父组件传来的值-->
  <!-- @click="itemClick" -->
  <!--  :to="path ? path : ''" -->
  <li>
    <router-link class="item_router" :to="path ? path : ''" @click="itemClick">
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
      // this.$router.replace(this.path);
      // this.$router.push(this.path);
      if (this.path === "/product") {
        this.$store.commit("setCategoryIndex", 0);
        this.$store.commit("setProductIndex", 0);
      }
    },
  },
};
</script>

<style scoped lang="scss" scope>
@import "@/global/globalStyle";
li {
  list-style: none;
  -webkit-background-clip: none;
  -webkit-text-fill-color: none;
  a {
    text-decoration: none;
    @extend .fontB;
    color: #f2f1f1;
    font-weight: 500;
    &:hover {
      color: #fff !important;
    }
    &.router-link-exact-active {
      color: #fff;
      font-weight: 700;
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
