

## one example

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
	<title>菜鸟教程(runoob.com)</title>
	<script>
		function displayDate(){
			document.getElementById("demo").innerHTML = Date();
		}
	</script>
</head>

<body>
	<h1>我的第一个 JavaScript 程序</h1>
	<p id="demo">这是一个段落</p>
	<button type="button" onclick="displayDate()">显示日期</button>
</body>
</html>
```

## 简介

### 直接写入 HTML 输出流

```html
<body>
<script>
	document.write("<h1>这是一个标题</h1>");
	document.write("<p>这是一个段落。</p>");
</script>
<!-- 您只能在 HTML 输出流中使用 document.write -->
<!-- 如果您在文档已加载后使用它（比如在函数中），会覆盖整个文档--> 
</body>
```

### 改变 HTML 内容

```html
<body>
<p id="demo"> JavaScript Hello </p>
<script>
	function myFunction()
	{
		x=document.getElementById("demo");  // 找到元素
		x.innerHTML="Hello JavaScript!";    // 改变内容
	}
</script>
<button type="button" onclick="myFunction()">点击这里</button>	
</body>
```

### 验证输入

```html
<body>
<p>请输入数字。如果输入值不是数字，浏览器会弹出提示框。</p>
<input id="demo" type="text">
<script>
	function myFunction()
	{
		var x=document.getElementById("demo").value;
		if( x=="" || isNaN(x) )
        {
			alert("不是数字");
		}
	}
</script>
<button type="button" onclick="myFunction()">点击这里</button>
</body>
```

## 用法

```html
<!-- HTML 中的脚本必须位于 <script> 与 </script> 标签之间。
	 脚本可被放置在 HTML 页面的 <body> 和 <head> 部分中。	-->
```

### 外部的 JavaScript

```html
<!-- 外部 JavaScript 文件的文件扩展名是 .js -->
<body>
<button type="button" onclick="myFunction()">
	点击这里
</button>
<!-- myFunction() 保存在名为 "myScript.js" 的外部文件中 -->
<script src="myScript.js"></script>	
</body>

<!-- myScript.js 文件代码如下: -->
function myFunction()
{
	document.getElementById("demo").innerHTML = "My First JavaScript Function";
}
<!-- 外部脚本不能包含 <script> 标签 -->
<!-- 放置在 head / body 和内部使用效果一样 -->
```

## 输出

### window.alert()

```html
<!-- 弹出警告框来显示数据 -->
<script>
	window.alert(5 + 6);
</script>
```

### 操作 HTML 元素

```html
<!-- 使用 document.getElementById(id) 访问某个 HTML 元素
	 并 innerHTML 来获取或插入元素内容						-->
<p id="demo"> 我的第一个段落 </p>
<script>
	document.getElementById("demo").innerHTML = "paragraph has been changed";
</script>
```

### 直接写入

```html
<p>我的第一个段落。</p>
<script>
	document.write(Date());
</script>

<!-- 请使用 document.write() 仅仅向文档输出写内容
	 如果在文档已完成加载后执行 document.write，整个 HTML 页面将被覆盖。	-->

<p>我的第一个段落。</p>
<button onclick="myFunction()">点我</button>
<script>
	function myFunction() {
   		document.write(Date());
	}
</script>
```

### 写到控制台

```html
<!-- 浏览器调试模式，使用 console.log() 方法在浏览器中显示 JavaScript 值
	 浏览器使用 F12 来启用调试模式，在调试窗口中点击 "Console" 菜单		-->
<script>
	a = 5;
	b = 6;
	c = a + b;
	console.log(c);
</script>
```

## 语法

```html
<!-- Number -->
3.14 / 1200 / 125e3
```

```html
<!-- String -->
"---" / '---'
```

```html
<!-- 表达式 -->
x (*, +, -, /) y
```

```html
<!-- Array -->
[40, 100, 1, 5, 25, 10]
```

```html
<!-- Object -->
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

```html
<!-- Function -->
function myFunction(a, b) { return a * b;}
```

```javascript
// javascript 注释 ‘//’
// javascript 对大小写敏感
// javascript 通常使用驼峰命名
```

```javascript
// 在文本字符串中使用反斜杠对代码行进行换行
document.write("你好 \
世界!");
```

## 数据类型

