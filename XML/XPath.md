## 节点

### 术语

#### 节点

```
在 XPath 中，有七种类型的节点：
	元素、属性、文本、命名空间、处理指令、注释以及文档（根）节点。
	XML 文档是被作为节点树来对待的。树的根被称为文档节点或者根节点。
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book>
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
  </book>
</bookstore>
```

```
<bookstore> (文档节点)

<author>J K. Rowling</author> (元素节点)

lang="en" (属性节点)
```



#### 基本值

* 基本值是无父或无子的节点。

```
J K. Rowling

"en"
```



## 语法



### 加载 XML

* 大多数现代浏览器的代码

```javascript
var xmlhttp=new XMLHttpRequest()
```

* 微软浏览器（IE 5 和 6）的代码

```javascript
var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
```



### 选取节点

* IE 使用 selectNodes() 方法从 XML 文档中的选取节点

```javascript
xmlDoc.selectNodes(xpath);
```

* Firefox、Chrome、Opera 以及 Safari 使用 evaluate() 方法从 XML 文档中选取节点：

```javascript
xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
```

