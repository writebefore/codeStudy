/*
 * @Author: LHN
 * @Date: 2020-10-20 10:49:30
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-21 11:32:35
 * @description: In User Settings Edit
 * @FilePath: \koa\lib\response.js
 */
let response = {
    get body() {
        return this._body
    },
    set body(value) {
        this.res.statusCode = 200;
        this._body = value;
    }
}

module.exports = response