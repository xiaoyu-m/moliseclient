<!-- phone message 俱乐部说明 负责人：王哲宇 -->
<template>
  <div class>
    <div>
      <titles :title="title"></titles>
    </div>
    <div class="phoneFooter">
      <div class="phoneFooter_topBox">
        <div class="phoneFooter_topBoxTop">
          <div class="phoneFooter_topBox_onne"></div>
          <div class="phoneFooter_topBoxLeft">姓名：{{topBoxLeft}}</div>
          <div class="phoneFooter_topBoxRight">{{topBoxRight}}</div>
        </div>
        <div class="phoneFooter_topBoxCenter">内容：{{topBoxCenter}}</div>
        <div class="phoneFooter_topBoxFooter">回复：{{topBoxFooter}}</div>
        <div class="phoneFooter_topBoxbottom">
          <span>首页</span>
          <span>上一页</span>
          <span>1/40页</span>
          <span>下一页</span>
          <span>尾页</span>
          <span>更多>></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import titles from '@/components/title/title';
export default {
  components: {
    titles
    // foottitles
  },
  data() {
    return {
      title: '留言区',
      // foottitle:'联系我们',
      topBoxLeft: '姓名：郝珂艾',
      topBoxRight: '2020-06-02',
      topBoxCenter:
        '因为我才读初中，学习不好，也没有学习的动力，但我喜欢打手游王者荣耀，我在我们的重庆市排名挺靠前的，我的父母没有时间管我，所以我想要打职业王者荣耀。所以想咨询一下你们？',
      topBoxFooter:
        ' 同学，你可以和你家长商量一下说出你自己的想法，如果支持你打职业电竞的话，我们这边在加微信详细沟通好吗？'
    };
  }
};
</script>

<style lang="less">
@import './message.less';
</style>
