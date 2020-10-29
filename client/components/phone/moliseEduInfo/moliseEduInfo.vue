<!-- 模块名称：mAboutUs 负责人 王哲宇 关于我们中的摩立斯电竞教育简介 -->
<template>
	<div class="box">
		<div>
		  <titles :title="title"></titles>
		</div>
		<div class="text">{{text}}</div>
	</div>
</template>

<script>
import titles from "@/components/title/title.vue";
export default {
  components: {
    titles
  },
  data() {
    return {
      title: "摩立斯简介",
      text:
        "摩立斯电竞（隶属于星娱文化/股票代码：834411）为成都市武侯区电子竞技智力协会（武侯电竞）会长单位，位于四川国际文化人才港，依托人才港作为孵化平台，进行电竞职业人才的定制培训及市场输出，作为在四川省首批官方授权电竞教育机构，是全国综合型电子竞技教育基地。"
    };
  }
};
</script>

<style lang="less">
@import "./moliseEduInfo";
</style>
