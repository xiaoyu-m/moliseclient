<!-- 模块名：精彩视频  负责人：门宇川 2020/6/9 -->
<template>
	<div class="hotvideo_total">
		<titles title="精彩视频" />
		<div class="videoContent"><d-player ref="player" v-if="update" @play="play" :video="video" :contextmenu="contextmenu"></d-player></div>
		<div class="video-title">
			<strong>学员训练剪影</strong>
			<a href="#" class="float-right hide">
				更多
				<i class="iconfont icon-gengduo1"></i>
			</a>
		</div>
		<div class="video-list"><ly-tab v-model="selectedId" :items="items" :options="options" @changeSrc="changeSrc"></ly-tab></div>
	</div>
</template>

<script>
import DPlayer from 'dplayer';
import VueDPlayer from './video';
import lytab from '@/components/ly-tab/src';
import titles from '@/components/title/title';
export default {
	components: {
		'ly-tab': lytab,
		titles,
		'd-player': VueDPlayer
	},
	data() {
		return {
			isPlay: false,
			selectedId: 0,
			items: [],
			options: {
				activeColor: '#fff'
				// 可在这里指定labelKey为你数据里文字对应的字段
			},
			video: {
				url: '',
				pic: '',
				type: ''
			},
			autoplay: false,
			update: true,
			player: null,
			contextmenu: [
				{
					text: 'GitHub'
					// link: 'https://github.com/MoePlayer/vue-dplayer'
				}
			]
		};
	},
	mounted() {
	},
	methods: {
		changeSrc(e) {
			console.log(e);
			this.video.url = e.videoLink;
			this.video.pic = e.videoThumb;

			this.update = false;
			this.$nextTick(() => {
				this.update = true;
			});
		},
		play(e) {
			console.log(e);
		},
		getVideos() {
			this.$http.get('/video_get_all').then(res => {
				this.items = res.data;
				console.log(res);
				this.video.url = this.items[0].videoLink;
				this.video.pic = this.items[0].videoThumb;
				this.video.type = 'hls';
				this.update = false;
				this.$nextTick(() => {
					this.update = true;
				});
			});
		}
	},
	created() {
		this.getVideos();
	}
};
</script>

<style lang="less">
@import './hotvideo';
.ly-tab-item {
	height: 70px;
	& * {
		width: 100%;
		height: 100%;
	}
}
</style>
