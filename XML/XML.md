* XML 设计宗旨是传输数据，而不是显示数据
* XML 标签没有被预定义。您需要自行定义标签
* XML 被设计为具有自我描述性
* 所有的 XML 元素都必须有一个关闭标签
* 大小写敏感
* 属性值必须加引号
* 元数据（有关数据的数据）应当存储为属性，而数据本身应当存储为元素
  * id 属性仅仅是一个标识符，用于标识不同的便签



## XMLHttpRequest 对象

* 用于在后台与服务器交换数据

  ```javascript
  xmlhttp = new XMLHttpRequest();
  ```

* 解析 XML 字符串

  ```javascript
  txt="<bookstore><book>";
  txt=txt+"<title>Everyday Italian</title>";
  txt=txt+"<author>Giada De Laurentiis</author>";
  txt=txt+"<year>2005</year>";
  txt=txt+"</book></bookstore>";

  if (window.DOMParser){
      parser=new DOMParser();
      xmlDoc=parser.parseFromString(txt,"text/xml");
  }
  else // Internet Explorer{
      xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async=false;
      xmlDoc.loadXML(txt); 
  }
  ```

  ```javascript
  // 从 XML 文件（"note.xml"）的 <to> 元素中提取文本 "Tove"
  getElementsByTagName("to")[0].childNodes[0].nodeValue
  // 即使 XML 文件只包含一个 <to> 元素，仍必须指定数组索引 [0]。因为 getElementsByTagName() 方法返回一个数组
  ```



## 命名空间

* xmlns 属性

```xml
当在 XML 中使用前缀时，一个所谓的用于前缀的命名空间必须被定义。
命名空间是在元素的开始标签的 xmlns 属性中定义的。
命名空间声明的语法如下: xmlns:前缀="URI"
```

```xml
<root>

<h:table xmlns:h="http://www.w3.org/TR/html4/">
<h:tr>
<h:td>Apples</h:td>
<h:td>Bananas</h:td>
</h:tr>
</h:table>

<f:table xmlns:f="http://www.w3cschool.cc/furniture">
<f:name>African Coffee Table</f:name>
<f:width>80</f:width>
<f:length>120</f:length>
</f:table>

</root>
```



### 默认命名空间

* 为元素定义默认的命名空间可以省去在所有的子元素中使用前缀的工作

```xml
xmlns = "namespaceURI"
```

```xml
<table xmlns="http://www.w3.org/TR/html4/">
<tr>
<td>Apples</td>
<td>Bananas</td>
</tr>
</table>
```

```xml
<table xmlns="http://www.w3schools.com/furniture">
<name>African Coffee Table</name>
<width>80</width>
<length>120</length>
</table>
```



## CDATA

* XML 文档中的所有文本均会被解析器解析
* 只有 CDATA 区段中的文本会被解析器忽略

```
术语 CDATA 是不应该由 XML 解析器解析的文本数据。
像 "<" 和 "&" 字符在 XML 元素中都是非法的。
"<" 会产生错误，因为解析器会把该字符解释为新元素的开始。
"&" 会产生错误，因为解析器会把该字符解释为字符实体的开始。
某些文本，比如 JavaScript 代码，包含大量 "<" 或 "&" 字符。为了避免错误，可以将脚本代码定义为 CDATA。
CDATA 部分中的所有内容都会被解析器忽略。
CDATA 部分由 "<![CDATA[" 开始，由 "]]>" 结束：
```

```xml
<script>
<![CDATA[
function matchwo(a,b){
    if (a < b && a < 0) then{
    	return 1;
    }
    else{
    	return 0;
    }
}
]]>
</script>
```

```
CDATA 部分不能包含字符串 "]]>"，也不允许嵌套的 CDATA 部分。
标记 CDATA 部分结尾的 "]]>" 不能包含空格或换行
```



## 服务器上的 XML

http://www.runoob.com/xml/xml-server.html



## DOM

```xml
<bookstore data-livestyle-extension="available">
<book category="COOKING">
    <title lang="en">Everyday Italian</title>
    <author>Giada De Laurentiis</author>
    <year>2005</year>
    <price>30.00</price>
</book>
<book category="CHILDREN">
    <title lang="en">Harry Potter</title>
    <author>J K. Rowling</author>
    <year>2005</year>
    <price>29.99</price>
</book>
<book category="WEB">
    <title lang="en">XQuery Kick Start</title>
    <author>James McGovern</author>
    <author>Per Bothner</author>
    <author>Kurt Cagle</author>
    <author>James Linn</author>
    <author>Vaidyanathan Nagarajan</author>
    <year>2003</year>
    <price>49.99</price>
</book>
<book category="WEB">
    <title lang="en">Learning XML</title>
    <author>Erik T. Ray</author>
    <year>2003</year>
    <price>39.95</price>
    </book>
</bookstore>
```

* 获取元素的值

  ```javascript
  txt = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
  ```

* 获取属性的值

  ```javascript
  txt = xmlDoc.getElementsByTagName("title")[0].getAttribute("lang");
  ```

* 改变元素的值

  ```javascript
  x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
  x.nodeValue="Easy Cooking";
  ```

* 创建新的属性

  ```javascript
  x = xmlDoc.getElementsByTagName("book");
  for(i=0;i<x.length;i++){
  	x[i].setAttribute("edition","first");
  }
  ```

* 创建元素

  ```
  XML DOM 的 createElement() 方法创建一个新的元素节点。
  XML DOM 的 createTextNode() 方法创建一个新的文本节点。
  XML DOM 的 appendChild() 方法向节点添加子节点（在最后一个子节点之后）。
  如需创建带有文本内容的新元素，需要同时创建一个新的元素节点和一个新的文本节点，然后追加到现有的节点。
  下面的实例创建了一个新的元素（<edition>），带有文本：First，然后添加到第一个 <book> 元素
  ```

  ```javascript
  newel = xmlDoc.createElement("edition");
  newtext = xmlDoc.createTextNode("First");
  newel.appendChild(newtext);

  x = xmlDoc.getElementsByTagName("book");
  x[0].appendChild(newel);
  ```

* 删除元素

  ```javascript
  // 删除第一个 <book> 元素的第一个节点
  x = xmlDoc.getElementsByTagName("book")[0];
  x.removeChild(x.childNodes[0]);
  ```

  ​

  ​

