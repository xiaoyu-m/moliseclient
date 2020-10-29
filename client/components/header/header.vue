<template>
  <div id="header">
    <div class="logo-total">
      <a href="/">
        <img src="../../assets/img/logo_gold.png" alt="摩立斯电竞" />
      </a>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      :class="navfadeState?'active':''"
      mode="horizontal"
    >
      <template v-for="(navItem,index) in navList">
        <el-menu-item
          :index="`${index}`"
          :key="navItem.path"
          @click="linkState(index)"
          v-if="navItem.name"
        >
          <a :href="navItem.path">{{navItem.name}}</a>
        </el-menu-item>
      </template>
    </el-menu>
    <b class="nav-btn iconfont icon-caidan" @click.stop="navfadeIn"></b>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
export default {
  name: "Moliseheader",
  data() {
    return {
      title: "header",
      navfadeState: false,
      activeIndex: "",
      navList: this.$router.options.routes
    };
  },
  props: {
    // navList: Array
  },
  methods: {
    linkState(index) {
      if (typeof sessionStorage !== "undefined" || sessionStorage !== null) {
        sessionStorage.setItem("linkState", `${index}`);
        this.activeIndex = sessionStorage.getItem("linkState");
      }
    },
    navfadeIn() {
      this.navfadeState = !this.navfadeState;
    },
    handleClose() {
      this.navfadeState = false;
    }
  },
  created() {
    if (typeof sessionStorage === "undefined" || sessionStorage === null) {
    } else {
      this.activeIndex = sessionStorage.getItem("linkState");
    }
  },
  mounted() {
    document.body.onclick = () => {
      this.handleClose();
    };
  }
};
</script>

<style lang="less">
@import "./header";
</style>
