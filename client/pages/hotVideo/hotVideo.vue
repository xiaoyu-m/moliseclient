<template>
  <div class="hotvideo_total">
    <!-- 手机端 -->
    <div class="md-hide">
      <wVideo />
    </div>
    <!-- 电脑端 -->
    <div class="sm-hide"></div>
  </div>
</template>

<script>
import wVideo from "@/components/phone/wVideo/wVideo";
export default {
  title: "精彩视频-摩立斯电竞",
  components: {
    wVideo
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "./hotVideo";
</style>
