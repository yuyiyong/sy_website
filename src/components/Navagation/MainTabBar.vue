/* eslint-disable vue/no-deprecated-slot-attribute */
<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-30 16:18:10
 * @FilePath: /sy_website/src/components/Navagation/MainTabBar.vue
-->
<template>
  <!--父组件   path就是传给子组件的值-->
  <div>
    <nav-bar class="nav_wrap">
      <template v-slot:logo-title> 三猿科技 </template>
      <tab-bar-item path="/" @mouseenter="dispProduct">
        <template v-slot:li-title>
          <span>首页</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/product" @mouseenter="showProduct">
        <template v-slot:li-title>
          <span>产品</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/about" @mouseenter="dispProduct">
        <template v-slot:li-title>
          <span>关于我们</span>
        </template>
      </tab-bar-item>
    </nav-bar>
    <!-- <slider :visiable="visiable" :delayTime="0"> -->
    <div
      class="secondNav"
      :class="{ show: visiable, hide: !visiable }"
      @mouseleave="dispProduct"
    >
      <!-- <pre>{{ constarr }}</pre> -->
      <ul class="global_ul">
        <!-- <li></li> -->
        <li>
          <ul class="cateType">
            <li v-for="(item, index) in constarr" :key="index">
              <a @click="handleProduct(index, 0)" href="javascript:;">{{
                item.name
              }}</a>
              <ul class="proType">
                <li
                  v-for="(val, key) in item.list"
                  :key="key"
                  @click="handleProduct(index, key)"
                >
                  <a href="javascript:;">{{ val.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- </slider> -->
  </div>
</template>

<script>
import commentUntils from "@/untils/commentUntils";
// import TabBar from "./TabBar";
import NavBar from "./NavBar";
import TabBarItem from "./TabBarItem";
import Slider from "../animation/Slider.vue";

export default {
  name: "MainTabBar",
  components: { TabBarItem, /* TabBar ,*/ NavBar },
  data() {
    return {
      visiable: false,
      constarr: this.$store.state.productStore.productList,
    };
  },
  methods: {
    showProduct() {
      console.log("nimamawoyun ");
      this.visiable = true;
    },
    dispProduct() {
      this.visiable = false;
    },
    handleProduct(index, key) {
      console.log("index,key", index, key);
      this.$store.commit("setCategoryIndex", index);
      this.$store.commit("setProductIndex", key);
      this.$router.push("/product");
      commentUntils.goAnchor(index, key);
      // commentUntils.goAnchor(categoryIndex.value, index);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global/globalStyle";
.nav_wrap {
}
//v-show="visiable"
.show {
  opacity: 1;
  visibility: visible;
  height: 100%;
}
.hide {
  opacity: 0;
  visibility: hidden;
  height: 0;
}

.secondNav {
  ul {
    list-style: none;
  }
  background: rgba($color: #000000, $alpha: 1);
  font-size: 14px;
  transition: all 0.5s ease-out, ease-out 0.5s;
}
.global_ul {
  display: block;
  max-width: $max-width;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  // justify-content: space-between;
}
.cateType {
  display: flex;
  justify-content: flex-start;
  li {
    font-size: 1.1rem;
    font-weight: 456;
    padding: 6px 0;
    margin-right: 115px;
    text-align: left;
    a {
      color: rgb(203, 203, 203);
    }
  }
}
.proType {
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    font-size: 1rem;
    a {
      color: rgb(140, 139, 139);
    }
  }
}
</style>
