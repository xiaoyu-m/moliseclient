<template>
  <div class="study_total">
    <div class="study-box">
      <teacherGroup />
      <mClub />
      <mYoung />
      <mTeachingE />
    </div>
  </div>
</template>

<script>
import teacherGroup from "@/components/phone/teacherGroup/teacherGroup";
import mClub from "@/components/phone/MClub/MClub";
import mYoung from "@/components/phone/MYoung/MYoung";
import mTeachingE from "@/components/phone/mTeachingEnvironment/mTeachingEnvironment";
export default {
  title: "教学资源-摩立斯电竞",
  components: {
    teacherGroup,
    mClub,
    mYoung,
    mTeachingE
  }
};
</script>

<style lang="less">
@import "./source";
</style>
