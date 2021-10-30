<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-30 11:49:58
 * @FilePath: /sy_website/src/components/alibaba/AnimationIcon.vue
-->
<template>
  <div
    @mouseenter="animationAi(true)"
    @mouseout="animationAi(false)"
    class="ai_rubish"
    :style="`background-image: url(${bg});     background-position-y: -${position}px;`"
  ></div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
export default {
  props: { bg: String },
  setup(props) {
    onMounted(() => {
      console.log("...", props.bg);
    });
    onUnmounted(() => {
      clearTimeInterrval();
    });
    const data = reactive({
      bg: props.bg,
      position: 0,
    });
    let i = 0;
    let timeInterval;
    const clearTimeInterrval = () => {
      console.log("清除");
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
    return {
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
      ...toRefs(data),
    };
  },
};
</script>

<style lang="scss" scoped>
.ai_rubish {
  width: 70px;
  height: 70px;
  background-size: 100% auto;
  margin: 12px 0;
}
</style>
