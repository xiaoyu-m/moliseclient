<template>
  <div id="newtype_total">
    <titles title="新闻资讯 "/>
    <ul class="newtype-list demo-image__lazy">
      <li v-for="(typeItem,index) in typeList" :key="typeItem.typeId" >
        <div>
          <p class="t-caption"><i class="el-icon-platform-eleme "></i>{{typeItem.typeName}}</p>
          <ul class="article-list">
            <li v-for="(aItem,aIndex) in articleList[index ]" :key="aItem.articleId" v-if="aIndex < 4">
              <a :href="'/hotNew/'+aItem.articleId" class="new-list wow flipInY animated">
                <div class="article-img">
                  <p><el-image :src="aItem.articleThumb" :alt="aItem.articleTitle"  lazy></el-image></p>
                </div>
                <div class="article-txt">
                  <p class="a-type">{{typeItem.typeName}}</p>
                  <p class="a-title">{{aItem.articleTitle}}</p>
                  <p class="a-time">
                    {{formatDate(aItem.articleTimestamp)}}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="more">
          <a :href="'/hotNews/type/'+urlChange(+typeItem.typeId,typeItem.typeName)" >查看更多咨询<i class="iconfont icon-gengduo1"></i></a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import titles from "@/components/title/title";
import "@/assets/icon/iconfont.css";
export default {
  components: {
    titles
  },
  data() {
    return {
      typeList: [{ typeId: "0", typeName: "文章" }],
      articleList: []
    };
  },
  methods: {
    urlChange(id, name) {
      return encodeURIComponent(JSON.stringify({ typeId: id, typeName: name }));
    },
    getType() {
      this.$http.post("/get_article_type").then(res => {
        this.typeList = res.data;
        this.getArticle();
      });
    },
    getArticle() {
      this.articleList = [];
      let i = 0;
      for (const type of this.typeList) {
        this.$http
          .post("/get_articles_by_type", { type_id: type.typeId })
          .then(res => {
            this.articleList.push(res.data);
          });
      }
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
    this.getType();
  }
};
</script>

<style lang="less" scoped>
@import "./hotNews";
</style>
