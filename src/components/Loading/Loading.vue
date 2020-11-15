<template>
    <div class="loading-box">
        <svg width="200" height="200" viewBox="0 0 50 50">
            <circle 
            cx="25"
            cy="25"
            r="22"
            fill="none"
            stroke-width="3"
            stroke="#3be6cb"
            stroke-dasharray="34"
            stroke-linecap="round"
            ></circle>
            <circle 
            cx="25"
            cy="25"
            r="12"
            fill="none"
            stroke-width="3"
            stroke="#02bcfe"
            stroke-dasharray="19"
            stroke-linecap="round"
            ></circle>
        </svg>
    </div>
</template>

<script>
import svg from '../Svg/svg.vue'
export default {
  components: { svg },
    name: "Loading"
}
</script>

<style lang="scss" scoped>
.loading-box {
    width: 100%;
    height: auto;
    overflow: hidden;
}
</style>