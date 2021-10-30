<!--
 * @LastEditors:  
 * @LastEditTime: 2021-04-07 19:53:35
 * @FilePath: /defi_h5_vue/src/components/animation/BlowBig.vue
-->
<template>
    <transition name="blowBig">
        <div v-show="visiable">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import commentUntils from '../../untils/commentUntils';
export default {
    name: 'BlowBig',
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

<style lang="scss" scoped>
.blowBig-enter-active {
    animation: blowBig-in 0.7s;
}
.blowBig-leave-active {
    animation: blowBig-in 0.7s reverse;
}
@keyframes blowBig-in {
    0% {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }
    20% {
        transform: scale3d(1.1, 1.1, 1.1);
    }
    40% {
        transform: scale3d(0.9, 0.9, 0.9);
    }
    60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
        transform: scale3d(0.97, 0.97, 0.97);
    }
    100% {
        opacity: 1;
        transform: scaleX(1);
    }
}
</style>
