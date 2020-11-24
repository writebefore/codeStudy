<!--
 * @Author: LHN
 * @Date: 2020-08-21 15:08:13
 * @LastEditors: LHN
 * @LastEditTime: 2020-11-23 14:57:51
 * @description: In User Settings Edit
 * @FilePath: \react\readme.md
-->
- react react-dom react 开发框架

- react-scripts 编译的支持

- react 框架 API

  - css
  - setData
  - {{}}

- es6
- 项目的构建

1. npm run start 工艺
   react-scripts 开发工艺 流程 生产车间
   - script react-scripts start
   - src/index.js #root ReactDOM.render(\<App/>, rootEle)
   - 每个组件 返回 html 的函数 组件

- 组件化
  import 来打理
  App 根组件
  MyComponent 子组件

  数据接口 小程序 wx.request -> ajax fetch
  生命周期 onload -> ?
  pages 切换 react-router

- 生命周期 旧
  componentWillMount:在组件渲染之前执行
  componentDidMount:组件渲染之后执行
  shouldComponentUpdate:返回true和false，true代表允许改变，false代表不允许改变
  componentWillUpdate:数据在改变之前执行(state,props)
  componentDidUpdate:数据修改完成(state,props)
  componentWillReceiveProps:props发生改变执行
  componentWillUnmount:组件卸载前执行

- 生命周期 新
  constructor
  getDerivedStateFromProps
  render
  componentDidMount

  更新时
  getDerivedStateFromProps
  shouldComponentUpdate
  render
  getSnapshotbeforeUpdate
  componentDidUpdate
  componentWillUnmount


  getSnapshotbeforeUpdate
  shouldComponentUpdate
  componentDidUpdate
  componentWillUnmount