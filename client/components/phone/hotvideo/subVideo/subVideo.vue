<!-- 模块名：精彩视频  负责人：门宇川 2020/6/9 -->
<template>
  <div class="video_total">
    <titles title="精彩视频" />
    <div class="video-content">
      <d-player v-if="update" ref="player" @play="play" :video="video" :contextmenu="contextmenu"></d-player>
      <div class="video-txt">
        <div class="v-title">
         <i class="iconfont icon-wenzhang"></i>{{video.title}}
        </div>
        <div class="v-time">
          {{video.time}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DPlayer from "dplayer";
import VueDPlayer from "../video";
import titles from "@/components/title/title";
export default {
  title: "热门视频",
  components: {
    titles,
    "d-player": VueDPlayer
  },
  props: {
    vId: String
  },
  data() {
    return {
      video: {
        url: "",
        pic: "",
        type: "hls"
      },
      autoplay: false,
      update: true,
      player: null,
      contextmenu: [
        {
          text: "GitHub"
          // link: 'https://github.com/MoePlayer/vue-dplayer'
        }
      ]
    };
  },
  mounted() {},
  methods: {
    play(e) {
      console.log(e);
    },
    formatDate(time) {
      let datetime = new Date();
      datetime.setTime(time);
      let year = datetime.getFullYear();
      let month = datetime.getMonth() + 1;
      let date = datetime.getDate();
      if (time) {
        return year + "年" + month + "月" + date + "日";
      } else {
        return "";
      }
    },
    getVideos() {
      this.$http
        .get("/admin/video_get_one", { params: { videoId: this.vId } })
        .then(res => {
          console.log(res);
          this.items = res.data;
          this.video = {
            url: this.items.videoLink,
            pic: this.items.videoThumb,
            title: this.items.videoTitle,
            time: this.formatDate(this.items.videoReleaseTime),
            type: "hls"
          };
          this.update = false;
          this.$nextTick(() => {
            this.update = true;
          });
          // this.video.url = this.items[0].videoLink;
          // this.video.pic = this.items[0].videoThumb;
          // this.video.type = "hls";
          // this.update = false;
          // this.$nextTick(() => {
          //   this.update = true;
          // });
        });
    }
  },
  created() {
    this.getVideos();
  }
};
</script>

<style lang="less">
@import "./subVideo";
</style>
