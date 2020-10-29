<!-- clubinfo 俱乐部说明 负责人：王哲宇 -->
<template>
  <div>
    <div class="clubInfo">
      <div>
        <titles :title="title"></titles>
      </div>
      <el-row :gutter="80">
        <el-col :xl="12" :md="12" :sm="24">
          <div class="grid-content border-col border-colTcg">{{item}}</div>
        </el-col>

        <!--  -->
        <el-col :xl="12" :md="12" :sm="24">
          <div class="grid-content border-col border-colAxi">{{item1}}</div>
        </el-col>
      </el-row>

      <!--   -->
    </div>
  </div>
</template>

<script>
import titles from '@/components/title/title';
export default {
  components: {
    titles
  },
  data() {
    return {
      title: '俱乐部',
      item1:
        'Axi电子竞技俱乐部成立于2019年4月4日，2020年，Axi电子竞技俱乐部成功晋级绝地求生冠军联赛（PCL）。',
      item:
        '四川摩立斯电竞科技有限责任公司是一家专注于电子竞技赛事与职业俱乐部运营的公司，致力于电子竞技职业俱乐部的拓展与探索。公司于2018年创立于成都，同年成立TCG王者荣耀分部，前TES王者分部教练加入TCG，拿下华硕杯冠军，天翼杯冠军，CMEL全国总冠军。2019年底，成立TCG和平精英分部，2020年初，收购RDG俱乐部加入TCG，备战2020PEN联赛。'
    };
  }
};
</script>


<style lang="less">
@import './clubInfo.less';
</style>