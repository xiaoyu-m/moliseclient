<template>
  <div>
    <div class="club_info" v-for="item in club_introduce_list" :key="item.id">
      <div
        class="club_text_bg"
        :style="{ backgroundImage: 'url(' + item.clublogo + ')' }"
        :class="{ axibg: axibg }"
      >
        <!-- 文字战队logo水印 -->
        <!-- <div class="club_text_bg_mb1"></div> -->
        <!-- 蒙版 -->
        <div class="club_text_bg_mb2"></div>
      </div>
      <div class="club_introduce">
        <div>
          <div
            class="club_logo"
            :style="{ backgroundImage: 'url(' + item.clublogo + ')' }"
            :class="{ club_axilogo: axibg }"
          >
            <!-- <img src="../../../static/club/tcg.png"> -->
          </div>
        </div>
        <div class="club_con">
          <div class="club_text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "clubIntroduce",
  props: {
    club_introduce_list: Array
  },
  data() {
    return {
      axibg: false
    };
  },
  mounted() {
    if (this.club_introduce_list[0].type == "axi") {
      this.axibg = true;
    }
  }
};
</script>

<style>
/* 滚动条整体部分 */
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 0, 0, 0);
}
/* scroll轨道背景 */
*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: rgba(255, 0, 0, 0);
}
/* 滚动条中能上下移动的小块 */
*::-webkit-scrollbar-thumb {
  border-radius: 10px;
  width: 20px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.2);
}
.club_info {
  padding: 30px 0;
  position: relative;
  width: 80%;
  margin: 50px auto;
}
.axibg {
  background-size: 25% !important;
}
.club_introduce {
  /* text-align: center; */
  /* white-space: nowrap; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.club_logo {
  margin: 0 20px;
  border-radius: 50%;
  background: url(../../assets/club/tcg.png) no-repeat center center;
  overflow: hidden;
  background-color: #ffffff;
  background-size: 120%;
  vertical-align: middle;
  border: 1px solid #816710;
  width: 400px;
  height: 400px;
  animation: rotate 15s infinite linear;
}
.club_logo.club_axilogo {
  background-size: 70%;
}
/* .club_logo img{
		width: 100%;
	} */
.club_con {
  vertical-align: middle;
  /* width: 900px; */
  height: auto;
  position: relative;
}
.club_text_bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: url(../../assets/club/tcg.png) no-repeat center center;
  background-size: 60%;
}
.club_text_bg.axibg {
  background-size: 25% !important;
}
.club_text_bg_mb1 {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(86, 67, 36, 1);
  transition: all 0.3s ease-in-out;
  border-radius: 0 20px;
}
.club_text_bg_mb2 {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 0 20px;
}
.club_info:hover .club_text_bg_mb1 {
  width: 0px;
}
.club_text {
  position: relative;
  z-index: 8;
  line-height: 1.5em;
  margin-left: 10px;
  text-indent: 3em;
  letter-spacing: 0.15em;
  text-align: left !important;
  border-radius: 0 20px;
  padding: 2em;
  max-height: 200px;
  overflow-y: scroll;
  font-size: 25px;
  /* white-space: pre-wrap; */
}
@media (max-width: 1100px) {
  .club_introduce {
    text-align: center;
    display: block !important;
  }
  /* .club_introduce > div{
			display: block;
		} */
  .club_introduce > div:first-child {
    display: inline-block;
  }
}
@media (max-width: 768px) {
  .club_logo {
    width: 300px;
    height: 300px;
  }
  .club_text {
    font-size: 20px;
    letter-spacing: unset;
    text-indent: 2em;
  }
}
@media (max-width: 500px) {
  .club_logo {
    width: 200px;
    height: 200px;
  }
}
@keyframes rotate {
  0% {
    transform: rotateZ(-360deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
