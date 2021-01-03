<template>
  <vue-echarts :options="options" />
</template>
<script>
import { ref, onMounted } from "vue";
import mokeData from './moke'
import echarts from 'echarts'

export default {
  name: "JsMapWarning",
  components: {},
  setup() {
    const options = ref({});
    const update = () => {
        let center = {
          '南京市': [118.767413, 32.041544],
          '无锡市': [120.301663, 31.574729],
          '徐州市': [117.184811, 34.261792],
          '常州市': [119.946973, 31.772752],
          '苏州市': [120.619585, 31.299379],
          '南通市': [120.864608, 32.016212],
          '连云港市': [119.178821, 34.600018],
          '淮安市': [119.021265, 33.597506],
          '盐城市': [120.139998, 33.377631],
          '扬州市': [119.421003, 32.393159],
          '镇江市': [119.452753, 32.204402],
          '泰州市': [119.915176, 32.484882],
          '宿迁市': [118.275162, 33.963008]
        }
        echarts.registerMap('jiangsu', mokeData) // 注册地图
        options.value = {
            geo: [{
                map: 'jiangsu', // 使用自定义地图
                zoom: 1, // 默认显示比例
                roam: true, // 启动鼠标地图缩放
            }]
        }
    }
    onMounted(() => {
        update()
    });
    return {
      options,
    };
  },
};
</script>

<style>
</style>