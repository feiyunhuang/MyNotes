## 变量

* 变量以 $ 符号开始，后面跟着变量的名称

* global 关键字用于函数内访问全局变量

  ```php
  <?php
  $x=5;
  $y=10;
   
  function myTest()
  {
      global $x,$y;
      $y=$x+$y;
  }
   
  myTest();
  echo $y; // 输出 15
  ?>
  ```

* PHP 将所有全局变量存储在一个名为 $GLOBALS[*index*] 的数组中。 *index* 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。

  ```php
  <?php
  $x=5;
  $y=10;
   
  function myTest()
  {
      $GLOBALS['y']=$GLOBALS['x']+$GLOBALS['y'];
  } 
   
  myTest();
  echo $y;
  ?>
  ```

### static 作用域

* 当一个函数完成时，它的所有变量通常都会被删除。然而第一次声明变量时使用 **static** 关键字，局部变量不会被删除。

  ```php
  <?php
  function myTest()
  {
      static $x=0;
      echo $x;
      $x++;
  }
   
  myTest();
  myTest();
  myTest();
  ?>
  ```

* 然后，每次调用该函数时，该变量将会保留着函数前一次被调用时的值。

* 该变量仍然是函数的局部变量。




## echo and print

echo 和 print 区别:

- echo - 可以输出一个或多个字符串
- print - 只允许输出一个字符串，返回值总为 1

### echo

* 字符串可以包含 HTML 标签

  ```Php
  <?php
  echo "<h2>PHP 很有趣!</h2>";
  echo "Hello world!<br>";
  echo "我要学 PHP!<br>";
  echo "这是一个", "字符串，", "使用了", "多个", "参数。";
  ?>
  ```

### print

```php
<?php
print "<h2>PHP 很有趣!</h2>";
print "Hello world!<br>";
print "我要学习 PHP!";
?>
```



## 常量

* 设置常量，使用 define() 函数，函数语法如下：

  ```php
  bool define ( string $name , mixed $value [, bool $case_insensitive = false ] )
  // name：必选参数，常量名称，即标志符。
  // value：必选参数，常量的值。
  // case_insensitive ：可选参数，如果设置为 TRUE，该常量则大小写不敏感。默认是大小写敏感的。
  ```

* eg

  ```php
  <?php
  // 区分大小写的常量名
  define("GREETING", "欢迎访问 Runoob.com");
  echo GREETING;    // 输出 "欢迎访问 Runoob.com"
  echo '<br>';
  echo greeting;   // 输出 "greeting"
  ?>
    
  <?php
  // 不区分大小写的常量名
  define("GREETING", "欢迎访问 Runoob.com", true);
  echo greeting;  // 输出 "欢迎访问 Runoob.com"
  ?>
  ```

* 常量在定义后，默认是全局变量，不需要使用 global 关键字

* 使用 const 关键字

  ```php
  const name = **;
  ```

  ​



## 字符串变量

### 并置运算符

* 并置运算符 (.) 用于把两个字符串值连接起来

```php
<?php 
$txt1="Hello world!"; 
$txt2="What a nice day!"; 
echo $txt1 . " " . $txt2; 
?>
```

### strlen() 函数

* 返回字符串 "Hello world!" 的长度

```Php
<?php
$welcome = "Hello World!";
echo strlen("Hello world!");
echo strlen($welcome);
?>
```

### strpos() 函数

* 在字符串内查找一个字符或一段指定的文本
* 如果在字符串中找到匹配，该函数会返回第一个匹配的字符位置。如果未找到匹配，则返回 FALSE。

### 别人笔记

```php
<?php
echo strlen("中文字符");   // 输出 12
?>
// 输出结果为 12，因为一个中文占 3 个字符数。
// 可以使用 mb_strlen 设置指定编码输出中文字符个数：
<?php
echo mb_strlen("中文字符",'utf-8');  // 输出 4
?>
```



## 运算符

```php
a .= b ⇒ a = a . b // 连接两个字符串
```

### 递增/递减

