const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()

const main = ctx => {
    // const body = ctx.request.body
    // if(body.name){
    //     ctx.response.body = { name: body.name}
    // }
    // ctx.throw(400,"no name")
    console.log(ctx)
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
}
app.use(koaBody())
app.use(main)
app.listen(8000, () => {
    console.log("http:127.0.0.1:8000");
})