<template>
    <div class="container">
        <svg width="500" height="200" viewBox="0 0 500 200">
            <rect
            x="0"
            y="0"
            width="100"
            height="50"
            fill="red"
            transform="matrix(2 1 -1 2 50 0)"
            />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'SvgAnimation',
}
</script>

<style lang="scss" scoped>
.container {
    svg {
        border:  1px solid #000;
    }
}
</style>