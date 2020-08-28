const Koa = require('koa')

const main = ctx => {
    ctx.response.status = 404
    ctx.response.body = "404 Page Not Found"
}

const app = new Koa()
app.use(main)
app.listen(8000,()=>{
    console.log("http://127.0.0.1:8000");
})