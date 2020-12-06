<template>
  <div :class="[className, 'echarts-box']"></div>
</template>

<script>
import { watch, onMounted } from "vue";
import Echarts from "echarts";
import { generateUUID } from "../../utils/index";

export default {
  name: "VueEcharts",
  props: {
    options: Object,
    theme: [String, Object],
  },
  setup(ctx) {
    let dom;
    let chart;
    let className = `echarts-${generateUUID()}`;
    const initChart = () => {
      if (!chart) {
        dom = document.getElementsByClassName(className)[0];
        chart = Echarts.init(dom, ctx.theme);
      }
      if (ctx.options) {
        chart.setOption(ctx.options);
      }
    };
    onMounted(() => {
      initChart();
    });
    watch(
      () => ctx.options,
      () => {
        initChart();
      }
    );
    return {
      className,
    };
  },
};
</script>

<style lang="scss" scoped>
.echarts-box {
  width: 100%;
  height: 100%;
}
</style>
