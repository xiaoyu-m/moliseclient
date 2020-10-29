<!-- 模块名：mTrainingDirection 培养方向 缩写：mTrainingD 负责人：欧艺鹏 2020/6/15 -->
<template>
  <div>
    <titles title="培养方向" />
    <el-carousel :interval="4000" type="card" :style="{Height: itemOffsetHeight+'px !important'}">
      <el-carousel-item
        v-for="item in MTDINList"
        :key="item.id"
        :style="{Height: itemOffsetHeight+'px !important'}"
      >
        <div class="mTrainingD" ref="MTDIN">
          <div class="MYoung_name">{{item.name}}</div>
          <div class="MYoung_img">
            <img :src="item.img" />
          </div>
          <div class="MYoung_signUp">立即报名</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "mTrainingD",
  components: {
    titles
  },
  data() {
    return {
      itemOffsetHeight: null,
      MTDINList: [
        {
          id: 0,
          name: "电竞技术类",
          ch: ["XXXXXX", "XXXXXX", "XXXXXX"]
        },
        {
          id: 1,
          name: "赛事活动类",
          ch: ["XXXXXX", "XXXXXX", "XXXXXX"]
        },
        {
          id: 2,
          name: "内容制作类",
          ch: ["XXXXXX", "XXXXXX", "XXXXXX"]
        }
      ]
    };
  },
  mounted() {
    // this.changeElementHeight()
  },
  methods: {
    changeElementHeight() {
      this.$nextTick(() => {
        console.log(this.$refs);
        // this.itemOffsetHeight = this.$refs.MTDIN[0].clientHeight;
        // console.log(this.$refs.teacher)
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./mTrainingDirection";
</style>
