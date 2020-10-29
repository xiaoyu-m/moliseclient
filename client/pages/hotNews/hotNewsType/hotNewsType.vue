<template>
  <div class="newtype_total">
    <newType :type="newsType"/>
  </div>
</template>

<script>
import newType from "@/components/hotNews/hotNewType/hotNewType";
export default {
  title: "新闻资讯-摩立斯电竞",
  components: { newType },
  data() {
    return {
      newsType: JSON.parse(decodeURIComponent(this.$route.params.type))
    };
  }
};
</script>

<style lang="less">
@import "./hotNewsType";
</style>
