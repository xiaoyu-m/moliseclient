/**
 * koa2 server 入口
 * Created by zdliuccit on 2018/7/6.
 */
const Koa = require('koa');
const koaCompress = require('koa-compress')();
const routerS = require('koa-router');
const loggerMiddleware = require('koa-logger')();
const staticMiddleWare = require('./middle/staticMiddleWare');
const errorMiddleware = require('./middle/errorMiddleWare');
const proxyMiddleWare = require('./middle/proxyMiddleWare');
const vueKoaSSR = require('./vue.koa.ssr');
const currentIP = require('ip').address();
const VueRouterSitemap = require('vue-router-sitemap');
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
const { JSEncrypt } = require('jsencrypt');
const appConfig = require('./../app.config');
const uri = `http://${currentIP}:${appConfig.appPort}`;
const router = new routerS();
// koa server
const app = new Koa();
// 中间件,
const middleWares = [
  // 打印请求与响应 日志
  loggerMiddleware,
  // 压缩响应
  koaCompress,
  // 错误处理
  errorMiddleware,
  // 静态资源中间件
  staticMiddleWare(),
  router.routes(),
  router.allowedMethods(),
];
middleWares.forEach((middleware) => {
  if (!middleware) {
    return;
  }
  app.use(middleware);
});

// vue ssr处理
vueKoaSSR(app, uri);

// http代理中间件
app.use(proxyMiddleWare());

console.log(`\n> Starting server... ${uri} \n`);

// 错误处理
app.on('error', (err) => {
  // console.error('Server error: \n%s\n%s ', err.stack || '')
});

app.listen(appConfig.appPort);
