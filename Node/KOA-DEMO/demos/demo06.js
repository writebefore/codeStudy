const Koa = require('koa')
const route = require('koa-route') //路由
const app = new Koa()

const main = ctx => {
    ctx.request.type = 'text'
    ctx.response.body = "hello koa"
}
const about = ctx =>{
    ctx.response.type = 'html'
    ctx.response.body = "<a href='/'>about</a>"
}

app.use(route.get('/about',about))
app.use(route.get('/',main))


app.listen(8000,()=>{
    console.log("http://127.0.0.1:8000")
})