/*
 * @Author: LHN
 * @Date: 2020-10-14 15:14:35
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-14 16:10:03
 * @description: In User Settings Edit
 * @FilePath: \跨域\cors\后端\server\index.js
 */
const Koa = require('koa');
const app = new Koa();
const path = require('path');
const router = require('koa-router')();

app.use(async (ctx, next) => {
  // 允许哪个域名请求 *
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // 服务器支持的头部 x-custom
  ctx.set('Access-Control-Allow-Headers', 'x-custom,content-type');
  // 支持的方法
  ctx.set('Access-Control-Allow-Methods', '*');
  // 允许 携带 cookie
  // 设置为 允许的时候 Access-Control-Allow-Origin 需要是一个具体的域名
  // 不能是 *
  ctx.set('Access-Control-Allow-Credentials', true);
  // Access-control-allow-max-age: 预检请求的缓存时间,在命中无需再发送预检请求
  // Access-control-expose-headers: 前端 js 可以拿到的响应头有哪些
  await next();
})
router.post('/api', async function (ctx) {
  // // console.log('cookie', ctx.cookies.get('name'));
  // ctx.cookies.set('key', 'value');
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});


app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(9090, () => {
  console.log('server is running 9090');
});