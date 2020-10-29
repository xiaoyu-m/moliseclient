<!-- 模块名：在线报名 负责人：门宇川 2020/6/17 -->
<template>
  <div class="signup_total">
    <Signup pageType="page" />
    <div class="md-hide">
      <Message />
    </div>
  </div>
</template>

<script>
import Signup from "@/components/signup/signup";
import Message from "@/components/phone/message/message";
export default {
  title: "在线报名-摩立斯电竞",
  components: {
    Signup,
    Message
  }
};
</script>w

<style lang="less">
@import "./signUp";
</style>