```php
++ x	// 预递增	x 加 1，然后返回 x
x ++	// 后递增	返回 x，然后 x 加 1
-- x	// 预递减	x 减 1，然后返回 x
x --	// 后递减	返回 x，然后 x 减 1
```

### 逻辑运算符

```php
x xor y	// 异或	如果 x 和 y 有且仅有一个为 true，则返回 true
x=6;
y=3;
// (x==6 xor y==3) 返回 false
```

### 数组运算符

```Php
x + y;		// 集合	x 和 y 的集合
x == y;		// 相等	如果 x 和 y 具有相同的键/值对，则返回 true
x === y;	// 恒等	如果 x 和 y 具有相同的键/值对，且顺序相同类型相同，则返回 true
x != y;		// 不相等	如果 x 不等于 y，则返回 true
x <> y;		// 不相等	如果 x 不等于 y，则返回 true
x !== y;	// 不恒等	如果 x 不等于 y，则返回 true
```

### 三元运算符

```Php
// (expr1) ? (expr2) : (expr3) 
// 表达式 expr1 ?: expr3 在 expr1 求值为 TRUE 时返回 expr1，否则返回 expr3
<?php
$test = '菜鸟教程';
// 普通写法
$username = isset($test) ? $test : 'nobody';
echo $username, PHP_EOL;
 
// PHP 5.3+ 版本写法
$username = $test ?: 'nobody';
echo $username, PHP_EOL;
?>
// PHP_EOL 是一个换行符，兼容更大平台。
```



## 数组

```php
// 自动分配 ID 键（ID 键总是从 0 开始）：
$cars = array("Volvo","BMW","Toyota");
// 人工分配 ID 键：
$cars[0]="Volvo";
$cars[1]="BMW";
$cars[2]="Toyota";
```

### count() 函数

* 用于返回数组的长度

  ```php
  <?php
  $cars = array("Volvo","BMW","Toyota");
  echo count($cars);
  ?>
  ```

### 关联数组

* 分配给数组的指定的键的数组

  ```php
  $age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
  // or:
  $age['Peter']="35";
  $age['Ben']="37";
  $age['Joe']="43";
  ```


* 遍历

  ```php
  <?php
  $age = array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
   
  foreach($age as $x=>$x_value)
  {
      echo "Key=" . $x . ", Value=" . $x_value;
      echo "<br>";
  }
  ?>
  ```

### 排序

* sort() - 对数组进行升序排列
* rsort() - 对数组进行降序排列
* asort() - 根据关联数组的值，对数组进行升序排列
* ksort() - 根据关联数组的键，对数组进行升序排列
* arsort() - 根据关联数组的值，对数组进行降序排列
* krsort() - 根据关联数组的键，对数组进行降序排列

```php
<?php
$cars=array("Volvo","BMW","Toyota");
sort($cars);
?>
```



## 超级全局变量

* 是PHP系统中自带的变量，在一个脚本的全部作用域中都可用。

### $GLOBALS

* 包含了全部变量的全局组合数组，变量的名字就是数组的键。

```php
<?php 
$x = 75; 
$y = 25;
 
function addition() 
{ 
$GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y']; 
}
 
addition(); 
echo $z; 
?>
// 以上实例中 z 是一个 $GLOBALS 数组中的超级全局变量，该变量同样可以在函数外访问。
```

### $_SERVER

* 包含了诸如头信息(header)、路径(path)、以及脚本位置(script locations)等等信息的数组。这个数组中的项目由 Web 服务器创建。

```php
<?php 
echo $_SERVER['PHP_SELF'];
echo "<br>";
echo $_SERVER['SERVER_NAME'];
echo "<br>";
echo $_SERVER['HTTP_HOST'];
echo "<br>";
echo $_SERVER['HTTP_REFERER'];
echo "<br>";
echo $_SERVER['HTTP_USER_AGENT'];
echo "<br>";
echo $_SERVER['SCRIPT_NAME'];
?>
```

### $_REQUEST

* 收集HTML表单提交的数据

```php+HTML
<html>
<body>

<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
Name: <input type="text" name="fname">
<input type="submit">
</form>

<?php 
$name = $_REQUEST['fname']; 
echo $name; 
?>

</body>
</html>
```

