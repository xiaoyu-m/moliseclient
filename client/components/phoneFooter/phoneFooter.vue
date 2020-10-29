<!-- phoneFooter 俱乐部说明 负责人：王哲宇 -->
<template>
	<div class="">
	<div>
		<titles :title="title"></titles>
	</div>
	<div class="phoneFooter">
		
		<div class="phoneFooter_topBox">
			<div class="phoneFooter_topBoxTop">
			<div class="phoneFooter_topBox_onne"></div>
			<div class="phoneFooter_topBoxLeft">{{topBoxLeft}}</div>
			<div class="phoneFooter_topBoxRight">{{topBoxRight}}</div>
			</div>
			
			<div class="phoneFooter_topBoxCenter">内容：{{topBoxCenter}}</div>
			<div class="phoneFooter_topBoxFooter">回复：{{topBoxFooter}}</div>
			
			<div class="phoneFooter_topBoxbottom">
				<span>首页</span>
				<span>上一页</span>
				<span>1/40页</span>
				<span>下一页</span>
				<span>尾页</span>
				<span>更多>></span>
			</div>
		</div>
		
		
		
		</div>
	</div>
</template>

<script>
	import titles from '../title/title.vue';
	export default {
		components: {
			titles,
			// foottitles
		},
		data() {
	
			return {
				title: '留言区',
				// foottitle:'联系我们',
				topBoxLeft: '姓名：张三',
				topBoxRight:'2020-06-02',
				topBoxCenter:'您好，我想系统的学习电竞知识从事相关电竞职业，经过了解，发现在四川你们比较专业，所以想来深入了解。我LOL和绝地求生的技术都很好，可是家里比较反对，我了解过，你们是把电竞当作专业来教的，希望你们能帮帮我。',
				topBoxFooter:'您的情况我们了解到了，我们将及时与您联系',
				};
		}
	}
</script>

<style lang="less">
	@import './phoneFooter.less';
	
</style>
