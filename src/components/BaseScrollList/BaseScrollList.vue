<template>
  <div class="base-scroll-list" :id="uuid">
    <div
      class="base-scroll-list-header"
      :style="{
        backgroundColor: actualConfig.headerBg,
        height: `${actualConfig.headerHeight}px`,
        fontSize: `${actualConfig.headerFontSize}px`,
        color: `${actualConfig.headerColor}`,
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
        :align="aligns[i]"
      ></div>
    </div>
    <div
      class="base-scroll-list-row-wrapper"
      :style="{ height: `${height - actualConfig.headerHeight}px` }"
    >
      <div
        class="base-scroll-list-rows"
        v-for="(rowData, index) in currentRowsData"
        :key="rowData.rowIndex"
        :style="{
          height: `${rowHeights[index]}px`,
          lineHeight: `${rowHeights[index]}px`,
          backgroundColor: rowData.rowIndex % 2 == 0 ? rowBg[1] : rowBg[0],
          fontSize: `${actualConfig.rowFontSize}px`,
          color: `${actualConfig.rowColor}`,
        }"
      >
        <div
          class="base-scroll-list-columns base-scroll-list-text"
          v-for="(colData, colIndex) in rowData.data"
          :key="colIndex"
          :style="{
            width: `${columnWidth[colIndex]}px`,
            ...rowStyle[colIndex],
          }"
          v-html="colData"
          :align="aligns[colIndex]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
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
      // 行样式
      rowStyle: [],
      // 标题背景色
      headerBg: "rgb(90, 90, 90)",
      // 标题高度
      headerHeight: 35,
      // 标题是否展示序号
      headerIndex: false,
      // 序号列标内容
      headerIndexContent: "#",
      // 序号列标题样式
      headerIndexStyle: {
        width: "50px",
      },
      headerIndexData: [], // 序号列数据内容
      // 序列号内容样式
      rowIndexStyle: {
        width: "50px",
      },
      // 行背景
      rowBg: [],
      // 数据 二维数组
      data: [],
      // 每页显示数据量
      rowNum: 10,
      // 居中方式
      aligns: [],
      headerFontSize: 28,
      rowFontSize: 28,
      headerColor: "#fff",
      rowColor: "#000",
      moveNum: 1, // 移动位置
      duration: 2000, // 动画间隔时间
    };
    const actualConfig = ref({});
    const uuid = `base-scroll-list-${generateUUID()}`;
    const { width, height } = useScreen(uuid);
    const headerData = ref([]);
    const headerStyle = ref([]);
    const columnWidth = ref([]);
    const rowsData = ref([]);
    const currentRowsData = ref([]); // 动画当前元素
    const currentIndex = ref(0); // 动画指针
    const rowHeights = ref([]);
    const rowNum = ref(0);
    const rowStyle = ref([]);
    const rowBg = ref([]);
    const aligns = ref([]);
    const isAnimateStart = ref(true);
    let avgHeight; // 行高

    const handleHeader = (config) => {
      const _headerData = cloneDeep(config.headerData);
      const _headerStyle = cloneDeep(config.headerStyle);
      const _rowStyle = cloneDeep(config.rowStyle);
      const _rowData = cloneDeep(config.data);
      const _aligns = cloneDeep(config.aligns);
      if (_headerData.length === 0) {
        return;
      }
      if (config.headerIndex) {
        _headerData.unshift(config.headerIndexContent);
        _headerStyle.unshift(config.headerIndexStyle);
        _rowStyle.unshift(config.rowIndexStyle);
        _rowData.forEach((rows, index) => {
          if (!!config.headerIndexData && config.headerIndexData.length > 0 && config.headerIndexData[index]) {
            rows.unshift(config.headerIndexData[index]);
          } else {
            rows.unshift(`${index + 1}`);
          }
        });
        _aligns.unshift("center");
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
      const { rowNum } = config
      if (_rowData.length >= rowNum && _rowData.length < rowNum * 2) {
        const newRowData = [..._rowData, ..._rowData]
        rowsData.value = newRowData.map((item, index) => ({
          data: item,
          rowIndex: index,
        }));
      } else {
        rowsData.value = _rowData.map((item, index) => ({
          data: item,
          rowIndex: index,
        }));
      }
      
      rowStyle.value = _rowStyle;
      aligns.value = _aligns;
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
      avgHeight = unuseHeight / rowNum.value;
      rowHeights.value = new Array(rowNum.value).fill(avgHeight);
      // 获取行背景色
      if (config.rowBg) {
        rowBg.value = config.rowBg;
      }
    };

    const startAnimation = async () => {
      if (!isAnimateStart) return

      const config = actualConfig.value;
      const { data, rowNum, moveNum, duration } = config;
      const totalLength = rowsData.value.length;
      if (totalLength < rowNum) return;
      const index = currentIndex.value;
      const _rowData = cloneDeep(rowsData.value);
      // 将数据重新头尾连接
      const rows = _rowData.slice(index);
      rows.push(..._rowData.slice(0, index));
      currentRowsData.value = rows;
      // 先将所有行高度还原
      rowHeights.value = new Array(totalLength).fill(avgHeight);
      // 然后将moveNum的行高度设置为0
      const waitTime = 300;
      if (!isAnimateStart) return
      await new Promise(resolve => setTimeout(resolve, waitTime));
      rowHeights.value.splice(0, moveNum, ...new Array(moveNum).fill(0));

      currentIndex.value += moveNum;
      // 是否到达最后一组数据
      const isLast = currentIndex.value - totalLength;
      if (isLast >= 0) {
        currentIndex.value = isLast;
      }
      if (!isAnimateStart) return
      // sleep
      await new Promise(resolve => setTimeout(resolve, duration - waitTime));
      await startAnimation();
    };

    const stopAnimation = () => {
      isAnimateStart.value = false
    }

    const update = () => {
      stopAnimation()
      const _actualConfig = assign(defaultConfig, props.config);
      rowsData.value = _actualConfig.data || [];
      handleHeader(_actualConfig);
      handleRows(_actualConfig);
      actualConfig.value = _actualConfig;
      // 展示动画
      isAnimateStart.value = true
      startAnimation();
    }

    onMounted(() => {
      update()
    });

    watch(() => props.config, () => {
      update()
    })

    return {
      uuid,
      headerData,
      headerStyle,
      actualConfig,
      columnWidth,
      rowsData,
      currentRowsData,
      rowHeights,
      rowStyle,
      rowBg,
      aligns,
      height,
    };
  },
};
</script>

<style lang="scss" scoped>
.base-scroll-list {
  width: 100%;
  height: 100%;
  .base-scroll-list-text {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-sizing: border-box;
  }
  .base-scroll-list-header {
    display: flex;
    font-size: 15px;
    align-items: center;
  }
  .base-scroll-list-row-wrapper {
    overflow: hidden;
    .base-scroll-list-rows {
      display: flex;
      align-items: center;
      transition: all 0.3s linear;
      .base-scroll-list-columns {
        height: 100%;
      }
    }
  }
}
</style>