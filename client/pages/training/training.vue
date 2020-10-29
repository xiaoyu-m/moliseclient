<template>
  <div class="study_total">
    <div class="study-box">
      <Molisespytc />
      <Clubinfo />
      <div class="signup-item">
        <Signup pageType="subPage" />
      </div>
    </div>
  </div>
</template>
w
<script>
import Signup from '@/components/signup/signup';
import Molisespytc from '@/components/MLSESPYTC/MLSESPYTC';
import Clubinfo from '@/components/ExhibitionSchool/ExhibitionSchool';
export default {
  title: '摩立斯特训-摩立斯教育',
  components: { Signup, Molisespytc, Clubinfo },
  data() {
    return {
      title: 'header'
    };
  }
};
</script>
<style lang="less" >
@import './training';
</style>
