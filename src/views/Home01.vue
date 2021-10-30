<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-28 11:16:36
 * @FilePath: /sy_website/src/views/Home01.vue
-->
<template>
  <!-- <header id="header" class="fixed-top"> -->
  <!-- <div class="container d-flex align-items-center"> -->
  <!-- <h1 class="logo"><a href="index.html">Sailor</a></h1> -->
  <!-- Uncomment below if you prefer to use an image logo -->
  <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

  <!-- <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>

          <li class="drop-down">
            <a href="#">About</a>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="testimonials.html">Testimonials</a></li>

              <li class="drop-down">
                <a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a href="services.html">Services</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav> -->
  <!-- .nav-menu -->

  <!-- <a href="index.html" class="get-started-btn ml-auto">Get Started</a> -->
  <!-- </div> -->
  <!-- </header> -->
  <!-- End Header -->

  <banner-2 :bannerList="bannerList"></banner-2>

  <main id="main">
    <!-- ======= About Section ======= -->
    <!-- <section id="about" class="about">
      <div class="container">
        <div class="row content">
          <div class="col-lg-6">
            <h2>三猿科技是一家技术驱动的资产管理公司</h2>
            <h3>
              为客户提供资产管理服务，服务中的各策略都通过严格的风控措施、科学的执行算法，经过长时间实盘验证和多种压力测试，在不同市场周期和市场结构中保持可观的收益。
            </h3>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              在投资市场中三猿科技使用较优的投资组合，包括虚拟币业务、期货业务、外汇业务等，为投资人提供一整套行业领先的投资以及托管方案，确保投资人资金安全且业绩公开透明。
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i
                >虚拟币业务（量化、期现套利、币本位、cta）
              </li>
              <li><i class="ri-check-double-line"></i> 期货业务（cta）</li>
              <li><i class="ri-check-double-line"></i> 外汇业务（cta）</li>
              <li><i class="ri-check-double-line"></i> 美股业务</li>
            </ul>
            <p class="font-italic">客户能选择丰富多样的金融产品</p>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End About Section -->
    <section id="services" class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-6 border1">
            <div class="big_num">
              <span
                ><num-animation :time="numTime" num="200"></num-animation
                >+</span
              >万人
            </div>
            <div>全球服务用户数量</div>
          </div>
          <div class="col-lg-3 col-md-3 col-6 border1">
            <div class="big_num">
              <span
                ><num-animation :time="numTime" num="2000"></num-animation
                >+</span
              >万
            </div>
            <div>日均交易量</div>
          </div>
          <div class="col-lg-3 col-md-3 col-6 border1">
            <div class="big_num">
              <span
                ><num-animation :time="numTime" num="10"></num-animation>+</span
              >亿
            </div>
            <div>资管额</div>
          </div>
          <div class="col-lg-3 col-md-3 col-6 border2">
            <div class="big_num">
              <span
                ><num-animation :time="numTime" num="10"></num-animation>+</span
              >年
            </div>
            <div>系统安全运行达</div>
          </div>
        </div>
      </div>
    </section>
    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients section-bg">
      <div class="container">
        <div>
          <div></div>
          <structure-tec></structure-tec>
        </div>
        <!-- <img src="../assets/img/zt.png" class="img-fluid" alt="" /> -->
        <div class="row">
          <div
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img src="" class="img-fluid" alt="" />
          </div>

          <div
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img
              src="assets/img/clients/client-2.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img
              src="assets/img/clients/client-3.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img
              src="assets/img/clients/client-4.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img
              src="assets/img/clients/client-5.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
            "
          >
            <img
              src="assets/img/clients/client-6.png"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End Clients Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2>technology</h2>
          <p>技 术 核 心</p>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="icon-box">
              <i class="icofont-computer"></i>
              <h4><a>人工智能核心平台</a></h4>
              <p>
                专业级AI底层平台，领先的交易算法，自动机器学习，极速提高AI实时处理效率
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="icofont-earth"></i>

              <h4><a>全年实时秒级监控</a></h4>
              <p>
                集群式架构高性能云计算服务，支持机器人一年365天不间断运行，不错过任何一次行情
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="icofont-image"></i>
              <h4><a>强大的回测系统</a></h4>
              <p>
                “花菜”AI回测系统，针对金融的大数据沉淀，支持各类策略的定制模式回测
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="icofont-settings"></i>
              <h4><a>策略的智能动态调节</a></h4>
              <p>通过“蜂眼”系统的大数据投射，结合市场交易深度，动态调整策略</p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="icofont-tasks-alt"></i>

              <h4><a>产品操作简单</a></h4>
              <p>
                极大的降低各金融市场的入门难度，操作简单，轻松上手，简单几步即可开启您的金融产品
              </p>
            </div>
          </div>
          <div class="col-md-6 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="icofont-chart-bar-graph"></i>

              <h4><a>智能交易策略</a></h4>
              <p>
                AI结合交易大数据和防瀑布机制、网格等策略，获取稳定的年化收益
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->

    <!-- ======= Portfolio Section ======= -->
    <section id="portfolio" class="portfolio clients section-bg">
      <div class="container">
        <div class="section-title">
          <h2>product</h2>
          <p>金融产品</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li
                data-filter="*"
                :class="index === currentCate ? 'filter-active' : ''"
                v-for="(item, index) in productList"
                :key="index"
                @mouseover="cateHandle(index)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container minHeight_w">
          <div
            class="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            v-for="(value, key) in productList[currentCate].list"
            :key="key"
          >
            <rise :delayTime="key * 130" :visiable="visiable">
              <article class="entry">
                <div class="entry-img" @click="detailHandle(key)">
                  <img :src="value.url" alt="" class="img-fluid" />
                </div>

                <h2 class="entry-title">
                  <a href="javascript:;" @click="detailHandle(key)">{{
                    value.name
                  }}</a>
                </h2>

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
                </ul>
              </div> -->

                <div class="entry-content">
                  <div
                    class="entry_content_limit_row"
                    v-html="value.intruduce"
                  ></div>
                  <div class="read-more">
                    <a href="javascript:;" @click="detailHandle(key)"
                      >了解更多</a
                    >
                  </div>
                </div>
              </article>
              <!-- End blog entry -->
            </rise>
          </div>
          <!-- <div
            class="col-lg-4 col-md-6"
            v-for="(item, index) in item.list"
            :key="index"
          >
            <div>{{ item }}</div>
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-1.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div> -->

          <!-- <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-2.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-3.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-4.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-5.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 2"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-6.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="App 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-7.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 1"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-8.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-8.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Card 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img
                src="assets/img/portfolio/portfolio-9.jpg"
                class="img-fluid"
                alt=""
              />
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-9.jpg"
                    data-gall="portfolioGallery"
                    class="venobox"
                    title="Web 3"
                    ><i class="bx bx-plus"></i
                  ></a>
                  <a
                    href="portfolio-details.html"
                    data-gall="portfolioDetailsGallery"
                    data-vbtype="iframe"
                    class="venobox"
                    title="Portfolio Details"
                    ><i class="bx bx-link"></i
                  ></a>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- End Portfolio Section -->
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <!-- <footer id="footer"> -->
  <!-- <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>Sailor</h3>
              <p>
                A108 Adam Street <br />
                NY 535022, USA<br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Services</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Web Design</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Web Development</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Product Management</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">Marketing</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i>
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" /><input
                type="submit"
                value="Subscribe"
              />
            </form>
          </div>
        </div>
      </div>
    </div> -->

  <!-- <div class="container">
      <div class="copyright">
        &copy; Copyright 杭州<strong><span>三猿科技</span></strong
        >有限公司
      </div> -->
  <!-- <div class="credits"> -->
  <!-- All the links in the footer should remain intact. -->
  <!-- You can delete the links only if you purchased the pro version. -->
  <!-- Licensing information: https://bootstrapmade.com/license/ -->
  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/sailor-free-bootstrap-theme/ -->
  <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
  <!-- </div> -->
  <!-- </div>
    <img />
  </footer> -->
  <!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
