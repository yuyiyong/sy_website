<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-30 17:29:55
 * @FilePath: /sy_website/src/components/StructureTec/StructureTec.vue
-->
<template>
  <div @mouseleave="outHandle">
    <div class="global_all">
      <div class="title">技术架构</div>
      <div class="content_wrap">
        <left-move-in :delayTime="100" v-if="visiable">
          <div class="decorator">
            <div class="content" v-html="content"></div>
          </div>
        </left-move-in>
      </div>

      <div
        :class="{
          block_item: true,
          opr_item: true,
          move_opr: index == opr.length - 1,
          move_opr2: index == opr.length - 2,
        }"
        v-for="(item, index) in opr"
        :key="index"
        @mouseenter="moveHandle(item)"
      >
        <img v-if="item.url" :src="item.url" alt="" />
        <animation-icon :bg="item.bg"></animation-icon>
        <!-- <div
          @mouseenter="animationAi(true)"
          @mouseout="animationAi(false)"
          v-else
          class="ai_rubish"
          :style="`background-image: url(${item.bg});     background-position-y: -${position}px;`"
        ></div> -->

        <span>{{ item.name }}</span>
      </div>
      <div class="cate_wrap">
        <span
          class="block_item"
          :class="{ hasbord: index != asset.length - 1 }"
          v-for="(item, index) in asset"
          :key="index"
          @mouseenter="moveHandle(item)"
        >
          <img :src="item.icon" alt="" />
          <span>{{ item.name }}</span>
        </span>
      </div>
      <div class="move_div">
        <p>
          <!-- <span class="block_item" v-for="(item, index) in asset" :key="index">
        <img :src="item.url" alt="" />
        <span>{{ item.name }}</span>
      </span> -->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import bd from "../../assets/img/struct/bd.png";
import ai from "../../assets/img/struct/ai.png";
import fk from "../../assets/img/struct/fk.png";
import hc from "../../assets/img/struct/hc.png";
import bg from "../../assets/img/struct/bg.png";
import dsj from "../../assets/img/struct/dsj.png";
import hcd from "../../assets/img/struct/hcd.png";
import aq from "../../assets/img/struct/aq.png";

