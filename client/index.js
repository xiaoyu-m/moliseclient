import "@babel/polyfill";
import Vue from "vue";
import App from "./app.vue";
import { createStore } from "./store";
import { createRouter } from "./router";
import { sync } from "vuex-router-sync";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 引入vue-awesome-swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper /* { default global options } */);

import "swiper/css/swiper.css";
import "./main.less";

// reset 样式
Vue.use(ElementUI);

// config配置文件
import "./config";
// 涉及到原生对象调用的插件统一放plugins目录下
import "./plugins";
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例
export function createApp() {
  // 创建 router 实例
  const router = createRouter();
  // 创建 store 实力
  const store = createStore();
  // sync the router with the vuex store.
  sync(store, router);

  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    store,
    render: h => h(App)
  });
  return { app, router, store };
}
