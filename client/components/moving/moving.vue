<template>
  <!-- 视频壁纸模块 -->
  <div class="bg_mv_father" v-if="isPhone==false">
    <div class="bg_mv_father_mb">
      <!-- 蒙版 -->
    </div>
    <div class="bg_mv">
      <video :src="video.url" type="video/mp4" id="v1" autoplay loop muted ref="video"></video>

      <source   />
           </video>
         </div>
         <div class="index_imgs">
           <img src="/client/assets/img/logo_wite.png" ondragstart="return false;" />
           <!-- &lt;!&ndash; 播放按钮 &ndash;&gt; -->
           <img
             src="../../assets/img/bf.png"
             ondragstart="return false;"
             @click="index_video('show')"
           />
         </div>
         <div class="index_play_mv">
           <div>
             <div class="index_close" @click="index_video('close')">
               <img src="../../assets/img/close.png" ondragstart="return false;" />
             </div>
             <video
               id="index_mv"
               controls="controls"
               controlslist="nodownload"
             >
      		<source src="../../assets/mv/index_mv.mp4">
      		</source>
               &lt;!&ndash; 您的浏览器不支持 video 标签。 &ndash;&gt;
             </video>
      </div>
    </div>
  </div>
</template>

<script>
import Video from "@/components/phone/hotvideo/video";
import VueDPlayer from "../phone/hotvideo/video";
export default {
  name: "moving",
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return {
      isPhone: false,
      video: {
        url: require("../../assets/mv/index_mv.mp4"),
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
  method() {
    if (document.body.offsetWidth <= 768) {
      this.isPhone = true;
    }
    if (document.body.offsetWidth > 768) {
      this.isPhone = false;
    }
  },
  methods: {
    play(e) {
      console.log(e);
    },
    index_video(e) {
      let mv = document.querySelector("#index_mv");
      let index_mv = document.querySelector(".index_play_mv");
      switch (e) {
        case "close":
          index_mv.style.display = "none";
          mv.pause();
          break;
        case "show":
          index_mv.style.display = "flex";
          mv.play();
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="less">
@import "moving.less";
</style>
