<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-08 16:01:27
 * @FilePath: /sy_website/src/components/canvs/canvesComp.vue
-->
<template>
  <canvas id="myCanvas"> </canvas>
</template>

<script>
let canvas;
let ctx;
export default {
  mounted() {
    this.initCancas();
    /*  window.onresize = () => {
      this.initCancas();
    }; */
  },
  methods: {
    initCancas() {
      console.log("初始化canvas");
      canvas = document.getElementById("myCanvas");
      ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = 500;
      this.drawCanvas();
    },
    drawCanvas() {
      ctx.fillStyle = "#0f0";
      ctx.fillRect(0, 0, 50, 50);
      ctx.font = "40px 仿宋";
      ctx.fillText("Hello World", 50, 80);
      ctx.beginPath();
      //arc(x,y,r,start,stop,(false))
      ctx.arc(80, 50, 40, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.moveTo(0, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
    },
  },
};
</script>

<style lang="scss" scoped></style>
