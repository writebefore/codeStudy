const Koa = require('koa')
const fs = require('fs').promises
const app = new Koa()

// 中间件
const main = async ctx => {
    ctx.response.type = 'json'
    ctx.response.body = await fs.readFile('./data.json','UTF-8')
}

app.use(main)

app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})