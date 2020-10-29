<!-- 模块名：teacherGroup 负责人：欧艺鹏 2020/6/15 -->
<template>
  <div>
	  <titles title="教师团队"></titles>
		<div class="m_teacherGroup">
			<el-row :gutter="20" ref="page">
			  <el-col 
			  :span="10"
			   :push="2"
			   v-for="item in teachgroup"
			   class="m_teacherGroup_teacher"
			   :key="item.id">
				  <div class="m_teacherGroup_item" @click="openInfo(item.id)">
					<div class="m_teacherGroup_img">
						<img :src="item.pic"/>
						<div class="m_teacherGroup_name">
							{{item.name}}
						</div>
					</div>
				  </div>
			  </el-col>
			</el-row>
			</div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "teacherGroup",
  components: {
    titles
  },
  data() {
    return {
      itemOffsetHeight: null,
      teachgroup: [
        {
          id: 0,
          name: "郝勤",
          pic: require("../../../assets/img/teacher1/haoqin.jpg")
        },
        {
          id: 1,
          name: "彭立",
          pic: require("../../../assets/img/teacher1/pengli.jpg")
        },
        {
          id: 2,
          name: "张陵",
          pic: require("../../../assets/img/teacher1/zhanglin.jpg")
        },
        {
          id: 3,
          name: "刘夕超",
          pic: require("../../../assets/img/teacher1/liuxichao.jpg")
        },
        {
          id: 4,
          name: "温庆煜",
          pic: require("../../../assets/img/teacher1/wenqingyu.jpg")
        },
        {
          id: 5,
          name: "熊彬焱",
          pic: require("../../../assets/img/teacher1/xiongbinyan.jpg")
        },
        {
          id: 6,
          name: "谯山",
          pic: require("../../../assets/img/teacher1/qiaoshan.jpg")
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
@import "./teacherGroup";
</style>