import { reactive, toRefs } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, nextTick, onUnmounted } from "@vue/runtime-core";
import LeftMoveIn from "@/components/animation/LeftMoveIn.vue";
import AnimationIcon from "../alibaba/AnimationIcon.vue";
export default {
  components: { AnimationIcon, LeftMoveIn },
  setup() {
    const store = useStore();
    const initContent =
      "<b>• 三猿科技拥有比较完整的系统架构。各系统既可以相互独立运行，也能做到相互配合完成复杂任务</b><br/><br/><b>• 我们致力于通过科技和创新来服务金融，聚焦于（AI、区块链、云计算、大数据）等先进技术</b>";
    var data = reactive({
      visiable: true,

      opr: [
        {
          name: "AI策略",
          url: "",
          bg: bg,
          content:
            "<b>• AI工程化、产品化。持续的进行数据挖掘解析</b><br/><br/><b>• 专业级AI底层平台，领先的交易算法，自动机器学习，极速提高AI量化实时处理效率</b><br/><br/><b>• 协同大数据等各系统24小时实时秒级监控跟踪行情</b>",
        },
        {
          name: "风险控制",
          url: "",
          // url: fk,
          bg: aq,
          content:
            "<b>• 风控系统作用于整个金融活动过程</b><br/><br/><b>• 强大的抗跌、抗风险能力，防“瀑布”等机制和AI系统配合，通过大数据系统分析，有效应对极端行情</b>",
        },
        {
          name: "数据回测",
          url: "",
          // url: hc,
          bg: hcd,
          content:
            "<b>• 各资产包近五年内完整时间段的海量数据可在系统中随时回测</b><br/><br/> <b>• 支持各类策略的定制模式回测</b><br/><br/><b>• 配合AI系统优化策略</b>",
        },
        {
          name: "大数据",
          url: "",
          // url: bd,
          bg: dsj,
          content:
            "<b>• 顶流行业内信息挖掘和动态权重调配</b><br/><br/><b>• 各大交易所深度实时跟踪采集以及服务各系统</b><br/><br/><b>• 各资产包近五年内完整时间段海量的大数据分析 </b>",
        },
      ],
      content: initContent,
    });

    let i = 0;
    let timeInterval;
    const clearTimeInterrval = () => {
      console.log("清除");
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
    onUnmounted(() => {
      clearTimeInterrval();
    });
    return {
      outHandle: () => {
        data.content = initContent;
      },
      handle: () => {
        data.visiable = !data.visiable;
      },
      moveHandle: async (obj) => {
        data.visiable = false;
        data.content = obj.content;
        await nextTick();
        data.visiable = true;
      },
      animationAi: async (flag) => {
        const time = 80;
        if (flag) {
          //进入
          clearTimeInterrval();
          timeInterval = setInterval(() => {
            if (i < 21 && data.position < 1400) {
              i = i + 2;
              let cur = 70 * (i + 1);
              if (cur >= 1400) {
                data.position = 1400;
              } else {
                data.position = cur;
              }
            } else {
              i = 21;
              data.position = 1400;
              clearTimeInterrval();
            }
          }, time);
        } else {
          //移除
          clearTimeInterrval();
          timeInterval = setInterval(() => {
            if (i > 0 && data.position > 0) {
              data.position = 70 * (i - 1);
              i = i - 2;
            } else {
              i = 0;
              clearTimeInterrval();
              data.position = 0;
            }
          }, time);
        }
      },

      asset: computed(() => store.state.productStore.productList),
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/global/globalStyle";
// $border_st: 2px solid lighten($primary_color2, 25%);
$border_st: 2px solid #b2e2f7;
$bg_color: #f7f8f9;
$block_width: 160px;
$block_height: 145px;
$block_widht_half: $block_width/2;
.borderRadius {
  border-radius: 10px;
}

.decorator {
  position: relative;
}
// 伪类渲染的两点只是颜色及位置不同，所以写在一起
.decorator::before {
  content: "";
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  border-top: $border_st;
  border-left: $border_st;
  width: 1rem;
  height: 1rem;
}
.decorator::after {
  content: "";
  position: absolute;
  border-bottom: $border_st;
  border-right: $border_st;
  width: 1rem;
  height: 1rem;
  right: -0.5rem;
  bottom: -0.5rem;
}
.title {
  position: absolute;
  bottom: 0;
  right: 0;
}
.global_all {
  // background: lightblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  min-height: 500px;
}
.content {
  border: $border_st;
  padding: 1rem;
  width: 280px;
  text-align: left;
  min-height: 150px;
  max-height: 480px;
  font-size: 1rem;
  line-height: 1.4rem;
}
.content /deep/ p {
  display: none;
  margin: 0;
}
.content /deep/ b {
  font-weight: 500;
}
.content_wrap {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}
.cate_wrap {
  @extend .borderRadius;
  border: $border_st;
  background: $bg_color;
  //   position: absolute;
  display: flex;
  // border-top: $border_st;
  // border-left: $border_st;
  // border-bottom: $border_st;
  //   bottom: 0;
  //   left: 0;
  //   transform: translate(-50%, 50%);

  z-index: 1;
}
.block_item {
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 500;
  width: $block_width;
  height: $block_height;
  z-index: 1;
  background: $bg_color;

  img {
    display: block;
    width: 70px;
    height: auto;
    margin: 0;
    background-position-y: 0px;
    background-size: 100% auto;
  }
  span {
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  @extend .borderRadius;
  // border-right: $border_st;
}
.opr_item {
  border: $border_st;
  @extend .borderRadius;
}
.move_opr2 {
  position: absolute;
  right: $block_width/2;
  z-index: 1;
}
.move_opr {
  position: absolute;
  right: $block_width/2;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
}
.move_div {
  position: absolute;
  top: $block_height/2;
  right: $block_width;
  width: calc(50% - 160px);

  height: calc(100% - 145px);
  background: repeating-linear-gradient(
    135deg,
    transparent,
    transparent 4px,
    #b2e2f7 4px,
    #b2e2f7 8px
  );
  overflow: hidden; // 新建一个BFC，解决margin在垂直方向上折叠的问题
  animation: move 0.6s infinite linear;
  p {
    /*  display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around; */
    height: calc(100% - 4px);
    margin: 2px;
    background-color: #f8f9fa;
    /* box-sizing: border-box;
    padding: 0.8rem; */
  }
}
.hasbord {
  border-right: $border_st;
}
</style>
