<!--
 * @LastEditors:  
 * @LastEditTime: 2021-04-07 19:54:03
 * @FilePath: /defi_h5_vue/src/components/animation/DegMove.vue
-->
<!--
 * @LastEditors: yyy_dui
 * @LastEditTime: 2021-03-21 13:38:20
 * @FilePath: /defi_h5_vue/src/components/animation/degmove.vue
-->
<template>
    <transition name="degmove">
        <div v-show="visiable">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import commentUntils from '../../untils/commentUntils';
export default {
    data() {
        return {
            visiable: false
        };
    },
    props: ['delayTime'],
    mounted() {
        commentUntils.delay({
            time: (this.delayTime && this.delayTime) || 0,
            fun: () => {
                this.visiable = true;
            }
        });
    }
};
</script>

<style scoped>
.degmove-enter-active {
    animation: degmove-in 0.7s;
}
.degmove-leave-active {
    animation: degmove-in 0.7s reverse;
}
@keyframes degmove-in {
    0% {
        transform: perspective(400px) rotateX(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotateX(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotateX(10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotateX(-5deg);
    }
    100% {
        transform: perspective(400px);
    }
}
</style>
