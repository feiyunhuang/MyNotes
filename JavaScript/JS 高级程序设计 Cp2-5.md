## 第二章

* <script> 元素放在 <body> 最后可以加快网页展示的速度

#### 在 XHTML 中的语法

* 32页 P14

#### <noscript>元素

* 在下列情况才会显示
  * 浏览器不支持脚本
  * 浏览器支持脚本，但脚本被禁用



## 第三章

* 其他类型和 Boolean 之间的转换

|  数据类型  | 转换为 true 的值 | 转换为  false 的值 |
| :----: | :---------: | :-----------: |
| String |     非空      |      ""       |
| Number |   非零和无穷大    |    0 和 NaN    |
| Object |    任何对象     |     null      |

### 位操作

#### 左移

```javascript
<<

2 << 5 = 64
-2 << 5 = -64
// 左移不会改变符号
```

#### 有符号右移

```javascript
>>
// 符号位不动
```

#### 无符号右移

```javascript
>>>
// 符号位一起移动
```

### 函数

#### 参数

* 函数定义的参数和传入的参数并不需要一一对应，可以通过 argument[*] 访问。
* func( p0, p1, p2, p3, …… ) 和 argument
    * p0 = argument[0]
    * p1 = argument[1]
    * p* = argument[*]



## 第四章
* P86

### 基本类型值和引用类型

* 基本类型值
    * 简单数据段
    * 复制赋值
    * ![](image/基本类复制.png)

* 引用类型值
    * 由多值构成的对象
    * 复制赋值
    * ![](image/引用类复制.png)

* 传递参数
    * 函数的参数是按值传递的，和把值从一个变量复制到另一个变量一样

* 检查类型
    * typeof
        * 确定一个值是哪种基本类型 
    * instanceof
        * 确定一个值是哪种引用类型 

    ```javascript
    result = variable instanceof constructor
    // 根据他的原型链来识别
    ```

### 执行环境及作用域

* 每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中
  
* 每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境就会被推入一个环境栈中，而在函数执行后，栈将其环境弹出。

* 全局执行环境
    * 变量对象始终是作用域链中的最后一个对象
    * Web 浏览器中，全局执行环境被认为是 window 对象
  
* 延长作用域链
    * try-catch 语句的 catch 块
    * with 语句

* 没有块级作用域
    * if and for 内部声明的变量，在语句块外部仍可以访问
    * 声明变量
        * 如果初始化变量时没有用 var 声明，改变量会自动被添加到全局环境

### 垃圾回收
* 标记清除
    * 销毁那些带标记的值并回收它们所占用的内存空间 

* 引用计数
    * 循环引用会导致计数永远不为0，变量无法回收，导致内存泄露问题

### 管理内存
* 解除引用
    * 占用更少的内存可以让页面获得更好的性能
    * 执行中的代码保存必要的数据，一旦数据不再有用，将其值设置为 null 来释放其引用
  ```javascript
    function createPerson(name){
        var localPerson = new Object();
        localPerson.name = name;
        return localPerson;
    }
    var globalPerson = createPerson("Nicholas"); 
    // 手工解除 globalPerson 的引用 
    globalPerson = null;
  ```



## 第五章
* P101

### Objetc 类型
* 创建实例
    ```javascript
    var person = new Object();
    person.name = "Jack";
    person.age = 29;
    ```
    
    ```javascript
    var person = {
        name : "Jack",
        age : 29
    };
    ```
* 访问对象属性
    ```javascript
    person.name;
    // or
    person["name"];
    ```
    * 方括号访问的优点
        * 可以通过变量访问
            ```javascript
            var personName = "name";
            person[personName];
            ```
        * 属性名中包含导致语法错误的字符
            ```javascript
            person["first name"];
            ```

### Array 类型
* 创建实例
    ```javascript
    var color = new Array();
    var color = new Array("red", "blue", "green");
    // or
    var color = ["red", "blue", "green"];
    color.length;   // length 不只是只读
    color.length = 2;
    // 在数组末尾添加新项
    color[color.length] = ***;
    ```
* 检查数组
    * Array.isArray()

* 栈方法
    ```javascript
    var colors = new Array();
    colors.push("red", "green"); 
    colors.push("black");

    var item = colors.pop();
    alert(item);            //"black"
    alert(colors.length);   //2
    ```

* 队列方法
    ```javascript
    Array.push(**);
    Array.shift();      // 从队列前推出一个
    // or
    Array.unshift(**);  // 从队列前插入一个
    Array.pop();
    ```

* 重排序方法
    * reverse()
        * 反转数组顺序
    * sort()
        * P110

* 操作方法
    * concat()
    * slice()
    * splice()
        * 删除
            * splice(参数1, 参数2)
        * 插入 / 替换
            * 3个或更多参数
        * splice() 会返回一个数组，包含从原数组中删除的项
        
* 位置方法
    * indexOf()
    * lastIndexOf()
        * 均使用 === 判断

* 迭代方法
    * every()
    * filter()
    * forEach()
    * map()
    * some()

* 归并方法
    * reduce()
        * 从数组的第一项开始逐个遍历到最后
    * reduceRight()
        * 从数组最后一项开始，向前遍历到第一项

