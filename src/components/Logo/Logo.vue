<template>
  <svg
    class="logo"
    t="1607004745727"
    viewBox="0 0 1082 1024"
  >
    <path
      :stroke="stroke"
      :stroke-width="strokeWidth"
      class="logo1"
      d="M533.767 0l158.995 304.74s-278.24 164.672-442.914 444.805l13.25-92.746L0.076 389.915l367.201-41.641z"
      p-id="1182"
    ></path>
    <path
      :stroke="stroke"
      :stroke-width="strokeWidth"
      class="logo1"
      d="M232.813 819.351s384.237-577.074 849.94-433.222l-60.57 66.248s-253.634-24.606-388.022 71.926c0 0-264.991 132.496-401.272 310.418z"
      p-id="1183"
    ></path>
    <path
      :stroke="stroke"
      :stroke-width="strokeWidth"
      class="logo1"
      d="M902.861 564.052l-81.39 79.497s-278.24 11.357-588.658 240.384c0 0 300.954-359.857 670.048-319.881z"
      p-id="1184"
    ></path>
    <path
      :stroke="stroke"
      :stroke-width="strokeWidth"
      class="logo1"
      d="M223.35 921.79s321.774-217.672 611.37-179.816L868.792 1024 546.108 849.863l-341.61 173.91z"
      p-id="1185"
    ></path>
  </svg>
</template>

<script>
export default {
  name: "Logo",
  props: {
    strokeWidth: {
      type: [String, Number],
      default: 10,
    },
    stroke: {
      type: String,
      default: "#000",
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 100%;
}

.logo1 {
  fill: none;
  animation: logo-animation 5s linear infinite forwards;
}

@keyframes logo-animation {
  0% {
    stroke-dasharray: 2202;
    stroke-dashoffset: 2202;
  }
  50% {
    stroke-dasharray: 2202;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 2202;
    stroke-dashoffset: 0;
  }
}
</style>
