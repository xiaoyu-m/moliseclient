<!-- occupation 职业说明 负责人：王哲宇 -->
<template>
  <div class="window">
	  <div>
	    <titles :title="title"></titles>
	  </div>
	  <div class="text">{{text}}</div>
    <el-carousel indicator-position="none" :interval="4000" :type="carouseType">
      <el-carousel-item style="height: 280px;" v-for="dataList in data" :key="dataList.id" class="occbgc">
        <h1>{{dataList.title}}</h1>
		<h4>{{dataList.titlesmall}}</h4>
		<span>适合：{{dataList.textone}}</span>
		<span>要求：{{dataList.texttwo}}</span>
        <span>时间：{{dataList.textthree}}</span>
		<span>你可以：{{dataList.textfour}}</span>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import titles from "@/components/title/title.vue";
export default {
  components: {
    titles
  },
  data() {
    return {
      title: "电竞教育",
      carouseType: "card",
      text:
        "摩立斯电竞学院培养周期为3~8个月。学院建立了较为成熟的电竞教育体系，通过“班主任+电竞教练+电竞讲师+心理老师+生活老师”的全方位管理模式，将每位到校学员培养成适合他们自身素质的电竞人才。",
      article:
        "摩立斯电竞教育培养周期为3~6个月。学院建立较为成熟的电竞教育体系,通过“班主任+电竞教练+电竞讲师+心理老师+生活老师”的全方位管理模式，将每位到校学员培养成适合他们的电竞人才。",
      data: [
        {
          id: 1,
          title: "打职业",
          titlesmall: "电竞特训",
          textone: "想成为职业电竞选手，但尚未达到职业选拔门槛的人",
          texttwo: "经济水平处于该项目的前20%~30%，不同项目具体要求不同",
          textthree: "三至六个月",
          textfour:
            "学院在经过了入学测评以及了解电竞行业现状后，根据自身喜好，选择未来的职业发展方向，并进一步考取国家人社部发布的新职业证书--电子竞技师、电子竞技职业经理人。"
        },
        {
          id: 2,
          title: "周边人才",
          titlesmall: "高校电竞专业",
          textone: "想在大学学习电竞专业，有意在电竞行业发展的人",
          texttwo:
            "参加高考达到大学录取分数线择优录取部分学校要求参加电竞相关的艺考",
          textthree: "专科三年，本科四年",
          textfour:
            "完成大学学业，学习电竞相关的专业程，具备电竞行业周边人才基本素质，获得大学文凭"
        },
        {
          id: 3,
          title: "电子职业证书",
          titlesmall: "自学大神开黑",
          textone: "喜欢游戏想提升游戏水平的人",
          texttwo: "对游戏水平，年龄没有限制",
          textthree: "自由安排",
          textfour: "休闲娱乐，提升一些游戏水平"
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import "./occupation";
</style>
