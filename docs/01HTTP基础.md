#### HTTP基础

HTTP：超文本传输协议

HTTP的格式：文本

HTTP的组成部分：头部Header、请求体BODY，中间用空行分割

#### URL:唯一资源定位符

非常自然的地址属性
定位某个唯一资源
构成
协议://主机:端口/路径?查询#锚
Schema://Host:Port/Path?query [http://localhost:8082/user?name=aslfkd&](http://localhost:8082/user?name=aslfkd&)
duang://a.b.c:7200/hahaha?lalal=true

#### HTTP头部：

第一行 方法、路径、协议版本，使用空格分割 GET /user HTTP/1.1
第二行开始：内容

HTTP方法： GET POST PUT DELETE PATCH HEAD OPTIONS TRACE
协议版本 HTTP1.1
路径，需要请求的资源的路径，比如 /index.html /songs/lalala.mp3

HTTP头中常见键值对：
Host 指明请求的地址
Server 服务器信息
Content-Type 请求体的格式,如 xxx/www-url-encoded-form-data application/json
Accept: 接受的返回格式
Accept-Encoding：接受的请求编码
Accept-Language：接受的语言
Pragma：兼容http1.0的缓存
Cache-Control:缓存策略
Via:走过的服务器链路信息

Response头第一行： 协议 状态码 状态描述 如 HTTP/1.1 200 OK

返回码：
2xx 请求成功 200成功 201创建 202接受 203代理 206部分处理
3XX 重定向 302找到，重定向 304未修改
4xx 客户端错误 400请求内容错误 401无权限 403禁止访问 404你懂的
5xx 服务器错误 500服务器炸了 502网关炸了 503炸几分钟 504超时

#### HTTP头部和HTTP体中间：一个空行

#### HTTP体：真正传输的内容

内容随意，格式由Content-Type指定

#### 推荐书目：《图解HTTP》 《HTTP权威指南》

### 使用Node.js搭建一个HTTP服务

```js
const http = require('http');
const server = http.createServer();
server.listen(8808);
server.on('request',(req,res)=>{
    res.statusCode = 200;
    res.end('hello world!')
})
// 复杂版本见示例代码
```

### 搭建一个express模板

```js
npm i -g express-generator
express --view=ejs my_demo
cd my_demo
npm i
node bin/www
```

##### 完成☟下面的测试题，有彩蛋哟

