<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-24 10:58:36
 * @FilePath: /sy_website/src/components/animation/DropDown.vue
-->
<template>
  <transition name="dropdown">
    <div v-show="visiable">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import commentUntils from "../../untils/commentUntils";
export default {
  data() {
    return {
      visiable: false,
    };
  },
  props: ["delayTime"],
  mounted() {
    commentUntils.delay({
      time: (this.delayTime && this.delayTime) || 0,
      fun: () => {
        this.visiable = true;
      },
    });
  },
};
</script>

<style scoped>
.dropdown-enter-active {
  animation: dropdown-in 0.7s;
}
.dropdown-leave-active {
  animation: dropdown-in 0.7s reverse;
}

@keyframes dropdown-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  100% {
    transform: translateZ(0);
  }
}
</style>
