<!-- mClub 手机俱乐部，负责人：欧艺鹏 -->
<template>
  <div>
    <titles title="入驻俱乐部" />

    <el-carousel :interval="4000" :style="{Height: itemOffsetHeight+'px !important'}">
      <el-carousel-item
        v-for="item in MClubInfo"
        :key="item.id"
        :style="{Height: itemOffsetHeight+'px !important'}"
      >
        <div class="MClub_info" ref="MClub">
          <div class="MClub_name">{{item.name}}</div>
          <div class="MClub_introduce">
            <div :class="{ axilogo: item.id==1 }">
              <img :src="item.clublogo" />
            </div>
            <div>{{item.info}}</div>
          </div>
          <div class="MClub_group_pic">
            <img :src="item.groupimg" />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import titles from "@/components/title/title";
export default {
  name: "mClub",
  components: {
    titles
  },
  props: {
    PageList: Array
  },
  data() {
    return {
      itemOffsetHeight: null,
      MClubInfo: [
        {
          id: 0,
          name: "TCG · 天呈荣耀",
          clublogo: require("../../../assets/club/tcg.png"),
          groupimg: require("../../../assets/img/tcg/tcg_group.jpg"),
          info:
            "四川摩立斯电竞科技有限责任公司是一家专注于电子竞技赛事与职业俱乐部运营的公司，致力于电子竞技职业俱乐部的拓展与探索。公司于2018年创立于成都，同年成立TCG王者荣耀分部，前TES王者分部教练加入TCG，拿下华硕杯冠军，天翼杯冠军，CMEL全国总冠军。2019年底，成立TCG和平精英分部，2020年初，收购RDG俱乐部加入TCG，备战2020PEN联赛。"
        },
        {
          id: 1,
          name: "Axi · 阿细",
          clublogo: require("../../../assets/club/axilogo.png"),
          groupimg: require("../../../assets/img/axi_club/axi_club_group_img.jpg"),
          info:
            "Axi电子竞技俱乐部成立于2019年4月4日，2020年，Axi电子竞技俱乐部成功晋级绝地求生冠军联赛（PCL）。"
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
        this.itemOffsetHeight = this.$refs.MClub[0].clientHeight;
        // console.log(this.$refs.teacher)
      });
    }
  }
};
</script>

<style lang="less">
@import "./MClub";
</style>
