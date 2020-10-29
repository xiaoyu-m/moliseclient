<template>
  <div class="contact">
    <div class="contact_con">
      <div class="contact_item">
        <div class="contact_item_image-box">
          <img src="../../assets/img/wx_QR.jpg" alt />
        </div>
        <div class="contact_item_text">
          <span>添加微信，了解更多</span>
        </div>
      </div>
      <div class="contact_item">
        <div class="contact_item_image-box">
          <img src="../../assets/img/qq_QR.jpg" alt />
        </div>
        <div class="contact_item_text">
          <span>添加QQ，了解更多</span>
        </div>
      </div>
      <div class="contact_item" style="border: none;">
        <div class="molisecard">
          <img src="../../assets/img/molisecard.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    contact: Array
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less">
@import './contact';
</style>
