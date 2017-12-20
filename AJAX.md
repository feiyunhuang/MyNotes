## XMLHttpRequest 对象

XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

```javascript
// 创建 AJAX
variable = new XMLHttpRequest();
// 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：
variable = new ActiveXObject("Microsoft.XMLHTTP");
```

```javascript
var xmlhttp;
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
}
else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```



## 向服务器发送请求

```javascript
// 使用 XMLHttpRequest 对象的 open() 和 send() 方法：
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
```

```javascript
open(method, url, async)	
	规定请求的类型、URL 以及是否异步处理请求。
	method：请求的类型；GET 或 POST
	url：文件在服务器上的位置
	async：true（异步）或 false（同步）
send(string)	
	将请求发送到服务器。
	string：仅用于 POST 请求
```



### GET

```javascript
xmlhttp.open("GET","/try/ajax/demo_get.php",true);
xmlhttp.send();
```

```javascript
// 在上面的例子中，您可能得到的是缓存的结果。
// 为了避免这种情况，请向 URL 添加一个唯一的 ID
xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xmlhttp.send();
```

```javascript
// 通过 GET 方法发送信息，请向 URL 添加信息
xmlhttp.open("GET","/try/ajax/demo_get2.php?fname=Henry&lname=Ford",true);
xmlhttp.send();
```



### POST

```javascript
xmlhttp.open("POST","/try/ajax/demo_post.php",true);
xmlhttp.send();
```

```javascript
// 像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头，然后在 send() 方法中规定发送的数据
xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");
```

```javascript
setRequestHeader(header,value)	
	向请求添加 HTTP 头。
	header: 规定头的名称
	value: 规定头的值
```



### Async

当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<script>
function loadXMLDoc()
{
	var xmlhttp;
	if (window.XMLHttpRequest) {
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else {
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","/try/ajax/ajax_info.txt",true);
	xmlhttp.send();
}
</script>
</head>
<body>

<div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
<button type="button" onclick="loadXMLDoc()">修改内容</button>

</body>
</html>
```



## 服务器响应

如需获得来自服务器的响应，请使用 XMLHttpRequest 对象的 responseText 或 responseXML 属性

```javascript
responseText :	获得字符串形式的响应数据。
responseXML	 :	获得 XML 形式的响应数据。
```

### responseText

```javascript
// responseText 属性返回字符串形式的响应，因此可以这样使用
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```

### responseXML

```javascript
// 如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性
xmlDoc = xmlhttp.responseXML;
txt = "";
x = xmlDoc.getElementsByTagName("ARTIST");
for( i=0; i<x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
}
document.getElementById("myDiv").innerHTML = txt;
```



## onreadystatechange 事件

```javascript
// XMLHttpRequest 对象的三个重要的属性
onreadystatechange	
	存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。
readyState	
    存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
    0: 请求未初始化
    1: 服务器连接已建立
    2: 请求已接收
    3: 请求处理中
    4: 请求已完成，且响应已就绪
status	
	200: "OK"
	404: 未找到页面
```

