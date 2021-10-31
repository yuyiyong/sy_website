/* eslint-disable vue/no-deprecated-slot-attribute */
<!--
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 17:59:11
 * @FilePath: /sy_website/src/components/Navagation/MainTabBar.vue
-->
<template>
  <!--父组件   path就是传给子组件的值-->
  <div>
    <nav-bar class="nav_wrap">
      <template v-slot:logo-title> 三猿科技 </template>
      <tab-bar-item path="/" @mouseenter="dispProduct">
        <template v-slot:li-title>
          <!-- 首页 -->
          <span>{{ t.home }}</span>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/product" @mouseenter="showProduct">
        <template v-slot:li-title>
          <span>{{ t.product }}</span>
          <!-- <span>产品</span> -->
        </template>
      </tab-bar-item>
      <tab-bar-item path="/about" @mouseenter="dispProduct">
        <template v-slot:li-title>
          <!-- <span>关于我们</span> -->
          <span>{{ t.aboutus }}</span>
        </template>
      </tab-bar-item>
    </nav-bar>
    <!-- <slider :visiable="visiable" :delayTime="0"> -->
    <div class="secondNav" :class="{ show: visiable, hide: !visiable }" @mouseleave="dispProduct">
      <ul class="global_ul">
        <!-- <li></li> -->
        <li>
          <ul class="cateType">
            <li v-for="(item, index) in constarr" :key="index">
              <a @click="handleProduct(index, 0)" href="javascript:;">{{
                item.name
              }}</a>
              <ul class="proType">
                <li v-for="(val, key) in item.list" :key="key" @click="handleProduct(index, key)">
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
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
  name: "MainTabBar",
  components: { TabBarItem, /* TabBar ,*/ NavBar },
  setup (props) {
    const data = reactive({
      visiable: false,
    });
    const store = useStore();
    const router = useRouter();
    const t = computed(() => store.state.productStore.t);
    const constarr = computed(() => store.state.productStore.productList);

    return {
      constarr,
      t,
      showProduct: () => {
        console.log("1111111---");
        console.log("nimamawoyun ");
        data.visiable = true;
      },
      dispProduct: () => {
        data.visiable = false;
      },
      handleProduct: (index, key) => {
        console.log("index,key", index, key);
        store.commit("setCategoryIndex", index);
        store.commit("setProductIndex", key);
        router.push("/product");
        commentUntils.goAnchor(index, key);
        // commentUntils.goAnchor(categoryIndex.value, index);
      },
      ...toRefs(data),
    };
  },

  // data () {
  //   return {
  //     visiable: false,
  //     constarr: this.$store.state.productStore.productList,
  //     t: this.$store.state.productStore.t,
  //   };
  // },
  // methods: {
  //   showProduct () {
  //     console.log("nimamawoyun ");
  //     this.visiable = true;
  //   },
  //   dispProduct () {
  //     this.visiable = false;
  //   },
  //   handleProduct (index, key) {
  //     console.log("index,key", index, key);
  //     this.$store.commit("setCategoryIndex", index);
  //     this.$store.commit("setProductIndex", key);
  //     this.$router.push("/product");
  //     commentUntils.goAnchor(index, key);
  //     // commentUntils.goAnchor(categoryIndex.value, index);
  //   },
  // },
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
