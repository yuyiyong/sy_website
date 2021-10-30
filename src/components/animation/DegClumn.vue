<!--
 * @LastEditors:  
 * @LastEditTime: 2021-04-07 19:53:56
 * @FilePath: /defi_h5_vue/src/components/animation/DegClumn.vue
-->
<template>
    <transition name="column">
        <div v-show="visiable">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import commentUntils from '../../untils/commentUntils';
export default {
    name: 'DegClumn',
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
.column-enter-active {
    animation: column-in 0.7s;
}
.column-leave-active {
    animation: column-in 0.7s reverse;
}
@keyframes column-in {
    0% {
        transform: perspective(400px) rotateY(90deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotateY(-20deg);
        -webkit-animation-timing-function: ease-in;
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotateY(10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotateY(-5deg);
    }
    100% {
        transform: perspective(400px);
    }
}
</style>
