## REPL

### 下划线 _

* 获取表达式结果

  ```Javascript
  $ node
  > var x = 10
  undefined
  > var y = 20
  undefined
  > x + y
  30
  > var sum = _	// _ 表示获取表达式结果
  undefined
  > console.log(sum)
  30
  undefined
  >
  ```




## EventEmitter

### eg

```javascript
// 引入 events 模块
var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");


$ node main.js
2 个监听器监听连接事件。
监听器 listener1 执行。
监听器 listener2 执行。
listener1 不再受监听。
监听器 listener2 执行。
1 个监听器监听连接事件。
程序执行完毕。
```

### 属性

#### [参考资料](http://www.runoob.com/nodejs/nodejs-event.html)

#### error 事件

```
EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，在遇到异常的时候通常会触发 error 事件。
当 error 被触发时，EventEmitter 规定如果没有响应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。
```



## Buffer

```
JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。
但在处理像 TCP 流或文件流时，必须使用到二进制数据。因此在 Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
```

### 创建

```javascript
var buf = new Buffer(10);

var buf = new Buffer([10, 20, 30, 40, 50]);

var buf = new Buffer("www.runoob.com", "utf-8");
// utf-8 是默认编码方式
```

### 写入缓冲区

```javascript
buf.write(string[, offset[, length]][, encoding])
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
```

### 从缓冲区读取数据

```javascript
buf.toString([encoding[, start[, end]]])
// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。
```

### 缓冲区合并

```javascript
Buffer.concat(list[, totalLength])
// list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。
```

### 缓冲区拷贝

```javascript
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```

### 缓冲区裁剪

```javascript
buf.slice([start[, end]])
// 返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
```





## Steam

```
所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

data	当有数据可读时触发。
end		没有更多的数据可读时触发。
error	在接收和写入过程中发生错误时触发。
finish	所有数据已被写入到底层系统时触发。
```

### 从流中读数据

```javascript
// 创建 input.txt 文件，内容如下：
// 菜鸟教程官网地址：www.runoob.com

// 创建 main.js 文件, 代码如下：
var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

// 以上代码执行结果如下：
// 程序执行完毕
// 菜鸟教程官网地址：www.runoob.com
```

### 写入流

```javascript
var fs = require("fs");
var data = '菜鸟教程官网地址：www.runoob.com';

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

// 以上程序会将 data 变量的数据写入到 output.txt 文件中。代码执行结果如下：
// $ node main.js 
// 程序执行完毕
// 写入完成。
```

### 管道流

用于从一个流中获取数据并将数据传递到另外一个流中

```javascript
var fs = require("fs");

// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
```

### 链式流

通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作

```javascript
// 用管道和链式来压缩和解压文件
// 创建 compress.js 文件, 代码如下：
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));

// 解压该文件
// 创建 decompress.js 文件，代码如下：
var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));
  
console.log("文件解压完成。");
```





## 模块系统

Node.js 提供了 exports 和 require 两个对象，其中 exports 是模块公开的接口，require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

```javascript
// hello.js
exports.world = function() {
  console.log('Hello World');
}
// 通过 require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了
```

### 对象封装到模块中

```javascript
// 格式
module.exports = function() {
  // ...
}
```

```javascript
// hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;

// 这样就可以直接获得这个对象了：
// main.js 
var Hello = require('./hello'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 
```





## 路由

[Node.js 路由](http://www.runoob.com/nodejs/nodejs-router.html)





## 全局变量

Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。

### _filename

表示当前正在执行的脚本的文件名。

它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 

如果在模块中，返回的值是模块文件的路径。

```javascript
// 输出全局变量 __filename 的值
console.log( __filename );
```



### _dirname

表示当前执行脚本所在的目录。

```javascript
// 输出全局变量 __dirname 的值
console.log( __dirname );
```



### setTimeout(cb, ms)

**setTimeout(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。

返回一个代表定时器的句柄值。

```javascript
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);
```



### clearTimeout(t)

**clearTimeout( t )** 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 **t** 是通过 setTimeout() 函数创建的定时器。

```javascript
function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);
```



### setInterval(cb, ms)

**setInterval(cb, ms)** 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。

返回一个代表定时器的句柄值。可以使用 **clearInterval(t)** 函数来清除定时器。

setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。



### console

用于向标准输出流（stdout）或标准错误流（stderr）输出字符。

[console](http://www.runoob.com/nodejs/nodejs-global-object.html)

```javascript
// console.log()：向标准输出流打印字符并以换行符结束。
// console.log 接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。
console.log('Hello world'); 
console.log('byvoid%diovyb'); 
console.log('byvoid%diovyb', 1991); 

// 运行结果为：
Hello world 
byvoid%diovyb 
byvoid1991iovyb 
```



## Node.js 常用工具

