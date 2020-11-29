<template>
  <div class="container" :ref="refName">
    <slot></slot>
  </div>
</template>


<script>
import { ref, getCurrentInstance, onMounted } from "vue";

export default {
  name: "container",
  props: {
    options: Object,
  },
  setup(ctx) {
    let refName = "container";
    const width = ref(0);
    const height = ref(0);
    const originalWidth = ref(0);
    const originalHeight = ref(0);

    onMounted(() => {
      const context = getCurrentInstance().ctx;
      const dom = context.$refs[refName];
      if (!!ctx.options && !!ctx.options.width && !!ctx.options.height) {
        width.value = ctx.options.width;
        height.value = ctx.options.height;
      } else {
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      }
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width;
        originalHeight.value = window.screen.height;
      }
    });

    return {
      refName,
      width,
      height,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>