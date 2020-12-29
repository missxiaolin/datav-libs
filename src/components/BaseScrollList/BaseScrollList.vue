<template>
  <div class="base-scroll-list" :id="uuid">
    <div
      class="base-scroll-list-header"
      :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
      }"
    >
      <div
        class="header-item base-scroll-list-text"
        v-for="(headerItem, i) in headerData"
        :key="i"
        :style="{
          width: `${columnWidth[i]}px`,
          ...headerStyle[i],
        }"
        v-html="headerItem"
      ></div>
    </div>
    <div class="base-scroll-list-rows"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { generateUUID } from "../../utils/index";
import useScreen from "../../hooks/useScreen";
import cloneDeep from "lodash/cloneDeep";
import assign from "lodash/assign";

export default {
  name: "BaseScrollList",
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const defaultConfig = {
      // 标题数据 [a, b, c]
      headerData: [],
      // 标题样式  [{}, {}, {}]
      headerStyle: [],
      // 标题背景色
      headerBg: "rgb(90, 90, 90)",
      // 标题高度
      headerHeight: 35,
      // 标题是否展示序号
      headerIndex: false,
      headerIndexContent: "#",
      headerIndexStyle: {
        width: "50px",
      },
    };
    const actualConfig = ref({});
    const uuid = `base-scroll-list-${generateUUID()}`;
    const { width, height } = useScreen(uuid);
    const headerData = ref([]);
    const headerStyle = ref([]);
    const columnWidth = ref([]);

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData);
      const _headerStyle = cloneDeep(config.headerStyle);
      if (_headerData.length === 0) {
        return;
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent);
        _headerStyle.unshift(config.headerIndexStyle);
      }
      // 动态计算header宽度
      let useWidth = 0;
      let usedColumnNum = 0;
      // 判断自定义width
      _headerStyle.forEach((style) => {
        if (style.width) {
          useWidth += style.width.replace("px", "");
          usedColumnNum++;
        }
      });
      const avgWidth =
        (width.value - useWidth) / (_headerData.length - usedColumnNum);
      const _columnWidth = new Array(_headerData.length).fill(avgWidth);
      columnWidth.value = _columnWidth;
      console.log(columnWidth);

      headerData.value = _headerData;
      headerStyle.value = _headerStyle;
    };

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config);
      console.log(_actualConfig);
      handleHeader(_actualConfig);
      actualConfig.value = _actualConfig;
    });
    return {
      uuid,
      headerData,
      headerStyle,
      actualConfig,
      columnWidth,
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