 CSS学习笔记

## 选择器
* CSS选择器
![](image/CSS 选择器.jpg)

### id选择器

```css
#para 
{
	text-align:center;
	color:red;
}
```

* 应用于元素属性 id="para1"。

### class选择器

```css
.center {text-align:center;}
```

* 在 CSS 中，class选择器以一个点"."号显示。

```css
p.center {text-align:center;}
```

* 可以指定特定的 HTML 元素使用 class, 所有的 p 元素使用 class="center" 让该元素的文本居中。
* 类名的第一个字符不能使用数字，它无法在 Mozilla 或 Firefox 中起作用。
* 不要在属性值与单位之间留有空格（如："margin-left: 20 px" ），正确的写法是 "margin-left: 20px" 。

## 外部样式表

```css
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

* 浏览器会从文件 mystyle.css 中读到样式声明，并根据它来格式文档。
* 文件不能包含任何的 html 标签，样式表应该以 .css 扩展名进行保存。下面是一个样式表文件的例子：

```css
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("/images/back40.gif");}
```

* 下面四个优先级由低到高

1. 浏览器缺省设置
2. 外部样式表
3. 内部样式表（位于 <head> 标签内部）
4. 内联样式（在 HTML 元素内部）

## 背景

```css
body {background-image:url('***.gif');}
```

* 默认情况下 background-image 属性会在页面的水平或者垂直方向平铺。
* 图像只在水平方向平铺 (repeat-x)

```css
body
{
	background-image:url('***.png');
	background-repeat:repeat-x;	/* no repeat:不平铺 */
	background-position:right;	/* 位置 */
}
```

### 属性简写

```css
body {background:#ffffff url('img_tree.png') no-repeat right top;}
/* 简写属性时，属性值的顺序为:
	background-color
	background-image
	background-repeat
	background-attachment
	background-position */
```

## 文本

* 当 text-align 设置为"justify"，每一行被展开为宽度相等，左，右外边距是对齐。

```css
<!-- 文本缩进 -->
p {text-indent:50px;}
```

## 字体

```css
/* 设置几个字体名称作为一种"后备"机制，如果不支持第一种字体，将尝试下一种字体。
   多个字体用一个逗号分隔 */
p {font-family:"Times New Roman", Times, serif;}
```

```css
font-style:normal;	/* 正常 */
font-style:italic;	/* 斜体 */
```

```css
/* 1em = 16px */
font-size:2.5em
font-size:40px
font-size:100%
```

```css
font-weight:normal	/* lighter */
font-weight:bold	/* 粗体 */
```

## 链接

```css
a:link {color:#000000;}		/* 未访问链接*/
a:visited {color:#00FF00;}  /* 已访问链接 */
a:hover {color:#FF00FF;}	/* 鼠标移动到链接上 */
a:active {color:#0000FF;}	/* 鼠标点击时 */
/* 注意：a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的 */
/* 注意：a:active 必须被置于 a:hover 之后，才是有效的 */
```

```css
<!-- 下划线 -->
a:visited {text-decoration:none;}
a:hover {text-decoration:underline;}
```

```css
<!-- 背景颜色 -->
a:link {background-color:#B2FF99;}
```

```css
<!-- example -->
<style>
a:link, a:visited
{
	display:block;
	font-weight:bold;
	color:#FFFFFF;
	background-color:#98bf21;
	width:120px;
	text-align:center;
	padding:4px;
	text-decoration:none;
}
a:hover,a:active
{
	background-color:#7A991A;
}
</style>
```

## 列表

```css
<!-- 不同的列表项标记 -->
ul.a {list-style-type: circle;}
ul.b {list-style-type: square;}
 
ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}
```

```css
list-style-image: url('***.gif')	/* 图片 */
```

```css
ul{ list-style: square url("sqpurple.gif"); }
/*	缩写属性值的顺序是：
	list-style-type
	list-style-position
	list-style-image	*/
```

## 表格

```css
width:100%;
height:50px;

text-align:right;		/* 水平对齐 */
vertical-align:bottom;	/* 垂直对齐 */
```

```css
table, td, th
{	/* 边框的颜色 */
	border:1px solid green;
}
th
{	/* th元素的文本和背景颜色 */
	background-color:green;
	color:white;
}
```

## 盒子模型

### Border

```css
<!-- border-style -->
none:	无边框
dotted:	点线边框
dashed: 虚线边框
solid:	实线边框
double: 两个边框
groove: 3D沟槽边框
ridge:	3D脊边框
inset:	3D的嵌入边框
outset:	3D突出边框
```

```css
<!-- border-width -->
thick / medium(默认) / thin
```

```css
<!-- border-color -->
red / rgb(*,*,*) / #ff0000
/* border-color单独使用是不起作用的，必须先用border-style来设置边框样式 */
```

```css
/* 单独设置各边 */
border-top-style:dotted;
border-right-style:solid;
border-bottom-style:dotted;
border-left-style:solid;

border-style:dotted solid double dashed;
/* 上边框 dotted，右边框 solid，底边框 double，左边框 dashed */
border-style:dotted solid double;
/* 上边框 dotted，左、右边框 solid，底边框 double */
border-style:dotted solid;
/* 上、底边框 dotted，右、左边框 solid */
border-style:dotted;
/* 四面边框 dotted */
```

```css
<!-- 简写属性 -->
border:5px solid red;
/* width, style(required), color */
```

### Margin

* 没有背景颜色，完全透明

```css
<!-- 可能的值 -->
auto:依赖于浏览器 / length:像素,em,px,cm / %
```

### Padding

```css
<!-- 可能的值 -->
length / %
```

## 分组选择器

```css
<!-- 分组选择器 -->
h1,h2,p {color:green;}
/* 逗号隔开 */
```

## 嵌套选择器

```css
/* 为所有 p 元素指定一个样式 */
p {color:blue;}
/* 为所有 class="marked" 的元素指定一个样式 */
.marked {background-color:red;}
/* 为所有 class="marked" 元素内的 p 元素指定一个样式 */
.marked p {color:white;}
```

## 尺寸（Dimension）

```css
max-height / min-height
max-width / min-width
```

## 显示

### 隐藏元素

```css
display:none / visibility:hidden
/* 两种方法结果不一样 */
/* display:none 可以隐藏某个元素，且隐藏的元素不会占用任何空间 */
/* visibility:hidden 隐藏的元素仍需占用与未隐藏之前一样的空间 */
```

### 块和内联元素

```css
/* 块元素是一个元素，占用了全部宽度，在前后都是换行符 */
<h1> / <p> / <div>
/* 内联元素只需要必要的宽度，不强制换行 */
<span> / <a>
```

```css
/* 元素 * 之间水平显示 */
* {display:inline;}
p {display:inline;}		/* 两个<p>在同一水平线上 / 不换行 */

span {display:block;}	/* block：两个元素之间的换行符 */
```

## 定位（Positioning）

* [菜鸟教学定位](http://www.runoob.com/css/css-positioning.html)

**static**

* HTML元素的默认值，即没有定位，元素出现在正常的流中

**fixed**

```css
/* 元素的位置相对于浏览器窗口是固定位置
   即使窗口是滚动的它也不会移动 */
p.pos_fixed
{
    position:fixed;
    top:30px;
    right:5px;
}
```

**relative**

```css
/* 相对定位元素的定位是相对其正常位置 */
p.pos_left
{
    position:relative;
    left:-20px;
}
/* 偏移后，其原来占据的空间不会消失 */
```

**absolute**

```css
/* 绝对定位的元素的位置相对于最近的已定位父元素
   如果元素没有已定位的父元素，那么它的位置相对于<html> */
p
{
    position:absolute;
    left:100px;
    top:150px;
}
```

### 重叠

* fixed and absolute 定位的元素可以和其他元素重叠

```css
/* z-index属性指定了一个元素的堆叠顺序 */
img
{
    position:absolute;
    left:0px;
    top:0px;
    z-index:-1;
}
/* 具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面 */
```

### overflow

```css
/* overflow 属性规定当内容溢出元素框时发生的事情 */
div.scroll
{
	background-color:#00FFFF;
	width:100px;
	height:100px;
	overflow:scroll;
}
/* auto / visible(default) / hidden / scroll / inherit */
```

### cursor

```css
<span style="cursor: *x* "> </span>
/* *x*: auto / crosshair / default / e-resize / help / move ... */
```

## 浮动（float）

* 可以首字母下沉

## 对齐（Align）

### margin

```css
.center
{
  margin-left:auto;
  margin-right:auto;
  width:70%;
  background-color:#b0e0e6;
}
```

### position

```css
.right
{
  position:absolute;
  right:0px;
  width:300px;
  background-color:#b0e0e6;
}
/* 绝对定位与文档流无关，所以它们可以覆盖页面上的其它元素 */
```

## 组合选择器

### 后代选择器

```css
/* 后代选取器匹配所有值得元素的后代元素 */
div p {background-color:yellow;}

<div>
	<p>段落 1。 在 div 中。</p>
</div>

<p>段落 2。不在 div 中。</p>
```

### 子元素选择器

```css
/* 子元素选择器只能选择作为某元素子元素的元素 */
div>p {background-color:yellow;}
```

### 相邻兄弟选择器

```css
/* 相邻兄弟选择器可选择紧接在另一元素后的元素，且二者有相同父元素 */
div+p {background-color:yellow;}
```

### 后续兄弟选择器

```css
/* 后续兄弟选择器选取所有指定元素之后的相邻兄弟元素 */
div~p {background-color:yellow;}
```

## 伪类（Pseudo-classes）

```css
/* 伪类的语法 */
selector:pseudo-class {property:value;}
/* CSS 类也可以使用伪类 */
selector.class:pseudo-class {property:value;}
```

```css
<!-- anchor伪类 -->
a:link {color:#FF0000;}
```

### 伪类和css类

```css
a.red:visited {color:#FF0000;}
<a class="red" href="css-syntax.html">CSS 语法</a>
```

### :first-child

```css
/* 选择器匹配作为任何元素的 第一个子元素 的 <p>元素 */
p:first-child {color:blue;}
```

```css
/* 选择相匹配的所有 <p>元素 的 第一个<i>元素 */
p > i:first-child {color:blue;}
```

```css
/* 选择器匹配所有作为元素的 第一个子元素 的 <p>元素 中的所有 <i>元素 */
p:first-child i {color:blue;}
```

### :lang

```css
/* :lang 类为属性值为 no 的q元素定义引号的类型 */
q:lang(no) {quotes: "~" "~";}
<p> Some text 
	<q lang="no"> 
		A quote in a paragraph 
	</q> 
	Some text.
</p>
/* result: */
Some text ~A quote in a paragraph~ Some text.
```

### :first-line

```css
/* first-line 伪元素用于向文本的首行设置特殊样式 */
/* 浏览器会根据 "first-line" 伪元素中的样式对 p 元素的第一行文本进行格式化 */
p:first-line {font-variant:small-caps;}
```

### :first-letter

```css
/* first-letter 伪元素用于向文本的首字母设置特殊样式 */
p:first-letter {
font-size:xx-large;
}
```

### :before

```css
/* before (after) 伪元素可以在元素的内容前面插入新内容 */
/* 下面的例子在每个 <h1>元素前面插入一幅图片 */
h1:before {content:url(smiley.gif);}
```

## 导航栏

```css
/* 导航栏 = 链接列表 */
<ul>
	<li><a href="default.asp">Home</a></li>
	<li><a href="news.asp">News</a></li>
	<li><a href="contact.asp">Contact</a></li>
	<li><a href="about.asp">About</a></li>
</ul>
/* 从列表中删除边距和填充 */
ul
{
	list-style-type:none;	/* 移除列表前小标志 */
	margin:0;
	padding:0;
}
```

### 垂直导航栏

```css
a {
	display:block;
	width:60px;
}
```

### 水平导航栏

```css
<!-- 内嵌列表项 -->
li {display:inline;}

<ul>
	<li><a href="#home">Home</a></li>
	<li><a href="#news">News</a></li>
</ul>

<!-- 浮动列表项 -->
/* 上面的例子中链接有不同的宽度 */
/* 对于所有的链接宽度相等 */
li {float:left;}
a
{
	display:block;
	width:60px;
}

<ul>
	<li><a href="#home">Home</a></li>
	<li><a href="#news">News</a></li>
</ul>
```

## 下拉菜单

* [Example](http://www.runoob.com/css/css-dropdowns.html)

## 提示工具

* [提示](http://www.runoob.com/css/css-tooltip.html)

## 图片廊

```css
/* 多张图片合成一张，节省加载时间 */
/* 设置 图片显示大小和偏移 以显示不同区域 */
img.home {
    width: 46px;
    height: 44px;
    background: url(/images/img_navsprites.gif) 0 0;
}

img.next {
    width: 43px;
    height: 44px;
    background: url(/images/img_navsprites.gif) -91px 0;
}
```

## 媒体类型

* [媒体](http://www.runoob.com/css/css-mediatypes.html)

## 属性选择器

### Title

```css
/* 把包含标题（title）的所有元素变为蓝色 */
[title] { color:blue; }

/* 改变了标题 title='runoob' 元素的边框样式 */
[title=runoob] { border:5px solid green; }

/* 包含指定值的 title 属性的元素样式的例子 */
/* 使用 ~ 分隔属性和值 */
[title~=hello] { color:blue; }

/* 包含指定值的 lang 属性的元素样式的例子 */
/* 使用 | 分隔属性和值 */
[lang|=en] { color:blue; }
```

### 表单

```css
input[type="text"]
{
	width:150px;
	display:block;
	margin-bottom:10px;
	background-color:yellow;
}
input[type="button"]
{
	width:120px;
	margin-left:35px;
	display:block;
}

<form name="input" action="demo-form.php" method="get">
	Firstname:<input type="text" name="fname" value="Peter" size="20">
	Lastname:<input type="text" name="lname" value="Griffin" size="20">
	<input type="button" value="Example Button">
```







