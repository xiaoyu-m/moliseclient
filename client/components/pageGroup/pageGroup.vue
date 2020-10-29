<!-- pageGroup 分页页面，用于实现多数据分页，负责人：欧艺鹏 -->
<template>
  <div>
    <el-row :gutter="20" ref="peopleInfo">
      <el-col :lg="6" :xl="6" :md="12" :sm="12" :xs="12" v-for="item in PageList" :key="item.id">
        <div class="peopleInfo">
          <div class="peopleImg">
            <el-image :key="item.url" :src="item.url">
              <div slot="placeholder" class="image-slot">
                加载中
                <span class="dot">...</span>
              </div>
            </el-image>
          </div>
          <div class="peopleNameArea">
            <div>
              <!-- 图标logo -->
              <div>
                <div>
                  <!-- 蒙版 -->
                </div>
                <!-- <img :src="item.logoimg" /> -->
                <img src="../../assets/img/logo_orange_min.png" />
              </div>
              <!-- {{item.name}} -->
              {{item.name}}
            </div>
          </div>
          <div class="peopleText"></div>
        </div>
      </el-col>
    </el-row>
    <!-- 页数指示器 -->
    <div class="strength_page">
      <span class="iconfont icon-arrowed-left" @click="prePage(currentPage,pageSize)"></span>
      <span>{{currentPage}}/{{totalPage}}</span>
      <span class="iconfont icon-arrowed-right" @click="nextPage(currentPage,pageSize)"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    PageList: Array
  },
  data() {
    return {
      /**
       * totalPage 总页数
       * pageSize 分页容量
       * currentPage 当前页
       * startPage 开始页标记
       * endPage 结束页标记
       */
      totalPage: null,
      pageSize: null,
      currentPage: 1,
      startPage: null,
      endPage: null
    };
  },
  mounted() {
    // window.onresize = e => {
    // 	let i = e.target.innerWidth
    //   this.loadPage(i)
    // };
    // this.goPage(1,8);

    if (window.innerWidth > 1200) {
      this.goPage(1, 8);
      this.pageSize = 8;
    } else {
      this.goPage(1, 4);
      this.pageSize = 4;
    }
    window.onresize = e => {
      let i = e.target.innerWidth;
      console.log(i);
      if (i > 1200) {
        this.goPage(1, 8);
      }
      if (i <= 1200) {
        this.goPage(1, 4);
      }
    };
  },
  methods: {
    /**
     * @param {Object} e 第几页开始显示
     * @param {Object} i 每页显示个数
     * pageItem 参与分页的元素
     * amount 参与分页元素的个数
     */
    goPage(e, i) {
      let pageItem = this.$refs.peopleInfo.$el.children;
      let amount = pageItem.length;
      // console.log(amount);
      this.pageSize = i;
      //总共分几页
      if (amount / this.pageSize > parseInt(amount / this.pageSize)) {
        this.totalPage = parseInt(amount / this.pageSize) + 1;
      } else {
        this.totalPage = parseInt(amount / this.pageSize);
      }
      this.currentPage = e;
      this.startPage = (this.currentPage - 1) * this.pageSize + 1;
      this.endPage = this.currentPage * this.pageSize;
      this.endPage = this.endPage > amount ? amount : this.endPage;
      // console.log(this.endPage);
      //遍历显示数据实现分页
      for (let i = 1; i < amount + 1; i++) {
        // i-1是去掉多出来的一个div
        let irow = pageItem[i - 1];
        if (i >= this.startPage && i <= this.endPage) {
          irow.style.display = "inline-block";
          irow.style.animation = "moving 1.5s ease-in-out";
        } else {
          irow.style.display = "none";
          irow.style.animation = "unset";
        }
      }
    },
    /**
     * @param {Object} e 传入的屏幕参数
     */
    loadPage(e) {
      console.log(e);
      this.pageSize = 8;
      // if(e >= 1200){
      // }
      // if (e < 1200) {
      // 	console.log('e')
      // 	this.pageSize=4
      // 	this.goPage(this.currentPage,this.pageSize);
      // }
    },
    /**
     * 上一页
     * @param {Object} e 第几页开始显示
     * @param {Object} i 每页显示个数
     */
    prePage(e, i) {
      if (this.currentPage <= this.totalPage) {
        e--;
        if (e == 0) {
          e = this.totalPage;
        }
      }
      this.goPage(e, i);
    },
    /**
     * 下一页
     * @param {Object} e 第几页开始显示
     * @param {Object} i 每页显示个数
     */
    nextPage(e, i) {
      if (this.currentPage < this.totalPage) {
        e++;
      } else if (this.currentPage == this.totalPage) {
        e = 1;
      }
      this.goPage(e, i);
    }
  }
};
</script>

<style lang="less">
.el-row {
  // margin-top: 20px;
}
@allTextColor: #bb974d;
@allBGColor: #c49e46;
@allTitleSize: 35px;
.strength_page {
  color: @allTextColor;
  margin: 20px 0 !important;
  & > span {
    font-size: @allTitleSize - 10px !important;
    cursor: pointer;
    &:nth-child(2) {
      font-weight: bolder;
      cursor: unset !important;
      margin: 0 40px;
    }
  }
}
@nameDivHeight: 50px;
@-webkit-keyframes moving {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.peopleInfo {
  cursor: pointer;
  position: relative;
  /*width: 阻止兩邊邊框多出來*/
  width: 99%;
  height: 400px;
  border: #735d2e 1px solid;
  box-sizing: border-box;
  display: inline-block;
  /* background-color: red; */
  overflow: hidden;
  /* 大屏幕（大桌面显示器，大于等于 1200px） */
  @media screen {
    @media (max-width: 1600px) {
      height: 340px;
    }
    @media (max-width: 1400px) {
      // width: 250px;
      height: 290px;
    }
    @media (max-width: 1200px) {
      // width: 210px;
      height: 630px;
      .peopleImg {
        img {
          width: 110% !important;
          height: 110% !important;
        }
      }
    }
    @media (max-width: 1024px) {
      height: 570px;
    }
    @media (max-width: 930px) {
      height: 450px;
    }
    @media (max-width: 768px) {
      // .class_icon{
      //  height: 70px;
      //  width: 70px;
      // }
    }
    @media (max-width: 680px) {
      height: 370px;
    }
    @media (max-width: 600px) {
      height: 370px;
      overflow: hidden;
    }
    @media (max-width: 570px) {
      height: 300px;
    }
    @media (max-width: 500px) {
      height: 260px;
    }
    @media (max-width: 430px) {
      height: 180px;
    }
  }
  .peopleImg {
    position: absolute;
    transition: all 1s;
    z-index: 0;
    img {
      height: 100%;
      width: 100%;
      top: 0;
      position: relative;
      left: 0;
      transition: all 0.3s ease;
    }
  }
  .peopleNameArea {
    position: absolute;
    width: 100%;
    // text-align: center;
    bottom: 0px;
    height: @nameDivHeight;
    transition: all 0.2s ease;
    background-color: #000000;
    z-index: 10;
    & > div:first-child {
      position: relative;
      height: @nameDivHeight;
      color: #ffffff;
      letter-spacing: 0.25em;
      font-size: 20px;
      border-top: 2px solid #735d2e;
      box-sizing: border-box;
      line-height: @nameDivHeight + 10px;
      & > div {
        left: 50%;
        background-color: #000000;
        transform: translate(-50%);
        top: -25px;
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid #735d2e;
        position: absolute;
        box-sizing: border-box;
        img {
          width: 95%;
        }
      }
    }
  }
}
</style>
