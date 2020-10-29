<template>
  <div class="new_total">
    <div class="caption">
      <h2>{{typeList.articleTitle}}</h2>
      <p>
        {{formatDate(typeList.articleTimestamp)}}
      </p>
    </div>
    <div class="ckeditor" v-html="typeList.articleContext"></div>
    <div class="ifDel">
      <p>
        <strong>
          文中部分图片来自网络如涉侵权请联系官方删除
        </strong>
      </p>c
      <p>
        (文章源于玩家投稿，不代表官方观点)
      </p>
    </div>
    <p class="new-footer">
      ——摩立斯电竞
    </p>
  </div>
</template>

<script>
import "@/assets/less/ckeditor-ui.less";
export default {
  props: {
    aid: {
      type: Number
    }
  },
  data() {
    return {
      typeList: ""
    };
  },
  methods: {
    getArticle() {
      this.$http
        .post("/get_articles_by_id", {
          articleId: this.aid
        })
        .then(res => {
          console.log(res);
          this.typeList = res.data;
        });
    },
    formatDate(time) {
      let datetime = new Date();
      datetime.setTime(time);
      let year = datetime.getFullYear();
      let month = datetime.getMonth() + 1;
      let date = datetime.getDate();
      if (time) {
        return "发布时间：" + year + "-" + month + "-" + date;
      } else {
        return "";
      }
    }
  },
  created() {
    // console.log(typeof );
    this.getArticle();
  }
};
</script>

<style lang="less" scoped>
@import "./newsPages";
</style>
