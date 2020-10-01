/*
 * @Author: LHN
 * @Date: 2020-10-01 16:54:20
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-01 17:04:55
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\app\controllers\user_controller.js
 */
const get = async (ctx, next) =>{
    ctx.status = 200;
    ctx.body = {
        msg : 'get request',
        data:{
            data: 'hello world'
        },
    }
}

module.exports = {
    get
}