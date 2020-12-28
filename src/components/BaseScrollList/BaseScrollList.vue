<template>
  <div class="base-scroll-list">
    <div
      class="base-scroll-list-header"
      :style="{ backgroundColor: headerBg, height: `${headerHeight}px` }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in header"
        :key="i"
        :style="headerStyle[i]"
        v-html="headerItem"
      ></div>
    </div>
    <div class="base-scroll-list-rows"></div>
  </div>
</template>

<script>
export default {
  name: "BaseScrollList",
  props: {
    // 标题数据 [a, b, c]
    header: Array,
    // 标题样式  [{}, {}, {}]
    headerStyle: Array,
    headerBg: {
      type: String,
      default: "rgb(90, 90, 90)",
    },
    headerHeight: {
        type: [String, Number],
        default: 35
    },
  },
  setup(ctx) {},
};
</script>

<style lang="scss" scoped>
.base-scroll-list {
  width: 100%;
  height: auto;
  overflow: hidden;
  .base-scroll-list-text {
    padding: 0 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
  .base-scroll-list-header {
    display: flex;
    font-size: 15px;
    align-items: center;
    .header-item {
    }
  }
}
</style>