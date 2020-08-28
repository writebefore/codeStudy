const Koa = require('koa')

const app = new Koa()

const handle = async (ctx,next) => {
    try{
        await next()
    }catch(err){
        // console.log(err);
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = {
            'message':err.message
        }
    }
}

const main = ctx =>{
    ctx.throw(500)
}
app.use(handle)
app.use(main)

app.listen(8000,() =>{
    console.log("http://127.0.0.1:8000");
})