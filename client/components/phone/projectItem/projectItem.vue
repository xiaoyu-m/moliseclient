<!-- 模块名：projectItem 负责人：欧艺鹏 2020/6/15 -->
<template>
  <div class="">
	  <titles :title="title"></titles>
	  <div >
		  
	  </div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "projectItem",
  components: {
    titles
  },
  data() {
    return {
      title: "教学项目",
      itemOffsetHeight: null
    };
  },
  mounted() {
    // this.changeElementHeight()
  },
  methods: {
    changeElementHeight() {
      this.$nextTick(() => {
        console.log(this.$refs);
        this.itemOffsetHeight = this.$refs.page.clientHeight;
        // console.log(this.$refs.teacher)
      });
    },
    openInfo(e) {
      this.$router.push("/teacherGroupInfo/" + e);
    }
  }
};
</script>

<style lang="less">
@import "./projectItem";
</style>
