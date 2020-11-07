<template>
    <svg :style="{...style}">
        <use :href="iconName"></use>
    </svg>
</template>

<script>
export default {
    name: 'IconComponent',
    props: {
        name: String,
        style: Object
    },
    setup(ctx) {
        const iconName = `#${ctx.name}`
        return {
            iconName
        }
    }
}
</script>
