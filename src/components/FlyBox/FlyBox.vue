<template>
  <div class="fly-box" :ref="refName">
    <svg :width="width" :height="height">
      <defs>
        <path id="fly-box-path" :d="path"></path>
        <radialGradient
          id="radial-gradient"
          cx="50%"
          cy="50%"
          fx="100%"
          fy="50%"
          r="50%"
        >
          <stop offset="0%" stop-color="#fff" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="#fff" stop-opacity="0"></stop>
        </radialGradient>
        <mask id="fly-box-mask">
          <circle :r="startLength" cx="0" cy="0" fill="url(#radial-gradient)">
            <animateMotion
              :dur="`${duration}s`"
              :path="path"
              rotate="auto"
              repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <use
        href="#fly-box-path"
        stroke-width="1"
        :stroke="lineColor"
        fill="none"
      ></use>
      <use
        href="#fly-box-path"
        stroke-width="3"
        :stroke="startColor"
        fill="none"
        mask="url(#fly-box-mask)"
      ></use>
    </svg>
    <div class="fly-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted, getCurrentInstance } from "vue";

export default {
  name: "FlyBox",
  props: {
    lineColor: {
      type: String,
      default: '#235fa7'
    },
    startColor: {
      type: String,
      default: '#4fd2dd'
    },
    startLength: {
      type: [String, Number],
      default: 150
    },
    duration: {
      type: [String, Number],
      default: 3
    }
  },
  setup(ctx) {
    const width = ref(0);
    const height = ref(0);
    const refName = 'fly-box'
    const path = computed(() => {
        return `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${height.value - 5} Z`
    })

    const init = () => {
        const instance = getCurrentInstance()
        const dom = instance.ctx.$refs[refName]
        console.log(dom.clientWidth,dom.clientHeight)
        width.value = dom.clientWidth
        height.value = dom.clientHeight
    }

    onMounted(() => {
        init()
    })

    return {
      width,
      height,
      refName,
      path
    };
  },
};
</script>

<style lang="scss" scoped>
.fly-box {
  width: 100%;
  height: 100%;
  position: relative;
  svg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .fly-box-content {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>