```javascript
// 变量，关键字 var 来定义变量
var x, length;

// 跨行声明
var lastname="Doe",
	age=30,
	job="carpenter";
```

```javascript
// 两条语句执行后，变量 carname 的值依然是 "Volvo"
var carname="Volvo"; 
var carname;
```

```javascript
// JavaScript 拥有动态类型。这意味着相同的变量可用作不同的类型
var x;				// x 为 undefined
var x = undefined;	// x 为 undefined，可以通过赋值 undefined 清空变量值
var x = 5;			// 现在 x 为数字
var x = "John";		// 现在 x 为字符串
var x = null;		// null 为 object 类型
```

```javascript
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
```

```javascript
// boolean
true / false
```

### 数组

```javascript
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

var cars = new Array("Saab","Volvo","BMW");

var cars = ["Saab","Volvo","BMW"];
```

### 对象

```javascript
// 对象的属性以名称和值对的形式 (name : value) 来定义，属性由逗号分隔
var person = {firstname:"John", lastname:"Doe", id:5566};
// 对象 (person) 有三个属性：firstname、lastname 以及 id。
var person={
	firstname : "John",
	lastname  : "Doe",
	id        :  5566
};

// 对象属性有两种寻址方式：
name = person.lastname;
name = person["lastname"];
```

```javascript
// 对象方法
var person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function() 
	{
       return this.firstName + " " + this.lastName;
    }
};
// person.fullName;
// 不加括号输出函数表达式：function () { return this.firstName + " " + this.lastName; }

// person.fullName();
// 加括号输出函数执行结果：John Doe
```

* null 用来清空变量值

### 声明变量类型

```javascript
// 使用关键词 "new" 来声明其类型
var s = new String;
var n = new Number;
var b = new Boolean;
var a = new Array;
var o = new Object;
```

## 函数

```html
<p>点击这个按钮，来调用带参数的函数。</p>
<button onclick="myFunction('Harry Potter','Wizard')">点击这里</button>
<script>
function myFunction(name,job){
	alert("Welcome " + name + ", the " + job);
}
</script>
```

```javascript
// 使用 return 提前结束函数
```

```javascript
// 如果函数内 新创建的变量 未使用 var 关键字，则自动变为全局变量
```

```javascript
// 在 HTML 中, 全局变量是 window 对象: 所有数据变量都属于 window 对象
myFunction();
document.getElementById("demo").innerHTML = window.carName;
function myFunction() 
{
    carName = "Volvo";
}
```

## 事件

```javascript
// <some-HTML-element some-event="some JavaScript">
```

## 字符串

```javascript
// 可以在字符串中使用引号，字符串中的引号不要与字符串的引号相同
var answer = "It's alright";

// 也可以在字符串添加转义字符来使用引号
var x = 'It\'s alright';

var str = "hello"
var len = str.length
```

```javascript
// === 为绝对相等，即数据类型与值都必须相等
// 数字和字符串相加，结果返回字符串
```

