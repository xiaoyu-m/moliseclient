<template>
  <div class="studyAbroad_total">
    <!-- 加载大图 -->
    <div class="IndexImg">
      <img :src="IndexImg" />
    </div>
    <!-- 加载介绍列表 -->
    <div class="studyAbroad_con">
      <titles :title="'摩立斯简介'"></titles>
      <div v-for="item in text" :key="item.id">
        <p>{{ item.con }}</p>
        <p v-if="item.type == 'img'" class="studyAbroad_img">
          <img :src="item.img" />
        </p>
      </div>
    </div>
    <!-- 学院风采 -->
    <honorTime />
  </div>
</template>

<script>
import titles from "@/components/title/title";
import club from "@/components/club/club";
import honorTime from "@/components/honorTime/honorTime";
export default {
  components: {
    titles,
    club,
    honorTime
  },
  data() {
    return {
      IndexImg: require("../../assets/img/molisebg.jpg"),
      text: [
        {
          con:
            "四川摩立斯电竞科技有限责任公司为成都市武侯区电子竞技智力协会（武侯电竞）会长单位，位于四川国际文化人才港，依托人才港作为孵化平台，进行电竞职业人才的定制孵化及市场输出，是全国综合性电子竞技特训基地。"
        },
        {
          con:
            "摩立斯电竞特训，依托强大的教练团队与业内资源，面向全年龄段，打造四川地区硬件设施完善，教练实力优质的培训基地。目前基地共拥有八大领域的专业人才，分为20个方向：电竞数据分析师、裁判、教练、电竞赛事组织、管理、运营、理疗、电竞康复、心理咨询、游戏视屏制作等。"
        }

        // ,{
        //   con:
        //     "摩立斯电竞教育培训板块分为：电竞技术类、赛事活动类、体育医疗类、内容制作类、电竞金融类、产品开发类、经营管理类、教育培训类等20大专业类型，学校教师团队来至中国传媒大学、北京电影学院、国家级电竞专家、四川师范大学、四川体育学院、四川音乐学院等中国一流学府及国内一线俱乐部电竞明星，其中数名教师参与了国家级体育类教学课题研究，并多次获得全国性专业奖项，多篇成果论文被国内知名媒体转载刊登。"
        // }
      ],
      jlb: [
        {
          img: require("../../assets/img/StudyAbroad2.jpg")
        },
        {
          name: "AXI电子竞技俱乐部"
        },
        {
          img: require("../../assets/img/StudyAbroad3.png")
        },
        {
          con:
            "Axi俱乐部成立于2019年4月4日，是由国内最强且最具有专业性的职业选手而成立的电子俱乐部团队。 名称全称为：Axi Esports Club。与小虎电竞、蜘蛛电竞稳定合作。在2020年，Axi电子竞技俱乐部成功晋级绝地求生冠军联赛（PCL）拿下季军。"
        },
        {
          img: require("../../assets/img/Tianchen-icon.png")
        },
        {
          con:
            "TCG天呈荣耀电子竞技俱乐部于2019年成立王者荣耀分部，前TES王者分部教练加入TCG，拿下华硕杯冠军，天翼杯冠军，CMEL全国总冠军。2019年底，成立TCG和平精英分部，由摩立斯教育教学团队温庆煜担任教练，2020年初，收购RDG俱乐部加入TCG，备战2020PEN联赛。"
        }
      ]
    };
  },
  mounted() {
    // if (document.body.clientWidth <= 768) {
    //   this.$router.push({
    //     path: '/'
    //   })
    // }
  }
};
</script>

<style>
.studyAbroad_total {
  margin-top: -30px;
}
.IndexImg {
  width: 100%;
  height: 50%;
}

.IndexImg > img {
  width: 100% !important;
}

.studyAbroad_con,
.studyAbroad_jlb {
  color: #fff;
  width: 70%;
  margin: 2% auto;
}

.club_text {
  letter-spacing: 0em;
  white-space: normal;
  word-break: break-all;
  word-wrap: break-word;
}

.studyAbroad_con p,
.studyAbroad_jlb div {
  text-indent: 2em;
  margin: 10px 0;
  font-size: 20px;
  letter-spacing: 0.25em;
  line-height: 1.5em;
}

.studyAbroad_img {
  text-align: center !important;
}

.studyAbroad_con p img {
  width: 50%;
  /* margin-left: 10%; */
  box-shadow: 0 1px 5px 0 rgba(255, 255, 255, 0.16);
  border-radius: 5px;
}
</style>