### Date 类型
P116
* var now = new Date();
* 设置日期
    * Date.parse()
        ```javascript
        var now = new Date( Date.parse("6/13/2017") );
        var now = new Date( Date.parse("May 5, 2017") );
        // or
        var now = new Date("6/13/2017");
        var now = new Date("May 5, 2017");
        ```
    * Date.UTC()
         ```javascript
        // GMT 时间2000年1月1日午夜零时
        var t = new Date( Date.UTC(2000, 0) );
        
        // GMT 时间2005年5月5日下午5:55:55
        var t = new Date( Date.UTC(2005, 4, 5, 17, 55, 55) );
            
        // or 以下是基于本地时区
        var t = new Date( 2000, 0 );
        var t = new Date( 2005, 4, 5, 17, 55, 55 );
        ```
    * Date.now()
    * Date.valueOf()
        * 返回日期的毫秒表示
        * 日期直接比较大小

### RegExp 类型
P121
* var expression = / pattern / flags;
* var expression = new RegExp("pattern", "flags");
    * pattern
        * 正则表达式
    * flag
        * 标志，标明正则表达式的行为
        * g
            * 全局模式
        * i
            * 不区分大小写
        * m
            * 多行模式
    * 元字符
        * ()
        * []
        * {}
        * \
        * ^
        * $
        * ?
        * \*
        * \+
        * .
        * 如果匹配字符串中包含这些字符，必须使用 \ 进行转义

* 实例属性
    * global
    * ignoreCase
    * multiline
    * lastIndex
        * 整数，开始搜索下一个匹配的字符位置，从0开始
    * source
        * 正则表达式的字符串表示

* 实例方法
    * exec()
        * g 标志
            * 不设置
                * 同一字符串上多次调用将始终返回第一个匹配项的信息
            * 设置
                * 每次调用都会在字符串中继续查找新匹配项
    * test()
        * return boolean
        * 目标字符串与某个模式是否匹配
    * toString
    * toLocalString

* RegExp 构造函数属性

### Function 类型
P128
```javascript
    function sun(sum1, sum2){ return sum1+sum2; }
    // or
    var sum = function(sum1, sum2){ return sum1+sum2; };
    // sum 是指向函数体的指针
```
* 作为值的函数
    * 函数可以作为参数传入，也可以作为结果返回

* sort()函数？？？

* 函数内部属性
    * arguments
        * arguments.callee
    * this
        ```javascript
        window.color = "red";
        var o = { color: "blue" };
        
        function sayColor(){
            alert( this.color );
        }
        
        sayColor();         // red
        o.sayColor = sayColor;
        o.sayColor();       // blue
        ```
    * caller
        * 保存调用当前函数的引用
        * arguments.callee.caller
    * apply()
        * 传入两个参数，第一个是作用域，第二个是 arguments 或者 一个 Array
    * call()
        * 第一个参数是作用域，后面是逐个参数
        * 真正强大之处在于扩充函数赖以运行的作用域
            ```javascript
            window.color = "red";
            var o = { color: "blue " };
            
            function sayColor(){
                alert( this.color );
            }
            
            sayColor();             // red
            sayColor.call(this);    // red
            sayColor.call(window);  // red
            sayColor.call(o);       // blue
            ```
    * bind()    
        ```javascript
            window.color = "red";
            var o = { color: "blue " };
            
            function sayColor(){
                alert( this.color );
            }
            
            var mySayColor = sayColor.bind(o);
            mySayColor();           // blue
            ```
### 基本包装类型
P136
* Number
    * toFixed()
        * 按照指定小数位
    * toExponential()
        * 数学计数法
    * toPrecision()

* String
    * 字符方法
        * charAt()
        * charCodeAt()
    * 字符串操作方法
        * concat()
        * slice()
        * substring()
        * substr()
    * 字符串位置方法
        * indexOf()
        * lastIndexOf()
    * 字符串大小写转换
        * toLowerCase()
        * toUpperCase()
    * 字符串的模式匹配方法
        * match()
            * 参数，要么是一个正则表达式，要么是一个 RegExp 对象
        * search()
            * 返回字符串中第一个匹配项的索引
        * replace()
            * 第一个参数可以是一个正则表达式，也可以是一个字符串
            * 第二个参数可以是一个字符串，也可以是个函数
            * P145！！！？？？
        * split()
            * 将结果保存在数组中返回
        * localCompare()
        * fromCharCode()
            * 接收一个或者多个字符编码，转换为一个字符串

### 单体内置对象
P148
* Global 对象
    * URI 编码方法
        * encodeURI()
            * 将空格替换为 %20
        * encodeURIComponent()
        * decodeURI()
        * decodeURIComponent()
    * eval()
        * 接受一个参数，要执行的 ECMAScript 字符串
        * eval( "alert('hi')" );

* Math 对象
    * 最值
        * Math.max( num0, num1, …… )
        * Math.min( num0, num1, …… )
        * 对于数组
            * Math.max.apply( Math, Array );
    * 舍入方法
        * ceil()
            * 向上舍入
        * floor()
            * 向下舍入
        * round()
            * 标准舍入
        * selectFrom()
            * 传入最小值和最大值，返回两个值之间任一个
        * ……











