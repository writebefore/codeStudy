/*
 * @Author: LHN
 * @Date: 2020-10-20 10:49:16
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-21 11:27:46
 * @description: In User Settings Edit
 * @FilePath: \koa\lib\request.js
 */
let url = require('url')
let request = {
  get url() { // ctx.request.url 就可以取值了
    return this.req.url
  },
  get path() { // ctx.request.path
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request