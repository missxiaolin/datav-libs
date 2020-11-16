<template>
  <div class="fly-box">
    <svg width="400" height="400" style="background: #333">
      <defs>
        <path id="fly-box-path" d="M5 5 L395 5 L395 395 L5 395 Z"></path>
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
          <circle r="150" cx="0" cy="0" fill="url(#radial-gradient)">
            <animateMotion
              dur="3s"
              path="M5 5 L395 5 L395 395 L5 395 Z"
              rotate="auto"
              repeatCount="indefinite"
            ></animateMotion>
          </circle>
        </mask>
      </defs>
      <use
        href="#fly-box-path"
        stroke-width="1"
        stroke="#235fa7"
        fill="none"
      ></use>
      <use
        href="#fly-box-path"
        stroke-width="3"
        stroke="#4fd2dd"
        fill="none"
        mask="url(#fly-box-mask)"
      ></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "FlyBox",
};
</script>

<style lang="scss" scoped>
</style>