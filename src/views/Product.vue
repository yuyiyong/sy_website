<!--
 * @LastEditors:  
 * @LastEditTime: 2021-06-04 16:40:23
 * @FilePath: /sy_website/src/views/Product.vue
-->
<template>
  <div></div>
  <pre>
      {{ productList }}
  </pre>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      productList: computed(() => store.state.productStore.productList),
    };
  },
});
</script>

<style lang="scss" scoped></style>
