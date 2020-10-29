<template>
  <div class="honorTime">
    <titles :title="'学员风采'"></titles>
    <div class="honorTime_con" v-for="(item, index) in honor_list" :key="index">
      <span class="honorTime_con_top_border"></span>
      <span class="honorTime_con_bottom_border"></span>
      <span class="honorTime_con_left_border"></span>
      <span class="honorTime_con_right_border"></span>
      <div class="honorTime_con_item">
        <!-- <div class="honorTime_con_item" :style="{ backgroundImage: 'url(' + item.img + ')' }"> -->
        <el-image class="honorTimeimg" :src="item.img" lazy></el-image>
        <!-- <div class="honorTime_con_item_mb">蒙版</div> -->
        <div class="honorTime_img"></div>
        <div class="honorTime_text">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titles from "../title/title";
export default {
  name: "honorTime",
  components: { titles },
  data() {
    return {
      honor_list: [
        {
          img: require("../../assets/img/xyfc/fc1.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc2.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc3.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc4.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc5.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc6.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc7.jpg"),
          text: "学员风采"
        },
        {
          img: require("../../assets/img/xyfc/fc8.jpg"),
          text: "学员风采"
        }
      ]
    };
  }
};
</script>

<style>
.honorTimeimg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
.honorTime {
  padding-bottom: 50px;
  text-align: center;
}
.honorTime_con {
  width: 400px;
  height: 300px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  margin: 10px;
  position: relative;
  display: inline-block;
  border: 2px solid #767676;
}
.honorTime_con span {
  display: block;
  display: inline-block;
  position: absolute;
  background-color: #ca9b25;
  transition: all 0.5s ease-in;
}
.honorTime_con_top_border {
  width: 0%;
  left: -2px;
  height: 2px;
  top: -2px;
}
.honorTime_con_bottom_border {
  height: 2px;
  bottom: -2px;
  right: -2px;
  width: 0%;
}
.honorTime_con_left_border {
  width: 2px;
  height: 0%;
  z-index: 2;
  top: -2px;
  left: -2px;
}
.honorTime_con_right_border {
  width: 2px;
  height: 0%;
  z-index: 2;
  bottom: -2px;
  z-index: 2;
  left: 100%;
  right: -2px;
}
.honorTime_con_item {
  /* background: url(../../assets/img/LOL.jpg) no-repeat center center; */
  background-size: 150%;
  width: 100%;
  height: 100%;
}
.honorTime_con_item_mb {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  top: 0;
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.5);
}
.honorTime_con:hover .honorTime_con_top_border,
.honorTime_con:hover .honorTime_con_bottom_border {
  width: 101%;
}
.honorTime_con:hover .honorTime_con_left_border,
.honorTime_con:hover .honorTime_con_right_border {
  height: 101%;
}
.honorTime_con:hover .honorTime_con_item_mb {
  top: 0;
  height: 0;
  opacity: 0;
}
.honorTime_img {
}
.honorTime_img img {
  width: 100%;
  height: 100%;
}
.honorTime_text {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  color: #fff;
  bottom: 0;
  z-index: 9;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.honorTime {
  width: 80%;
  margin: 0 auto;
}
@media screen and (max-width: 1700px) {
  .honorTime_con {
    width: 350px;
    height: 260px;
    margin: 10px;
  }
}
@media screen and (max-width: 1520px) {
  .honorTime_con {
    width: 300px;
    height: 240px;
    margin: 5px;
  }
}
@media screen and (max-width: 1300px) {
  .honorTime_con {
    width: 250px;
    height: 220px;
    margin: 10px;
  }
}
@media screen and (max-width: 1150px) {
  .honorTime_con {
    width: 205px;
    height: 170px;
    margin: 10px;
  }
}
@media screen and (max-width: 950px) {
  .honorTime_con {
    width: 300px;
    height: 210px;
    margin: 10px;
  }
}
@media screen and (max-width: 680px) {
  .honorTime_con {
    width: 250px;
    height: 210px;
    margin: 10px;
  }
}
</style>
