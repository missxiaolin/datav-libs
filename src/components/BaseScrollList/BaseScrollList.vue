<template>
  <div class="base-scroll-list" :id="uuid">
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
import { onMounted } from "vue";
import { generateUUID } from "../../utils/index";
import useScreen from "../../hooks/useScreen";
import cloneDeep from 'lodash/cloneDeep'

export default {
  name: "BaseScrollList",
  props: {
    // 标题数据 [a, b, c]
    header: Array,
    // 标题样式  [{}, {}, {}]
    headerStyle: Array,
    // 标题背景色
    headerBg: {
      type: String,
      default: "rgb(90, 90, 90)",
    },
    // 标题高度
    headerHeight: {
      type: [String, Number],
      default: 35,
    },
    // 标题是否展示序号
    headerIndex: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const uuid = `base-scroll-list-${generateUUID()}`;
    const { width, height } = useScreen(uuid);

    const handleHeader = () => {
        const headerData = cloneDeep(props.header)
      if (headerData.length === 0) {
        return;
      }
      if (props.headerIndex) {

      }
    };

    onMounted(() => {});
    return {
      uuid,
    };
  },
};
</script>

<style lang="scss" scoped>
.base-scroll-list {
  width: 100%;
  height: 100%;
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