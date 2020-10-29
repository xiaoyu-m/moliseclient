<!-- mRotation 首页轮播，，负责人：欧艺鹏 -->
<template>
  <div class="mRotation">
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="item in img">
        <img :src="item" />
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- 左右箭头 -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'mRotation',
  components: {},
  props: {
    PageList: Array
  },
  data() {
    return {
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination'
        },
        //自动轮播
        autoplay: {
          delay: 2000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        //开启循环模式
        loop: true
      },
      img: [
        require('../../../assets/img/honor/honor1-1.jpg'),
        require('../../../assets/img/honor/honor1-2.jpg')
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
@import './mRotation';
</style>