### $_POST

* 收集表单数据，在 HTML form 标签的指定该属性："method="post"。

### $_GET

* 收集表单数据，在HTML form标签的指定该属性："method="get"。



## foreach 循环

```Php
foreach ($array as $value)
{
    要执行代码;
}
```

```php
<?php
$x=array("one","two","three");
foreach ($x as $value)
{
    echo $value . "<br>";
}
?>
```



## 函数

### 返回值

```php
// 如需让函数返回一个值，请使用 return 语句。
<?php
function add($x,$y)
{
    $total=$x+$y;
    return $total;
}
 
echo "1 + 16 = " . add(1,16);
?>
```



## 魔术变量

### \_\_LINE\_\_

* 文件中当前行号

```php
<?php
echo '这是第 " '  . __LINE__ . ' " 行';
?>
```

### \_\_FILE\_\_

* 文件的完整路径和文件名
* 如果用在被包含文件中，则返回被包含的文件名

### \_\_DIR\_\_

* 文件所在的目录
* 如果用在被包括文件中，则返回被包括的文件所在的目录
* 除非是根目录，否则目录中名不包括末尾的斜杠

### \_\_FUNCTION\_\_

* 函数名称（区分大小写）

### \_\_CLASS\_\_

* 类的名称（区分大小写）

```php
<?php
class test {
    function _print() {
        echo '类名为：'  . __CLASS__ . "<br>";
        echo  '函数名为：' . __FUNCTION__ ;
    }
}
$t = new test();
$t->_print();
?>
```

### \_\_TRAIT\_\_

* Trait 的名字
* PHP 实现了代码复用的一个方法，称为 traits
* Trait 名包括其被声明的作用区域（例如 Foo\Bar）。

```php
// 从基类继承的成员被插入的 SayWorld Trait 中的 MyHelloWorld 方法所覆盖。其行为 MyHelloWorld 类中定义的方法一致。优先顺序是当前类中的方法会覆盖 trait 方法，而 trait 方法又覆盖了基类中的方法。

<?php
class Base {
    public function sayHello() {
        echo 'Hello ';
    }
}
 
trait SayWorld {
    public function sayHello() {
        parent::sayHello();
        echo 'World!';
    }
}
 
class MyHelloWorld extends Base {
    use SayWorld;
}
 
$o = new MyHelloWorld();
$o->sayHello();
?>

// 以上例程会输出：Hello World!
```

### \_\_METHOD\_\_

* 类的方法名（区分大小写）

### \_\_NAMESPACE\_\_

* 当前命名空间的名称（区分大小写）


* 此常量是在编译时定义的

```php
<?php
namespace MyProject;
 
echo '命名空间为："', __NAMESPACE__, '"'; // 输出 "MyProject"
?>
```



## 命名空间

### 定义命名空间

* 默认情况下，所有常量、类和函数名都放在全局空间下，就和PHP支持命名空间之前一样。

* 命名空间通过关键字namespace 来声明。如果一个文件中包含命名空间，它必须在其它所有代码之前声明命名空间。

  ```php
  < ?php  
  // 定义代码在 'MyProject' 命名空间中  
  namespace MyProject;  
   
  // ... 代码 ... 
  ```


* 同一个文件中定义不同的命名空间代码

  ```php
  < ?php  
  namespace MyProject1;  
  // MyProject1 命名空间中的 PHP 代码  
   
  namespace MyProject2;  
  // MyProject2 命名空间中的 PHP 代码    
   
  // 另一种语法
  namespace MyProject3 {  
   // MyProject3 命名空间中的 PHP 代码    
  }  
  ?>  
  ```

* 在声明命名空间之前唯一合法的代码是用于定义源文件编码方式的 declare 语句。所有非 PHP 代码包括空白符都不能出现在命名空间的声明之前。

  ```php
  <?php
  declare(encoding='UTF-8'); //定义多个命名空间和不包含在命名空间中的代码
  namespace MyProject {
  	const CONNECT_OK = 1;
  	class Connection { /* ... */ }
  	function connect() { /* ... */  }
  }

  namespace { // 全局代码
  	session_start();
  	$a = MyProject\connect();
  	echo MyProject\Connection::start();
  }
  ?>
  ```

  * 以下代码会出现语法错误

    ```php
    <html>
    <?php
    	namespace MyProject; // 命名空间前出现了“<html>”，命名空间必须是程序脚本的第一条语句
    ?>
    ```

