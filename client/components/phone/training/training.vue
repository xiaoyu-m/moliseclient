<template>
	<div class="box">
		
	<div>
	  <titles :title="title"></titles>
	</div>
	
	<div class="row">
		<div class="row_item trainingitem">电竞技术类</div>
		<div class="row_item trainingitem">赛事活动类</div>
		<div class="row_item trainingitem">体育医疗类</div>
		<div class="row_item trainingitem">内容制作类</div>
	</div>
	
	<div class="row">
		<div class="row_item trainingitem">电竞金融类</div>
		<div class="row_item trainingitem">产品开发类</div>
		<div class="row_item trainingitem">经营管理类</div>
		<div class="row_item trainingitem">教育培训类</div>
	</div>
	
	<div class="btn">立即咨询</div>
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
      title: "八大培训板块"
    };
  }
};
</script>

<style lang="less">
@import "./training";
</style>
