# MVC模式

MVC模式是为了解决应用开发中代码增加后变得难以维护和复用的问题而被提出来的一种解决方案
Model为模型，自身含有数据结构以及数据结构相关的逻辑，如用户的管理，状态的改变和维护等等，通常还需要解决与数据库之间如何高效通信的问题
View为视图，体现为最终展现给用户（广义，比如客户端）的形式，View根据一个或者多个Model的
数据进行展示
Controller为控制器，负责接收用户请求，操作或提取model并最终交由view渲染

## Express中的MVC

在Express中，我们可以创建如下结构：

routes/
views/
models/
services/
其中，由于express的特点，根据设置，views目录下的文件会被模板引擎在调用res.render('view_name')的时候自动渲染
view层可以理解为模板引擎+views文件夹中的文件
而routes可以理解为controller，负责根据用户的请求，调取相关的service，最终得到model并用于渲染
models则代表了model和相关逻辑
services则有些特别，由于同层model之间解耦的需要，单个model往往不应该包含太多对其他model的操作，我们应该在services中对一系列逻辑上有关的model进行统一操作

另：Express拾遗

## Request

req.params:识别定义路径时以冒号开头的参数

"http://localhost:3000/user/laoyang"

    router.get('/user/:name',(req,res)=>{
      console.log(req.params.name); // 请求 /name/hahah 则结果为 hahaha
    })

req.body:经过body-parser转码后的body对象
req.method:请求方法
req.query:经过node原生querystring或者qs库识别的http query "http://localhost:3200/?name=123&age=321"
req.get:获取header

## Response

res.send:发送内容
res.append:在请求头中加入内容
res.redirect:重定向请求
res.json:发送JSON给客户端

Next()特殊参数

如果调用next的时候传入任何值，除了'router'字符串以外，均会触发err中间件,
如果next('router')，则是跳过当前中间件栈的处理流程，直接进入下一个router中间件中