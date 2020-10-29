<template>
	<div>
		<div class="club_swiper_total">
			<div class="club_swiper_con">
				<div v-for="item in club_list" :key="item.id">
					<img :src="item.club_people_img" />
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
  name: "clubSwiper",
  props: {
    club_list: Array
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
    this.swiperOBJ = document.querySelector(".club_swiper_con");
    this.all_width = this.swiperOBJ.scrollWidth;
    this.show_width = this.swiperOBJ.clientWidth;
    this.hidden_width = this.all_width - this.show_width;
    this.go_clubSwiper(this.hidden_width);
  },
  methods: {
    /*
				开启轮播
			 */
    go_clubSwiper: function() {
      let styles = new Array();
      let swiperObj = this.swiperOBJ;
      let hidden_width = this.hidden_width;
      let hidden_width2 = this.hidden_width;
      let swiper_index = this.swiper_index;
      let myStyle = document.styleSheets[1];
      // console.log(hidden_width)
      styles = [
        "@keyframes tcg{from{right:0}to{right:" + hidden_width + "px}}"
      ];
      myStyle.insertRule(styles[0]); //写入样式
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

<style>
.club_swiper_total {
  width: 80%;
  margin: 20px auto;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
  line-height: 0;
}
.club_swiper_con {
  position: relative;
  right: 0;
  animation: tcg 15s infinite linear;
}
.club_swiper_con > div {
  width: 300px;
  height: 400px;
  display: inline-block;
  position: relative;
}
.club_swiper_con > div > div {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  line-height: 50px;
}
.club_swiper_con img {
  height: 100%;
  width: 100%;
}
.club_swiper_arr {
}
/* @keyframes axi{
		from{
				right: 0;
			}to{
				right: 90%;
			}
		} */
</style>