### 子命名空间

* 与目录和文件的关系很象，PHP 命名空间也允许指定层次化的命名空间的名称

* 因此，命名空间的名字可以使用分层次的方式定义

  ```php
  <?php
  namespace MyProject\Sub\Level;  //声明分层次的单个命名空间

  const CONNECT_OK = 1;
  class Connection { /* ... */ }
  function Connect() { /* ... */  }

  ?>
  ```

### 命名空间的使用

1. **非限定名称，或不包含前缀的类名称，**例如 $a=new foo(); 或 foo::staticmethod();。如果当前命名空间是 currentnamespace，foo 将被解析为 currentnamespace\foo。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，则 foo 会被解析为foo。 警告：如果命名空间中的函数或常量未定义，则该非限定的函数名称或常量名称会被解析为全局函数名称或常量名称。
2. **限定名称,或包含前缀的名称，**例如 $a = new subnamespace\foo(); 或 subnamespace\foo::staticmethod();。如果当前的命名空间是 currentnamespace，则 foo 会被解析为 currentnamespace\subnamespace\foo。如果使用 foo 的代码是全局的，不包含在任何命名空间中的代码，foo 会被解析为subnamespace\foo。
3. **完全限定名称，或包含了全局前缀操作符的名称，**例如， $a = new \currentnamespace\foo(); 或 \currentnamespace\foo::staticmethod();。在这种情况下，foo 总是被解析为代码中的文字名(literal name)currentnamespace\foo。

* file1.php 文件代码

```php
<?php
namespace Foo\Bar\subnamespace; 

const FOO = 1;
function foo() {}
class foo
{
    static function staticmethod() {}
}
?>
```

* file2.php 文件代码

```php
<?php
namespace Foo\Bar;
include 'file1.php';

const FOO = 2;
function foo() {}
class foo
{
    static function staticmethod() {}
}

/* 非限定名称 */
foo(); // 解析为 Foo\Bar\foo resolves to function Foo\Bar\foo
foo::staticmethod(); // 解析为类 Foo\Bar\foo的静态方法staticmethod。resolves to class Foo\Bar\foo, method staticmethod
echo FOO; // resolves to constant Foo\Bar\FOO

/* 限定名称 */
subnamespace\foo(); // 解析为函数 Foo\Bar\subnamespace\foo
subnamespace\foo::staticmethod(); // 解析为类 Foo\Bar\subnamespace\foo,
                                  // 以及类的方法 staticmethod
echo subnamespace\FOO; // 解析为常量 Foo\Bar\subnamespace\FOO
                                  
/* 完全限定名称 */
\Foo\Bar\foo(); // 解析为函数 Foo\Bar\foo
\Foo\Bar\foo::staticmethod(); // 解析为类 Foo\Bar\foo, 以及类的方法 staticmethod
echo \Foo\Bar\FOO; // 解析为常量 Foo\Bar\FOO
?>
```

### \_\_NAMESPACE\_\_常量

* 常量__NAMESPACE__的值是包含当前命名空间名称的字符串。在全局的，不包括在任何命名空间中的代码，它包含一个空的字符串。

```php
<?php
namespace MyProject;

echo '"', __NAMESPACE__, '"'; // 输出 "MyProject"
?>
```

```php
// 全局代码
<?php

echo '"', __NAMESPACE__, '"'; // 输出 ""
?>
```

* 常量 \_\_NAMESPACE\_\_ 在动态创建名称时很有用

```Php
// 使用 NAMESPACE 动态创建名称
<?php
namespace MyProject;

function get($classname)
{
    $a = __NAMESPACE__ . '\\' . $classname;
    return new $a;
}
?>
```

### 关键字 namespace

* 显式访问当前命名空间或子命名空间中的元素，等价于类中的 self 操作符。

