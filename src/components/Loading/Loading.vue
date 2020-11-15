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
            >
                <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="1.5s"
                repeatCount="indefinite"
                ></animateTransform>
                <animate
                    attributeName="stroke"
                    values="#3be6cb;#02bcfe;#3be6cb"
                    dur="4s"
                    repeatCount="indefinite"
                ></animate>
            </circle>
            <circle 
            cx="25"
            cy="25"
            r="12"
            fill="none"
            stroke-width="3"
            stroke="#02bcfe"
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
                    values="#02bcfe;#3be6cb;#02bcfe"
                    dur="4s"
                    repeatCount="indefinite"
                ></animate>
            </circle>
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