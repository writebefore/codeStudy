/*
 * @Author: LHN
 * @Date: 2020-10-05 10:31:06
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-05 10:31:08
 * @description: In User Settings Edit
 * @FilePath: \手写浏览器\network\server.js
 */
const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
server.listen(8088);