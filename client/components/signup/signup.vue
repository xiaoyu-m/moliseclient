<template>
  <div id="signup-total">
    <titles :title="'在线报名'" />
    <el-row :gutter="10" >
      <el-col>
        <el-form :model="userData" :rules="rules" ref="userData">
          <el-form-item prop="name">
            <el-input
              v-model="userData.name"
              placeholder="请输入您的姓名"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model="userData.phone" placeholder="手机号" prefix-icon="el-icon-mobile-phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select v-model="userData.person_type">
              <el-option
                v-for="type_item in selectList.typeList"
                :key="type_item"
                :label="type_item"
                :value="type_item"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item v-if="userData.person_type=== '学生'" prop="age">
            <el-input v-model="userData.age" placeholder="年龄" prefix-icon="el-icon-lollipop"></el-input>
          </el-form-item>

          <el-form-item>
            <el-col :span="8">
              <el-select v-model="userData.link_type">
                <el-option
                  v-for="item in selectList.link_type"
                  :key="item"
                  :label="item"
                  :value="item"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="16">
              <el-form-item :prop="userData.link_type">
                <el-input
                  v-if="userData.link_type == 'qq'"
                  v-model="userData.qq"
                  placeholder="QQ号"
                  prefix-icon="iconfont icon-qq"
                ></el-input>
                <el-input
                  v-if="userData.link_type == 'wx'"
                  v-model="userData.wx"
                  placeholder="微信号"
                  prefix-icon="iconfont icon-weixin"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="12">
              <el-select v-model="userData.address" @change="changeCityState">
                <el-option
                  v-for="(prov_item,index) in selectList.provinceList"
                  :key="prov_item.label"
                  :label="prov_item.label"
                  :value="prov_item.label"
                  class="province"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <el-select v-model="userData.city" >
                <el-option
                  v-for="city_item in selectList.cityList[cityState]"
                  :key="city_item.label"
                  :label="city_item.label"
                  :value="city_item.label"
                ></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checkedState">已阅读</el-checkbox>
            <b @click="readState">《个人隐私条款》</b>
          </el-form-item>
          <el-form-item>
            <el-button
              type="danger"
              class="submit"
              @click="submitForm('userData')"
              :loading="loading"
            >提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "@/assets/icon/iconfont.css";
import cityList from "@/assets/js/list/cityList.js";
import provinceList from "@/assets/js/list/provinceList.js";
import titles from "@/components/title/title";
export default {
  name: "signup",
  components: {
    titles
  },
  props: {
    pageType: String
  },
  watch: {
    userData(newValue, oldValue) {
      console.log(newValue);
    }
  },
  data() {
    return {
      update: "true",
      userData: {
        address: "四川省",
        city: "成都市",
        age: "",
        link_type: "wx",
        name: "",
        person_type: "家长",
        phone: "",
        qq: ""
      },
      cityState: 0,
      loading: false,
      checkedState: false,
      selectList: {
        link_type: ["qq", "wx"],
        typeList: ["家长", "学生"],
        cityList: cityList,
        provinceList: provinceList
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            pattern: /^[\u0391-\uFFE5A-Za-z]+$/,
            message: "不允许输入空格等特殊符号"
          }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "请输入正确手机号"
          }
        ],
        wx: [
          { required: true, message: "请输入微信号", trigger: "blur" },
          {
            pattern: /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/,
            message: "请输入正确的微信号"
          }
        ],
        qq: [
          { required: true, message: "请输入qq号", trigger: "blur" },
          {
            pattern: /^[1-9]\d{4,11}$/,
            message: "请输入正确的qq号"
          }
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          {
            pattern: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
            message: "请输入正确的年龄"
          }
        ]
      }
    };
  },
  methods: {
    //切换 qq或者微信 的输入框
    changeCityState(cityState) {
      // this.cityState = cityState;
      for (let i = 0; i < provinceList.length; i++) {
        if (provinceList[i]["label"] === cityState) {
          this.cityState = i;
          this.userData.city = cityList[i][0]["label"];
          console.log(this.userData.city);
        }
      }
    },
    //打开阅读条款
    readState() {
      this.$alert(
        `摩立斯电竞有限公司 依据本协议的规定提供服务，本协议具有合同效力。您必须完全同意以下所有条款并完成个人资料的填写，才能保证享受到更好的摩立斯电竞有限公司 。您使用服务的行为将视为对本协议的接受，并同意接受本协议各项条款的约束。用户必须合法使用网络服务，不作非法用途，自觉维护本网站的声誉，遵守所有使用网络服务的网络协议、规定、程序和惯例。为更好的为用户服务，用户应向本网站提供真实、准确的个人资料，个人资料如有变更，应立即修正。如因用户提供的个人资料不实或不准确，给用户自身造成任何性质的损失，均由用户自行承担。尊重个人隐私是摩立斯电竞有限公司 的责任，摩立斯电竞有限公司 在未经用户授权时不得向第三方（摩立斯电竞有限公司控股或关联、运营合作单位除外）公开、编辑或透露用户个人资料的内容，但由于政府要求、法律政策需要等原因除外。在用户发送信息的过程中和本网站收到信息后，本网站将遵守行业通用的标准来保护用户的私人信息。但是任何通过因特网发送的信息或电子版本的存储方式都无法确保100%的安全性。因此，本网站会尽力使用商业上可接受的方式来保护用户的个人信息，但不对用户信息的安全作任何担保。本网站有权在必要时修改服务条例，本网站的服务条例一旦发生变动，将会在本网站的重要页面上提示修改内容，用户如不同意新的修改内容，须立即停止使用本协议约定的服务，否则视为用户完全同意并接受新的修改内容。根据客观情况及经营方针的变化，本网站有中断或停止服务的权利，用户对此表示理解并完全认同。本保密协议的解释权归摩立斯电竞有限公司所有。`,
        "《个人隐私条款》",
        {
          confirmButtonText: "确定",
          callback: action => {
            this.checkedState = true;
          }
        }
      );
    },
    //提交表单
    submitForm() {
      this.loading = true;
      this.$refs["userData"].validate(valid => {
        if (valid) {
          this.userData.address =
            this.userData.city + " " + this.userData.address;
          delete this.userData.city;
          if (this.userData.age) {
          } else {
            this.userData.age = 0;
          }
          console.log(this.userData.age);
          this.$http
            .post("/register_ht", this.userData)
            .then(res => {
              this.$message({
                message: "提交成功，请等候老师回访！",
                type: "success"
              });
            })
            .catch(err => {
              this.$message({
                message: "提交失败，请重新填写信息！",
                type: "error"
              });
            });
        } else {
          this.$message({
            message: "提交失败，请重新填写信息！",
            type: "error"
          });
          setTimeout(() => {
            this.loading = false;
          }, 1000);
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" >
@import "./signup";
</style>
