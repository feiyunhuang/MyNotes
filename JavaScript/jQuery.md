## 语法

```javascript
 $(selector).action()
```

```javascript
美元符号定义 jQuery
选择符（selector）"查询"和"查找" HTML 元素
jQuery 的 action() 执行对元素的操作
```

```javascript
// example
$(this).hide() - 隐藏当前元素
$("p").hide() - 隐藏所有 <p> 元素
$("p.test").hide() - 隐藏所有 class="test" 的 <p> 元素
$("#test").hide() - 隐藏所有 id="test" 的元素
```

```javascript
$(function(){
   // 开始写 jQuery 代码...
});
```



## 选择器

以美元符号开头：$()。

```
$("ul li:first")
选取第一个 <ul> 元素的第一个 <li> 元素
```

```
$("ul li:first-child")
选取每个 <ul> 元素的第一个 <li> 元素
```

```
$(":button")
选取所有 type="button" 的 <input> 元素 和 <button> 元素
```

```
$("tr:even")
选取偶数位置的 <tr> 元素
```









