<template>
  <div id="containerBox" :ref="refName">
    <slot></slot>
  </div>
</template>


<script>
import { ref, getCurrentInstance, onMounted, onUnmounted } from "vue";

export default {
  name: "container",
  props: {
    options: Object,
  },
  setup(ctx) {
    let refName = "containerBox";
    const width = ref(0);
    const height = ref(0);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    let context;
    let dom;

    const initSize = () => {
      dom = context.$refs[refName];
      // 容器尺寸
      if (!!ctx.options && !!ctx.options.width && !!ctx.options.height) {
        width.value = ctx.options.width;
        height.value = ctx.options.height;
      } else {
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      }
      // 获取画布尺寸
      if (!originalWidth.value || !originalHeight.value) {
        originalWidth.value = window.screen.width;
        originalHeight.value = window.screen.height;
      }
    };

    const updateSize = () => {
      if (width.value && height.value) {
        dom.style.width = `${width.value}px`;
        dom.style.height = `${height.value}px`;
      } else {
        dom.style.width = `${originalWidth.value}px`;
        dom.style.height = `${originalHeight.value}px`;
      }
    };

    const updateScale = () => {
      // 获取真实的视口尺寸
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      // 最终宽高
      const realWidth = width.value || originalWidth.value;
      const realHeight = height.value || originalHeight.value;
      const widthScale = currentWidth / realWidth;
      const heightScale = currentHeight / realHeight;
      dom.style.transform = `scale(${widthScale}, ${heightScale})`;
    };

    onMounted(() => {
      context = getCurrentInstance().ctx;
      initSize();
      updateSize();
      updateScale();
      const onResize = () => {
        initSize();
        updateScale();
      };
      window.addEventListener("resize", onResize);
    });

    // 当组件销毁执行
    onUnmounted(() => {
        window.removeEventListener('resize', onResize)
    })



    return {
      refName,
      width,
      height,
    };
  },
};
</script>

<style lang="scss" scoped>
#containerBox {
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  transform-origin: left top;
  z-index: 999;
}
</style>