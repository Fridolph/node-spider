# MongoDB

MongoDB作为最流行的NoSQL数据库之一，运用灰常广泛，其友好的JSON支持和灵活的表单结构，使其在使用Node.js开发的诸多Web应用中非常受欢迎
在高性能分布式存储领域，MongoDB也有一席之地，然而MongoDB对事务的不友好和过于灵活的特性也带来了一些问题

## 相关操作

增

db.user.insert()

删

db.user.remove()

改

db.user.update(filter, update, options)
db.user.update({name: 'fri'}, {$set: {age: 36}}) 
改相当于先查出要改的具体一条，第二个参数为要具体改的东西  
要带上 `$` 若不带，相当于直接将整个文档改为 所填的内容
带上`$` 为 改掉传入条件的那个
findOneAndUpdate 原子操作

db.user.update({name: 'fri'}, {$unset: {age: 1}}) 将age字段置空

查

db.user.find({})
db.user.findOne({})
db.user.find({}, {age: 1})  第二个参数就是筛选条件, 1为显示, 0为隐藏

**数据结构**

Decimal128 来解决浮点数  0.1+0.2的问题
Binary data 存放图片二进制数据

**聚合**



# mongoose

mongoose是MongoDB的Node.js框架，在处理MongoDB表管理、验证方面有方便之处