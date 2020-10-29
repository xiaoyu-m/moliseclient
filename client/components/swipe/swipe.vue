<template>
  <swiper :options="swiperOption">
    <swiper-slide class="swiper-slide" v-for="(item, index) in images" :key="index">
      <img :src="item.url" />
    </swiper-slide>
    <!-- 分页器 -->
    <div class="swiper-pagination" slot="pagination"></div>    <!-- 左右箭头 -->
    <div v-show="control" class="swiper-button-prev" slot="button-prev"></div>
    <div v-show="control" class="swiper-button-next" slot="button-next"></div>
  </swiper>

</template>

<script>
export default {
  name: "Swipe",
  props: {
    images: Array,
    control: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      swiperOption: {
        // 显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      }
    };
  },
  mounted() {
    // this.initSwiper();
  },
  methods: {
    initSwiper() {}
  }
};
</script>

<style lang="less">
@import "./swipe";
</style>
