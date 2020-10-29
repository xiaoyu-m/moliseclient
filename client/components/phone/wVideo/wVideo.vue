<template>
    <div class="wvideo_total">
        <titles title="精彩视频"/>
        <ul class="wvideo-list demo-image__lazy">
            <li v-for="item in vList" :key="item.id" class="wv-item wow flipInY animated">
                <a :href="'/video/'+item.videoId">
<!--                    <i class="iconfont icon-bofang"></i>-->
                    <el-image :src="item.videoThumb" lazy></el-image>
                    <div class="wvideo-info">
                        <div class="wvideo-title">
                            {{item.videoTitle}}
                        </div>
                        <div  class="wvideo-txt">{{formatDate(item.videoReleaseTime)}}</div>
                   </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import titles from "@/components/title/title";
import "@/assets/icon/iconfont.css";
import http from "../../../../config/http/http";
export default {
  title: "精彩视频",
  components: {
    titles
  },
  data() {
    return {
      vList: []
    };
  },
  created() {
    this.getVideos();
  },
  methods: {
    getVideos() {
      this.$http.get("/video_get_all").then(res => {
        this.vList = res.data;
        console.log(this.vList);
      });
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
    }
  }
};
</script>
<style lang="less">
@import "./wVideo";
</style>
