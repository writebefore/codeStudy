/*
 * @Author: LHN
 * @Date: 2020-09-14 15:14:03
 * @LastEditors: LHN
 * @LastEditTime: 2020-09-25 18:46:15
 * @description: In User Settings Edit
 * @FilePath: \NODE-Spider\spider-demo\index.js
 */
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

// 通过https模块get方法，请求网站链接，在回调函数中获取资源
https.get("https://movie.douban.com/top250",(res) => {
    // 因为获取到的资源是分段返回的，所以需要手动拼接html
    let html = ''
    // res.on类似于addEventListener
    res.on('data',(chunk) =>{
        html += chunk
    })
    // res数据加载完成，去执行xx逻辑
    res.on('end', () => {
        // 操作dmo
        const $ = cheerio.load(html)
        const allFilms = [];
        $('li .item').each( function(){
            const title = $('.title', this).text();
            const star = $('.rating_num', this).text()
            const pic = $(' .pic img', this).attr('src')
            allFilms.push({
                title, star, pic,
            })  
        })

        // 同如下写法
        // $('li .item').each( (index,item) => {
        //     const title = $('.title', item).text();
        //     const star = $('.rating_num', item).text()
        //     const pic = $(' .pic img', item).attr('src')
        //     console.log(title, star, pic);
        // })
        fs.writeFile(__dirname+'/DouBan.json',JSON.stringify(allFilms),(err) => {
            if(err) throw err;
            console.log('文件已被保存');
        })
    })

})