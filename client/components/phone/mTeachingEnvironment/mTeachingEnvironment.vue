<!-- 模块名：mTeachingEnvironment 教学环境 缩写mTeachingE 负责人：欧艺鹏 2020/6/15 -->
<template>
  <div>
	  <titles title="教学环境" />
	  <div class="swiper-box">
	        <!-- swiper1 -->
		<swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
		  <swiper-slide class="slide-1">
			  <img src="../../../assets/img/phone/al3.jpg"/>
		  </swiper-slide>
		  <swiper-slide class="slide-2">
			  <img src="../../../assets/img/phone/al4.jpg"/>
		  </swiper-slide>
		  <swiper-slide class="slide-3">
			  <img src="../../../assets/img/phone/al5.jpg"/>
		  </swiper-slide>
		  <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
		  <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
		</swiper>
		<!-- swiper2 Thumbs -->
		<swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
		  <swiper-slide class="slide-1">
			  <img src="../../../assets/img/phone/al3.jpg"/>
		  </swiper-slide>
		  <swiper-slide class="slide-2">
			  <img src="../../../assets/img/phone/al4.jpg"/>
		  </swiper-slide>
		  <swiper-slide class="slide-3">
			  <img src="../../../assets/img/phone/al5.jpg"/>
		  </swiper-slide>
		</swiper>
	  </div>
	  <div class="mTrainingD_signUp">
		 <router-link to="/signUp">立即报名</router-link>
	  </div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "mTeachingE",
  components: {
    titles
  },
  data() {
    return {
      itemOffsetHeight: null,
      swiperOptionTop: {
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    // this.changeElementHeight()
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    changeElementHeight() {
      this.$nextTick(() => {
        console.log(this.$refs);
        this.itemOffsetHeight = this.$refs.Myoung[0].clientHeight + 20;
        // console.log(this.$refs.teacher)
      });
    }
  }
};
</script>

<style lang="less">
@import "./mTeachingEnvironment";
</style>
