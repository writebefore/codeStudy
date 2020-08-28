//  引入依赖
const Koa = require('koa')

const app = new Koa()

app.listen(8000,()=>{
    console.log('127.0.0.1:8000');
})