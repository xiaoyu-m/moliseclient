<template>
  <div class="index_entrance_con">
    <el-row :gutter="20">
      <el-col :lg="6" :xl="6" :md="6" :sm="6" :xs="6" v-for="item in entrance" :key="item.id">
        <div class="index_entrance_con_window">
          <div class="teacher_before">
            <div class="index_entrance_con_window_img">
              <img :src="item.url" />
            </div>
            <div class="index_entrance_con_window_text_group">
              <div class="index_entrance_con_window_text">
                <!-- 图标logo-->
                <div>
                  <div>
                    <!-- 蒙版 -->
                  </div>
                  <img :src="item.logoimg" />
                  <!-- <img src="../../../static/img/logo_orange_min.png" /> -->
                </div>
                {{item.name}}
              </div>
              <!-- 页面跳转 -->
              <!-- <div class="index_entrance_con_window_more" @click="openwindow('teacher',item.index)"> -->
              <!-- 鼠标经过展示 -->
            </div>
          </div>
          <div
            class="teacher_after"
            :style="{background: 'url(' + item.bgimg + ') no-repeat  center center',backgroundSize:'150%'}"
          >
            <p>{{item.technicalTitle}}</p>
            <ul>
              <li
                v-for="introduceItem2 in item.introduce"
                :key="introduceItem2.id"
              >{{introduceItem2}}</li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Entrance",
  props: {
    entrance: Array
  },
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    openwindow(e, i) {
      if (e != undefined) {
        var target = e;
        let id = i;
        console.log(id);
        console.log(target);
        this.$router.push({
          path: "/teachers",
          query: {
            id: id
          }
        });
      } else {
        e = "none";
      }
    }
  }
};
</script>

<style lang="less">
@import "./entrance";
</style>
