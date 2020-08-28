const Koa = require('koa')
const route = require('koa-route')

const app = new Koa()
const main = ctx => {
    console.log(ctx)
    let host = ctx.request.header.host
    let url = ctx.request.url
    let time = Date.now()
    let method = ctx.request.method
    ctx.response.type = 'text'
    ctx.response.body = host + url + '-' + method + '-' + time 
}
app.use(route.get('/',main))
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})
//路径 方式 时间