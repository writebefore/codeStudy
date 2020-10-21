/*
 * @Author: LHN
 * @Date: 2020-10-20 10:48:55
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-21 12:14:23
 * @description: In User Settings Edit
 * @FilePath: \koa\lib\application.js
 */
let http = require("http");
let EventEmitter = require("events");
let context = require("./context");
let request = require("./request");
let response = require("./response");
const { Stream } = require("stream");

class Koa extends EventEmitter {
  constructor() {
    super();
    this.fn;
    this.middlewares = [];
    this.context = context;
    this.request = request;
    this.response = response;
  }

  use(fn) {
    // this.fn = fn;
    this.middlewares.push(fn);
  }

  compose(middlewares, ctx) {
    function dispatch(index) {
        if(index === middlewares.length)  return;
        let middlewares = middlewares[index];
        middlewares(ctx, () => dispatch(index + 1))
    }
    dispatch(0)
  }

  createContext(req, res) {
    // 核心
    const ctx = Object.create(this.context);
    const request = (ctx.request = Object.create(this.request));
    const response = (ctx.response = Object.create(this.response));
    // 交叉赋值
    ctx.req = request.req = response.req = req;
    ctx.res = request.res = response.res = res;
    request.ctx = response.ctx = ctx;
    request.response = response;
    response.request = request;
    return ctx;
  }

  handleRequest(req, res) {
    res.statusCode = 404;
    let ctx = this.createContext(req, res);
    this.compose(this.middlewares, ctx);
    if (typeof ctx.body == "object") {
      ctx.setHeader("Content-Type", "application/json;charset=utf-8");
      res.end(JSON.stringify(ctx.body));
    } else if (ctx.body instanceof Stream) {
      ctx.body.pipe(res);
    } else if (typeof ctx.body == "string" || Buffer.isBuffer(ctx.body)) {
      ctx.setHeader("Content-Type", "text/html;charset=uft-8");
      res.end(ctx.body);
    } else {
      ctx.end("Not found");
    }
  }

  listen(...args) {
    let server = http.createServer(this.handleRequest.bind(this));
    server.listen(...args);
  }
}

module.exports = Koa;
