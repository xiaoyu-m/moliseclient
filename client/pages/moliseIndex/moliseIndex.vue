 <template>
  <div>
    <div class="sm-hide">
      <!-- 首页视频 -->
      <moving />
    </div>
    <div class="study_total">
      <div class="study-box">
        <div class="sm-hide">
          <!-- 职业说明 -->
          <occupation />
          <!-- 实力见证 -->
          <strength />
        </div>
        <div class="md-hide">
          <!-- 手机端 -->

          <!-- 轮播 -->
          <mRotation />
          <!-- 培养方向 -->
          <!-- 暂无资料 注释 -->
          <!-- <MTrainingDirection /> -->
          <!-- 教学资源 -->
          <TEACHRES />
          <!-- 精彩视频 -->
          <hotvideo />
          <!-- 相关问答 -->
          <tipinfo />
          <!-- 在线报名 -->
          <signup pageType="page" />
          <!-- 留言区 -->
          <message />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moving from "@/components/moving/moving";
import occupation from "@/components/occupation/occupation";
import strength from "@/components/strength/strength";
import MTrainingDirection from "@/components/phone/MTrainingDirection/MTrainingDirection";
import mRotation from "@/components/phone/mRotation/mRotation";
import TEACHRES from "@/components/teachingResources/teachingResources";
import signup from "@/components/signup/signup";
import hotvideo from "@/components/phone/hotvideo/hotvideo";
import tipinfo from "@/components/phone/tipInfo/tipInfo";
import message from "@/components/phone/message/message";
// import Footer from '@/components/phone/footer/footer';
export default {
  title: "首页-摩立斯电竞",
  components: {
    moving,
    strength,
    occupation,
    mRotation,
    MTrainingDirection,
    TEACHRES,
    signup,
    hotvideo,
    tipinfo,
    message
    // Footer
  },
  data() {
    return {
      title: "header"
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less">
@import "./moliseIndex";
</style>
