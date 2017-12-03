## 文件系统

```javascript
// 导入文件系统模块(fs)语法如下所示
var fs = require("fs")
```

```
Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
```



### Eg：读取文件

```javascript
// 创建 input.txt 文件，内容如下
菜鸟教程官网地址：www.runoob.com
```

```javascript
// 创建 file.js 文件, 代码如下
var fs = require("fs");

// 异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");
```

```javascript
// $ node file.js
// output: 
同步读取: 菜鸟教程官网地址：www.runoob.com

程序执行完毕。
异步读取: 菜鸟教程官网地址：www.runoob.com

```



### 打开文件

```javascript
// 异步模式下打开文件的语法格式
fs.open(path, flags[, mode], callback)
```

```javascript
path - 文件的路径。
flags - 文件打开的行为。具体值详见下文。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。
```

```javascript
// flags 描述
r   以读取模式打开文件。如果文件不存在抛出异常。
r+  以读写模式打开文件。如果文件不存在抛出异常。
rs  以同步的方式读取文件。
rs+ 以同步的方式读取和写入文件。
w   以写入模式打开文件，如果文件不存在则创建。
wx  类似 'w'，但是如果文件路径存在，则文件写入失败。
w+  以读写模式打开文件，如果文件不存在则创建。
wx+ 类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a   以追加模式打开文件，如果文件不存在则创建。
ax  类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+  以读取追加模式打开文件，如果文件不存在则创建。
ax+ 类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
```

```javascript
// eg
var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
  console.log("文件打开成功！");     
});

// $ node file.js 
// output:
准备打开文件！
文件打开成功！
```



### 获取文件信息

```javascript
// 通过异步模式获取文件信息的语法格式
fs.stat(path, callback)
```

```
fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。
```

```javascript
// 判断是否为文件
var fs = require('fs');

fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
    console.log(stats.isFile());         //true
})
```

```javascript
stats.isFile()          如果是文件返回 true，否则返回 false。
stats.isDirectory()     如果是目录返回 true，否则返回 false。
stats.isBlockDevice()   如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()   如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()  如果是软链接返回 true，否则返回 false。
stats.isFIFO()          如果是FIFO，返回true，否则返回 false。
stats.isSocket()        如果是 Socket 返回 true，否则返回 false。
```



### 写入文件

```javascript
// 异步模式下写入文件的语法格式
fs.writeFile(file, data[, options], callback)
// 如果文件存在，该方法写入的内容会覆盖旧的文件内容。
```

```javascript
file - 文件名或文件描述符。
data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
options - 该参数是一个对象，包含{encoding, mode, flag}。默认编码 utf8，模式为 0666，flag为 'w'。
callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
```

eg:

```javascript
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});
```

```javascript
// $ node file.js 
// output:
准备写入文件
数据写入成功！
--------我是分割线-------------
读取写入的数据！
异步读取文件数据: 我是通过写入的文件内容
```



### 读取文件

```javascript
// 异步模式下读取文件的语法格式
fs.read(fd, buffer, offset, length, position, callback)
// 该方法使用了文件描述符来读取文件
```

```javascript
fd - 通过 fs.open() 方法返回的文件描述符。
buffer - 数据写入的缓冲区。
offset - 缓冲区写入的写入偏移量。
length - 要从文件中读取的字节数。
position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
callback - 回调函数，有三个参数err, bytesRead, buffer。
           err 为错误信息，bytesRead 表示读取的字节数，buffer 为缓冲区对象。
```

eg：

```javascript
// input.txt 文件内容为
菜鸟教程官网地址：www.runoob.com
```

```javascript
// 创建 file.js 文件
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});
```

```javascript
// $ node file.js 
// output:
准备打开已存在的文件！
文件打开成功！
准备读取文件：
42  字节被读取
菜鸟教程官网地址：www.runoob.com
```



### 关闭文件

```javascript
// 异步模式下关闭文件的语法格式
fs.close(fd, callback)
```

```javascript
fd - 通过 fs.open() 方法返回的文件描述符。
callback - 回调函数，没有参数，除了 (err)。
```

```javascript
// eg
fs.close(fd, function(err){
  if (err){
    console.log(err);
  } 
  console.log("文件关闭成功");
});
```

eg:

```javascript
// input.txt 文件内容为
菜鸟教程官网地址：www.runoob.com
```

```javascript
// 创建 file.js 文件
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("准备读取文件！");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("文件关闭成功");
      });
   });
});
```

```javascript
// $ node file.js
// output:
准备打开文件！
文件打开成功！
准备读取文件！
菜鸟教程官网地址：www.runoob.com
文件关闭成功
```



### 截取文件

```javascript
// 异步模式下截取文件的语法格式
fs.ftruncate(fd, len, callback)
```

```javascript
len - 文件内容截取的长度。
```

eg:

```javascript
// input.txt 文件内容为
site:www.runoob.com
```

```javascript
// 创建 file.js 文件
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("文件打开成功！");
   console.log("截取10字节后的文件内容。");
   
   // 截取文件
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("文件截取成功。");
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err){
            console.log(err);
         }

         // 仅输出读取的字节
         if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
         }

         // 关闭文件
         fs.close(fd, function(err){
            if (err){
               console.log(err);
            } 
            console.log("文件关闭成功！");
         });
      });
   });
});
```

```javascript
// $ node file.js
// output:
准备打开文件！
文件打开成功！
截取10字节后的文件内容。
文件截取成功。
site:www.r
文件关闭成功
```



### 删除文件

```javascript
fs.unlink(path, callback)
```

```javascript
callback - 回调函数，没有参数，除了 (err)。
```

```javascript
// eg
var fs = require("fs");

console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("文件删除成功！");
});
```



### 创建目录

```javascript
fs.mkdir(path[, mode], callback)
```

```javascript
path - 文件路径。
mode - 设置目录权限，默认为 0777。
callback - 回调函数，没有参数，除了 (err)。
```

```javascript
// eg
var fs = require("fs");

console.log("创建目录 /tmp/test/");
fs.mkdir("/tmp/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
```



### 读取目录

```javascript
fs.readdir(path, callback)
```

```javas
callback - 回调函数，回调函数带有两个参数 err, files。
		   err 为错误信息，files 为目录下的文件数组列表。
```

```javascript
// eg
var fs = require("fs");

console.log("查看 /tmp 目录");
fs.readdir("/tmp/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});
```



### 删除目录

```javascript
// 删除目录的语法格式
fs.rmdir(path, callback)
```

```javascript
callback - 回调函数，没有参数，除了 (err)。
```



> [参考手册](http://www.runoob.com/nodejs/nodejs-fs.html)

