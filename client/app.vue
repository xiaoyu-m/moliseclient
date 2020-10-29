<template>
  <div id="app">
    <el-container>
      <el-header>
        <Moliseheader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer time="2020" copyright="" icp="蜀ICP备20011551号-1" />
      </el-footer>
    </el-container>
    <img class="phone_bg" src="./assets/img/phone/7-1.jpg" alt="摩立斯电竞" />
  </div>
</template>
<script>
// let Title = this.$router.history.mate.title;

import Moliseheader from '@/components/header/header';
import Footer from '@/components/footer/footer';
export default {
  // title: Title,
  components: {
    Moliseheader,
    Footer
  },

  beforeCrete(){},
  data() {
    return {
      contact: [],
      isPc: true
    };
  },
  created() {
    if (this._isMobile()) {
      this.isPc = false;
    } else {
      this.isPc = true;
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    a(){}
  }
};
</script>

<style lang="less">
@import './assets/less/index.less';
</style>
