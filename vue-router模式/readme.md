<!--
 * @Author: your name
 * @Date: 2020-09-21 20:10:31
 * @LastEditTime: 2020-09-21 21:50:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-router模式\readme.md
-->
# 前端路由

1.如何改变url却不引起url刷新
2.如何知道url改变了



history
提供了 pushState 和 replaceState 两个方法，这两个方法改变url的path部分不会引起页面刷新

通过 popstate 事件监听 url 的变化

  - 通过浏览器前进后退来改变url
  - 通过pushState/replaceState或a标签改变url会触发popstate事件