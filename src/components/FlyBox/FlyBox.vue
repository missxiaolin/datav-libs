<template>
  <div class="fly-box">
    <svg width="400" height="400">
      <defs>
        <path id="fly-box-path" d="M5 5 L395 5 L395 395 L5 395 Z"></path>
        <mask id="fly-box-mask">
            <circle r="50" cx="0" cy="0" fill="white">
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