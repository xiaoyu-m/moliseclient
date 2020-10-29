<template>
  <div>
    <div class="index_entrance_title_father">
      <div class="index_entrance_title">
        <div class="index_entrance_more">
          <span>
            <!-- <img src="../../../static/img/line.png"/> -->
          </span>
          <span class="title_con_text">{{this.title}}</span>
          <span>
            <!-- <img src="../../../static/img/line.png"/> -->
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
@import "./title";
</style>
