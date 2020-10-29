<!-- 模块名：teachingResources 教学资源 缩写：teachingR 负责人：欧艺鹏 日期 2020年6月6日 -->
<template>
	<div  class="rS">
		<titles :title="title"/>
		<!-- 滑块 -->
		<!-- 轮播标题 -->
		<div class="strength_swiper teachingResources">
		  <div class="strength_swiper_title">
		    <div>
		      <!-- 文字导航 -->
				<el-row :gutter="10">
				  <el-col
				    :xs="8"
				    :sm="8"
				    :md="8"
				    :lg="8"
				    :xl="8"
				    v-for="item in swiper_page"
				    :key="item.id"
				  >
				    <div class="text_con">
				      <div @click="moveSlider(item.index)" :id="item.type" :ref="item.type">{{ item.name }}</div>
				    </div>
				  </el-col>
				</el-row>
		      <div id="swiper_line" class="swiper_line">
		        <!-- 线条以及定位滑块 -->
		        <span id="slider" :style="{left:moveToPx+'px'}" ref="slider">
		          <!-- 标识活动状态的滑块 -->
		        </span>
		      </div>
		    </div>
		  </div>
		</div>
		<!-- 教师swiper -->
		<div class="m_teacher">
			<el-carousel
			  :style="{Height: itemOffsetHeight+'px !important'}"
			  ref="swiper"
			  :autoplay="false"
			  indicator-position="none"
			  arrow="never"
			  @change="hidetext"
			>
			  <el-carousel-item
			    v-for="item2 in swiperItem"
				:key="item2.id" 
			    :style="{Height: itemOffsetHeight+'px !important'}"
			  >
				<el-carousel
				  :style="{Height: itemOffsetHeight+'px !important'}"
				  ref="swiper"
				  :autoplay="false"
				  indicator-position="none"
				  arrow="always"
				  @change="hidetext"
				>
					<el-carousel-item
					  v-for="item in item2.array"
					  :style="{Height: itemOffsetHeight+'px !important'}"
					>
						<div
						:ref="item.id"
						>
							<div class="m_teacher_name">
							  <div>
								<div>
								  <img src="../../assets/img/logo_orange_min.png"/>
								</div>
								<div>
								  <span>{{item.name}}</span>
								</div>
							  </div>
							</div>
							<div class="m_teacher_view_more" :class="{m_div_active_class:item.id==m_teacher_id}" @click="view_more(item.id)" >
							  <div>
								  点击查看详情
								  <div>
									&lt; &lt; ·  更多· &gt; &gt;
								  </div>
							  </div>
							</div>
							<div class="m_teacher_text" :class="{m_teacher_active_class:item.id==m_teacher_id}" :key="item.id" @click="view_more('')" >
							  <ul>
								<li v-for="introduceItem2 in item.introduce" :key="introduceItem2.id" >{{introduceItem2}}</li>
							  </ul>
							</div>
							<div class="m_teacher_img" ref="teacher">
							  <div>
								  <img id="swiperTargetHeight" :src="item.m_url"></img>
							  </div>
							</div>
						</div>
					</el-carousel-item>
				</el-carousel>
			  </el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "teachingR",
  components: {
    titles
  },
  data() {
    return {
      /**
       * moveToPx
       * nowItemPositionData
       * nowItemWidthData
       * sliderWidthData
       * swiper_page
       * m_teacher_list
       * strength_page
       */
      title: "教学资源",
      moveToPx: 65,
      itemOffsetHeight: null,
      swiperHeight: null,
      nowpage: 0,
      moveToPx: null,
      nowItemPositionData: null,
      nowItemWidthData: null,
      sliderWidthData: null,
      strength_page: null,
      title: "教学资源",
      m_teacher_id: "",
      swiper_page: [
        {
          id: 0,
          index: 0,
          name: "教师团队",
          type: "teacher"
        },
        {
          id: 1,
          index: 1,
          name: "明星学员",
          type: "club"
        },
        {
          id: 2,
          index: 2,
          name: "青训营",
          type: "young"
        }
      ],
      swiperItem: [
        {
          id: "teacher",
          array: [
            {
              m_url: require("../../assets/img/teacher/wenqingyi.jpg"),
              name: "温庆煜",
              index: 0,
              id: "wqy",
              title: "教练",
              introduce: [
                "2015年，开始从事CF、逆战职业选手",
                "2015—2016年，先后拿下全国冠军、山东TGA逆战冠军",
                "2017转型PUBG",
                "2017年4月加入VTA俱乐部并参加第一届绝地求生全球邀请赛（PGI）并获得季军",
                "5月创立山东第一家腾讯认证俱乐部GameG电子竞技俱乐部，并先后参加斗鱼大奖赛，虎牙天命杯，NEST全国总决赛，绝地求生发展联赛PDL2019年创立和平精英分部，其中王者荣耀分部拿下2019CMEL全国总冠军"
              ]
            },
            {
              m_url: require("../../assets/img/teacher/liruoyan.jpg"),
              name: "李若妍",
              index: 1,
              id: "lry",
              title: "教练",
              introduce: [
                "上海大神电竞签约解说、艺人",
                "河北师范大学播音与主持艺术、中国传媒大学广播电视编导双学位",
                "2017-2018共青团中国青年网编辑记者",
                "2019蜘蛛电竞PUBG解说",
                "PUBG加油！全明星解说",
                "2019虎牙天命杯中场采访",
                "MCG欢乐邀请赛解说",
                "PUBG春泥杯解说",
                "虎牙第三届公会赛解说"
              ]
            },
            {
              m_url: require("../../assets/img/teacher/baolan.jpg"),
              name: "宝蓝",
              index: 2,
              id: "bl",
              title: "教练",
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
              m_url: require("../../assets/img/teacher/yaojing.png"),
              name: "妖精",
              index: 3,
              id: "yj",
              title: "教练",
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
              m_url: require("../../assets/img/teacher/zhangling.jpg"),
              name: "张陵",
              index: 4,
              id: "zl",
              title: "教练",
              introduce: [
                "国家二级人力资源管理师",
                "成都市武侯区电竞协会秘书长",
                "赛伯顿连锁电竞馆常务副总",
                "四川省互联网上网服务场所职业经理人",
                " 擅长课程:人力资源体系搭建，连锁营运管理体系搭建"
              ]
            },
            {
              m_url: require("../../assets/img/teacher/yanyiling.jpg"),
              name: "颜弋凌",
              index: 5,
              id: "yyl",
              title: "教练",
              introduce: [
                "电竞数据分析师",
                "英国赫特福德大学MBA硕士",
                "英国赫特福德大学电竞社数据分析分部部长",
                "CMEL全国移动电竞超级联赛数据分析师",
                "Ti8、Ti9冠军OG战队亚洲分部数据分析师",
                "2010年西安科技大学电子竞技大赛策划、执行负责人",
                "主讲课程：电竞数据分析、电竞商务英语。"
              ]
            },
            {
              m_url: require("../../assets/img/teacher/qiaoshan.jpg"),
              name: "谯山 ",
              index: 6,
              id: "qs",
              title: "教练",
              introduce: [
                "四川慈善电竞大赛主策划、执行负责人",
                "第三届温江电竞文化节主策划、执行负责人",
                "CMEL全国移动电竞超级联赛四川赛区主策划、执行负责人",
                "四川文化传媒职业学院电竞赛事主策划",
                "四川文化传媒职业学院电竞专业教师，执教《电子竞技解说基础》、《电子竞技赛事与运营》"
              ]
            },
            {
              m_url: require("../../assets/img/teacher/liuxichao.jpg"),
              name: "刘夕超",
              index: 7,
              id: "lxc",
              title: "教练",
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
              ]
            }
          ]
        },
        {
          id: "club",
          array: [
            {
              m_url: require("../../assets/img/axi_club/liruoyan.jpg"),
              name: "李若妍",
              logoimg: require("../../assets/img/class/hpjy_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              index: 0,
              id: "wqy",
              technicalTitle: "李若妍",
              introduce: [
                "2015年，开始从事CF、逆战职业选手",
                "2015—2016年，先后拿下全国冠军、山东TGA逆战冠军",
                "2017转型PUBG",
                "2017年4月加入VTA俱乐部并参加第一届绝地求生全球邀请赛（PGI）并获得季军",
                "5月创立山东第一家腾讯认证俱乐部GameG电子竞技俱乐部，并先后参加斗鱼大奖赛，虎牙天命杯，NEST全国总决赛，绝地求生发展联赛PDL2019年创立和平精英分部，其中王者荣耀分部拿下2019CMEL全国总冠军"
              ]
            },
            {
              m_url: require("../../assets/img/tcg/tcg6.jpg"),
              name: "TCG老黄",
              logoimg: require("../../assets/img/class/lol_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              index: 2,
              id: "bl",
              technicalTitle: "TCG老黄",
              introduce: []
            },
            {
              m_url: require("../../assets/img/axi_club/Sao.jpg"),
              name: "少",
              logoimg: require("../../assets/img/class/wzry_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              index: 3,
              id: "yj",
              technicalTitle: "少",
              introduce: []
            },
            {
              m_url: require("../../assets/img/tcg/tcg5.jpg"),
              name: "TCG丶Liang",
              logoimg: require("../../assets/img/class/jdqs_gold.png"),
              bgimg: require("../../assets/img/teacher/logo_teacher_bg.png"),
              index: 6,
              id: "qs",
              technicalTitle: "TCG丶Liang",
              introduce: []
            }
          ]
        },
        {
          id: "young",
          array: [
            {
              m_url: require("../../assets/img/class/pubg2.jpg"),
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
              m_url: require("../../assets/img/class/lol2.jpg"),
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
              m_url: require("../../assets/img/class/wzry1.jpg"),
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
              m_url: require("../../assets/img/class/pubg1.jpg"),
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
    this.changeElementHeight();
    window.onresize = e => {
      if (e.path[0].innerWidth > 1600) {
        this.moveSlider(this.strength_page);
        this.changeElementHeight();
      }
      if (e.path[0].innerWidth <= 1600) {
        this.moveSlider(this.strength_page);
        this.changeElementHeight();
      }
    };
  },
  computed: {
    //初始化获得swiper
    swiper() {
      // console.log(this.$refs.swiper)
      return this.$refs.swiper;
    }
  },
  methods: {
    hidetext() {
      this.m_teacher_id = "";
    },
    /**
     * moveSlider()
     * @param {Object} e 用传入的参数，查找对应的轮播页面
     * 计算法则：元素宽度减去滑块宽度的差的一半去加上元素的left
     * nowItemPosition 点击的dom的left
     * nowItemWidth  点击dom的宽度
     * sliderWidth 滑块宽度
     * moveTo 计算出来的移动距离
     * goTarget 跳转到对应轮播页面
     * strength_page_num 设置页面显示页数
     * strength_page 设置页面索引
     */
    moveSlider(e) {
      let nowItemPosition = this.$refs[`${this.swiper_page[e].type}`][0]
        .offsetLeft;
      let nowItemWidth = this.$refs[`${this.swiper_page[e].type}`][0]
        .offsetWidth;
      let sliderWidth = this.$refs.slider.offsetWidth;
      let moveTo = (nowItemWidth - sliderWidth) / 2 + nowItemPosition - 5;
      let goTarget = this.swiper;
      this.moveToPx = moveTo;
      goTarget.setActiveItem(this.swiper_page[e].index, 1000, false);
      this.strength_page_num = this.swiper_page[e].index + 1;
      this.strength_page = this.swiper_page[e].index;
    },
    //动态改变element自带的轮播高度
    changeElementHeight() {
      this.$nextTick(() => {
        this.itemOffsetHeight = this.$refs.wqy[0].offsetHeight - 3;
        // console.log(this.$refs)
      });
    },
    view_more(e) {
      // console.log(e)
      this.m_teacher_id = e;
    }
  }
};
</script>

<style lang="less" scoped="scoped">
@import "./teachingResources.less";
</style>
