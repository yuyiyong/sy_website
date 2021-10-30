<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-23 16:26:31
 * @FilePath: /sy_website/src/components/banner/Banner2.vue
-->
<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero">
    <div
      id="heroCarousel"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

      <div class="carousel-inner" role="listbox">
        <!-- Slide 1 style="background-image: url(./assets/img/slide/slide-1.jpg)"-->
        <div
          v-for="(item, index) in bannerList"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentIndex }"
          :style="{
            background: 'url(' + item.url + ') no-repeat',
          }"
        >
          <div class="carousel-container">
            <div class="container">
              <h2
                :class="{
                  animate__animated: index === currentIndex,
                  animate__fadeInDown: index === currentIndex,
                }"
                v-html="item.title"
              ></h2>
              <p
                :class="{
                  animate__animated: index === currentIndex,
                  animate__fadeInUp: index === currentIndex,
                }"
                v-html="item.description"
              ></p>
              <a
                v-if="index === currentIndex"
                href="#/about"
                class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                "
                >了解更多</a
              >
            </div>
          </div>
        </div>

        <!-- Slide 2 -->
        <!-- <div
          class="carousel-item"
          :class="{ active: false }"
          style="background-image: url(assets/img/slide/slide-2.jpg)"
        >
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">
                Lorem Ipsum Dolor
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                "
                >Read More</a
              >
            </div>
          </div>
        </div> -->

        <!-- Slide 3 -->
        <!-- <div
          class="carousel-item"
          :class="{ active: false }"
          style="background-image: url(assets/img/slide/slide-3.jpg)"
        >
          <div class="carousel-container">
            <div class="container">
              <h2 class="animate__animated animate__fadeInDown">
                Sequi ea ut et est quaerat
              </h2>
              <p class="animate__animated animate__fadeInUp">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
                est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
                mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
                repellendus deleniti vel. Minus et tempore modi architecto.
              </p>
              <a
                href="#about"
                class="
                  btn-get-started
                  animate__animated animate__fadeInUp
                  scrollto
                "
                >Read More</a
              >
            </div>
          </div>
        </div> -->
      </div>

      <a
        class="carousel-control-prev"
        role="button"
        data-slide="prev"
        @click="prevPic"
      >
        <span
          class="carousel-control-prev-icon icofont-simple-left"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>

      <a
        class="carousel-control-next"
        @click="nextPicHandle"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon icofont-simple-right"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </section>
  <!-- End Hero -->
</template>

<script>
import {
  onMounted,
  reactive,
  toRefs,
  onBeforeUnmount,
} from "@vue/runtime-core";
let timer = "";
export default {
  props: ["bannerList"],
  setup(props) {
    onMounted(() => {
      clearCirulation();
      circulationPic();
    });
    onBeforeUnmount(() => {
      clearCirulation();
    });
    const circulationPic = () => {
      timer = setInterval(() => {
        nextPic();
      }, 5800);
    };
    const clearCirulation = () => {
      if (timer !== "") {
        clearInterval(timer);
        console.log("clearCirulation....");
      }
    };
    const data = reactive({
      currentIndex: 0,
    });
    const nextPic = () => {
      data.currentIndex += 1;
      if (data.currentIndex > props.bannerList.length - 1) {
        data.currentIndex = 0;
      }
    };
    const prevPic = () => {
      clearCirulation();
      data.currentIndex -= 1;
      if (data.currentIndex < 0) {
        data.currentIndex = props.bannerList.length - 1;
      }
      circulationPic();
    };
    const nextPicHandle = () => {
      clearCirulation();
      nextPic();
      circulationPic();
    };
    return { prevPic, nextPicHandle, ...toRefs(data) };
  },
};
</script>

<style lang="scss"></style>
