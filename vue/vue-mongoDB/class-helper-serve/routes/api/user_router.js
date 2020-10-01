/*
 * @Author: LHN
 * @Date: 2020-10-01 16:50:12
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-01 16:58:25
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\routes\api\user_router.js
 */
const Router = require('koa-router')

const router = new Router()
const user_controller = require('../../app/controllers/user_controller')

router.get('/get',user_controller.get)

module.exports = router