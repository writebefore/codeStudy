/*
 * @Author: LHN
 * @Date: 2020-10-01 15:39:09
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 16:01:18
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\app.js
 */
const Koa = require('koa'); 
const cors = require('koa2-cors'); // 跨域处理
const bodyParser = require('koa-bodyparser'); // 解析参数
const mongoose = require('mongoose'); // mongoDB连接驱动
const config = require('./config')

const app = new Koa()

// 连接mongoDB
mongoose.connect(config.db, {useNewUrlParser: true}, (err) => {
    if(err){
        console.error('Failed to connect to database')
    } else{
        console.log('Connecting database success');
    }
})

app.use(cors());
app.use(bodyParser());

const user_router = require('./routes/api/user_router')
app.use(user_router.routes()).use(user_router.allowedMethods())

app.listen(config.port)