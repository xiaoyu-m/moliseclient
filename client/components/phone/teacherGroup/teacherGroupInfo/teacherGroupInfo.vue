<!-- 模块名：teacherGroupInfo 教师详情 teacherGroup的子页面 负责人：欧艺鹏 2020/6/19 -->
<template>
  <div class="signup_total">
	  <titles :title="title"></titles>
	  <div class="teacherGroupInfo_img">
		  <img :src="teacherImg"/>
	  </div>
	  <titles :title="introduceTitle"></titles>
	  <div>
		  <ul>
			  <li v-for="item in list" class="context">
				  {{item}}
			  </li>
		  </ul>
	  </div>
	  <titles :title="classTitle"></titles>
	  <div>
		  <ul>
			  <li class="context">
				  课程名称（点击进入）
			  </li>
		  </ul>
	  </div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "teacherGroupInfo",
  components: {
    titles
  },
  data() {
    return {
      title: "姓名",
      nowId: null,
      teacherImg: require("../../../../assets/img/logo_orange.png"),
      introduceTitle: "行业背景",
      classTitle: "负责课程",
      list: Array,
      itemOffsetHeight: null,
      teacherInfo: [
        {
          id: 0,
          name: "郝勤",
          introduce: [
            "1985年于成都体育学院体育史研究所获硕士学位",
            "长期主要从事体育史、奥林匹克运动、体育新闻传播学方面的科研教学。",
            "现为成都体育学院教授，北京体育大学博士生导师，国家体育总局学术技术带头人，四川省学术技术带头人。",
            "四川大学宗教学研究所客座教授、兼职博士生导师。",
            "四川省社会科学院哲学研究所客座研究员。",
            "曾兼任成都日报等多家报社体育部主任、编委。"
          ],
          pic: require("../../../../assets/img/teacher1/haoqin.jpg")
        },
        {
          id: 1,
          name: "彭立",
          introduce: [
            "文学硕士，教授，国家一级编剧，研究生导师。",
            "曾任峨眉电影制片厂宣发副处长、",
            "四川省峨眉电影发行放映有限责任公司常务副总经理、",
            "四川师范大学评建工作办公室专职副主任和新闻与传播学院首任院长、",
            "书记等职、执教于西南民族大学文学与新闻传播学院.",
            "原四川师范大学新闻与传播学院院长。",
            "主要教学与研究领域为广播电视、影视艺术、新闻传播、传媒文化等。"
          ],
          pic: require("../../../../assets/img/teacher1/pengli.jpg")
        },
        {
          id: 2,
          name: "张陵",
          introduce: [
            "国家二级人力资源师",
            "成都市武侯区电竞协会秘书长",
            "摩立斯电竞职业培训学院就业总监",
            "赛伯顿连锁电竞馆常务副总",
            "四川省互联网上网服务场所职业经理人",
            "擅长课程:人力资源体系搭建，连锁营运管理体系搭建"
          ],
          pic: require("../../../../assets/img/teacher1/zhanglin.jpg")
        },
        {
          id: 3,
          name: "刘夕超",
          introduce: [
            "AXI俱乐部教练",
            "CS1.6前职业选手Akuma.广东Star.eX队长",
            "曾效力广州Sunnet.广州Star.eX",
            "擅长：AK  AWP",
            "职业战绩：",
            "2003扬州电信CS大赛全国总决赛亚军 ",
            "2004CPL全国总决赛季军 ",
            "2005讯景杯冠军、2006ESWC深圳赛区冠军 ",
            "2006IEF广州赛区冠军、2006IEF中国总决赛殿军",
            "2006KODE5中国总决赛亚军、2006WCG中国总决赛亚军"
          ],
          pic: require("../../../../assets/img/teacher1/liuxichao.jpg")
        },
        {
          id: 4,
          name: "温庆煜",
          introduce: [
            "2015开始从事CF，逆战职业2015到2016先后拿下全国冠军，",
            "拿下全部山东TGA逆战冠军。2017转型PUBG2017年4月",
            "加入VTA俱乐部，参加第一届PGI季军，",
            "5月创立山东第一家腾讯认证俱GameG电子竞技俱乐部，",
            "先后参加斗鱼大奖赛，虎牙条命杯，NEST全国总决赛，",
            "京东杯全国总决赛PDL，PCLP，PCL等各大赛事，",
            "2019年创立和平精英分部，王者荣耀分部拿下2019CMEL全国总冠军。"
          ],
          pic: require("../../../../assets/img/teacher1/wenqingyu.jpg")
        },
        {
          id: 5,
          name: "熊彬焱",
          introduce: [
            "VSPN腾讯互娱旗下的泛娱乐活动策划 ",
            "参与了中国电竞发展从零到全民电竞体育的宣传与策划过程。",
            "参与过的大型项目： ",
            "英雄联盟亚洲挑战赛 、王者荣耀冠军杯国际邀请赛 ",
            "枪火游侠洛杉矶国际邀请赛、王者荣耀职业联赛 ",
            "FIFA online 职业联赛 、球球大作战塔坦杯精英挑战赛 ",
            "印尼雅加达亚运会 、王者荣耀KPL总决赛"
          ],
          pic: require("../../../../assets/img/teacher1/xiongbinyan.jpg")
        },
        {
          id: 6,
          name: "谯山",
          introduce: [
            "四川慈善电竞大赛主策划、执行负责人",
            "第三届温江电竞文化节主策划、执行负责人",
            "CMEL全国移动电竞超级联赛四川赛区主策划、执行负责人",
            "四川文化传媒职业学院电竞赛事主策划",
            "四川文化传媒职业学院电竞专业教师，执教《电子竞技解说基础》、《电子竞技赛事与运营》"
          ],
          pic: require("../../../../assets/img/teacher1/qiaoshan.jpg")
        }
      ]
    };
  },
  mounted() {
    // console.log(this.$route.params.id)
    this.getInfo(this.$route.params.id);
  },
  methods: {
    getInfo(e) {
      console.log(e);
      this.nowId = this.$route.params.id;
      this.title = this.teacherInfo[e].name;
      this.teacherImg = this.teacherInfo[e].pic;
      this.list = this.teacherInfo[e].introduce;
    }
  }
};
</script>

<style lang="less">
@import "./teacherGroupInfo";
</style>
