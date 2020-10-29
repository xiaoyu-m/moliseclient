<!-- strength 实力见证模块 负责人：欧艺鹏-->
<template>
	<div>
		<!-- title -->
		<div>
			<titles :title="title"></titles>
		</div>
		<!-- 轮播标题 -->
		<div class="strength_swiper">
			<div class="strength_swiper_title">
				<div>
					<!-- 文字导航 -->
					<el-row :gutter="10">
						<el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" style="margin-bottom: 0;" v-for="item in swiper_page" :key="item.id">
							<div class="text_con">
								<div @click="moveSlider(item.index)" :id="item.type">{{ item.name }}</div>
							</div>
						</el-col>
					</el-row>
					<div id="swiper_line" class="swiper_line">
						<!-- 线条以及定位滑块 -->
						<span id="slider" :style="{left:moveToPx+'px'}">
							<!-- 标识活动状态的滑块 -->
						</span>
					</div>
					<!-- 轮播 -->
					<swiper :options="swiperOption" ref='swiper'>
						<swiper-slide class="swiper-slide" v-for="item in swiperItem" :key="item.id">
							<Entrance :entrance="item.arry" :ref="item.id" />
						</swiper-slide>
					</swiper>
					<!-- <el-carousel :style="{Height: itemOffsetHeight+'px !important'}" ref="swiper" :autoplay="false" indicator-position="none"
					 arrow="never">
						<el-carousel-item v-for="item in swiperItem" :key="item.id" :style="{Height: itemOffsetHeight+'px !important'}">
							<Entrance :entrance="item.arry" :ref="item.id" />
						</el-carousel-item>
					</el-carousel> -->
					<!-- 页数指示器 -->
					<div class="strength_page">
						<span class="iconfont icon-arrowed-left" @click="prePage()"></span>
						<span>{{strength_page_num}}/3</span>
						<span class="iconfont icon-arrowed-right" @click="nextPage()"></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import titles from "@/components/title/title";
