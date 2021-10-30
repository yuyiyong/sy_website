<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-23 11:45:03
 * @FilePath: /sy_website/src/components/animation/LeftMoveIn.vue
-->
<template>
  <transition name="leftin">
    <div v-show="visiable">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import commentUntils from "@/untils/commentUntils";
export default {
  data() {
    return {
      visiable: false,
    };
  },
  props: ["delayTime"],
  mounted() {
    commentUntils.delay({
      time: this.delayTime,
      fun: () => {
        this.visiable = true;
      },
    });
  },
};
</script>

<style scoped>
.leftin-enter-active {
  animation: leftin-in 0.7s;
}
.leftin-leave-active {
  animation: leftin-in 0.7s reverse;
}
@keyframes leftin-in {
  0% {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }
  100% {
    transform: translateZ(0);
  }
}
</style>
