<template>
  <vue-echarts :options="options" />
</template>
<script>
import { ref, onMounted } from "vue";
import "echarts-gl";
const ROOT_PATH = "./";

// globe：地球组件
// environment：环境贴图
// baseTexture：地球的纹理。支持图片路径的字符串，图片或者 Canvas 的对象。
// heightTexture：地球的高度纹理。高度纹理可以用于凹凸贴图表现地球表面的明暗细节。
// displacementScale: 地球顶点位移的大小，可以增强地球的立体效果。
// shading：地球中三维图形的着色效果。
// realisticMaterial：真实感材质相关的配置项，在 shading 为'realistic'时有效。
// postEffect：后处理特效的相关配置。后处理特效可以为画面添加高光、景深、环境光遮蔽（SSAO）、调色等效果。可以让整个画面更富有质感。
// light：光照相关的设置。在 shading 为 'color' 的时候无效。光照的设置会影响到组件以及组件所在坐标系上的所有图表。合理的光照设置能够让整个场景的明暗变得更丰富，更有层次。
// main：场景主光源的设置，在 globe 组件中就是太阳光。
// ambientCubemap：使用纹理作为环境光的光源，会为物体提供漫反射和高光反射


export default {
  name: "RotaingEarth",
  components: {},
  setup() {
    const options = ref({});
    const update = () => {
      options.value = {
        backgroundColor: "#000",
        globe: {
          baseTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          heightTexture: `${ROOT_PATH}assets/datav-gl-texture.jpg`,
          displacementScale: 0.04,
          shading: "realistic",
          environment: `${ROOT_PATH}assets/star-bg.jpg`,
          realisticMaterial: {
            roughness: 0.9,
          },
          postEffect: {
            enable: true,
          },
          light: {
            main: {
              intensity: 5,
              shadow: true,
            },
            ambientCubemap: {
              texture: `${ROOT_PATH}assets/pisa.hdr`,
              diffuseIntensity: 0.2,
            },
          },
        },
      };
    };
    onMounted(() => {
      update();
    });
    return {
      options,
    };
  },
};
</script>

<style>
</style>