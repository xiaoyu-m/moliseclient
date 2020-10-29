<template>
  <div class="dplayer"></div>
</template>

<script>
import "dplayer/dist/DPlayer.min.js";
import DPlayer from "dplayer";
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "#FADFA3"
    },
    loop: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: "zh"
    },
    screenshot: {
      type: Boolean,
      default: false
    },
    hotkey: {
      type: Boolean,
      default: false
    },
    preload: {
      type: String,
      default: "auto"
    },
    contextmenu: {
      type: Array
    },
    logo: {
      type: String
    },
    video: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.url === "string";
      }
    }
  },
  data() {
    return {
      dp: null,
	  player: null,
	  hls: null,
    };
  },
  mounted() {
	this.hls = new Hls();
    this.player = (this.dp = new DPlayer({
      element: this.$el,
      autoplay: this.autoplay,
      theme: this.theme,
      loop: this.loop,
      screenshot: this.screenshot,
      hotkey: this.hotkey,
      preload: this.preload,
      contextmenu: this.contextmenu,
      logo: this.logo,
      video: {
        url: this.video.url,
        pic: this.video.pic,
        type: this.video.type
      }
    }));
    this.player.on("play", e => {
		this.$emit("play");
		this.hls.loadSource(this.video.url);
		this.hls.attachMedia(this.player);
    });
    this.player.on("pause", () => {
      this.$emit("pause");
    });
    this.player.on("canplay", () => {
      this.$emit("canplay");
    });
    this.player.on("playing", () => {
      this.$emit("playing");
    });
    this.player.on("ended", () => {
      this.$emit("ended");
    });
    this.player.on("error", () => {
      this.$emit("error");
    });
  }
};
</script>
