const Koa = require('koa')
const path = require('path')
const server = require('koa-static')

const app = new Koa()
// const main = server(path.join(__dirname))

const main = ctx =>{
    ctx.response.body = path.join(__dirname)
}

app.use(main)

app.listen(8000,()=>{
    console.log("http://127.0.0.1:8000");
})