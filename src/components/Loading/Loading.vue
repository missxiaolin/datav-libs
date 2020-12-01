<template>
  <div class="loading-box">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 50 50"
      preserveAspectRatio="xMinYMid meet"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke-width="3"
        :stroke="outsideColor"
        stroke-dasharray="34"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          :dur="`${duration}s`"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          :values="outsideColorAnimation"
          :dur="`${+duration * 2}s`"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <circle
        cx="25"
        cy="25"
        r="12"
        fill="none"
        stroke-width="3"
        :stroke="insideColor"
        stroke-dasharray="19"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 25 25"
          to="0 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        ></animateTransform>
        <animate
          attributeName="stroke"
          :values="insideColorAnimation"
          :dur="`${+duration * 2}s`"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
    <div class="loading-content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import svg from "../Svg/svg.vue";
import { computed } from "vue";
export default {
  components: { svg },
  name: "Loading",
  props: {
    width: {
      type: [Number, String],
      default: 50,
    },
    height: {
      type: [Number, String],
      default: 50,
    },
    outsideColor: {
      type: String,
      default: "#3be6cb",
    },
    insideColor: {
      type: String,
      default: "#02bcfe",
    },
    duration: {
      type: Number,
      default: 2,
    },
  },
  setup(ctx) {
    const outsideColorAnimation = computed(() => {
      return `${ctx.outsideColor};${ctx.insideColor};${ctx.outsideColor}`;
    });
    const insideColorAnimation = computed(() => {
      return `${ctx.insideColor};${ctx.outsideColor};${ctx.insideColor}`;
    });

    return {
      outsideColorAnimation,
      insideColorAnimation,
    };
  },
};
</script>

<style lang="scss" scoped>
.loading-box {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>