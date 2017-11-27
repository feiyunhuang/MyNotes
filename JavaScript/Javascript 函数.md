# JS 函数

* 变量声明时如果不使用 **var** 关键字，那么它就是一个全局变量，即便它在函数内定义

### 函数表达式

```javascript
// 函数表达式可以存储在变量中，匿名函数
var x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x;
// demo 显示 function (a, b) {return a * b}

// 函数表达式存储在变量后，变量也可作为一个函数使用
var x = function (a, b) {return a * b};
var z = x(4, 3);		// x = 12
```

```javascript
function myFunction(a, b) {
    return arguments.length;	// 返回函数调用过程接收到的参数个数
}

var txt = myFunction.toString();	//将函数作为一个字符串返回
```

### 自调用函数

```javascript
// 自调用表达式会自动调用
// 如果表达式后面紧跟 ()，则会自动调用
// 不能自调用声明的函数
(function () {
    ****;			// 我将调用自己
})();
```

## 函数参数

```javascript
function myFunction(x, y) {
    y = y || 0;
}
// 防止未传入 y 参数值
// 如果 y 已经定义，y || 返回 y, 因为 y 是 true, 否则返回 0, 因为 undefined 为 false。
```

### Arguments

* argument 对象包含了函数调用的参数数组

```javascript
x = findMax(1, 123, 500, 115, 44, 88);
 
function findMax() {
    var i, max = arguments[0];
    
    if(arguments.length < 2) return max;
 
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
```

## 函数调用

### this ？？？

```javascript
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();         // 返回 "John Doe"
```

```javascript
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}
myObject.fullName();          	// 返回 [object Object] (所有者对象)
myObject.fullName().firstName;	// 返回 John
```

### 内嵌

```javascript
// 在 JavaScript 中，所有函数都能访问它们上一层的作用域
// JavaScript 支持嵌套函数，嵌套函数可以访问上一层的函数变量
// 该实例中，内嵌函数 plus() 可以访问父函数的 counter 变量
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
```

### 闭包

```javascript
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();		// counter = 3

// 变量 add 指定了函数自我调用的返回字值
// 自我调用函数只执行一次，设置计数器为0，并返回函数表达式
// add 变量可以作为一个函数使用，并且它可以访问函数上一层作用域的计数器
// 这个叫作 JavaScript 闭包，它使得函数拥有私有变量变成可能
// 计数器受匿名函数的作用域保护，只能通过 add 方法修改
```

# JS HTML DOM

* 通过 id 查找 HTML 元素

* 通过标签名查找 HTML 元素

  ```javascript
  // 本例查找 id="main" 的元素，然后查找 id="main" 元素中的所有 <p> 元素
  var x=document.getElementById("main");
  var y=x.getElementsByTagName("p");
  document.write( y[0].innerHTML );
  ```


* 通过类名找到 HTML 元素


## 改变 CSS

```javascript
// document.getElementById(id).style.property = 新样式
document.getElementById("***").style.color = "blue";
document.getElementById("***").style.fontFamily = "Arial";
```

## 使用 HTML DOM 来分配事件

```javascript
document.getElementById("myBtn").onclick = function(){displayDate()};
```

## EventListener

```javascript
// element.addEventListener(event, function, useCapture);
// 第一个参数是事件的类型 (如 "click" 或 "mousedown").
// 第二个参数是事件触发后调用的函数。
// 第三个参数是个布尔值用于描述事件是冒泡还是捕获。该参数是可选的。
// event：不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"。
```

```javascript
document.getElementById("myBtn").addEventListener("click", displayDate);
// addEventListener() 方法用于向指定元素添加事件句柄
// addEventListener() 方法添加的事件句柄不会覆盖已存在的事件句柄
```

## 事件传递

* 第三个参数默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递
* 事件传递定义了元素事件触发的顺序。
* 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？
  * 在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即 <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
  * 在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即 <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。

```javascript
// 跨浏览器解决方案
var x = document.getElementById("myBtn");
if (x.addEventListener) {                    // 所有主流浏览器，除了 IE 8 及更早版本
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // IE 8 及更早版本
    x.attachEvent("onclick", myFunction);
}
```

## DOM 元素

```html
<!-- 创建新的 HTML 元素 -->
<div id="div1">
	<p id="p1">这是一个段落。</p>
	<p id="p2">这是另一个段落。</p>
</div>
<script>
	var para=document.createElement("p");
	var node=document.createTextNode("这是一个新段落。");
	para.appendChild(node);
	var element=document.getElementById("div1");
	element.appendChild(para);
</script>
```

```html
<!-- 删除已有的 HTML 元素 -->
<div id="div1">
	<p id="p1">这是一个段落。</p>
	<p id="p2">这是另一个段落。</p>
</div>
<script>
	var parent=document.getElementById("div1");
	var child=document.getElementById("p1");
	parent.removeChild(child);
</script>
```

# JS 对象

```javascript
// 创建对象的方法
// 1
person=new Object();
person.firstname="John";	// 直接添加属性
person.lastname="Doe";
person.age=50;
person.eyecolor="blue";

// 2
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};

// 3 - 使用对象构造器
function person(firstname,lastname,age,eyecolor)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
}
```

```javascript
// 有了对象构造器，就可以像这样创建新的对象实例：
var myFather=new person("John","Doe",50,"blue");
var myMother=new person("Sally","Rally",48,"green");
```

