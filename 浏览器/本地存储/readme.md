<!--
 * @Author: LHN
 * @Date: 2020-10-28 11:43:49
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-28 12:00:41
 * @description: In User Settings Edit
 * @FilePath: \浏览器\本地存储\readme.md
-->

# cookie

```!
value: 保存用户登录态, 值应该加密
http-only: 不能通过js 访问cookie, 防止xss攻击
secure: 只在传输协议为https的请求中携带
same-site: 规定浏览器不能在跨域请求中携带cookie, 减少 CSRF 攻击
```

# 什么是 Service Worker

运行在浏览器背后的独立线程, 一般用来实现缓存的功能, 传输协议必须是 HTTPS
资料 <https://zhuanlan.zhihu.com/p/115243059>
