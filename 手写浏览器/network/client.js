/*
 * @Author: LHN
 * @Date: 2020-10-05 10:16:20
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-05 10:53:56
 * @description: In User Settings Edit
 * @FilePath: \手写浏览器\network\client.js
 */
// const http = require('http');
const net = require('net');

const client = net.createConnection({
    port: 8088
}, () => {
    let jsonStr = JSON.stringify({a:1,b:2});
    client.write('GET / HTTP/1.1\r\n');
    client.write('HOST: 127.0.0.1\r\n');
    client.write('Content-Type: application/json\r\n');
    client.write('\r\n');
    client.write(jsonStr);
    client.end();
})

client.on('data', (data) => {
    console.log('收到', data.toString());
})

// 解析 有限 状态机
