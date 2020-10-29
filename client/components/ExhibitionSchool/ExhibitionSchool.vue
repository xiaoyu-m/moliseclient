<!-- ExhibitionSchool 缩写：EXTSH 魅力展现 负责人：欧艺鹏-->
<template>
  <div>
    <titles :title="title"></titles>
    <div class="strength_swiper">
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
          <!-- 中间展示区域 -->
          <!-- 轮播 -->
          <el-carousel
            :style="{Height: itemOffsetHeight+'px !important'}"
            ref="swiper"
            :autoplay="false"
            indicator-position="none"
            arrow="never"
          >
            <el-carousel-item :style="{Height: itemOffsetHeight+'px !important'}">
              <pageGroup :PageList="student" ref="page" />
            </el-carousel-item>
            <el-carousel-item :style="{Height: itemOffsetHeight+'px !important'}">
              <pageGroup :PageList="teacher" ref="page" />
            </el-carousel-item>
            <el-carousel-item :style="{Height: itemOffsetHeight+'px !important'}">
              <pageGroup :PageList="day" ref="page" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "@/components/title/title";
import pageGroup from "@/components/pageGroup/pageGroup";
export default {
  components: {
    titles,
    pageGroup
  },
  data() {
    return {
      title: "魅力展现",
      moveToPx: 65,
      // 分页

      //element轮播的自适应高度
      itemOffsetHeight: null,
      swiper_page: [
        {
          id: 0,
          index: 0,
          name: "优秀队员",
          type: "club"
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
          name: "青训日常",
          type: "young"
        }
      ],
      //轮播索引，从0开始
      strength_page: null,
      //页面显示轮播位置，从1开始
      strength_page_num: null,
      student: [
        {
          url: require("../../assets/img/axi_club/liruoyan.jpg"),
          name: "李若妍"
        },
        {
          url: require("../../assets/img/tcg/tcg6.jpg"),
          name: "TCG老黄"
        },
        {
          url: require("../../assets/img/axi_club/Sao.jpg"),
          name: "少"
        },
        {
          url: require("../../assets/img/tcg/tcg5.jpg"),
          name: "TCG丶Liang"
        }
      ],
      day: [
        {
          url: require("../../assets/img/class/pubg2.jpg"),
          name: "和平精英"
        },
        {
          url: require("../../assets/img/class/lol2.jpg"),
          name: "英雄联盟"
        },
        {
          url: require("../../assets/img/class/wzry1.jpg"),
          name: "王者荣耀"
        },
        {
          url: require("../../assets/img/class/pubg1.jpg"),
          name: "绝地求生"
        }
      ],
      teacher: [
        {
          url: require("../../assets/img/teacher/baolan.jpg"),
          name: "宝蓝"
        },
        {
          url: require("../../assets/img/teacher/qiaoshan.jpg"),
          name: "谯山 "
        },
        {
          url: require("../../assets/img/teacher/yaojing.png"),
          name: "妖精"
        },
        {
          url: require("../../assets/img/teacher/wenqingyi.jpg"),
          name: "温庆煜"
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
      this.changeElementHeight();
      if (e.target.innerWidth > 1600) {
        this.moveSlider(this.strength_page);
      }
      if (e.target.innerWidth <= 1600) {
        this.moveSlider(this.strength_page);
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
      let moveTo = (nowItemWidth - sliderWidth) / 2 + nowItemPosition - 10;
      let goTarget = this.swiper;
      goTarget.setActiveItem(this.swiper_page[e].index, 1000, false);
      this.moveToPx = moveTo;
      this.strength_page_num = this.swiper_page[e].index + 1;
      this.strength_page = this.swiper_page[e].index;
    },
    //动态改变element自带的轮播高度
    changeElementHeight() {
      this.$nextTick(() => {
        this.itemOffsetHeight = this.$refs.page.$el.offsetHeight;
        // console.log(this.$refs.teacher)
      });
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
@import "./ExhibitionSchool";
</style>