import Entrance from "@/components/entrance/entrance";
export default {
  components: {
    titles,
    Entrance
  },
  data() {
    return {
      title: "实力见证",
      moveToPx: 65,
      //element轮播的自适应高度
      itemOffsetHeight: null,
      swiperOption: {
        //设置点击箭头
        //自动轮播
        // autoplay: {
        //   delay: false,
        //   //当用户滑动图片后继续自动轮播
        //   disableOnInteraction: false,
        // },
        //开启循环模式
        loop: true
      },
      swiper_page: [
        {
          id: 0,
          index: 0,
          name: "青训营",
          type: "young"
        },
        {
          id: 1,
          index: 1,
          name: "教师团队",
          type: "teacher"
        },
        {
          id: 2,
          index: 2,
          name: "优秀队员",
          type: "club"
        }
      ],
      //轮播索引，从0开始
      strength_page: null,
      //页面显示轮播位置，从1开始
      strength_page_num: null,
      swiperItem: [
        {
          id: "teacher",
          arry: [
            {
              url: require("../../assets/img/teacher/wenqingyi.jpg"),
              logoimg: require("../../assets/img/logo_orange_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "温庆煜",
              index: 0,
              id: "wqy",
              technicalTitle: "教练",
              introduce: [
                "2015年，开始从事CF、逆战职业选手",
                "2015—2016年，先后拿下全国冠军、山东TGA逆战冠军",
                "2017转型PUBG",
                "2017年4月加入VTA俱乐部并参加第一届绝地求生全球邀请赛（PGI）并获得季军",
                "5月创立山东第一家腾讯认证俱乐部GameG电子竞技俱乐部，并先后参加斗鱼大奖赛，虎牙天命杯，NEST全国总决赛，绝地求生发展联赛PDL2019年创立和平精英分部，其中王者荣耀分部拿下2019CMEL全国总冠军"
              ]
            },
            {
              url: require("../../assets/img/teacher/baolan.jpg"),
              logoimg: require("../../assets/img/logo_orange_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "宝蓝",
              index: 2,
              id: "bl",
              technicalTitle: "教练",
              introduce: [
                "毕业于四川西华师范大学",
                "2018年9月加入ARGgirls电子竞技俱乐部 担任指挥",
                "获得PGIG女子邀请赛第九期第二名",
                "获得PGIG女子邀请赛第十二期第一名",
                "2019年5月加入REgirls电子竞技俱乐部担任指挥兼队长",
                "获得PWL勇士联赛7月12日单日单人击杀榜第一",
                "获得PWL勇士联赛7月24日获得单日第一名",
                "2020年4月加入Axi电子竞技俱乐部"
              ]
            },
            {
              url: require("../../assets/img/teacher/yaojing.png"),
              logoimg: require("../../assets/img/logo_orange_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "妖精",
              index: 3,
              id: "yj",
              technicalTitle: "教练",
              introduce: [
                "2016级2020年6月正式毕业2016年11月WAY电子竞技俱乐部英雄联盟项目AD位置选手",
                "2016年11月四川传媒学院电竞社英雄联盟部门负责人",
                "2018年5月ECgirls女子电竞俱乐部绝地求生部自由人",
                "2018年9月四川传媒学院电竞社绝地求生部门负责人",
                "2019年3月Unite电子竞技俱乐部APEX英雄项目女选手",
                "2019年4月企鹅电竞直播APEX英雄分区排行榜第一",
                "2019年5月MFC电子竞技俱乐部APEX英雄项目女选手",
                "2019年6月四川新华电脑学院电竞老师，带FPS方向学生"
              ]
            },
            {
              url: require("../../assets/img/teacher/qiaoshan.jpg"),
              logoimg: require("../../assets/img/logo_orange_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "谯山 ",
              index: 6,
              id: "qs",
              technicalTitle: "教练",
              introduce: [
                "四川慈善电竞大赛主策划、执行负责人",
                "第三届温江电竞文化节主策划、执行负责人",
                "CMEL全国移动电竞超级联赛四川赛区主策划、执行负责人",
                "四川文化传媒职业学院电竞赛事主策划",
                "四川文化传媒职业学院电竞专业教师，执教《电子竞技解说基础》、《电子竞技赛事与运营》"
              ]
            }
          ]
        },
        {
          id: "club",
          arry: [
            {
              url: require("../../assets/img/axi_club/liruoyan.jpg"),
              logoimg: require("../../assets/club/axilogo_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "李若妍",
              index: 0,
              id: "wqy",
              technicalTitle: "经理",
              introduce: [
                "2015年，开始从事CF、逆战职业选手",
                "2015—2016年，先后拿下全国冠军、山东TGA逆战冠军",
                "2017转型PUBG",
                "2017年4月加入VTA俱乐部并参加第一届绝地求生全球邀请赛（PGI）并获得季军",
                "5月创立山东第一家腾讯认证俱乐部GameG电子竞技俱乐部，并先后参加斗鱼大奖赛，虎牙天命杯，NEST全国总决赛，绝地求生发展联赛PDL2019年创立和平精英分部，其中王者荣耀分部拿下2019CMEL全国总冠军"
              ]
            },
            {
              url: require("../../assets/img/tcg/tcg6.jpg"),
              logoimg: require("../../assets/club/tcg_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "TCG老黄",
              index: 2,
              id: "bl",
              technicalTitle: "队员",
              introduce: []
            },
            {
              url: require("../../assets/img/axi_club/Sao.jpg"),
              logoimg: require("../../assets/club/axilogo_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "少",
              index: 3,
              id: "yj",
              technicalTitle: "队员",
              introduce: []
            },
            {
              url: require("../../assets/img/tcg/tcg5.jpg"),
              logoimg: require("../../assets/club/tcg_min.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "TCG丶Liang",
              index: 6,
              id: "qs",
              technicalTitle: "队员",
              introduce: []
            }
          ]
        },
        {
          id: "young",
          arry: [
            {
              url: require("../../assets/img/class/pubg2.jpg"),
              logoimg: require("../../assets/img/class/hpjy_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "和平精英",
              index: 0,
              id: "wqy",
              technicalTitle: "和平精英",
              introduce: [
                "和平精英基础设置讲解；信号值详解；前五机制详解；场景地图资源详解；载具、背包与防具详解；步枪、冲锋枪、狙击枪讲解；学习职业战队战术体系；完善团队问题；参加和平精英职业队训练赛等。"
              ]
            },
            {
              url: require("../../assets/img/class/lol2.jpg"),
              logoimg: require("../../assets/img/class/lol_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "英雄联盟",
              index: 2,
              id: "bl",
              technicalTitle: "英雄联盟",
              introduce: [
                "从基本功到游戏各阶段所有意识、比赛运营，操作以及注意要点；团队合作提升交流，针对各位置做问题解答、复盘，根据个人的情况定制专属的训练计划。"
              ]
            },
            {
              url: require("../../assets/img/class/wzry1.jpg"),
              logoimg: require("../../assets/img/class/wzry_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "王者荣耀",
              index: 3,
              id: "yj",
              technicalTitle: "王者荣耀",
              introduce: [
                "英雄分类讲解、英雄特长讲解、英雄定位讲解、英雄团战讲解、KPL赛事运营讲解等。"
              ]
            },
            {
              url: require("../../assets/img/class/pubg1.jpg"),
              logoimg: require("../../assets/img/class/jdqs_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              name: "绝地求生",
              index: 6,
              id: "qs",
              technicalTitle: "教练",
              introduce: [
                "地图资源数据分析，地图资源点分配，房屋结构，载具分析与刷新点，武器伤害数据分析，枪械选择与配件搭配，枪法、身法搭配运用，预瞄点与压枪基础身法的定义和运用，枪法和身法结合运用，投掷物的运用，听声辨位等。"
              ]
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.moveSlider(0);
    /**
     * 监听窗口改变，将因为宽度变化移位的滑块归位
     */
    // console.log(this.swiperItem[0].id)
    this.$nextTick(function() {
      window.onresize = e => {
        if (e.path[0].innerWidth > 1600) {
          this.moveSlider(this.strength_page);
        }
        if (e.path[0].innerWidth <= 1600) {
          this.moveSlider(this.strength_page);
        }
      };
    });
  },
  computed: {
    //初始化获得swiper
    swiper() {
      console.log(this.$refs.swiper.$swiper);
      return this.$refs.swiper.$swiper;
    }
  },
  methods: {
    /**
     * moveSlider()
     * @param {Object} e 用传入的参数，查找对应的轮播页面
     * 计算法则：元素宽度减去滑块宽度的差的一半去加上元素的left
     * nowItemPosition 点击的dom的let
     * nowItemWidth  点击dom的宽度
     * sliderWidth 滑块宽度
     * moveTo 计算出来的移动距离
     * goTarget 跳转到对应轮播页面
     * strength_page_num 设置页面显示页数
     * strength_page 设置页面索引
     */
    moveSlider(e) {
      let nowItemPosition = document.querySelector(
        "#" + this.swiper_page[e].type
      ).offsetLeft;
      let nowItemWidth = document.querySelector("#" + this.swiper_page[e].type)
        .offsetWidth;
      let sliderWidth = document.querySelector("#slider").offsetWidth;
      let moveTo = (nowItemWidth - sliderWidth) / 2 + nowItemPosition;
      let goTarget = this.swiper;
      this.moveToPx = moveTo;
      this.swiper.slideTo(this.swiper_page[e].index);
      this.strength_page_num = this.swiper_page[e].index + 1;
      this.strength_page = this.swiper_page[e].index;
    },
    //下一页轮播
    nextPage() {
      let goTarget = this.swiper;
      if (this.strength_page <= 1) {
        this.strength_page++;
        this.moveSlider(this.strength_page);
      } else {
        this.moveSlider(0);
      }
    },
    //上一页轮播
    prePage() {
      let goTarget = this.swiper;
      if (this.strength_page == 0) {
        this.moveSlider(2);
        this.strength_page = 2;
      } else if (this.strength_page > 0 && this.strength_page <= 2) {
        this.strength_page--;
        this.moveSlider(this.strength_page);
      }
    }
  }
};
</script>

<style lang="less" scoped="scoped">
@import "./strength";
</style>