```php
<?php
namespace MyProject;

use blah\blah as mine; // see "Using namespaces: importing/aliasing"

blah\mine(); // calls function blah\blah\mine()
namespace\blah\mine(); // calls function MyProject\blah\mine()

namespace\func(); // calls function MyProject\func()
namespace\sub\func(); // calls function MyProject\sub\func()
namespace\cname::method(); // calls static method "method" of class MyProject\cname
$a = new namespace\sub\cname(); // instantiates object of class MyProject\sub\cname
$b = namespace\CONSTANT; // assigns value of constant MyProject\CONSTANT to $b
?>
```

### 使用命名空间：别名/导入

```
- PHP 命名空间支持有两种使用别名或导入方式：为类名称使用别名，或为命名空间名称使用别名。
- PHP 不支持导入函数或常量。
- PHP 中别名是通过操作符 use 来实现的
```

* 使用use操作符 导入/使用 别名

```php
<?php
namespace foo;
use My\Full\Classname as Another;

// 下面的例子与 use My\Full\NSname as NSname 相同
use My\Full\NSname;

// 导入一个全局类
use \ArrayObject;

$obj = new namespace\Another; 	// 实例化 foo\Another 对象
$obj = new Another; 			// 实例化 My\Full\Classname　对象
NSname\subns\func(); 			// 调用函数 My\Full\NSname\subns\func
$a = new ArrayObject(array(1)); // 实例化 ArrayObject 对象
// 如果不使用 "use \ArrayObject" ，则实例化一个 foo\ArrayObject 对象
?>
```

* 一行中包含多个use语句

```php
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化 My\Full\Classname 对象
NSname\subns\func(); // 调用函数 My\Full\NSname\subns\func
?>
```

* 导入和动态名称

```php
// 导入操作是在编译执行的，但动态的类名称、函数名称或常量名称则不是。
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // 实例化一个 My\Full\Classname 对象
$a = 'Another';
$obj = new $a;      // 实际化一个 Another 对象
?>
```

* 导入和完全限定名称

```php
// 导入操作只影响非限定名称和限定名称。完全限定名称由于是确定的，故不受导入的影响。
<?php
use My\Full\Classname as Another, My\Full\NSname;

$obj = new Another; // instantiates object of class My\Full\Classname
$obj = new \Another; // instantiates object of class Another
$obj = new Another\thing; // instantiates object of class My\Full\Classname\thing
$obj = new \Another\thing; // instantiates object of class Another\thing
?>
```

### 全局空间

* 如果没有定义任何命名空间，所有的类与函数的定义都是在全局空间，与 PHP 引入命名空间概念前一样。
* 在名称前加上前缀 \ 表示该名称是全局空间中的名称，即使该名称位于其它的命名空间中时也是如此。

```Php
<?php
namespace A\B\C;

/* 这个函数是 A\B\C\fopen */
function fopen() { 
     /* ... */
     $f = \fopen(...); // 调用全局的fopen函数
     return $f;
} 
?>
```

### 命名空间的顺序

