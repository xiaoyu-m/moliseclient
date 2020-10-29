<!-- 模块名：青训环境 负责人：门宇川 2020/6/19 -->
<template>
  <div class="youthE_total">
    <titles :title="title" />
    <div class="youthE-box">
      <swipe :images="images" :control="false" />
    </div>
    <div class="youthE-list">
      <i class="iconfont icon-gengduo1 more"></i>
      <lytab v-model="selectedId" :items="images" ltype="url" :options="options" />
    </div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
import swipe from "@/components/swipe/swipe";
import lytab from "@/components/ly-tab/src";
import "@/assets/icon/iconfont.css";

export default {
  name: "youthE",
  components: {
    titles,
    swipe,
    lytab
  },
  data() {
    return {
      title: "青训环境",
      selectedId: 0,
      images: [
        {
          url: require("../../../assets/img/honor/honor1.jpg")
        },
        {
          url: require("../../../assets/img/honor/honor2.jpg")
        },
        {
          url: require("../../../assets/img/honor/honor3.jpg")
        },
        {
          url: require("../../../assets/img/honor/honor4.jpg")
        },
        {
          url: require("../../../assets/img/honor/honor1.jpg")
        },
        {
          url: require("../../../assets/img/honor/honor1.jpg")
        }
      ],
      options: {
        activeColor: "#fff0"
        // 可在这里指定labelKey为你数据里文字对应的字段
      }
    };
  }
};
</script>
<style lang="less" scoped="scoped">
@import "./youthE";
</style>
