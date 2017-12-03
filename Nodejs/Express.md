## 请求和响应

### 路由

eg:

```javascript
//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
```

```javascript
// $ node express_demo.js
// output:
应用实例，访问地址为 http://0.0.0.0:8081
// 在浏览器中访问 http://127.0.0.1:8081
```

---

```javascript
// Express 应用使用回调函数的参数：request 和 response 对象来处理请求和响应的数据。
app.get('/', function (req, res) {
   // --
})
```

---

eg:

```javascript
// express_demo2.js 文件
var express = require('express');
var app = express();
 
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})
 
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})
 
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
```

```javascript
// $ node express_demo2.js 
// output:
应用实例，访问地址为 http://0.0.0.0:8081
```



### GET 方法

```
在表单中通过 GET 方法提交两个参数，使用 server.js 文件内的 process_get 路由器来处理输入
```

```html
<!-- index.html -->
<html>
<body>
<form action="http://127.0.0.1:8081/process_get" method="GET">
	First Name: <input type="text" name="first_name">
	<br>
	Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
</form>
</body>
</html>
```

```javascript
// server.js
var express = require('express');
var app = express();
 
app.get('/index.html', function (req, res) {
	res.sendFile( __dirname + "/" + "index.html" );
})
 
app.get('/process_get', function (req, res) {
 
   	// 输出 JSON 格式
   	var response = {
    	"first_name":req.query.first_name,
       	"last_name":req.query.last_name
   	};
  	// 控制台输出
	console.log(response);
	// 返回到页面
	res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
})
```



### POST 方法

```html
<html>
<body>
<form action="http://127.0.0.1:8081/process_post" method="POST">
	First Name: <input type="text" name="first_name">
  	<br>
	Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
</form>
</body>
</html>
```

```javascript
// server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
})
```



### 文件上传

```html
<html>
<head>
<title>文件上传表单</title>
</head>
<body>
<h3>文件上传：</h3>
选择一个文件上传: <br />
<form action="/file_upload" method="post" enctype="multipart/form-data">
<input type="file" name="image" size="50" />
<br />
<input type="submit" value="上传文件" />
</form>
</body>
</html>
```



### Cookie 管理

```javascript
// 使用中间件向 Node.js 服务器发送 cookie 信息，以下代码输出了客户端发送的 cookie 信息
// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')
 
var app = express()
app.use(cookieParser())
 
app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
})
 
app.listen(8081)
```

