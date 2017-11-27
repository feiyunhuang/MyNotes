# 表单

* 当处理 HTML 表单时，PHP 能把来自 HTML 页面中的表单元素自动变成可供 PHP 脚本使用

```html
<!-- form.html -->
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>
<form action="welcome.php" method="post">
名字: <input type="text" name="fname">
年龄: <input type="text" name="age">
<input type="submit" value="提交">
</form>
 
</body>
</html>
```

* 当用户填写完上面的表单并点击提交按钮时，表单的数据会被送往名为 "welcome.php" 的 PHP 文件：

```php
// welcome.php 文件代码：
欢迎<?php echo $_POST["fname"]; ?>!<br>
你的年龄是<?php echo $_POST["age"]; ?>岁。
```