</template>

<script>
import Banner2 from "@/components/banner/Banner2.vue";
import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, nextTick, onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import StructureTec from "@/components/StructureTec/StructureTec.vue";
import NumAnimation from "@/components/animation/NumAnimation.vue";
import Rise from "@/components/animation/Rise.vue";
export default {
  components: { Banner2, StructureTec, NumAnimation, Rise },
  setup() {
    const store = useStore();
    const router = useRouter();
    onMounted(() => {
      data.currentCate = store.state.productStore.categoryIndex;
    });
    const cateHandle = async (index) => {
      if (index === data.currentCate) return;
      data.visiable = false;
      data.currentCate = index;
      await nextTick();
      data.visiable = true;
    };
    const detailHandle = (index) => {
      store.commit("setCategoryIndex", data.currentCate);
      store.commit("setProductIndex", index);
      router.push("/product");
    };

    const showItem = (index) => {
      console.log("index===>", index);
      return data.visiable;
    };
    let data = reactive({
      visiable: true,
      numTime: 3800,
      currentCate: 0,
      bannerList: [
        {
          url: require("@/assets/img/slide/slide-1.jpg"),
          title: "<span>杭州三猿科技有限公司</span>",
          description: "<h3>通过AI、大数据等技术做金融科技行业的领先者</h3>",
        },
        {
          url: require("@/assets/img/slide/slide-2.jpg"),
          title: "优秀的团队",
          description:
            "多年的行业经验，深厚的技术积累，大数据分析师，AI技术，实现优秀的金融策略、数学模型、金融分析、金融模型",
        },
        {
          url: require("@/assets/img/slide/slide-3.jpg"),
          title: "强大的抗风险能力",
          description:
            "通过风控系统、各资产包的搭配，抵抗金融的大跌、急跌行情，在行情低迷时期也能获取收益",
        },
      ],
    });
    return {
      showItem,
      detailHandle,
      cateHandle,
      productList: computed(() => store.state.productStore.productList),
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scope>
// @import "./setting/home.scss";
@import "~@/views/setting/home.scss";
@import "~@/views/setting/animate/animate.min.css";
@import "~@/views/setting/icofont/icofont.min.css";
@import "~@/views/setting/bootstrap/css/bootstrap.min.css";
@import "~@/views/setting/remixicon/remixicon.css";
</style>
