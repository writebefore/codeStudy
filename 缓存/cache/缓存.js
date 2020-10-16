/*
 * @Author: LHN
 * @Date: 2020-10-16 15:40:10
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-16 17:10:19
 * @description: In User Settings Edit
 * @FilePath: \缓存\cache\缓存.js
 */
const Koa = require("koa");
const app = new Koa();
const path = require("path");
const router = require("koa-router")();
const server = require("koa-static");
const md5 = require("md5")

app.use(router.routes()).use(router.allowedMethods());
app.use(server(path.join(__dirname),{
  setHeaders:(res,path,stats) => {
    console.log(stats);
    if(path.indexOf(/[\.js]/)){
      res.setHeader('Cache-Control','public,max-age=30') // 强缓存
      // 要保证每次获取最新的资源
      // res.setHeader('ETag','') // 能够根据文件内容生成的 Hash 字符串 (md5)
    }
  }
}));

router.get("/", async function (ctx) {
  ctx.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>Hello world</div>
        <script src='/test.js'></script>
    </body>
    </html>
    `;
});

app.listen(9090, () => {
  console.log("server is running 9090");
});
