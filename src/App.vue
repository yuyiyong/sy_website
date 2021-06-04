<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-04 15:15:34
 * @FilePath: /sy_website/src/App.vue
-->
<template>
  <!-- <nav-bar></nav-bar> -->
  <main-tab-bar></main-tab-bar>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import NavBar from "@/components/NavBar/NavBar.vue";
import MainTabBar from "./components/Navagation/MainTabBar.vue";
export default defineComponent({
  components: { /* NavBar,  */ MainTabBar },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
li {
  // display: inline-block;
  width: 100px;
  text-align: center;
}
.md-dark {
  background: chocolate;
}
</style>
