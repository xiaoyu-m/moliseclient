<!-- phoneFooter 手机站底部 负责人：王哲宇 -->
<template>
	<div class="phoneMessage_Box">
		<div>
			<titles :title="title"></titles>
		</div>
		
		<div class="phoneMessagebox">
			<div class="phoneMessage_BoxLeft">
				<div class="BoxLeftbox">
					<img src="../../assets/img/wx_QR.jpg" alt="">
					<div class="BoxLeftbox_Span">
					<span>添加微信</span>
					<span>了解我们</span>
					</div>
				</div>
				
				<div class="BoxLeftbox">
					<img src="../../assets/img/qq_QR.jpg" alt="">
					<div class="BoxLeftbox_Span">
					<span>添加QQ</span>
					<span>了解我们</span>
					</div>
				</div>
			</div>
				<!-- phoneMessage_BoxLeft -->
			<div class="phoneMessage_BoxRight">
				<div class="BoxRightSpan">
					<span>
						<i class="el-icon el-icon-phone"></i>
					</span>
					<span>电话</span>
					<span>028-85447164</span>
				</div>
				
				<div class="BoxRightSpan">
					<span>
						<i class="el-icon el-icon-message"></i>

					</span>
					<span>邮箱</span>
					<span>1415618545@qq.com</span>
				</div>
				
				<div class="BoxRightSpan BoxRightSpanlast">
					<span>
						<i class="el-icon-location"></i>
					</span>
					<span>地址</span>
					<span>四川省成都市武侯区西部智谷C区莫里斯电竞学院</span>
				</div>
			</div>
		</div>
		<!-- phoneMessage_box -->
	</div>
	<!-- phoneMessage_Box -->
</template>

<script>
	import titles from '../title/title.vue';
	export default {
		components: {
			titles
		},
		data() {
	
			return {
				title: '联系我们',
				};
		}
	}
</script>

<style lang="less">
	@import './phoneMessage.less';
</style>
 