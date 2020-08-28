const Koa = require('koa')

const app = new Koa()

const main = ctx => {
    console.log(ctx);
    ctx.response.body = "Hello KOA"
}
app.use(main)

app.listen(8000,()=>{
    console.log("http://127.0.0.1:8000");
})