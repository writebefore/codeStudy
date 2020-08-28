const Koa = require('koa')
// const route = require('koa-route')
const compose = require('koa-compose')
const app = new Koa()
const logger = (ctx, next) =>{
    console.log(`${ctx.request.header.host} - ${ctx.request.url} - ${Date.now()} - ${ctx.request.method}`)
    next()
}

const main = ctx => {
    ctx.response.body = 'hello koa'
}


const middleware = compose([logger,main])
// app.use(logger)
app.use(middleware)
app.listen(3000,()=>{
    console.log("http://127.0.0.1:3000");
})