```php
<?php
namespace A;
use B\D, C\E as F;

// 函数调用

foo();      // 首先尝试调用定义在命名空间"A"中的函数foo()
            // 再尝试调用全局函数 "foo"

\foo();     // 调用全局空间函数 "foo" 

my\foo();   // 调用定义在命名空间"A\my"中函数 "foo" 

F();        // 首先尝试调用定义在命名空间"A"中的函数 "F" 
            // 再尝试调用全局函数 "F"

// 类引用

new B();    // 创建命名空间 "A" 中定义的类 "B" 的一个对象
            // 如果未找到，则尝试自动装载类 "A\B"

new D();    // 使用导入规则，创建命名空间 "B" 中定义的类 "D" 的一个对象
            // 如果未找到，则尝试自动装载类 "B\D"

new F();    // 使用导入规则，创建命名空间 "C" 中定义的类 "E" 的一个对象
            // 如果未找到，则尝试自动装载类 "C\E"

new \B();   // 创建定义在全局空间中的类 "B" 的一个对象
            // 如果未发现，则尝试自动装载类 "B"

new \D();   // 创建定义在全局空间中的类 "D" 的一个对象
            // 如果未发现，则尝试自动装载类 "D"

new \F();   // 创建定义在全局空间中的类 "F" 的一个对象
            // 如果未发现，则尝试自动装载类 "F"

// 调用另一个命名空间中的静态方法或命名空间函数

B\foo();    // 调用命名空间 "A\B" 中函数 "foo"

B::foo();   // 调用命名空间 "A" 中定义的类 "B" 的 "foo" 方法
            // 如果未找到类 "A\B" ，则尝试自动装载类 "A\B"

D::foo();   // 使用导入规则，调用命名空间 "B" 中定义的类 "D" 的 "foo" 方法
            // 如果类 "B\D" 未找到，则尝试自动装载类 "B\D"

\B\foo();   // 调用命名空间 "B" 中的函数 "foo" 

\B::foo();  // 调用全局空间中的类 "B" 的 "foo" 方法
            // 如果类 "B" 未找到，则尝试自动装载类 "B"

// 当前命名空间中的静态方法或函数

A\B::foo();   // 调用命名空间 "A\A" 中定义的类 "B" 的 "foo" 方法
              // 如果类 "A\A\B" 未找到，则尝试自动装载类 "A\A\B"

\A\B::foo();  // 调用命名空间 "A\B" 中定义的类 "B" 的 "foo" 方法
              // 如果类 "A\B" 未找到，则尝试自动装载类 "A\B"
?>
```

* 名称解析遵循下列规则：
  1. 对完全限定名称的函数，类和常量的调用在编译时解析。例如 new \A\B 解析为类 A\B。
  2. 所有的非限定名称和限定名称（非完全限定名称）根据当前的导入规则在编译时进行转换。例如，如果命名空间 A\B\C 被导入为 C，那么对 C\D\e() 的调用就会被转换为 A\B\C\D\e()。
  3. 在命名空间内部，所有的没有根据导入规则转换的限定名称均会在其前面加上当前的命名空间名称。例如，在命名空间 A\B 内部调用 C\D\e()，则 C\D\e() 会被转换为 A\B\C\D\e() 。
  4. 非限定类名根据当前的导入规则在编译时转换（用全名代替短的导入名称）。例如，如果命名空间 A\B\C 导入为C，则 new C() 被转换为 new A\B\C() 。
  5. 在命名空间内部（例如A\B），对非限定名称的函数调用是在运行时解析的。例如对函数 foo() 的调用是这样解析的：
     1. 在当前命名空间中查找名为 A\B\foo() 的函数
     2. 尝试查找并调用 全局(global) 空间中的函数 foo()。
  6. 在命名空间（例如A\B）内部对非限定名称或限定名称类（非完全限定名称）的调用是在运行时解析的。下面是调用 new C() 及 new D\E() 的解析过程： new C()的解析:
     1. 在当前命名空间中查找A\B\C类。
     2. 尝试自动装载类A\B\C。
  7. new D\E()的解析:
     1. 在类名称前面加上当前命名空间名称变成：A\B\D\E，然后查找该类。
     2. 尝试自动装载类 A\B\D\E。
     3. 为了引用全局命名空间中的全局类，必须使用完全限定名称 new \C()。




## 面向对象

```php
<?php
class Site {
  /* 成员变量 */
  var $url;
  var $title;
  
  /* 成员函数 */
  function setUrl($par){
     $this->url = $par;
  }
  
  function getUrl(){
     echo $this->url . PHP_EOL;
  }
  
  function setTitle($par){
     $this->title = $par;
  }
  
  function getTitle(){
     echo $this->title . PHP_EOL;
  }
}
?>
```

### 构造函数

```php
// void __construct ([ mixed $args [, $... ]] )
function __construct( $par1, $par2 ) {
   $this->url = $par1;
   $this->title = $par2;
}
```

### 析构函数

```Php
// void __destruct ( void )
<?php
class MyDestructableClass {
   function __construct() {
       print "构造函数\n";
       $this->name = "MyDestructableClass";
   }

   function __destruct() {
       print "销毁 " . $this->name . "\n";
   }
}

$obj = new MyDestructableClass();
?>
```

