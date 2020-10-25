<template>
  <div class="message">
    <div>
      <button @click="add">增加</button>
    </div>
    <div>{{ doubleCount }}</div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "TestComponent",
  setup() {
    var message = "test";
    const count = ref(1);
    const doubleCount = computed(() => count.value * 2);
    const add = () => {
      count.value++
    }
    return {
      message,
      doubleCount,
      add
    };
  },
};
</script>

<style lang="scss" scoped>
.message {
  color: red;
}
</style>