<template>
  <div class="total-user">
    <div class="title">用户总数</div>
    <div class="sub-title">user total count</div>
    <div class="total">
      {{todayUser}}
    </div>
    <div class="percent-text">
      <span class="percent-text-1"> 每日增长率:{{growthLastDay}} </span>
      <span class="percent-text-2"> 每月增长率:{{growthLastMonth}} </span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "totalUser",
  props: {
    todayUser: {
      type: Number,
      default: 0,
    },
    growthLastDay: {
      type: Number,
      default: 0,
    },
    growthLastMonth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const startVal = ref(0);
    const startPercent = ref(0);
    const startPercent2 = ref(0);
    const updateStartVal = () => {
      console.log(props)
      startVal.value = props.todayUser;
      startPercent.value = props.growthLastDay;
      startPercent2.value = props.growthLastMonth;
    };
    updateStartVal()
    return {
      startVal,
      startPercent,
      startPercent2,
      updateStartVal,
    };
  },
};
</script>

<style lang="scss" scoped>
.total-user {
    width: 100%;
    height: 100%;
    background: rgb(66, 68, 70);
    box-shadow: 0 10px 10px rgba(0, 0, 0, .3);
    padding: 20px 40px;
    box-sizing: border-box;
    .sub-title {
        font-size: 16px;
        letter-spacing: 1px;
        margin-top: 10px;
    }
    .total {
        font-family: DIN;
        font-size: 68px;
        font-weight: bolder;
        letter-spacing: 2px;
        padding: 10px 0;
    }
    .percent-text {
        font-size: 28px;
        font-family: DIN;
        letter-spacing: 2px;
        .percent-text-1 {
          color: yellow;
        }
        .percent-text-2 {
          color: red;
        }
    }
}
</style>