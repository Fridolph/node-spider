### 搭建开发环境（以WS为例）

安装[NVM](https://github.com/creationix/nvm/blob/master/README.md#installation)

使用NVM安装node最新LTS版本8.9.1（或者更高）和npm

```
nvm install 8.9.1
nvm use 8.9.1
```

安装express-generator

```
npm i -g express-generator
```

使用express-generator生成一个express项目

```
express --view=ejs what_i_love #项目名
cd what_i_love
npm i
```

安装并设置eslint，使用[Airbnb标准](https://www.npmjs.com/package/eslint-config-airbnb-base)

```
eslint --init #初始化eslint
```

配置Webstorm代码风格相关设置，以适应airbnb标准

使用GIT初始化项目

```
git init
git add README.md
git commit -m "✨initial commit"
git remote add origin git@github.com:aojiaotage/what_i_love.git
git push -u origin master
```

配置github的ssh-key：[链接](https://help.github.com/articles/connecting-to-github-with-ssh/)

### express.js

Express.js 框架是目前最流行的node.js后端框架之一
关于为何要使用框架：框架（正确高效地）解决了一些协议、解析、传输方面的细节问题，使开发者可以专注于自己的业务

#### 创建一个express服务

```
const express = require('express');
const app = express();
app.get('/', (req, res)=>{
  res.end('You created a express app!')
})
```

#### express的中间件

中间件：可以理解为处理请求时，对一系列复杂逻辑和操作进行封装和抽象，借助该系统，使用三方中间件处理网络请求流程中的逻辑会异常简单

```
// 使用body-parser处理请体，再也不用担心是urlencoded还是json了
const bodyParser = require('body-parser'); 
app.use(bodyParser);
app.get('/', (req, res)=>{
  console.log('req.body'); // 获取请求体
})
```

我们使用 `app.use()` 来引入中间件

自己编写的中间件，需要返回一个函数，形如

```
function(req, res, next){}
```

express在调用中间件时，会将封装好的req,res对象，以及next回调函数传入
当中间件调用next()时，中间件栈中的下一个中间件会被调用
注意，在一次请求过程中，req和res对象是一致的，可以理解为生命周期为一个完整请求的上下文
可以利用这一点，比如

```
req.user = {name:"who"} //注意变量命名规则，避免冲突
```

的形式，为后续中间件提供额外信息

#### 错误中间件

```
function(err, req, res, next){} //必须指定四个参数，不可省略next
```

如果调用next的时候传入任何值，除了'router'字符串以外，均会触发err中间件,
如果`next('route')`，则是跳过当前中间件栈的处理流程，直接进入下一个router中间件中

#### 常用中间件

请求体解析 body-parser
文件上传 multer
cookie\session相关：cookie-parser cookie-session
http传输压缩 compression
安全相关 helmet

#### app.use/router.use

app.use和router.use可以接受多个中间件作为参数

```
function(req,res,next){}

app.use('/a',mwa,mwb); //在/a路径下挂在mwa和mwb
app.use('/b,[mwa,mwb]); //与上一条一样
app.use('/b,[mwa], mwb); //与上一条一样
```

#### 文件结构

routes/
views/
models/
services/
utils/
