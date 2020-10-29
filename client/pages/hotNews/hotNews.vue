<!-- 模块名：精彩视频  负责人：门宇川 2020/6/9 -->
<template>
  <div>
    <div class="sm-hide">
      <section class="page-banner jumbotron">
        <div class="top-pattern-layer"></div>
        <div class="banner-inner">
          <div class="auto-container">
            <div class="inner-container clearfix">
              <ul class="bread-crumb clearfix">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>游戏简讯</li>
              </ul>
              <h1>Games</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="hotNews_total">
      <hotNews />
      <div class="sm-hide">
        <wVideo />
      </div>
    </div>
  </div>
</template>

<script>
import hotNews from "@/components/hotNews/hotNews";
import wVideo from "@/components/phone/wVideo/wVideo";
export default {
  title: "新闻资讯-摩立斯电竞",
  components: {
    hotNews,
    wVideo
  },
  data() {
    return {};
  }
};
</script>


<style lang="less">
@import "./hotNews";
</style>
