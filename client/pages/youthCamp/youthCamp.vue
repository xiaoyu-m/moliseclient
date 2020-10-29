<template>
  <div class="younth_total">
    <div class="md-hide">
      <!-- 青训营 -->
      <youth />
      <!-- 青训环境 -->
      <youthE />
    </div>
    <div class="sm-hide">
      <MLSESPYTC />
      <ExhibitionSchool />
    </div>
  </div>
</template>

<script>
import youth from "@/components/phone/youth/youth";
import youthE from "@/components/phone/youthE/youthE";
import MLSESPYTC from "@/components/MLSESPYTC/MLSESPYTC";
import ExhibitionSchool from "@/components/ExhibitionSchool/ExhibitionSchool";
export default {
  title: "青训营-摩立斯电竞",
  components: {
    youth,
    youthE,
    MLSESPYTC,
    ExhibitionSchool
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "./youthCamp";
</style>
