## SPA

单页应用
所有内容都写在一个 index.html
npm run build

用户访问 index.html(空的)

- script -> 发起请求 -> js 执行, 构造出页面

## SSR(同构)

vue react
虚拟 DOM
平台无关
当渲染到浏览器里面 虚拟DOM 变成 真实 DOM
当渲染到服务器里面 虚拟DOM 变成 字符串
当渲染到客户端里面 虚拟DOM 变成 客户端的组件
