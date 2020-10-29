<template>
	<div>
		<div class="axiclub_swiper_total">
			<div class="axiclub_swiper_con">
				<div v-for="item in axiclub_list" :key="item.id">
					<img :src="item.axiclub_people_img" />
					<div>
						{{item.title}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "axiSwiper",
  props: {
    axiclub_list: Array
  },
  data() {
    return {
      hidden_width: 0,
      all_width: 0,
      show_width: 0,
      swiper_index: 0,
      swiperOBJ: Object
    };
  },
  mounted() {
    window.addEventListener("beforeunload", e => {
      this.beforeunloadHandler(e);
    });
    this.swiperOBJ = document.querySelector(".axiclub_swiper_con");
    this.all_width = this.swiperOBJ.scrollWidth;
    this.show_width = this.swiperOBJ.clientWidth;
    this.hidden_width = this.all_width - this.show_width;
    this.go_axiclubSwiper(0);
  },
  created() {
    window.addEventListener("beforeunload", this.updateHandler);
  },
  destroyed() {
    window.removeEventListener("beforeunload", e => {
      this.beforeunloadHandler(e);
    });
  },

  methods: {
    beforeunloadHandler(e) {
      e = e || window.event;
      if (e) {
        let myStyle = document.styleSheets[1];
        myStyle.deleteRule(styles[0]);
        // e.returnValue = "您是否确认离开此页面-您输入的数据可能不会被保存";
      }
    },
    /*
				开启轮播
			 */
    go_axiclubSwiper: function(e) {
      let hidden_width = this.hidden_width;
      let hidden_width2 = this.hidden_width;
      let swiper_index = this.swiper_index;
      let styles = new Array();
      let swiperObj = this.swiperOBJ;
      let myStyle = document.styleSheets[1];
      styles = [
        "@keyframes axi{from{right:0}to{right:" + hidden_width + "px}}"
      ];
      if (e == 0) {
        myStyle.insertRule(styles[0]); //写入样式
      } else {
        myStyle.deleteRule(styles[0]);
        console.log("c");
        alert("c");
      }
      // setInterval(function(){
      // 	if (hidden_width>0 && swiper_index ==0) {
      // 		swiperObj.style.right=hidden_width--+'px'
      // 	} else{
      // 		swiper_index=1
      // 	}
      // 	if (hidden_width< hidden_width2 && swiper_index==1) {
      // 		swiperObj.style.right=hidden_width+++'px'
      // 	} else{
      // 		swiper_index=0
      // 	}
      // },10)
    }
  }
};
</script>

<style scoped="scoped">
.axiclub_swiper_total {
  width: 80%;
  margin: 20px auto;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  line-height: 0;
}
.axiclub_swiper_con {
  position: relative;
  animation: axi 15s infinite linear;
  right: 0;
}
.axiclub_swiper_con > div {
  width: 300px;
  height: 400px;
  display: inline-block;
  position: relative;
}
.axiclub_swiper_con > div > div {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 50px;
}
.axiclub_swiper_con img {
  height: 100%;
  width: 100%;
}
.axiclub_swiper_arr {
}
</style>
