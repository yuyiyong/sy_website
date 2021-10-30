<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-09 10:58:12
 * @FilePath: /sy_website/src/views/Home.vue
-->
<template>
  <div class="home">
    <banner
      :items="items"
      :source-width="750"
      :source-height="300"
      :loop="true"
      :auto-play="true"
      :sync="true"
    ></banner>
    <canves-comp></canves-comp>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div v-for="(item, index) in productList" :key="index">
      {{ item.name }}
      <div class="test_wrap" v-for="(val, key) in item.list" :key="key">
        <cicle-btn @click="goProduct(index, key)">
          {{ val }}
        </cicle-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Banner from "@/components/banner/Banner.vue";
import CicleBtn from "@/components/button/CicleBtn.vue";
import CanvesComp from "@/components/canvs/canvesComp.vue";
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  components: { CicleBtn, Banner, CanvesComp },
  setup() {
    const store = useStore();
    const router = useRouter();
    const goProduct = (cateIndex: number, productIndex: number) => {
      store.commit("setCategoryIndex", cateIndex);
      store.commit("setProductIndex", productIndex);
      router.push("/product");
    };
    let imgs = [
      { href: "", src: "img/1.png" },
      { src: "img/2.png" },
      { href: "https://cn.vuejs.org/", src: "img/3.png" },
    ];
    const items = [
      {
        href: "",
        src: require("../assets/banner/banner-01.jpg"),
      },
      {
        href: "",
        src: require("../assets/banner/banner-02.jpg"),
      },
      {
        href: "",
        src: require("../assets/banner/banner03.jpg"),
      },
    ];
    return {
      items,
      goProduct,
      productList: computed(() => store.state.productStore.productList),
    };
  },
});
</script>
<style scoped>
.test_wrap {
  height: 400px;
}
</style>
