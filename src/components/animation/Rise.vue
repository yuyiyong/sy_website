<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-25 17:56:19
 * @FilePath: /sy_website/src/components/animation/Rise.vue
 :style="`animation-delay: ${delayTime ? delayTime : 0}s;`"
-->

<template>
  <transition name="rise" @enter="enter">
    <!-- <div v-show="visiable"> -->
    <slot v-if="vis"></slot>
    <!-- </div> -->
  </transition>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "@vue/runtime-core";
import commentUntils from "../../untils/commentUntils";
export default {
  props: { delayTime: Number, visiable: Boolean },
  setup(props) {
    const { delayTime, visiable } = toRefs(props);
    const delayOpr = async (val) => {
      await commentUntils.delay({
        time: delayTime.value,
        fun: () => {
          data.vis = val;
        },
      });
    };
    watch(visiable, (new1, old) => {
      console.log("new1:", new1, " old:", old);
      console.log("delayTime:", delayTime);
      console.log("visiable:", visiable);
      delayOpr(new1);
    });
    let data = reactive({
      vis: false,
    });
    onMounted(async () => {
      console.log("delayTime:", delayTime.value);
      console.log("visiable:", visiable);
      await delayOpr(visiable.value);
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style scoped>
.rise-enter-active {
  animation: rise-in 0.7s;
}
.rise-leave-active {
  animation: rise-in 0.7s reverse;
}
@keyframes rise-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }

  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  100% {
    transform: translateZ(0);
  }
}
</style>
