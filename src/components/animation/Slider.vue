<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-28 09:52:02
 * @FilePath: /sy_website/src/components/animation/Slider.vue
-->
<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-25 16:51:24
 * @FilePath: /sy_website/src/components/animation/Rise.vue
 :style="`animation-delay: ${delayTime ? delayTime : 0}s;`"
-->

<template>
  <transition name="slide" mode="out-in" appears>
    <slot v-if="vis"></slot>
  </transition>
</template>

<script>
import { onMounted, reactive, toRefs, watch } from "@vue/runtime-core";
import commentUntils from "../../untils/commentUntils";
export default {
  props: { delayTime: Number, visiable: Boolean },
  setup(props) {
    //
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

<style lang="scss" scopeds>
.slide {
  &-enter-from {
    transform: translateY(-100%);
    opacity: 0;
    &-enter-to {
      transform: translateY(0%);
      opacity: 1;
    }
    &-active {
      transition: transform 1s;
    }
  }
  &-leave-from {
    transform: translateY(0);
    &-leave-to {
      transform: translateY(-100%);
    }
    &-active {
      transition: transform 1s;
    }
  }
}
</style>
