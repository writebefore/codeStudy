<!--
 * @Author: LHN
 * @Date: 2020-09-30 11:11:52
 * @LastEditors: LHN
 * @LastEditTime: 2020-10-28 11:01:12
 * @description: In User Settings Edit
 * @FilePath: \网络协议\readme.md
-->

# GET POST

```!
误区
http 并没有规定 GET 参数 一定放到 url 后面
POST 一定要放到 请求体里

语义区别
安全性
```

# CORS 设置

```!
Access-control-allow-origin
Access-control-allow-method
Access-control-allow-header
Access-control-allow-cr
```

# UDP 和 TCP 的区别

```!
UDP: 面向无连接的。只是数据报文的搬运工 不会对数据报文进行任何拆分和拼接
1. 应用层将数据传输给传输层的UDP协议, UDP给数据添加头部标识，然后传递给网络层
2. 在接收端, 网络接收到数据传输给传输层, UDP只去除IP报文头就传输给应用层, 不会做任何操作

UDP不可靠性:
1. 不需要建立连接, 随时可以发送数据
2. 接收到什么数据就传递什么数据, 不做数据备份, 也不关心接收端是否正确接收到数据
3. 没有拥塞控制, 一直以恒定的速度发送数据, 即使网络条件不好, 也不会调整发送速度, 所以存在丢包的风险
4. 优点, 在实时性要求高的场景 如视频通话

高效:
没有TCP复制, UDP的头部开销只有八字节, 而TCP至少二十字节, 所以传输报文很高效

传输方式:
UDP 支持一对一、一对多、多对多、多对一的传输方式
```

```!
TCP: 面向连接的

头部
1. Sequence number, 为了保证TCP传输的报文都是有序的
2. ACknowledgement number, 这个序号表示数据接收端期望接收的下一个字节的编号是多少, 同时也是上一个序号的数据已经接收到
3. Window Size, 窗口大小, 表示的是还能接收多少字节的数据, 用于流量控制
4. 标识符, URG, ACK, PSH, RST, SYN, FIN

三次握手:
1. 客户端向服务端发送连接请求, 请求发送后, 客户端进入SYN-SENT状态
2. 服务端接收到连接请求报文后, 如果同意连接, 则会发送一个应答, 发送完后便进入SYN-RECEIVED状态
3. 客户端接收到服务端的应答后还要向服务端发送一个确认报文, 发送后进入ESTABLISHED状态

# 为什么TCP建立连接需要三次握手

四次挥手
1. 客户端认为数据发送完成, 他需要向服务端发起连接释放的请求
2. 服务端接收到释放请求, 会响应一个ACK, 进入CLOSE_WAIT状态, 此时客户端到服务端的连接已经释放了, 不再接收客户端的数据了, 但是TCP连接是双向的, 所以服务端还可以往客户端发送数据
3. 如果还有没发送完的请求, 会继续发送, 完毕之后会向客户端发送连接释放的请求, 服务端进入LAST_ACK状态
4. 客户端接收释放请求, 向服务端发送确认应答, 客户端进入TIME_WAIT状态, 会持续 2*MSL（报文段最长寿命）
```

# http

```!
http 构成
1. 请求头
2. 请求行
3. 实体

GET和POST区别
1. Get能缓存, Post不能
2. Post比Get更安全一点点, 是因为Get请求的参数默认包含在URL里, 且会被浏览器保存历史记录, Post不会
3. 因为浏览器URL长度限制导致Get请求会受影响
4. Post支持更多的编码类型且不会被数据类型限制
```

# 常见的状态码

```!
2XX 成功
200 OK，表示从客户端发来的请求在服务器端被正确处理 204 No content，表示请求成功，但响应报文不含实体的主体 部分
205 Reset Content，表示请求成功，但响应报文不含实体的
主体部分，但是与 204 响应不同在于要求请求方重置内容 206 Partial Content，进行范围请求
3XX 重定向
301 moved permanently，永久性重定向，表示资源已被分 配了新的 URL
302 found，临时性重定向，表示资源临时被分配了新的 URL 303 see other，表示资源存在着另一个 URL，应使用 GET 方 法获取资源
304 not modified，表示服务器允许访问资源，但因发生请求 未满足条件的情况
307 temporary redirect，临时重定向，和302含义类似，但 是期望客户端保持请求方法不变向新的地址发出请求
4XX 客户端错误
400 bad request，请求报文存在语法错误
401 unauthorized，表示发送的请求需要有通过 HTTP 认证 的认证信息
403 forbidden，表示对请求资源的访问被服务器拒绝
404 not found，表示在服务器上没有找到请求的资源
5XX 服务器错误
500 internal sever error，表示服务器端在执行请求时发生了 错误
501 Not Implemented，表示服务器不支持当前请求所需要 的某个功能
503 service unavailable，表明服务器暂时处于超负载或正在 停机维护，无法处理请求
```
