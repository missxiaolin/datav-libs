<template>
  <div class="message">{{ message }}</div>
</template>

<script>
export default {
  name: "TestComponent",
  setup() {
    const message = "test";
    return {
      message,
    };
  },
};
</script>

<style lang="scss" scoped>
.message {
  color: red;
}
</style>