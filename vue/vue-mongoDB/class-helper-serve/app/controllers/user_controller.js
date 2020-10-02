/*
 * @Author: LHN
 * @Date: 2020-10-01 16:54:20
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-02 16:13:09
 * @description: In User Settings Edit
 * @FilePath: \vue-mongoDB\class-helper-serve\app\controllers\user_controller.js
 */
const User_col = require('../models/user')
const Password_col = require('../models/password')
const passport = require('../../utils/passport')
const uuidv1 = require('uuid').v1
const config = require('../../config')
const get = async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    msg: 'get request',
    data: {
      data: 'hello world'
    }
  }
}
//登陆
const login = async (ctx, next) => {
  const req = ctx.request.body
  //获取用户userId
  const user = await User_col.findOne({
    account: req.account
  }, {
    __v: 0,
    _id: 0
  })
  if (!user) {
    ctx.status = 200;
    ctx.body = {
      msg: '账号不存在',
      code: 0
    }
    return;
  }
  const userId = user.userId
  //获取数据库中的hash
  const pass = await Password_col.findOne({
    userId
  }, {
    hash: 1
  })
  const match = await passport.validate(req.password, pass.hash)
  ctx.status = 200
  if (match) {
    ctx.body = {
      code: 1,
      msg: '登陆成功',
      data: user
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }

}
//注册
const register = async (ctx, next) => {
  //判断当前账号是否可注册
  const req = ctx.request.body
  //查询用户
  const user = await User_col.findOne({
    account: req.account
  }, {
    __v: 0,
    _id: 0
  })
  ctx.status = 200;
  if (user) {
    ctx.body = {
      msg: '用户名已经存在',
      code: 0
    }
    return;
  }
  // 插入用户
  const userId = uuidv1()
  const newUser = await User_col.create({
    userId,
    account: req.account
  })
  if (newUser) {
    //加密
    const hash = await passport.encrypt(req.password, config.saltTimes)
    const newPassword = await Password_col.create({
      userId,
      hash
    })
    if (newPassword) {
      ctx.body = {
        code: 1,
        msg: '注册成功',
        data: {
          userId: newUser.userId,
          account: newUser.account
        }
      }
    } else {
      ctx.body = {
        code: 0,
        msg: '注册失败'
      }
    }
  }
}
module.exports = {
  get,
  login,
  register
}