[Javascript String 对象](http://www.runoob.com/jsref/jsref-obj-string.html)

## 标签

```javascript
// 如需标记 JavaScript 语句，请在语句之前加上冒号
// continue 语句（带有或不带标签引用）只能用在循环中
// break 语句（不带标签引用），只能用在循环或 switch 中
cars=["BMW","Volvo","Saab","Ford"];
list: 
{
    document.write(cars[0] + "<br>"); 
    document.write(cars[1] + "<br>"); 
    document.write(cars[2] + "<br>");
  	break list;
    document.write(cars[3] + "<br>"); 
}
```

## 类型转换

```javascript
// 在 JavaScript 中有 5 种不同的数据类型
string , number , boolean , object , function

// 3 种对象类型
Object , Date , Array

// 2 个不包含任何值的数据类型：
null , undefined
```

### typeof

```javascript
typeof NaN                    // 返回 number
typeof [1,2,3,4]              // 返回 object
typeof {name:'John', age:34}  // 返回 object
typeof new Date()             // 返回 object
typeof function () {}         // 返回 function
typeof null                   // 返回 object
// 如果对象是 Array 或 Date，无法通过 typeof 来判断他们的类型，因为都返回 Object。
```

### constructor

```javascript
"John".constructor                 // 返回函数 String()  { [native code] }
(3.14).constructor                 // 返回函数 Number()  { [native code] }
false.constructor                  // 返回函数 Boolean() { [native code] }
[1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
{name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
new Date().constructor             // 返回函数 Date()    { [native code] }
function () {}.constructor         // 返回函数 Function(){ [native code] }
```

```javascript
// 可以使用 constructor 属性来查看对象是否为数组 (包含字符串 "Array")
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}
```

### String

```javascript
// 转换成 String
String(***);
***.toString();
```

### Number

```javascript
Number(***);
parseFloat(***);		// 解析一个字符串，并返回一个浮点数
parseInt(***);			// 解析一个字符串，并返回一个整数
```

```javascript
// Operator + 可用于将变量转换为数字
var y = "5";      // y 是一个字符串
var x = + y;      // x 是一个数字
// 如果变量不能转换，它仍然会是一个数字，但值为 NaN
```

## 正则表达式

[正则表达式](http://www.runoob.com/js/js-regexp.html)

```javascript
/正则表达式主体/修饰符(可选)
var patt = /runoob/i;

/runoob/i  是一个正则表达式。
runoob  是一个正则表达式主体 (用于检索)。
i 是一个修饰符 (搜索不区分大小写)
```

```javascript
在 JavaScript 中，正则表达式通常用于两个字符串方法 : search() 和 replace()。
search() 方法 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。
replace() 方法 用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

var str = "Visit Runoob!"; 
var n = str.search(/Runoob/i);
// 输出结果为：6
```

## 异常

```javascript
try {
  // 在这里运行代码
  throw "***"	// 自己抛出异常
} catch(err) {
  // 在这里处理错误
}
```

## 调试

```javascript
// 在调试窗口上打印 *** 值
console.log(***);
```

```javascript
// debugger 关键字用于停止执行 JavaScript，并调用调试函数
// 开启 debugger ，代码在第三行前停止执行
var x = 15 * 5;
debugger;
document.getElementbyId("demo").innerHTML = x;
```

## 变量提升

```javascript
// JavaScript 中，函数及变量的声明都将被提升到函数的最顶部，变量可以先使用再声明

x = 5;		// 变量 x 设置为 5

elem = document.getElementById("demo");
elem.innerHTML = x;

var x;		// 声明 x
```

```javascript
// JavaScript 初始化不会提升

var x = 5;	// 初始化 x

elem = document.getElementById("demo");
elem.innerHTML = x + " " + y;			// 这里的 y 为 undefined

var y = 7;	// 初始化 y

// 类似于

var x = 5;	// 初始化 x
var y;

elem = document.getElementById("demo");
elem.innerHTML = x + " " + y;

var y = 7;	// 初始化 y
```

## 严格模式

* "use strict" 指令
* 只运行出现在脚本或函数的开头。
* 严格模式下不能使用未声明的变量

```Html
<script>
"use strict";	// 全局作用域
	***
</script>
```

```Html
<script>
	***
myFunction();
function myFunction() {
   "use strict";	// 局部作用域
    	***
}
</script>
```

### 严格模式的限制

```javascript
// 不允许使用未声明的变量：
"use strict";
x = 3.14;                // 报错 (x 未定义)

"use strict";
x = {p1:10, p2:20};      // 报错 (x 未定义)，对象也是一个变量

// 不允许删除变量或对象。
"use strict";
var x = 3.14;
delete x;                // 报错

// 不允许删除函数。
"use strict";
function x(p1, p2) {}; 
delete x;                // 报错 

// 不允许使用八进制:
"use strict";
var x = 010;             // 报错
```

[严格模式的限制](http://www.runoob.com/js/js-strict.html)

## 使用误区

* switch case 比较使用 ===
* 字符串 + 数字 -> 字符串 + 字符串

```javascript
var x =
"Hello World!";		// right

var x = "Hello
World!";			// wrong

var x = "Hello \
World!";			// right
```

* Javascript 中分号是可选的
* 如果一行是不完整的语句，Javascript 将读取下一行

```javascript
// 每个代码块中 JavaScript 不会创建一个新的作用域，一般各个代码块的作用域都是全局的
for (var i = 0; i < 10; i++) {
    // some code
}
return i;		// i is 10
```

## HTML 约束验证

* HTML 输入属性

| 属性       | 描述           |
| -------- | ------------ |
| disabled | 规定输入元素不可用    |
| max      | 规定输入元素的最大值   |
| min      | 规定输入元素的最小值   |
| pattern  | 规定输入元素值的模式   |
| required | 规定输入元素字段是必须的 |
| type     | 规定输入元素类型     |

## 表单验证

### 约束验证

| Property        | Description                            |
| --------------- | -------------------------------------- |
| checkValidity() | 如果 input 元素中的数据是合法的返回 true，否则返回 false。 |

* 合法是满足设置的上面的输入属性

## JSON

### 语法规则

* 数据为  key : value  对

  ```javascript
  "key":"value"
  // key is String
  // value 可以是合法的 JSON 数据类型（字符串, 数字, 对象, 数组, 布尔值或 null）
  ```


* 数据由逗号分隔


```javascript
var myObj = { "name":"runoob", "alexa":10000, "site":null };
```

* 大括号保存对象
* 方括号保存数组
* 对象可以包含多个 key:value 对


```javascript
var sites = [
    { "name":"runoob" , "url":"www.runoob.com" }, 
    { "name":"google" , "url":"www.google.com" }, 
    { "name":"微博" , "url":"www.weibo.com" }
];
// 可以通过 sites[0].name / sites[0].["name"] 访问

sites[0].name="菜鸟教程";	// 可以这样修改数据

for( x in sites ){}			// 遍历对象的属性，可以使用 [x] 来访问属性
```

```javascript
var myObj = {
    "name":"runoob",
    "alexa":10000,
    "sites": {
        "site1":"www.runoob.com",
        "site2":"m.runoob.com",
        "site3":"c.runoob.com"
    }
}
x = myObj.sites.site1;
// 或者
x = myObj.sites["site1"];	// 来访问嵌套的 JSON 对象
```

```javascript
// 使用 delete 关键字来删除 JSON 对象的属性
delete myObj.sites.site1;
```

```javascript
// 对象属性的值可以是一个数组
{
"name":"网站",
"num":3,
"sites":[ "Google", "Runoob", "Taobao" ]
}
```

### JSON 解析

#### JSON 解析器

```javascript
// { "name":"runoob", "alexa":10000, "site":"www.runoob.com" }
// 使用 JSON.parse() 方法处理以上数据，将其转换为 JavaScript 对象
var txt = '{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }'
var obj = JSON.parse( txt );
```

#### eval() 函数

```javascript
// eval(string):函数可计算某个字符串，并执行其中的的 JavaScript 代码。
eval("var a=1");     // 声明一个变量a并赋值1。
eval("2+3");         // 执行加运算，并返回运算值。
eval("mytest()");    // 执行mytest()函数。
eval("{b:2}");       // 声明一个对象。
```

```javascript
// JavaScript 函数 eval() 可用于将 JSON 文本转换为 JavaScript 对象。
// eval() 函数使用的是 JavaScript 编译器，可解析 JSON 文本，然后生成 JavaScript 对象。
var txt = '{ "sites" : [' +
'{ "name":"菜鸟教程" , "url":"www.runoob.com" },' +
'{ "name":"google" , "url":"www.google.com" },' +
'{ "name":"微博" , "url":"www.weibo.com" } ]}';
 
var obj = eval ("(" + txt + ")");	// 必须把文本包围在括号中，这样才能避免语法错误
 
document.getElementById("name").innerHTML=obj.sites[0].name 
document.getElementById("url").innerHTML=obj.sites[0].url
```

## void()

* void 是 JavaScript 中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值

```Html
<!-- 语法格式 -->
<script type="text/javascript">
<!--
void func()
javascript:void func()

或者

void(func())
javascript:void(func())
//-->
</script>
```

```html
<!-- 用户点击以后不会发生任何事 -->
<a href="javascript:void(0)">点我</a>
<!-- 用户点击链接后显示警告信息 -->
<a href="javascript:void(alert('Warning!!!'))">点我!</a>
```

```javascript
<!-- 页面使用 # 来定位页面的具体位置，格式为：# + id
	 如果要定义一个死链接使用 javascript:void(0) 	-->
<a href="javascript:void(0);">点我没有反应的!</a>
<a href="#pos">点我定位到指定位置!</a>
<br>
...
<br>
<p id="pos">尾部定位点</p>
```




