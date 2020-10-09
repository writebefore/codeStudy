/*
 * @Author: LHN
 * @Date: 2020-10-09 14:53:45
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-09 16:49:01
 * @description: In User Settings Edit
 * @FilePath: \跨域\后端\index.js
 */
const http = require('http');
const qs = require('querystring')
const url = require('url')

http.createServer((req, res) => {
    if(req.url.includes('/api')){
        // let fn = qs.parse(req.url.split('?')[1]).callback;
        
        let {query} = url.parse(req.url,true);
        const fn = query.callback


        let json = {
            code: 0,
            name: 12,
        }
        res.end(`${fn}(${JSON.stringify(json)})`);
    }else {
        // res.end('')
    }
})
.listen(8088, () => {
    console.log("http://127.0.0.1:8088");
})