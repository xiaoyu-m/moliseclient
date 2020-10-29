<!-- 模块名：青训营 负责人：门宇川 2020/6/9 -->
<template>
  <div class="youth_total">
    <titles :title="title" />
    <div class="youth-box">
      <ul class="youthlist">
        <li v-for="item in youngList" :key="item.id" class="demo-image__lazy">
          <el-image :src="item.url" lazy></el-image>
          <div class="youth-info">
            <p class="youth-caption">{{item.name}}</p>
            <p class="m-5">
              <span>学期：{{item.time}}</span>
              
            </p>
            <p class="m-0">
              <span>学费：￥{{item.price}}</span>
              <a href="javascript:void (0);" class="float-right">
                <el-button size="mini">课程详情</el-button>
              </a>
            </p>
          </div>
        </li>
      </ul>
      <el-pagination small layout="prev, pager, next" :total="10"></el-pagination>
    </div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "youth",
  components: {
    titles
  },
  data() {
    return {
      title: "青训营",
      youngList: [
        {
          id: "1001",
          url: require("../../../assets/img/youthCamp/cj.jpg"),
          name: "七天体验",
          time: "三周",
          price: "1980"
        },
        {
          id: "1002",
          url: require("../../../assets/img/youthCamp/zj.jpg"),
          name: "课程名称",
          time: "三个月",
          price: "16800"
        },
        {
          id: "1003",
          url: require("../../../assets/img/youthCamp/gj.jpg"),
          name: "课程名称",
          time: "六个月",
          price: "22800"
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import "./youth";
</style>
