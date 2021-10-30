<!--
 * @LastEditors:  
 * @LastEditTime: 2021-04-07 19:54:30
 * @FilePath: /defi_h5_vue/src/components/animation/RightMoveIn.vue
-->
<template>
    <transition name="leftin">
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
.leftin-enter-active {
    animation: right-in 0.7s;
}
.leftin-leave-active {
    animation: right-in 0.7s reverse;
}
@keyframes right-in {
    0% {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
    100% {
        opacity: 1;
        transform: translateZ(0);
    }
}
</style>
