## OS 模块

> [参考手册](http://www.runoob.com/nodejs/nodejs-os-module.html)

```javascript
// 引入该模块
var os = require("os")
```

```javascript
// 返回操作系统的发行版本
os.release()
```

```javascript
// 返回系统内存总量，单位为字节
os.totalmem()
// 返回操作系统空闲内存量，单位是字节
os.freemem()
```

```javascript
// 定义了操作系统的行尾符的常量
os.EOL
```

```javascript
// eg
var os = require("os");

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");
```





## Path 模块

> [参考手册](http://www.runoob.com/nodejs/nodejs-path-module.html)

```javascript
// 引入该模块
var path = require("path")
```

```javascript
// 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"
path.join([path1][, path2][, ...])
```

```javascript
// 用于将相对路径转为绝对路径
path.relative(from, to)
```





## Net 模块

> [参考手册](http://www.runoob.com/nodejs/nodejs-net-module.html)

```javascript
// 提供了一些用于底层的网络通信的小工具，包含了创建服务器/客户端的方法。
// 引入该模块
var net = require("net")
```





## DNS 模块

> [参考手册](http://www.runoob.com/nodejs/nodejs-dns-module.html)





## Domain 模块

> [参考手册](http://www.runoob.com/nodejs/nodejs-domain-module.html)

```javascript
// 简化异步代码的异常处理，可以捕捉处理try catch无法捕捉的异常。
// 引入模块
var domain = require("domain")
```















