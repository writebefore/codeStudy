const Koa = require('koa')
const route = require('koa-route')
const path = require('path')
const server = require('koa-static')
const app = new Koa

const main = ctx => {
    
    ctx.response.body = "Hello world"
}

const redirect = ctx =>{
    ctx.response.redirect('./demo03.html')
}
app.use(server(path.join(__dirname)))
app.use(route.get('/',main))
app.use(route.get('/redirect',redirect))
app.listen(8000,()=>{
    console.log('http://127.0.0.1:8000');
})