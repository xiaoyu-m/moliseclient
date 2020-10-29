<template>
  <div id="hotnewtype_total">
    <titles :title="type.typeName"/>
    <ul class="article-list">
      <li v-for="aItem in articleList[0]" :key="aItem.articleId"  >
        <a :href="'/hotNew/'+aItem.articleId" class="new-list wow flipInY animated">
          <div class="article-img">
            <p><img :src="aItem.articleThumb" :alt="aItem.articleTitle"></p>
          </div>
            <div class="article-txt">
              <p class="a-type">{{type.typeName}}</p>
              <p class="a-title">{{aItem.articleTitle}}{{aItem.articleTitle}}{{aItem.articleTitle}}</p>
              <p class="a-time" style="font-size: 12px">
                {{formatDate(aItem.articleTimestamp)}}
                <span class="float-right">
                  查看详情
                </span>
              </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>


<script >
import titles from "@/components/title/title";
import "@/assets/icon/iconfont.css";
export default {
  components: {
    titles
  },
  props: {
    type: Object
  },
  data() {
    return {
      articleList: [{}]
    };
  },
  methods: {
    getArticle(typeId) {
      this.articleList = [];
      this.$http
        .post("/get_articles_by_type", { type_id: typeId })
        .then(res => {
          this.articleList.push(res.data);
        });
    },
    getArticleInfo(ctx) {
      return (
        ctx
          .replace(/<\/?.+?>/g, "")
          .replace(/&nbsp;/g, "")
          .substring(0, 100) + "..."
      );
    },
    formatDate(time) {
      let datetime = new Date();
      datetime.setTime(time);
      let year = datetime.getFullYear();
      let month = datetime.getMonth() + 1;
      let date = datetime.getDate();
      if (time) {
        return year + "年" + month + "月" + date + "日";
      } else {
        return "";
      }
    }
  },
  created() {
    this.getArticle(this.type.typeId);
  }
};
</script>

<style lang="less" scoped>
@import "hotNewType";
</style>
