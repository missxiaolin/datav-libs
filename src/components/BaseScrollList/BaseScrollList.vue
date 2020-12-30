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
    <div
      class="base-scroll-list-rows"
      v-for="(rowData, rowIndex) in rowsData"
      :key="rowIndex"
      :style="{
        height: `${rowHeights[rowIndex]}px`,
      }"
    >
      <div
        class="base-scroll-list-columns"
        v-for="(colData, colIndex) in rowData"
        :key="colIndex"
        :style="{
          width: `${columnWidth[colIndex]}px`,
        }"
        v-html="colData"
      ></div>
    </div>
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
      // 数据 二维数组
      data: [],
      rowNum: 0,
    };
    const actualConfig = ref({});
    const uuid = `base-scroll-list-${generateUUID()}`;
    const { width, height } = useScreen(uuid);
    const headerData = ref([]);
    const headerStyle = ref([]);
    const columnWidth = ref([]);
    const rowsData = ref([]);
    const rowHeights = ref([]);
    const rowNum = ref(0);

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData);
      const _headerStyle = cloneDeep(config.headerStyle);
      const _rowData = cloneDeep(config.data);
      if (_headerData.length === 0) {
        return;
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent);
        _headerStyle.unshift(config.headerIndexStyle);
        _rowData.forEach((rows, index) => {
          rows.unshift(`${index + 1}`);
        });
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
      // 判断自定义width
      _headerStyle.forEach((style, index) => {
        if (style.width) {
          const headerWidth = +style.width.replace("px", "");
          _columnWidth[index] = headerWidth;
        }
      });
      columnWidth.value = _columnWidth;

      headerData.value = _headerData;
      headerStyle.value = _headerStyle;
      rowsData.value = _rowData;
    };

    const handleRows = (config) => {
      // 动态计算高度
      const { headerHeight } = config;
      rowNum.value = config.rowNum;
      const unuseHeight = height.value - headerHeight;
      // 如果rowNum大于实际数据长度，则以实际数据长度为准
      if (rowNum.value > rowsData.value.length) {
        rowNum.value = rowsData.value.length;
      }
      console.log(rowNum.value)
      const avgHeight = unuseHeight / rowNum.value;
      rowHeights.value = new Array(rowNum.value).fill(avgHeight);
      console.log(rowHeights)
    };

    onMounted(() => {
      const _actualConfig = assign(defaultConfig, props.config);
      rowsData.value = _actualConfig.data || [];
      handleHeader(_actualConfig);
      handleRows(_actualConfig);
      actualConfig.value = _actualConfig;
    });
    return {
      uuid,
      headerData,
      headerStyle,
      actualConfig,
      columnWidth,
      rowsData,
      rowHeights,
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
  .base-scroll-list-rows {
    display: flex;
    align-items: center;
    .base-scroll-list-columns {
      font-size: 28px;
    }
  }
}
</style>