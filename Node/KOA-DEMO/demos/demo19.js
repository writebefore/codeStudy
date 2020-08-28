// set-cookie
const Koa = require('koa')

const app = new Koa()

const main = ctx => {
    const n = Number(ctx.cookies.get('view') || 0) + 1
    ctx.cookies.set('view',n)
    ctx.response.body = 'view' + n
}

app.use(main)
app.listen(8000, () => {
    console.log("http:127.0.0.1:8000");
})