## 把方法添加到对象

```javascript
function person(firstname,lastname,age,eyecolor)
{
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;

	this.changeName=changeName;
	function changeName(name)
	{
		this.lastname=name;
	}
}
myMother = new person("Sally","Rally",48,"green");
myMother.changeName("Doe");
```

## Number

* 采用64位浮点数格式保存数字

```javascript
// 如果前缀为 0，则 JavaScript 会把数值常量解释为八进制数
// 如果前缀为 0 和 "x"，则解释为十六进制数
var y = 0377; 
var z = 0xFF;
```

```javascript
// 默认情况下，JavaScript 数字为十进制显示。
// 可以使用 toString() 方法输出16进制、8进制、2进制
var myNumber=128;
myNumber.toString(16);   // 返回 80
myNumber.toString(8);    // 返回 200
myNumber.toString(2);    // 返回 10000000
```

```javascript
// 无穷大：Infinity
// 负无穷大：-Infinity
```

```javascript
// NaN：非数字值
// 使用 isNaN() 全局函数来判断一个值是否是 NaN 值
var x = 1000 / 0;
isNaN(x);			// 返回 false
```

```javascript
var x = 123;
var y = new Number(123);
typeof(x)			// 返回 Number
typeof(y)			// 返回 Object
```

## String

```javascript
// 使用位置（索引）可以访问字符串中任何的字符
var carname = 'Volvo XC60';
var character = carname[7];
```

```javascript
// replace
str = "Please visit Microsoft!"
var n = str.replace("Microsoft","w3cschool");
```

```javascript
// 大小写转化
var txt = "Hello World!";       // String
var txt1 = txt.toUpperCase();   // txt1 文本会转换为大写
var txt2 = txt.toLowerCase();   // txt2 文本会转换为小写
```

## RegExp

```javascript
// test() 方法搜索字符串指定的值，根据结果并返回 true 或 false
var patt1 = new RegExp("e");
patt1.test("The best things in life are free");
// 结果为 true
```

```javascript
// exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
var patt1 = new RegExp("e");
patt1.exec("The best things in life are free");
// 结果为 e
```

# JS 浏览器 BOM

## window

```javascript
// 所有浏览器都支持 window 对象，它表示浏览器窗口
// 全局变量是 window 对象的属性
// 全局函数是 window 对象的方法
window.document.getElementById("header");
```

### 尺寸

```javascript
// 对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：
window.innerHeight();			// 浏览器窗口的内部高度(包括滚动条)
window.innerWidth();			// 浏览器窗口的内部宽度(包括滚动条)

// 对于 Internet Explorer 8、7、6、5：
document.documentElement.clientHeight();
document.documentElement.clientWidth();
// 或者
document.body.clientHeight();
document.body.clientWidth();
```

```javascript
window.open();			// 打开新窗口
window.close();			// 关闭当前窗口
window.moveTo();		// 移动当前窗口
window.resizeTo();		// 调整当前窗口的尺寸
```

### Window Screen

```javascript
screen.availWidth();		// 可用的屏幕宽度
screen.availHeight();		// 可用的屏幕高度
```

### Window Location

```javascript
location.hostname();		// 返回 web 主机的域名
location.pathname();		// 返回当前页面的路径和文件名
location.port();			// 返回 web 主机的端口 （80 或 443）
location.protocol();		// 返回所使用的 web 协议（http:// 或 https://）
location.href();			// 属性返回当前页面的 URL

location.assign();		// 方法加载新的文档
window.location.assign("http://www.w3cschool.cc");
```

### Window History

```javascript
history.back();			// 与在浏览器点击后退按钮相同
history.forward();		// 与在浏览器中点击按钮向前相同
```

### 弹窗

```javascript
// 警告框
window.alert("sometext");
```

```javascript
// 确认框
window.confirm("sometext");		// 点击 "确认", 返回 true，点击 "取消", 返回 false
```

```javascript
// 提示框
window.prompt("sometext","defaultvalue");	// 点击确认，返回输入的值。点击取消，返回 null。
```

### 计时事件

* setInterval()

```javascript
// 间隔指定的毫秒数不停地执行指定的代码
// window.setInterval("javascript function",milliseconds);
```

```html
// 显示一个时钟
<p id="demo"></p>
<script>
	var myVar=setInterval(function(){myTimer()},1000);
	function myTimer(){
		var d=new Date();
		var t=d.toLocaleTimeString();
		document.getElementById("demo").innerHTML=t;
	}
</script>
```

* clearInterval()

```javascript
// 用于停止 setInterval() 方法执行的函数代码
// window.clearInterval(intervalVariable)
// 要使用 clearInterval() 方法, 在创建计时方法时你必须使用全局变量
myVar = setInterval("javascript function",milliseconds);
```

* setTimeout()

```javascript
// window.setTimeout("javascript 函数",毫秒数);
// window.clearTimeout(timeoutVariable);
```

### Cookie

```javascript
// Cookie 以名/值对形式存储
username = John Doe
// 可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除
document.cookie = "username=John; expires=Thu, 18 Dec 2013 12:00:00 GMT";
```

```javascript
// 创建 cookie
document.cookie = "username=John Doe";
```

```javascript
// 读取 cookie
var x = document.cookie;
```

```javascript
// 删除 cookie 只需要设置 expires 参数为以前的时间即可
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```



























