const Koa = require('koa')

const app = new Koa()

const handle = async (ctx, next) => {
    // 捕捉错误 如果出错，直接输出一个错误页面
    // 用p标签装内容  something error, you should concat admin
    try{
        console.log(2);
        await next()
    }catch(err){
        console.log(3);
        ctx.response.type = "html"
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = "<p>something error, you should concat admin</p>"

        // ctx.app.emit('error',err, ctx)
    }
}

const main = ctx =>{
    console.log(1);
    ctx.throw(500)
}

// app.on('error', function(err){
//     console.log(err)
//     console.log("logger error", err.message);
// })

app.use(handle)

app.use(main)


app.listen(8000,() =>{
    console.log("http://127.0.0.1:8000");
})