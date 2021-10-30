<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-30 15:14:10
 * @FilePath: /sy_website/src/components/Navagation/NavBar.vue
-->
<template>
  <nav>
    <div class="nav_max_wrap">
      <div class="left_wrap">
        <div class="logo">
          <slot name="logo-icon"><img src="../../assets/logo.png" /></slot>
          <slot name="logo-title">三猿科技</slot>
        </div>
        <ul class="nav-menu">
          <slot></slot>
        </ul>
      </div>
      <!-- <div class="search">
      <input placeholder="请输入内容" size="medium" class="input_search" />

      <i class="el-input__icon el-icon-search"></i>
    </div> -->

      <div class="right_wrap">联系我们:400 0677 087</div>
      <div class="burger" @click="handleBurger()">
        <div class="top-line"></div>
        <div class="middle-line"></div>
        <div class="bottom-line"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    handleBurger() {
      const burger = document.querySelector(".burger");
      const navMenu = document.querySelector(".nav-menu");
      burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        navMenu.classList.toggle("open");
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/global/globalStyle";
.right_wrap {
  width: 200px;
  color: #e4e4e4;
  font-size: 18px;
  font-weight: 700;
}
nav {
  top: 0;
  left: 0;
  right: 0;
  background-color: $primary-color;
  /* background-color: rgba(65, 81, 101, 0.9); */
}
.nav_max_wrap {
  width: 100%;
  display: flex;
  // justify-content: flex-start;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  max-width: $max-width;
  margin: 0 auto;
}
.left_wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.logo {
  font-size: 28px;
  font-weight: 456;
  background-image: linear-gradient(to bottom, #d7d9de 0%, #bbbdc1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  // flex: 1;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // background: lightcyan;
  margin-right: 70px;
}
.logo img {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  /* flex: 1; */
  vertical-align: center;
  margin-right: 10px;
}
.nav-menu {
  // flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 400px;
  min-width: 300px;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 456;
}
.burger {
  margin-left: 10px;
  display: none;
}
.burger div {
  width: 30px;
  height: 2px;
  background-color: #dadbdd;
  margin: 6px;
}
@media screen and (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 0;
    width: 40vw;
    height: 100vh;
    background-color: rgba(65, 81, 101, 0.7);
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;

    transform: translateX(100%);
    transition: 0.3s ease-in-out;
    list-style: none;
    padding: 0;
  }
  .nav-menu.open {
    transform: translateX(0);
    margin: 0;
  }
  .burger {
    display: block;
  }

  .burger.active div {
    transition: 0.3s ease-in-out 0.2s;
  }
  .burger.active .top-line {
    transform: rotate(90deg) translateX(8px) translateY(-14px);
  }
  .burger.active .bottom-line {
    transform: rotate(90deg) translateX(-8px) translateY(-6px);
  }
  .burger.active .middle-line {
    transform: rotate(90deg) translateY(2px);
  }
  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
