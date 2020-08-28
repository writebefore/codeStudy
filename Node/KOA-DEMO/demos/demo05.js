const Koa = require('koa')
const app = new Koa()
const main = ctx =>{
    if(ctx.request.url !== "/"){
        ctx.response.body = "<a href='http://www.baidu.com'>百度</a>"
    }else{
        ctx.response.body = "hello koa"
    }
}
app.use(main)
app.listen(8000,()=>{
    console.log("http://127.0.0.1:8000");
})