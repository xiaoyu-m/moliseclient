<template>
  <div>
    <div class="aboutPc_total">
      <div class="sm-hide">
        <studyAbroad />
      </div>
    </div>
    <div class="md-hide">
      <img src="../../assets/img/introduceimage/C10.jpg" style="width: 100%;" />
    </div>
    <div class="aboutPc_total">
      <div class="md-hide">
        <mAboutUs />
        <training />
        <advisory />
      </div>
      <!-- <Signup pageType="page" /> -->
    </div>
  </div>
</template>

<script>
import mAboutUs from "@/components/phone/moliseEduInfo/moliseEduInfo";
import training from "@/components/phone/training/training";
import advisory from "@/components/phone/advisory/advisory";
import studyAbroad from "@/components/studyAbroad/studyAbroad";
export default {
  title: "关于我们-摩立斯电竞",
  components: {
    mAboutUs,
    training,
    advisory,
    studyAbroad
  }
};
</script>

<style lang="less" scoped="scoped">
@import "./about";
</style>
