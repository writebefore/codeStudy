const Koa = require('koa')

const app = new Koa()
// ctx.request.accepts检查http请求的accept的内容 Content-type类似
const main = ctx => {  

    if(ctx.request.accepts('xml')){
        ctx.response.type = 'xml'
        ctx.response.body = '<data>hello koa</data>'
    }else if(ctx.request.accepts('html')){
        ctx.response.type = 'html'
        ctx.response.body = '<p>hello world</p>'
    }else if(ctx.request.accepts('json')){
        ctx.response.type = 'json'
        ctx.response.body = JSON.stringify({title:'hello koa'})
    }else{
        ctx.response.type = 'text'
        ctx.response.body = 'hello koa'
    }
}

app.use(main)

app.listen(8000,()=>{
    console.log('http://127.0.0.1:8000');
})