### 继承

```php
// 实例中 Child_Site 类继承了 Site 类，并扩展了功能
<?php 
// 子类扩展站点类别
class Child_Site extends Site {
	var $category;
	function setCate($par){
        $this->category = $par;
    }
  
    function getCate(){
        echo $this->category . PHP_EOL;
    }
}
```

### 方法重写

### 访问控制

* PHP 对属性或方法的访问控制，是通过在前面添加关键字 public（公有），protected（受保护）或 private（私有）来实现的
* 类属性必须定义为公有，受保护，私有之一。如果用 var 定义，则被视为公有。
  * **public（公有）：**公有的类成员可以在任何地方被访问。
  * **protected（受保护）：**受保护的类成员则可以被其自身以及其子类和父类访问。
  * **private（私有）：**私有的类成员则只能被其定义所在的类访问。

### 接口

* 使用接口（interface），可以指定某个类必须实现哪些方法，但不需要定义这些方法的具体内容。
* 接口是通过 **interface** 关键字来定义的，就像定义一个标准的类一样，但其中定义所有的方法都是空的。
* 接口中定义的所有方法都必须是公有，这是接口的特性。
* 要实现一个接口，使用 **implements** 操作符。类中必须实现接口中定义的所有方法，否则会报一个致命错误。类可以实现多个接口，用逗号来分隔多个接口的名称。

```php
<?php

// 声明一个'iTemplate'接口
interface iTemplate
{
    public function setVariable($name, $var);
    public function getHtml($template);
}


// 实现接口
class Template implements iTemplate
{
    private $vars = array();
  
    public function setVariable($name, $var)
    {
        $this->vars[$name] = $var;
    }
  
    public function getHtml($template)
    {
        foreach($this->vars as $name => $value) {
            $template = str_replace('{' . $name . '}', $value, $template);
        }
 
        return $template;
    }
}
```

### Static

* 声明类属性或方法为 static(静态)，就可以不实例化类而直接访问。
* 静态属性不能通过一个类已实例化的对象来访问（但静态方法可以）。
* 由于静态方法不需要通过对象即可调用，所以伪变量 $this 在静态方法中不可用。
* 静态属性不可以由对象通过 -> 操作符来访问

```php
<?php
class Foo {
  public static $my_static = 'foo';
  
  public function staticValue() {
     return self::$my_static;
  }
}

print Foo::$my_static . PHP_EOL;
$foo = new Foo();

print $foo->staticValue() . PHP_EOL;
?>  
```

### Final

* 如果父类中的方法被声明为 final，则子类无法覆盖该方法。如果一个类被声明为 final，则不能被继承。

```php
<?php
class BaseClass {
   public function test() {
       echo "BaseClass::test() called" . PHP_EOL;
   }
   
   final public function moreTesting() {
       echo "BaseClass::moreTesting() called"  . PHP_EOL;
   }
}

class ChildClass extends BaseClass {
   public function moreTesting() {
       echo "ChildClass::moreTesting() called"  . PHP_EOL;
   }
}
// 报错信息 Fatal error: Cannot override final method BaseClass::moreTesting()
?>
```

### 调用父类构造方法

* PHP 不会在子类的构造方法中自动的调用父类的构造方法。要执行父类的构造方法，需要在子类的构造方法中调用 **parent::__construct()** 。

```php
<?php
class BaseClass {
   function __construct() {
       print "BaseClass 类中构造方法" . PHP_EOL;
   }
}
class SubClass extends BaseClass {
   function __construct() {
       parent::__construct();  // 子类构造方法不能自动调用父类的构造方法
       print "SubClass 类中构造方法" . PHP_EOL;
   }
}
class OtherSubClass extends BaseClass {
    // 继承 BaseClass 的构造方法
}

// 调用 BaseClass 构造方法
$obj = new BaseClass();

// 调用 BaseClass、SubClass 构造方法
$obj = new SubClass();

// 调用 BaseClass 构造方法
$obj = new OtherSubClass();
?>
```

