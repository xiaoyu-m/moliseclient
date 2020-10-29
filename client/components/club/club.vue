<template>
  <div>
    <titles :title="title"></titles>
    <clubIntroduce :club_introduce_list="tcg" />
    <clubSwiper :club_list="tcg_club_list" />
    <clubIntroduce :club_introduce_list="axi" />
    <axiSwiper :axiclub_list="axi_club_list" />
  </div>
</template>

<script>
import titles from "../../components/title/title.vue";
import clubSwiper from "../../components/club_swiper/club_swiper.vue";
import clubIntroduce from "../../components/club_introduce/club_introduce.vue";
import axiSwiper from "../../components/club_axiswiper/club_axiswiper.vue";
export default {
  name: "club",
  components: {
    titles,
    clubSwiper,
    clubIntroduce,
    axiSwiper
  },
  data() {
    return {
      title: "俱乐部",
      tcg_club_list: [
        {
          id: 1,
          type: "tcg",
          title: "TCG小梦",
          club_people_img: require("../../assets/img/tcg/tcg1.jpg")
        },
        {
          id: 2,
          type: "tcg",
          title: "TCG温庆煜",
          club_people_img: require("../../assets/img/tcg/tcg2.jpg")
        },
        {
          id: 3,
          type: "tcg",
          title: "TCG辛星",
          club_people_img: require("../../assets/img/tcg/tcg3.jpg")
        },
        {
          id: 4,
          type: "tcg",
          title: "TCG苏楠",
          club_people_img: require("../../assets/img/tcg/tcg4.jpg")
        },
        {
          id: 5,
          type: "tcg",
          title: "TCG丶Liang",
          club_people_img: require("../../assets/img/tcg/tcg5.jpg")
        },
        {
          id: 6,
          type: "tcg",
          title: "TCG老黄",
          club_people_img: require("../../assets/img/tcg/tcg6.jpg")
        },
        {
          id: 7,
          type: "tcg",
          title: "TCG清醒",
          club_people_img: require("../../assets/img/tcg/tcg7.jpg")
        },
        {
          id: 8,
          type: "tcg",
          title: "TCG恩少",
          club_people_img: require("../../assets/img/tcg/tcg8.jpg")
        },
        {
          id: 9,
          type: "tcg",
          title: "TCG长歌",
          club_people_img: require("../../assets/img/tcg/tcg9.jpg")
        }
      ],
      tcg: [
        {
          clublogo: "../../assets/club/tcg.png",
          text:
            "四川摩立斯电竞科技有限责任公司是一家专注于电子竞技赛事与职业俱乐部运营的公司，致力于电子竞技职业俱乐部的拓展与探索。公司于2018年创立于成都，同年成立TCG王者荣耀分部，前TES王者分部教练加入TCG，拿下华硕杯冠军，天翼杯冠军，CMEL全国总冠军。2019年底，成立TCG和平精英分部，2020年初，收购RDG俱乐部加入TCG，备战2020PEN联赛。"
        }
      ],
      axi: [
        {
          type: "axi",
          clublogo: "../../assets/club/axilogo.png",
          text:
            "Axi电子竞技俱乐部成立于2019年4月4日，2020年，Axi电子竞技俱乐部成功晋级绝地求生冠军联赛（PCL）。"
        }
      ],
      axi_club_list: [
        {
          id: 1,
          type: "axi",
          title: "宝蓝",
          axiclub_people_img: require("../../assets/img/axi_club/baolan.jpg")
        },
        {
          id: 2,
          type: "axi",
          title: "黑鬼",
          axiclub_people_img: require("../../assets/img/axi_club/heigui.jpg")
        },
        {
          id: 3,
          type: "axi",
          title: "KK",
          axiclub_people_img: require("../../assets/img/axi_club/KK.jpg")
        },
        {
          id: 4,
          type: "axi",
          title: "经理-李若妍",
          axiclub_people_img: require("../../assets/img/axi_club/liruoyan.jpg")
        },
        {
          id: 5,
          type: "axi",
          title: "Sao",
          axiclub_people_img: require("../../assets/img/axi_club/Sao.jpg")
        },
        {
          id: 6,
          type: "axi",
          title: "十九",
          axiclub_people_img: require("../../assets/img/axi_club/shijiu.jpg")
        },
        {
          id: 7,
          type: "axi",
          title: "妖精-队服照",
          axiclub_people_img: require("../../assets/img/axi_club/yaojing.jpg")
        },
        {
          id: 8,
          type: "axi",
          title: "妖精-生活照",
          axiclub_people_img: require("../../assets/img/axi_club/yaojing_live.jpg")
        }
      ]
    };
  }
};
</script>

<style>
</style>
