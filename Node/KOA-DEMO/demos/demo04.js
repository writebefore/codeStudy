const fs = require('fs')
const Koa = require('koa')
const app = new Koa()
const stream = fs.createReadStream('./data.json')
const main = ctx =>{
    console.log(stream.buffer);
}

app.use(main)

app.listen(8000,()=>{
    console.log("http://127.0.0.1:8000");
})
