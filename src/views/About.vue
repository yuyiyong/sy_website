<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-30 14:54:11
 * @FilePath: /sy_website/src/views/About.vue
-->
<template>
  <div>
    <section id="about" class="about">
      <div class="container componey">
        <div class="section-title">
          <!-- <h2>company</h2> -->
          <p class="comple-title">公司介绍</p>
        </div>
        <div class="section-content">
          三猿科技是一家技术驱动的资产管理公司，致力于通过科技和创新来服务金融，提供整套资产管理方案。
          我们聚焦于（AI、区块链、云计算、大数据）等先进技术，秉持“诚信 创新
          卓越”的经营理念在传统金融和新兴金融中均取得优良成绩，满足客户不断变化的业务和科技需求，确保投资人资金安全且业绩公开透明，树立了良好的品牌形象，受到了各界的肯定与褒奖。<br />
          我们是十年的软件开发提供商，致力于向核心企业和金融机构提供世界领先的金融科技解决方案，通过定制化的解决方案和行业领先的科技，我们能够为金融生态圈的各方带来切实价值，为中小企业提供卓越的用户体验。
        </div>
      </div>
    </section>
    <section id="team" class="team section-bg">
      <div class="container">
        <div class="section-title">
          <h2>Team</h2>
          <p>我们的团队</p>
        </div>
        <p class="font_p">
          团队核心成员具备多年的知名金融机构工作经验，均具备在国内、外投资机构中管理公司团队并带领团队取得优异业绩的经验。<br />
          团队技术人员都是知名大厂的核心技术骨干，具备多年在核心岗位的工作经验。在AI、大数据等科技领域都在领先水平。<br />
          我们始终坚守契约精神，帮助机构以及高净值客户获得资产的保值增值。<br />
          我们始终保持专业度，在不同市场周期中均让投资人获得稳健回报。
        </p>
        <div class="row">
          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <!-- <img
                  src="assets/img/team/team-1.jpg"
                  class="img-fluid"
                  alt=""
                /> -->
                <animation-icon :bg="jrzj"></animation-icon>
              </div>
              <div class="member-info">
                <h4>金融专家</h4>
                <span>大浪淘沙后的各种优秀金融策略为产品的基础</span>
                <p>
                  多年的金融行业经验，对金融CTA策略的多年探索，拥有先进的策略算法，利用大数据回测、AI风控等等科技实现产品
                </p>
                <div class="social">
                  <a><i class="ri-twitter-fill"></i></a>
                  <a><i class="ri-facebook-fill"></i></a>
                  <a><i class="ri-instagram-fill"></i></a>
                  <a> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <!-- <img
                  src="assets/img/team/team-2.jpg"
                  class="img-fluid"
                  alt=""
                /> -->
                <animation-icon :bg="bg"></animation-icon>
              </div>
              <div class="member-info">
                <h4>AI 专家</h4>
                <span>开发有花菜AI系统、防瀑布机制、风控系统等</span>
                <p>
                  AI技术经过几十年的发展已日新月异，我们专注于机器人、算法策略、数据挖掘解析等领域
                </p>

                <div class="social">
                  <a><i class="ri-twitter-fill"></i></a>
                  <a><i class="ri-facebook-fill"></i></a>
                  <a><i class="ri-instagram-fill"></i></a>
                  <a> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <!--  <img
                  src="assets/img/team/team-3.jpg"
                  class="img-fluid"
                  alt=""
                /> -->
                <animation-icon :bg="rjzj"></animation-icon>
              </div>
              <div class="member-info">
                <h4>软件专家</h4>
                <span>开发10余款的高质量应用、软件，受一致好评</span>
                <p>
                  大厂品质，追求不断的创新优化、极高的用户体验，超过5年稳定的运行。
                </p>
                <div class="social">
                  <a><i class="ri-twitter-fill"></i></a>
                  <a><i class="ri-facebook-fill"></i></a>
                  <a><i class="ri-instagram-fill"></i></a>
                  <a> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic">
                <!-- <img
                  src="assets/img/team/team-4.jpg"
                  class="img-fluid"
                  alt=""
                /> -->
                <animation-icon :bg="dsj"></animation-icon>
              </div>
              <div class="member-info">
                <h4>大数据专家</h4>
                <span>开发有花菜数据回测系统、大数据跟踪采集系统</span>
                <p>
                  顶流行业内信息挖掘和动态权重调配，数据覆盖各大主流领域近五年内完整时间段的海量数据
                </p>
                <div class="social">
                  <a><i class="ri-twitter-fill"></i></a>
                  <a><i class="ri-facebook-fill"></i></a>
                  <a><i class="ri-instagram-fill"></i></a>
                  <a> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="clients" class="clients">
      <div class="container">
        <div class="section-title">
          <h2>PARTNER</h2>
          <p>合作伙伴</p>
        </div>
        <!-- <img src="../assets/img/zt.png" class="img-fluid" alt="" /> -->
        <div class="row">
          <div
            v-for="(item, index) in opratArr"
            :key="index"
            class="
              col-lg-2 col-md-4 col-6
              d-flex
              align-items-center
              justify-content-center
              add-filter
            "
          >
            <a :href="item.url" target="_blank">
              <img :src="item.img" class="img-fluid" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { reactive, toRefs } from "@vue/reactivity";
import huobi from "../assets/img/about_opr/huobi_opr.png";
import okex from "../assets/img/about_opr/OKEx_opr.png";
import bian from "../assets/img/about_opr/BIAN_opr.png";
import shjys from "../assets/img/about_opr/shjys.png";
import aliyun from "../assets/img/about_opr/aliyun.png";
import nyjys from "../assets/img/about_opr/nyjys.png";
import jrzj from "../assets/img/about_opr/jrzj.png";
import rjzj from "../assets/img/about_opr/rjzj.png";
import bg from "../assets/img/struct/bg.png";
import dsj from "../assets/img/struct/dsj.png";
import AnimationIcon from "@/components/alibaba/AnimationIcon.vue";

export default defineComponent({
  components: { AnimationIcon },
  setup() {
    var data = reactive({
      jrzj: jrzj,
      rjzj: rjzj,
      bg: bg,
      dsj: dsj,
      opratArr: [
        {
          img: huobi,
          url: "https://www.huobi.com/zh-cn/",
        },

        {
          img: okex,
          url: "https://www.okex.com/cn",
        },
        {
          img: bian,
          url: "https://www.binance.com/zh-CN",
        },

        {
          img: shjys,
          url: "http://www.shfe.com.cn",
        },
        {
          img: aliyun,
          url: "https://www.aliyun.com/?spm=5176.19720258.J_8058803260.exp-location-0.e9392c4arae1mT",
        },
        {
          img: nyjys,
          url: "https://www.nyse.com/index",
        },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped lang="scss">
.aboutBanner {
}
.componey {
  background-color: #000;
  background: url("../assets/img/about_hzbj.jpg") no-repeat;
  background-size: 100% auto;
  height: 500px;
  color: rgb(242, 241, 241);
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2rem;
  letter-spacing: 0.07rem;
}
.section-content {
  width: 50%;
}
.about {
  background-color: #000;
  padding-bottom: 0;
}
.section-title {
  .comple-title {
    width: 50%;
    color: rgb(242, 241, 241);
    text-align: center;
  }
}
.font_p {
  text-align: center;
  line-height: 2rem;
}

.add-filter {
  filter: grayscale(100);
  &:hover {
    filter: none;
  }
}

@media (max-width: 992px) {
  .section-content {
    width: 100%;
  }
}
</style>
