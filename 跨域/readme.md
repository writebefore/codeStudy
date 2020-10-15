<!--
 * @Author: LHN
 * @Date: 2020-10-09 14:37:59
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-14 16:11:39
 * @description: In User Settings Edit
 * @FilePath: \跨域\readme.md
-->

# 浏览器的安全策略

协议 域名 端口 不同 即跨域

# 解决方法

cors
jsonp
反向代理

# 简单请求 与 非简单请求

```!
非简单请求会以 OPTIONS 请求方法发出一个预检请求查看请求是否被允许跨域
某些请求不会触发 CORS 预检请求。本文称这样的请求为“简单请求”，请注意，该术语并不属于 Fetch （其中定义了 CORS）规范。若请求满足所有下述条件，则该请求可视为“简单请求”：

使用下列方法之一：
GET
HEAD
POST
除了被用户代理自动设置的首部字段（例如 Connection ，User-Agent）和在 Fetch 规范中定义为 禁用首部名称 的其他首部，允许人为设置的字段为 Fetch 规范定义的 对 CORS 安全的首部字段集合。该集合为：
Accept
Accept-Language
Content-Language
Content-Type （需要注意额外的限制）
DPR
Downlink
Save-Data
Viewport-Width
Width
Content-Type 的值仅限于下列三者之一：
text/plain
multipart/form-data
application/x-www-form-urlencoded
```

# CORS 头的设置

```!
  // 允许哪个域名请求 *
  ctx.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  // 服务器支持的头部 x-custom
  ctx.set('Access-Control-Allow-Headers', 'x-custom,content-type');
  // 支持的方法
  ctx.set('Access-Control-Allow-Methods', '*');
  // 允许 携带 cookie
  // 设置为 允许的时候 Access-Control-Allow-Origin 需要是一个具体的域名
  // 不能是 *
  ctx.set('Access-Control-Allow-Credentials', true);
  // Access-control-allow-max-age: 预检请求的缓存时间,在命中无需再发送预检请求
  // Access-control-expose-headers: 前端 js 可以拿到的响应头有哪些
```
