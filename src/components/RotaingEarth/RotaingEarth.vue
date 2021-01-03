<template>
  <vue-echarts :options="options" />
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  name: "RotaingEarth",
  components: {},
  setup() {
    const options = ref({});
    const update = () => {
        
        options.value = {
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