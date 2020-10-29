import moliseIndex from "@/pages/moliseIndex/moliseIndex";
import about from "@/pages/about/about";
import source from "@/pages/source/source";
import project from "@/pages/project/project";
import youthCamp from "@/pages/youthCamp/youthCamp";
import hotNews from "@/pages/hotNews/hotNews";
import hotNew from "@/pages/hotNews/hotNew/hotNew";
import hotNewsType from "@/pages/hotNews/hotNewsType/hotNewsType";
import hotVideo from "@/pages/hotVideo/hotVideo";
import signUp from "@/pages/signUp/signUp";
import teacherGroupInfo from "@/components/phone/teacherGroup/teacherGroupInfo/teacherGroupInfo";
import subVideo from "@/components/phone/hotvideo/subVideo/subVideo";
export default [
  {
    path: "/",
    name: "首页",
    component: moliseIndex
  },
  {
    path: "/youthCamp",
    name: "青训营",
    component: youthCamp
  },
  // {
  {
    path: "/hotNews",
    name: "新闻资讯",
    component: hotNews
  },
  // 动态路由
  {
    path: "/hotNews/type/:type",
    name: "",
    component: hotNewsType,
    props: true
  },
  {
    path: "/hotNew/:newId",
    name: "",
    component: hotNew,
    props: true
  },
  {
    path: "/video/:vId",
    name: "",
    component: subVideo,
    props: true
  },

  {
    path: "/teacherGroupInfo/:id",
    name: "",
    component: teacherGroupInfo,
    props: true
  },
  {
    path: "/source",
    name: "教学资源",
    component: source
  },
  // {
  //   path: "/project",
  //   name: "教学项目",
  //   component: project
  // },
  {
    path: "/hotVideo",
    name: "精彩视频",
    component: hotVideo
  },
  {
    path: "/signUp",
    name: "在线报名",
    component: signUp
  },
  {
    path: "/about",
    name: "关于我们",
    component: about
  }
];
