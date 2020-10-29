<template>
	
	<div class="box1">
		<div>
		  <titles :title="title"></titles>
		</div>
		
		<div class="row">
			<div class="row_item">
				<span>游戏策划</span>	
			</div>
			
			<div class="row_item">
				<span>游戏运营</span>	
			</div>
			
			<div class="row_item">
				<span>赛事组织</span>	
			</div>
			
			<div class="row_item">
				<span>节目策划</span>	
			</div>
		</div>
		
		
		<div class="row">
			<div class="row_item">
				<span>专职教练</span>	
			</div>
			
			<div class="row_item">
				<span>专业裁判</span>	
			</div>
			
			<div class="row_item">
				<span>职业讲师</span>	
			</div>
			
			<div class="row_item">
				<span>职业领队</span>	
			</div>
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
      title: "专业方向"
    };
  }
};
</script>

<style lang="less">
@import "./advisory";
</style>
