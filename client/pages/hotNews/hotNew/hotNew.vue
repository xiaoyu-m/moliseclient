<template>
  <div class="howNew_total">
    <New :aid="aid"/>
  </div>
</template>

<script>
import New from "@/components/hotNews/newsPages/newsPages";
export default {
  title: "新闻资讯-摩立斯电竞",
  components: {
    New
  },
  data() {
    return {
      aid: parseInt(this.$route.params.newId)
    };
  }
};
</script>

<style lang="less" scoped>
@import "./hotNew";
</style>
