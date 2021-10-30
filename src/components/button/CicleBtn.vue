<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-16 16:30:46
 * @FilePath: /sy_website/src/components/button/CicleBtn.vue
-->
<template>
  <span :class="active ? 'active1' : 'btn1'">
    <slot>primiry</slot>
  </span>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["active"],
});
</script>

<style lang="scss" scoped>
@import "@/global/globalStyle";
.btn1 {
  background-color: #f5f5f5;
  border-radius: 16px;
  cursor: pointer;
  padding: 5px 12px;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-property: background-color, box-shadow;
  transition-duration: 300ms, 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms, 0ms;
  &:hover {
    background-color: #dbdbdc;
  }
  @extend .fontB;
  font-size: 14px;
  font-weight: 400;
}
.active1 {
  background-color: $primary-color;
  // background-color: #dbdbdc;
  border-radius: 16px;
  cursor: pointer;
  padding: 5px 12px;
  @extend .fontB;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
}
</style>
