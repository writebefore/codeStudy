# 什么是 XSS 攻击

xss 就是攻击者想尽一切办法将可以执行的代码的代码注入到网页中

xss 类型分为

- 持久型
  攻击者的代码被植入到了服务器
- 非持久型

# 如何防范 XSS 攻击

- 转义字符
  str = str.replace(/&/g, '&amp;')
  str = str.replace(/</g, '&lt;')
  str = str.replace(/>/g, '&gt;')
  str = str.replace(/"/g, '&quto;')
  str = str.replace(/'/g, '&#39;')
  str = str.replace(/`/g, '&#96;')
  str = str.replace(/\//g, '&#x2F;')

# 什么是 CSP

建立白名单
开发者告诉浏览器哪些外部资源是可以加载和执行, 如何拦截是由浏览器自己实现的

开启 CSP:

1. 设置 http 请求头 中的 Content-Security-Policy
2. 设置 meta 标签 \<meta http-equiv="Content-Security-Policy"\>

# 什么是 CSRF 攻击

跨站请求伪造

# 如何防范 CSRF 攻击

防范:

1. Get 请求不对数据进行修改
2. 不让第三方网站访问Cookie
3. 阻止第三方网站的请求
4. 请求必须携带验证码或者Token
