<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-04 16:53:08
 * @FilePath: /sy_website/src/components/Navagation/NavBar.vue
-->
<template>
  <nav>
    <div class="logo">
      <slot name="logo-icon"><img src="../../assets/logo.png" /></slot>
      <slot name="logo-title">三猿科技</slot>
    </div>
    <!-- <div class="search">
      <input placeholder="请输入内容" size="medium" class="input_search" />

      <i class="el-input__icon el-icon-search"></i>
    </div> -->
    <ul class="nav-menu">
      <slot></slot>
    </ul>
    <div class="burger" @click="handleBurger()">
      <div class="top-line"></div>
      <div class="middle-line"></div>
      <div class="bottom-line"></div>
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
nav {
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5vw;
  height: 70px;
  background-color: $primary-color;
  /* background-color: rgba(65, 81, 101, 0.9); */
}
.logo {
  font-size: 28px;
  font-weight: 350;
  background-image: linear-gradient(to bottom, #d7d9de 0%, #bbbdc1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex: 1;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
  flex: 1;
  display: flex;
  justify-content: space-around;
  max-width: 300px;
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
    height: 540px;
    background-color: rgba(65, 81, 101, 0.7);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    transform: translateX(100%);
    transition: 0.3s ease-in-out;
  }
  .nav-menu.open {
    transform: translateX(0);
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
