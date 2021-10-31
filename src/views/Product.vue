<!--
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 17:52:36
 * @FilePath: /sy_website/src/views/Product.vue
-->
<template>
  <div class="global_wrap">
    <div class="nav_wrap" @mouseenter="handleIn">
      <ul class="nav">
        <li @mouseover="selectCategory(index)" v-for="(item, index) in productList" :key="index" :class="{
            cateActive: index === cIndex,
            moveActive: index === categoryIndex,
          }">
          {{ item.name }}
        </li>
      </ul>
      <div>
        <ul class="nav_btn">
          <li v-for="(item, index) in categoryList" :key="index">
            <cicle-btn @click="handleClick(index)" :active="
                categoryIndex === cIndex ? productIndex === index : false
              ">
              {{ item.name }}
            </cicle-btn>
            <span class="ver_divider" v-if="index !== categoryList.length - 1">/</span>
          </li>
        </ul>
      </div>
      <div @mouseout="handleOut"></div>
    </div>

    <ul class="wrap_detail">
      <div class="package_wrap" v-for="(item, index) in productList" :key="index">
        <section class="breadcrumbs breadcrumbs_add" id="breadcrumbs" :style="`background-image: url(${
            item.style && item.style.url
          }); background-color:${item.style && item.style.background}`">
          <div class="content_wrap">
            <h2 class="content_tit">{{ item.name }}</h2>
            <div class="content_con" v-html="item.content"></div>
          </div>
        </section>
        <li :id="'product' + index + '_' + key" class="item_li_wrap" v-for="(val, key) in item.list" :key="key">
          <article class="entry entry-single entry_addd">
            <div class="entry-img">
              <img :src="val.url" alt="" class="img-fluid img-width" />
            </div>

            <h2 class="entry-title">
              <a href="javascript:;">{{ val.name }}</a>
            </h2>
            <div class="entry-content">
              <p class="html_wrap" v-html="val.intruduce"></p>
            </div>
            <div class="steps_wrap" v-if="val.steps">
              <h3>{{ val.steps.title }}</h3>
              <div class="steps_block_Wra">
                <div v-for="(step, stepKey) in val.steps.list" :key="stepKey" :class="{ step_b_2: stepKey !== val.steps.list.length - 1 }">
                  <div class="step_block_icon">
                    <img :src="step.icon" alt="" />
                  </div>
                  <h3>第{{ stepKey + 1 }}步</h3>
                  <div class="step_block_title">{{ step.text }}</div>
                  <div class="step_content">{{ step.content }}</div>
                </div>
              </div>
            </div>
            <div class="btn_wrap">
              <a v-for="(item1, index1) in val.button" :key="index1" :href="item1.url ? item.url : 'javascript:void(0);'" :target="item1.url ? 'view_frame' : ''" class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                ">{{ item1.text }}</a>
            </div>
            <!-- <div class="entry-meta">
            <ul>
              <li class="d-flex align-items-center">
                <i class="icofont-user"></i>
                <a href="blog-single.html">John Doe</a>
              </li>
              <li class="d-flex align-items-center">
                <i class="icofont-wall-clock"></i>
                <a href="blog-single.html"
                  ><time datetime="2020-01-01">Jan 1, 2020</time></a
                >
              </li>
              <li class="d-flex align-items-center">
                <i class="icofont-comment"></i>
                <a href="blog-single.html">12 Comments</a>
              </li>
            </ul>
          </div> -->

            <!-- <div class="entry-footer clearfix">
            <div class="float-left">
              <i class="icofont-folder"></i>
              <ul class="cats">
                <li><a href="#">Business</a></li>
              </ul>

              <i class="icofont-tags"></i>
              <ul class="tags">
                <li><a href="#">Creative</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>

            <div class="float-right share">
              <a href="" title="Share on Twitter"
                ><i class="icofont-twitter"></i
              ></a>
              <a href="" title="Share on Facebook"
                ><i class="icofont-facebook"></i
              ></a>
              <a href="" title="Share on Instagram"
                ><i class="icofont-instagram"></i
              ></a>
            </div>
          </div> -->
          </article>
          <!-- End blog entry -->
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import CicleBtn from "@/components/button/CicleBtn.vue";
import { productCate } from "@/store/storeItf/product.itf";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
import commentUntils from "../untils/commentUntils";
export default defineComponent({
  components: { CicleBtn },
  setup() {
    let categoryIndex = ref(0);
    let templateIndex = ref(0);
    const store = useStore();
    const handle = () => {
      console.log("11111,11111");
    };
    const productIndex = computed(() => store.state.productStore.productIndex);
    const cIndex = computed(() => store.state.productStore.categoryIndex);
    onMounted(() => {
      console.log("productIndex", productIndex.value);
      console.log("cIndex", cIndex.value);

      commentUntils.goAnchor(cIndex.value, productIndex.value);
      categoryIndex.value = cIndex.value;
    });
    const selectCategory = (index: number) => {
      console.log("nimama", index);
      categoryIndex.value = index;
    };
    const productList = computed<Array<productCate>>(
      () => store.state.productStore.productList
    );
    const categoryList = computed<string[]>(
      // () => productList[categoryIndex].list
      () => {
        console.log("categoryIndex==>", categoryIndex);

        return store.state.productStore.productList[categoryIndex.value].list;
      }
    );
    const handleOut = () => {
      console.log("out le");

      categoryIndex.value = templateIndex.value;
    };
    const handleIn = () => {
      console.log("in le");
      templateIndex.value = categoryIndex.value; //让临时index =  选中的index
    };
    const handleClick = (index: number) => {
      console.log("1111 btn", index, categoryIndex.value);
      store.commit("setCategoryIndex", categoryIndex.value);
      store.commit("setProductIndex", index);
      commentUntils.goAnchor(categoryIndex.value, index);
    };

    return {
      categoryList,
      categoryIndex,
      selectCategory,
      handle,
      productList,
      handleOut,
      handleIn,
      handleClick,
      productIndex,
      cIndex,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./setting/product.scss";
blockquote {
  overflow: hidden;
  background-color: #fafafa;
  padding: 60px;
  position: relative;
  text-align: center;
  margin: 20px 0;
}
i {
  position: absolute;
  left: 20px;
  top: 20px;
  font-size: 36px;
  color: #e7e7e7;
}
.wrap_detail {
  list-style: none;
  margin: 0;
  padding: 0;
}
.breadcrumbs {
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 550px;
}
</style>
