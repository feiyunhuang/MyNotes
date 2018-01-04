eg

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<title>life.jsp</title>
</head>
<body>

<%! 
  private int initVar=0;
  private int serviceVar=0;
  private int destroyVar=0;
%>
  
<%!
  public void jspInit(){
    initVar++;
    System.out.println("jspInit(): JSP被初始化了"+initVar+"次");
  }
  public void jspDestroy(){
    destroyVar++;
    System.out.println("jspDestroy(): JSP被销毁了"+destroyVar+"次");
  }
%>

<%
  serviceVar++;
  System.out.println("_jspService(): JSP共响应了"+serviceVar+"次请求");

  String content1="初始化次数 : "+initVar;
  String content2="响应客户请求次数 : "+serviceVar;
  String content3="销毁次数 : "+destroyVar;
%>
<h1>菜鸟教程 JSP 测试实例</h1>
<p><%=content1 %></p>
<p><%=content2 %></p>
<p><%=content3 %></p>

</body>
</html>
```



## 语法

### JSP 脚本程序

```jsp
<% 代码片段 %>
```

```jsp
<jsp:scriptlet>
   代码片段
</jsp:scriptlet>
```



### JSP 中文显示

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
```



### JSP 声明

```jsp
<%! declaration; [ declaration; ]+ ... %>
```

```jsp
<jsp:declaration>
   代码片段
</jsp:declaration>
```

```jsp
<%! int i = 0; %> 
<%! int a, b, c; %> 
<%! Circle a = new Circle(2.0); %> 
```



### JSP 表达式

```jsp
<%= 表达式 %>
```

```jsp
<jsp:expression>
   表达式
</jsp:expression>
```

* 表达式中不可以含有分号

### JSP 注释

```jsp
<%--  --%> 
```



### JSP 指令

用来设置与整个JSP页面相关的属性

```jsp
<%@ directive attribute="value" %>
```

| 指令                 | 描述                              |
| ------------------ | ------------------------------- |
| <%@ page ... %>    | 定义页面的依赖属性，比如脚本语言、error页面、缓存需求等等 |
| <%@ include ... %> | 包含其他文件                          |
| <%@ taglib ... %>  | 引入标签库的定义，可以是自定义标签               |

### JSP 行为

### JSP 隐含对象

JSP支持九个自动定义的变量

| 对象          | 描述                                       |
| ----------- | ---------------------------------------- |
| request     | **HttpServletRequest** 类的实例              |
| response    | **HttpServletResponse **类的实例             |
| out         | **PrintWriter** 类的实例，用于把结果输出至网页上         |
| session     | **HttpSession **类的实例                     |
| application | **ServletContext** 类的实例，与应用上下文有关         |
| config      | **ServletConfig **类的实例                   |
| pageContext | **PageContext **类的实例，提供对JSP页面所有对象以及命名空间的访问 |
| page        | 类似于Java类中的this关键字                        |
| Exception   | **Exception** 类的对象，代表发生错误的JSP页面中对应的异常对象  |



### 判断语句

#### if … else ...

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%! int day = 3; %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>
<h3>IF...ELSE 实例</h3>
<% if (day == 1 | day == 7) { %>
      <p>今天是周末</p>
<% } else { %>
      <p>今天不是周末</p>
<% } %>
</body> 
</html> 
```



#### switch … case ...

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%! int day = 3; %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title></title>
</head>
<body>
<h3>SWITCH...CASE 实例</h3>
<% 
switch(day) {
case 0:
   out.println("星期天");
   break;
case 1:
   out.println("星期一");
   break;
case 2:
   out.println("星期二");
   break;
case 3:
   out.println("星期三");
   break;
case 4:
   out.println("星期四");
   break;
case 5:
   out.println("星期五");
   break;
default:
   out.println("星期六");
}
%>
</body> 
</html> 
```



### 循环语句

#### for

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%! int fontSize; %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<h3>For 循环实例</h3>
<%for ( fontSize = 1; fontSize <= 3; fontSize++){ %>
   <font color="green" size="<%= fontSize %>">
    菜鸟教程
   </font><br />
<%}%>
</body> 
</html> 
```



## 指令

### Page指令

```jsp
<%@ page attribute="value" %>
```

```jsp
<jsp:directive.page attribute="value" />
```

http://www.runoob.com/jsp/jsp-directives.html



## 动作元素

```jsp
<jsp:action_name attribute="value" />
```

http://www.runoob.com/jsp/jsp-actions.html



#### jsp:forward

把请求转到另外的页面

```jsp
<jsp:forward page="相对 URL 地址" />
```

date.jsp

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<p>
   今天的日期是: <%= (new java.util.Date()).toLocaleString()%>
</p>
```

main.jsp

```jsp
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<h2>forward 动作实例</h2>
<jsp:forward page="date.jsp" />
</body>
</html>
```

访问main.jsp文件，显示结果如下

```
今天的日期是: 2016-6-25 14:37:25
```



