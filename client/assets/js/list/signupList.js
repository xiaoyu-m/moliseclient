export default {
  caption: "Molise在线报名",
  ssrAddress: "#",
  clauseList: {
    caption: "《个人隐私保密条款》",
    content: [
      `尊敬的用户，欢迎阅读本协议：`,
      `摩立斯电竞有限公司 依据本协议的规定提供服务，本协议具有合同效力。您必须完全同意以下所有条款并完成个人资料的填写，才能保证享受到更好的摩立斯电竞有限公司 。
      您使用服务的行为将视为对本协议的接受，并同意接受本协议各项条款的约束。
      用户必须合法使用网络服务，不作非法用途，自觉维护本网站的声誉，遵守所有使用网络服务的网络协议、规定、程序和惯例。
      为更好的为用户服务，用户应向本网站提供真实、准确的个人资料，个人资料如有变更，应立即修正。如因用户提供的个人资料不实或不准确，
      给用户自身造成任何性质的损失，均由用户自行承担。
      尊重个人隐私是摩立斯电竞有限公司 的责任，摩立斯电竞有限公司 在未经用户授权时不得向第三方（摩立斯电竞有限公司控股或关联、运营合作单位除外）公开、
      编辑或透露用户个人资料的内容，
      但由于政府要求、法律政策需要等原因除外。在用户发送信息的过程中和本网站收到信息后，本网站将遵守行业通用的标准来保护用户的私人信息。
      但是任何通过因特网发送的信息或电子版本的存储方式都无法确保100%的安全性。因此，本网站会尽力使用商业上可接受的方式来保护用户的个人信息，
      但不对用户信息的安全作任何担保。
      本网站有权在必要时修改服务条例，本网站的服务条例一旦发生变动，将会在本网站的重要页面上提示修改内容，用户如不同意新的修改内容，须立即停止使用本协议约定的服务，
      否则视为用户完全同意并接受新的修改内容。根据客观情况及经营方针的变化，本网站有中断或停止服务的权利，用户对此表示理解并完全认同。
      本保密协议的解释权归摩立斯电竞有限公司 所有。
      摩立斯电竞有限公司 
      
      `
    ],
    time: "2020年12月"
  },
  form: [
    {
      Class: "input",
      type: "text",
      name: "name",
      title: "姓名",
      icon: "icon-yonghu",
      rule: {
        name: "姓名",
        reg: /^[\u0391-\uFFE5A-Za-z]+$/,
        errMsg: "请输入正确的姓名"
      },
      pl: "请输入您的姓名"
    },
    {
      Class: "input",
      type: "text",
      title: "手机号",
      name: "phone",
      icon: "icon-shouji",
      pl: "手机号",
      rule: {
        name: "手机号",
        reg: /^1[3456789]\d{9}$/,
        errMsg: "请输入正确的手机号"
      }
    },
    {
      Class: "select",
      name: "registerType",
      title: "身份",
      icon: ["icon-jiazhang", "icon-xuesheng"],
      props: [
        {
          label: "家长",
          value: "101"
        },
        {
          label: "学生",
          value: "100"
        }
      ]
    },
    {
      Class: "input",
      type: "text",
      title: "年龄",
      name: "age",
      icon: "icon-nianling",
      pl: "年龄",
      rule: {
        name: "年龄",
        reg: /^(?:[1-9][0-9]?|1[01][0-9]|120)$/,
        errMsg: "请输入正确的年龄"
      }
    },
    {
      Class: "select",
      name: "contactType",
      title: "账号类型",
      props: [
        {
          label: "QQ账号",
          value: "201"
        },
        {
          label: "微信账号",
          value: "200"
        }
      ]
    },
    {
      Class: "changeInput",
      props: [
        {
          type: "text",
          title: "QQ号",
          name: "qq",
          icon: "icon-qq",
          pl: "QQ号",
          rule: {
            name: "QQ号",
            reg: /^[1-9]\d{4,11}$/,
            errMsg: "请输入正确的QQ号"
          }
        },
        {
          type: "text",
          title: "微信号",
          name: "wx",
          icon: "icon-weixin",
          pl: "微信账号",
          rule: {
            name: "微信号",
            reg: /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/,
            errMsg: "请输入正确的微信号"
          }
        }
      ]
    },
    {
      type: "text",
      name: "age",
      icon: "icon-nianling",

      pl: "年龄"
    },
    {
      Class: "select",
      name: "province",
      pl: "省",
      icon: "icon-sheng",
      props: []
    },
    {
      Class: "select3",
      name: "city",
      pl: "市",
      icon: "icon-shi",
      props: []
    },
    {
      Class: "checkBox",
      name: "readClause",
      pl: "已阅读",
      props: "《个人隐私条款》"
    }
  ]
};
