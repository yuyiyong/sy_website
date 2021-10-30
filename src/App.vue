<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-29 17:03:55
 * @FilePath: /sy_website/src/App.vue
-->
<template>
  <!-- <nav-bar></nav-bar> -->
  <main-tab-bar class="nav1"></main-tab-bar>
  <div class="contain_wrap">
    <router-view />
  </div>
  <footer id="footer">
    <div class="container addcontainer">
      <div class="copyright">
        &copy; Copyright 杭州<strong><span>三猿科技</span></strong
        >有限公司
      </div>
      <div>投资有风险，入市需谨慎</div>
      <!-- <div class="credits"> -->
      <!-- All the links in the footer should remain intact. -->
      <!-- You can delete the links only if you purchased the pro version. -->
      <!-- Licensing information: https://bootstrapmade.com/license/ -->
      <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ -->
      <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
      <!-- </div> -->
    </div>
  </footer>
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

<style lang="scss" scope>
@import "@/global/globalStyle";
body {
  margin: 0px;
}
#app {
  font-family: $primary-fFamily;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
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

.md-dark {
  background: chocolate;
}

.nav1 {
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.contain_wrap {
  margin-top: 70px;
}
.addcontainer {
  text-align: center;
}
</style>
