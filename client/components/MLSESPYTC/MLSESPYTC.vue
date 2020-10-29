<template>
  <div class="mlsespytc_total">
    <titles :title="title"></titles>
    <el-row :gutter="20">
      <el-col :lg="6" :xl="6" :md="12" :sm="12" :xs="12" v-for="item in class_list" :key="item.id">
        <div class="mlsespytc_card">
          <div class="mlsespytc_card_con_father">
            <div class="mlsespytc_card_con">
              <!-- 正面 -->
              <div class="mlsespytc_card_con_before">
                <div class="mlsespytc_card_con_mb">
                  <!-- 蒙版 -->
                </div>
                <!-- <div class="class_name" v-lazy:background-image="item.bg_before"> -->
                <div class="class_name" :style="{backgroundImage: 'url('+item.bg_before+')'}">
                  <div class="class_name_bottom">
                    <div class="class_icon">
                      <img :src="item.icon_before" />
                    </div>
                  </div>
                  <div class="game_name">{{item.game_name}}</div>
                </div>
              </div>
              <!-- 背面 -->
              <div class="mlsespytc_card_con_after" :style="{background: 'url('+item.bg_after+')'}">
                <div class="mlsespytc_card_con_mb">
                  <!-- 蒙版 -->
                </div>
                <div class="class_text">
                  <p>{{item.class_text}}</p>
                </div>
                <div class="class_after_name">
                  <div class="class_name_after_bottom">
                    <div class="class_after_icon">
                      <img :src="item.icon_after" />
                    </div>
                    <div class="sign_up">
                      <router-link to="/signUp">立即报名</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import titles from '@/components/title/title';
export default {
  components: {
    titles
  },
  data() {
    return {
      /**
				 * icon_before：灰色图标
					icon_after：有色图标
					bg_before：卡牌背景
					bg_after：介绍背景
					class_text：介绍文字
				 */
      title: '青训营',
      class_list: [
        {
          icon_before: require('../../assets/img/class/lol_white.png'),
          icon_after: require('../../assets/img/class/lol_gold.png'),
          bg_before: require('../../assets/img/class/lol1.jpg'),
          bg_after: require('../../assets/img/class/lol2.jpg'),
          game_name: '英雄联盟青训营',
          class_text:
            '从基本功到游戏各阶段所有意识、比赛运营，操作以及注意要点；团队合作提升交流，针对各位置做问题解答、复盘，根据个人的情况定制专属的训练计划。'
        },
        {
          icon_before: require('../../assets/img/class/hpjy_white.png'),
          icon_after: require('../../assets/img/class/hpjy_gold.png'),
          bg_before: require('../../assets/img/class/hpjy1.jpg'),
          bg_after: require('../../assets/img/class/hpjy2.jpg'),
          game_name: '和平精英青训营',
          class_text:
            '和平精英基础设置讲解；信号值详解；前五机制详解；场景地图资源详解；载具、背包与防具详解；步枪、冲锋枪、狙击枪讲解；学习职业战队战术体系；完善团队问题；参加和平精英职业队训练赛等。'
        },
        {
          icon_before: require('../../assets/img/class/wzry_white.png'),
          icon_after: require('../../assets/img/class/wzry_gold.png'),
          bg_before: require('../../assets/img/class/wzry1.jpg'),
          bg_after: require('../../assets/img/class/wzry2.jpg'),
          game_name: '王者荣耀青训营',
          class_text:
            '英雄分类讲解、英雄特长讲解、英雄定位讲解、英雄团战讲解、KPL赛事运营讲解等。'
        },
        {
          icon_before: require('../../assets/img/class/jdqs_white.png'),
          icon_after: require('../../assets/img/class/jdqs_gold.png'),
          bg_before: require('../../assets/img/class/pubg1.jpg'),
          bg_after: require('../../assets/img/class/pubg2.jpg'),
          game_name: '绝地求生青训营',
          class_text:
            '地图资源数据分析，地图资源点分配，房屋结构，载具分析与刷新点，武器伤害数据分析，枪械选择与配件搭配，枪法、身法搭配运用，预瞄点与压枪基础身法的定义和运用，枪法和身法结合运用，投掷物的运用，听声辨位等。'
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import './MLSESPYTC';
</style>
