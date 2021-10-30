<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-24 16:56:17
 * @FilePath: /sy_website/src/components/animation/NumAnimation.vue
-->
<template>
  <span>
    {{ newNum }}
  </span>
</template>

<script>
import commentUntils from "@/untils/commentUntils";
export default {
  props: ["num", "time"],
  mounted() {
    this.clearIntervalFun();
    this.NumInterval();
  },
  beforeUnmount() {
    this.clearIntervalFun();
  },
  data() {
    return {
      newNum: 11,
    };
  },
  methods: {
    clearIntervalFun() {
      clearInterval(this.intervalRef);
    },
    NumInterval() {
      const times = this.time / 10;
      let valueSTime = this.num / times;
      if (valueSTime > 1) {
        valueSTime = Math.floor(valueSTime);
      }
      let newNum = 0;
      this.intervalRef = setInterval(() => {
        if (newNum < this.num) {
          newNum = newNum + valueSTime;
          if (commentUntils.isDecimals(newNum)) {
            this.newNum = newNum.toFixed(2);
            return;
          }
          this.newNum = newNum;
        } else {
          console.log(",,,", newNum);
          newNum = this.num;
          this.newNum = newNum;
          this.clearIntervalFun();
        }
      }, 10);
    },
  },
  watch: {
    num(value, oldvalue) {
      console.log("value==>", value);
      console.log("oldvalue==>", oldvalue);
      this.clearIntervalFun();
      this.NumInterval();
    },
  },
};
</script>

<style lang="scss" scoped></style>
