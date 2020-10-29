<!-- 模块名：mYoung 负责人：欧艺鹏 2020/6/15 -->
<template>
  <div>
    <titles title="青训营" />
    <el-carousel :interval="4000" type="card" :style="{Height: itemOffsetHeight+'px !important'}">
      <el-carousel-item
        v-for="item in MYoung"
        :key="item.id"
        :style="{Height: itemOffsetHeight+'px !important'}"
      >
        <div class="MYoung" ref="Myoung">
          <div class="MYoung_name">{{item.name}}</div>
          <div class="MYoung_img">
            <img :src="item.img" />
          </div>
          <div class="MYoung_signUp"><router-link to="/signUp">立即报名</router-link></div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "mYoung",
  components: {
    titles
  },
  data() {
    return {
      itemOffsetHeight: null,
      MYoung: [
        {
          id: 0,
          name: "英雄联盟",
          img: require("../../../assets/img/class/lol1.jpg"),
          text:
            "从基本功到游戏各阶段所有、意识、比赛运营、，操作以及注意要点；团队合作提升交流，针对各位置做问题解答、复盘，根据个人的情况定制专属的训练计划。"
        },
        {
          id: 1,
          name: "绝地求生",
          img: require("../../../assets/img/class/pubg1.jpg"),
          text:
            "地图资源数据分析，地图资源点分配，房屋结构，载具分析与刷新点，武器伤害数据分析，枪械选择与配件搭配，枪法、身法搭配运用：预瞄点与压枪基础身法的定义和运用，枪法和身法结合运用，投掷物的运用，听声辨位等。"
        },
        {
          id: 2,
          name: "和平精英",
          img: require("../../../assets/img/class/hpjy2.jpg"),
          text:
            "和平精英基础设置讲解；信号值详解；前五机制详解；场景地图资源详解；载具、背包与防具详解；步枪、冲锋枪、狙击枪讲解；学习职业战队战术体系；完善团队问题；参加和平精英职业队训练赛等"
        },
        {
          id: 3,
          name: "王者荣耀",
          img: require("../../../assets/img/class/wzry2.jpg"),
          text:
            "英雄分类讲解、英雄特长讲解、英雄定位讲解、英雄团战讲解、KPL赛事运营讲解等。"
        }
      ]
    };
  },
  mounted() {
    this.changeElementHeight();
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
@import "./MYoung";
</style>
